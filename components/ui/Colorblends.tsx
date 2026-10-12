"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import type { WebGLRenderer, ShaderMaterial, Scene, OrthographicCamera, Clock, PlaneGeometry } from 'three';
import type * as THREE from 'three';

type ColorBendsProps = {
  className?: string;
  style?: React.CSSProperties;
  rotation?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
};

const MAX_COLORS = 8 as const;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

  vec3 col = vec3(0.0);
  float a = 1.0;

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-6.0 / exp(6.0 * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
    a = uTransparent > 0 ? cover : 1.0;
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
    }
    a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
  }

  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  vec3 rgb = (uTransparent > 0) ? col * a : col;
  gl_FragColor = vec4(rgb, a);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

export default function ColorBends({
  className,
  style,
  rotation = 45,
  speed = 0.2,
  colors = [],
  transparent = true,
  autoRotate = 0,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.1
}: ColorBendsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const materialRef = useRef<ShaderMaterial | null>(null);
  const sceneRef = useRef<Scene | null>(null);
  const cameraRef = useRef<OrthographicCamera | null>(null);
  const clockRef = useRef<Clock | null>(null);
  const geometryRef = useRef<PlaneGeometry | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const rotationRef = useRef<number>(rotation);
  const autoRotateRef = useRef<number>(autoRotate);
  const pointerTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const pointerCurrentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isInitializedRef = useRef<boolean>(false);
  const lastTimeRef = useRef<number>(0);

  // Memoized color conversion
  const hexToVec3 = useCallback((hex: string) => {
    const h = hex.replace('#', '').trim();
    const r = h.length === 3 ? parseInt(h[0] + h[0], 16) : parseInt(h.slice(0, 2), 16);
    const g = h.length === 3 ? parseInt(h[1] + h[1], 16) : parseInt(h.slice(2, 4), 16);
    const b = h.length === 3 ? parseInt(h[2] + h[2], 16) : parseInt(h.slice(4, 6), 16);
    return { x: r / 255, y: g / 255, z: b / 255 };
  }, []);

  useEffect(() => {
    if (isInitializedRef.current) return;

    const container = containerRef.current;
    if (!container) return;

    let THREEModule: typeof THREE;
    let renderer: WebGLRenderer;

    const init = async () => {
      // Use WebGL2 with GPU optimizations
      const threeModule = await import('three');
      THREEModule = threeModule;

      // Create WebGL2 context with performance hints
      const canvas = document.createElement('canvas');
      const contextAttributes: WebGLContextAttributes = {
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
        stencil: false,
        depth: false,
        desynchronized: true, // Reduces latency on supported browsers
        preserveDrawingBuffer: false,
      };

      renderer = new THREEModule.WebGLRenderer({
        canvas,
        context: canvas.getContext('webgl2', contextAttributes) || undefined,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false,
        depth: false,
      });

      rendererRef.current = renderer;

      const scene = new THREEModule.Scene();
      sceneRef.current = scene;

      const camera = new THREEModule.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      cameraRef.current = camera;

      const geometry = new THREEModule.PlaneGeometry(2, 2);
      geometryRef.current = geometry;

      // Pre-allocate color array
      const uColorsArray = Array.from({ length: MAX_COLORS }, () =>
        new THREEModule.Vector3(0, 0, 0)
      );

      const material = new THREEModule.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
          uCanvas: { value: new THREEModule.Vector2(1, 1) },
          uTime: { value: 0 },
          uSpeed: { value: speed },
          uRot: { value: new THREEModule.Vector2(1, 0) },
          uColorCount: { value: 0 },
          uColors: { value: uColorsArray },
          uTransparent: { value: transparent ? 1 : 0 },
          uScale: { value: scale },
          uFrequency: { value: frequency },
          uWarpStrength: { value: warpStrength },
          uPointer: { value: new THREEModule.Vector2(0, 0) },
          uMouseInfluence: { value: mouseInfluence },
          uParallax: { value: parallax },
          uNoise: { value: noise }
        },
        premultipliedAlpha: true,
        transparent: true,
        depthTest: false,
        depthWrite: false,
      });
      materialRef.current = material;

      const mesh = new THREEModule.Mesh(geometry, material);
      mesh.frustumCulled = false; // Skip frustum culling for fullscreen quad
      scene.add(mesh);

      // Renderer configuration
      if (renderer.outputColorSpace !== undefined) {
        renderer.outputColorSpace = THREEModule.SRGBColorSpace;
      }

      // Limit pixel ratio for performance
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setClearColor(0x000000, transparent ? 0 : 1);

      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.display = 'block';
      container.appendChild(renderer.domElement);

      const clock = new THREEModule.Clock();
      clockRef.current = clock;

      const handleResize = () => {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        renderer.setSize(w, h, false);
        material.uniforms.uCanvas.value.set(w, h);
      };

      handleResize();

      if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(handleResize);
        ro.observe(container);
        resizeObserverRef.current = ro;
      } else {
        window.addEventListener('resize', handleResize);
      }

      // Use setAnimationLoop for GPU-synced rendering
      const animate = () => {
        const elapsed = clock.getElapsedTime();
        const dt = elapsed - lastTimeRef.current;
        lastTimeRef.current = elapsed;

        material.uniforms.uTime.value = elapsed;

        // Update rotation
        const deg = (rotationRef.current % 360) + autoRotateRef.current * elapsed;
        const rad = (deg * Math.PI) / 180;
        material.uniforms.uRot.value.set(Math.cos(rad), Math.sin(rad));

        // Smooth pointer interpolation
        const smoothFactor = Math.min(1, dt * 8);
        pointerCurrentRef.current.x += (pointerTargetRef.current.x - pointerCurrentRef.current.x) * smoothFactor;
        pointerCurrentRef.current.y += (pointerTargetRef.current.y - pointerCurrentRef.current.y) * smoothFactor;
        material.uniforms.uPointer.value.set(pointerCurrentRef.current.x, pointerCurrentRef.current.y);

        renderer.render(scene, camera);
      };

      renderer.setAnimationLoop(animate);
      isInitializedRef.current = true;
    };

    init();

    return () => {
      if (rendererRef.current) {
        rendererRef.current.setAnimationLoop(null);
        rendererRef.current.dispose();
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      } else {
        window.removeEventListener('resize', () => {});
      }
      if (geometryRef.current) geometryRef.current.dispose();
      if (materialRef.current) materialRef.current.dispose();
      if (rendererRef.current?.domElement?.parentElement === container) {
        container.removeChild(rendererRef.current.domElement);
      }
      isInitializedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update uniforms when props change
  useEffect(() => {
    const material = materialRef.current;
    const renderer = rendererRef.current;
    if (!material) return;

    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;

    // Batch uniform updates
    const uniforms = material.uniforms;
    uniforms.uSpeed.value = speed;
    uniforms.uScale.value = scale;
    uniforms.uFrequency.value = frequency;
    uniforms.uWarpStrength.value = warpStrength;
    uniforms.uMouseInfluence.value = mouseInfluence;
    uniforms.uParallax.value = parallax;
    uniforms.uNoise.value = noise;

    // Update colors
    const colorArray = (colors || []).filter(Boolean).slice(0, MAX_COLORS);
    for (let i = 0; i < MAX_COLORS; i++) {
      const vec = uniforms.uColors.value[i];
      if (i < colorArray.length) {
        const rgb = hexToVec3(colorArray[i]);
        vec.set(rgb.x, rgb.y, rgb.z);
      } else {
        vec.set(0, 0, 0);
      }
    }
    uniforms.uColorCount.value = colorArray.length;
    uniforms.uTransparent.value = transparent ? 1 : 0;

    if (renderer) {
      renderer.setClearColor(0x000000, transparent ? 0 : 1);
    }
  }, [rotation, autoRotate, speed, scale, frequency, warpStrength, mouseInfluence, parallax, noise, colors, transparent, hexToVec3]);

  // Pointer tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerTargetRef.current.x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
      pointerTargetRef.current.y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full absolute inset-0 overflow-hidden ${className || ''}`}
      style={style}
    />
  );
}

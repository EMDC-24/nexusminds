import { OrbitingCircles } from '@/components/magicui/orbiting-circles';


import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVite } from 'react-icons/si'; // Simple Icons are great for brand logos
import { DiJavascript1 } from 'react-icons/di'; // Devicons is another good source

// No need for a separate Icons object if you import them directly with descriptive names
// Or you can create one for consistency if you prefer:

const TechIcons = {
  ReactJs: FaReact,
  NodeJs: FaNodeJs,
  Html5: FaHtml5,
  Css3: FaCss3Alt,
  Javascript: DiJavascript1, // Or FaJsSquare
  Typescript: SiTypescript,
  TailwindCss: SiTailwindcss,
  NextJs: SiNextdotjs,
  ViteJs: SiVite,
  // Add more as needed
};


export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles className="text-2xl">
        
        <TechIcons.ReactJs className="text-blue-500" size="50px"/> {/* Color applied via Tailwind text color */}
        <TechIcons.NodeJs className="text-green-500" size="50px"/>
        <TechIcons.Javascript className="text-yellow-400" size="50px"/>
        <TechIcons.Html5 className="text-orange-600" size="50px"/>
        <TechIcons.Css3 className="text-blue-600" size="50px"/>
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <TechIcons.NextJs className="text-black dark:text-white" size="50px"/>
        <TechIcons.Typescript className="text-blue-700" size="50px"/>
        <TechIcons.TailwindCss className="text-sky-500" size="50px"/>
        <TechIcons.ViteJs className="text-purple-500" size="50px"/> {/* Vite often uses purple/yellow */}
      </OrbitingCircles>
    </div>
  );
}
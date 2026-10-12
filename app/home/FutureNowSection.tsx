import React from 'react'
import FutureMarquee from './FutureMarquee'
import ColorBends from '@/components/ui/Colorblends'

const FutureNowSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-[620px] md:h-screen overflow-hidden flex items-center justify-center bg-black" id="video-container">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.64}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <FutureMarquee />
        </div>
      </div>
    </div>
  )
}

export default FutureNowSection

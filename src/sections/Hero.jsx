import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index'

const Hero = () => {

  const isMobile = useMediaQuery({maxWidth: 768})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
  const isSmall = useMediaQuery({maxWidth: 480})

  const sizes = calculateSizes(isSmall, isMobile, isTablet) 

  return (
    <section className='min-h-screen w-full flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'> Hi, I am Kaith <span className='waving-hand'>👋</span></p>
        <p className='Hero_tag text-gray_gradient '>Building Products & Brands</p>
        <div className='w-full h-full absolute inset-0'>
               
            <Canvas className='w-full h-full'>
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <HackerRoom 
                position={sizes.deskPosition} 
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
                />
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero

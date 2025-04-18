'use client'

import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

export function CarouselWrapper() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Image 
          src="/assets/header-slides/slider-1.jpg" 
          alt="Food Import Export Slider" 
          width={1920} 
          height={1080}
          className="h-full w-full object-cover"
          quality={100}
          priority
        />
        <Image 
          src="/assets/header-slides/slider-2.jpg" 
          alt="Food Import Export Slider" 
          width={1920} 
          height={1080}
          className="h-full w-full object-cover"
          quality={100}
          priority
        />
        <Image 
          src="/assets/header-slides/slider-3.jpg" 
          alt="Food Import Export Slider" 
          width={1920} 
          height={1080}
          className="h-full w-full object-cover"
          quality={100}
          priority
        />
      </Carousel>
    </div>
  )
}

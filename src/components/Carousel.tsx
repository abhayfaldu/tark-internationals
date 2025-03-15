'use client'

import { Carousel } from 'flowbite-react'
import Image from 'next/image'

export function CarouselWrapper() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Image src="/assets/beach.jpg" alt="kdfjk" width={100} />
        <Image src="/assets/girgit.jpg" alt="kdfjk" width={100} />
        <Image src="/assets/mountain.jpg" alt="kdfjk" width={100} />
        <Image src="/assets/sky.jpg" alt="kdfjk" width={100} />
      </Carousel>
    </div>
  )
}

'use client'

import { Product } from '@/types/product'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const products: Product[] = [
  {
    name: 'Rice',
    img: '/assets/product/grains-and-cereal/Rice.jpg',
    category: 'grains-and-cereal',
    slug: 'rice'
  },
  {
    name: 'Coconut',
    img: '/assets/product/fruits/coconut.jpg',
    category: 'fruits',
    slug: 'coconut'
  },
  {
    name: 'Cumin',
    img: '/assets/product/spices/cumin.jpg',
    category: 'spices',
    slug: 'cumin'
  },
  {
    name: 'Turmeric',
    img: '/assets/product/spices/turmeric.jpg',
    category: 'spices',
    slug: 'turmeric'
  },
  {
    name: 'Potato',
    img: '/assets/product/vegetables/potato.jpg',
    category: 'vegetables',
    slug: 'potato'
  },
  {
    name: 'Onion',
    img: '/assets/product/vegetables/onion.jpg',
    category: 'vegetables',
    slug: 'onion'
  },
  {
    name: 'Coffee',
    img: '/assets/product/beverages/coffee-beans.jpg',
    category: 'beverages',
    slug: 'coffee'
  },
  {
    name: 'Tea',
    img: '/assets/product/beverages/tea.jpg',
    category: 'beverages',
    slug: 'tea'
  },
]

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Create an extended array with duplicated first items at the end
  const extendedProducts = [...products, ...products.slice(0, 3)]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlePrevious = () => {
    if (isTransitioning) return

    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        setIsTransitioning(true)
        return products.length
      }
      return prevIndex - 1
    })
  }

  const handleNext = () => {
    if (isTransitioning) return

    setCurrentIndex((prevIndex) => {
      if (prevIndex >= products.length) {
        setIsTransitioning(true)
        return 0
      }
      return prevIndex + 1
    })
  }

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [isTransitioning])

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden">
        <div
          className={`flex ${isTransitioning ? '' : 'transition-transform duration-500 ease-in-out'}`}
          style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` }}
        >
          {extendedProducts.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="min-w-full md:min-w-[33.333%] p-4 flex-shrink-0"
            >
              <Link href={`/product/${product.category}/${product.slug}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02]">
                  <div className="relative aspect-square w-full bg-[#f8f8f8]">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center bg-white">
                    <h3 className="text-xl font-medium text-gray-800">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-md hover:bg-white active:scale-95 transition-all"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-full shadow-md hover:bg-white active:scale-95 transition-all"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

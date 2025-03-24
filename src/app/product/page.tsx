'use client'

import Image from 'next/image'
import Link from 'next/link'

const productCategories = [
  {
    name: 'Grains and Cereal',
    slug: 'grains-and-cereal',
    image: '/assets/product/grains-and-cereal/header.jpg',
  },
  {
    name: 'Pulses',
    slug: 'pulses',
    image: '/assets/product/pulses/header.jpg',
  },
  {
    name: 'Spices',
    slug: 'spices',
    image: '/assets/product/spices/header.jpg',
  },
  {
    name: 'Fruits',
    slug: 'fruits',
    image: '/assets/product/fruits/header.jpg',
  },
  {
    name: 'Vegetables',
    slug: 'vegetables',
    image: '/assets/product/vegetables/header.jpg',
  },
  {
    name: 'Oilseeds',
    slug: 'oilseeds',
    image: '/assets/product/oilseeds/header.jpg',
  },
  {
    name: 'Floriculture',
    slug: 'floriculture',
    image: '/assets/product/floriculture/header.jpg',
  },
  {
    name: 'Herbs',
    slug: 'herbs',
    image: '/assets/product/herbs/header.jpg',
  },
  {
    name: 'Dry Fruits',
    slug: 'dry-fruits',
    image: '/assets/product/dry-fruits/header.jpg',
  },
  {
    name: 'Beverages',
    slug: 'beverages',
    image: '/assets/product/beverages/header.jpg',
  },
  {
    name: 'Dehydrated Products',
    slug: 'dehydrated',
    image: '/assets/product/dehydrated/header.jpg',
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
        <Image
          src="/assets/product/fruits/header.jpg"
          alt="Products Banner"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span>Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Explore Our Product Categories
          </h2>
          <p className="text-gray-600">
            We offer a wide range of high-quality products for export. Browse
            our product categories below and discover the best of Indian
            exports.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/product/${category.slug}`}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative h-56">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white text-center px-4">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

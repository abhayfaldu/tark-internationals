'use client'

import { productCategoriesData, ProductCategory } from '@/data/data'
import { ProductData } from '@/types/product'
import StandardLayout from '@/components/product-layouts/StandardLayout'
import TabbedLayout from '@/components/product-layouts/TabbedLayout'
import CardsLayout from '@/components/product-layouts/CardsLayout'
import SimpleTabsLayout from '@/components/product-layouts/SimpleTabsLayout'
import Header from '@/components/product-sections/Header'
import Description from '@/components/product-sections/Description'
import Conclusion from '@/components/product-sections/Conclusion'
import { useEffect, useState } from 'react'

export default function ProductPage({
  params,
}: {
  params: { category: string; product: string }
}) {
  const [productData, setProductData] = useState<ProductData | null>(null)
  const [loading, setLoading] = useState(true)

  const getProductData = (
    category: string,
    product: string
  ): ProductData => {
    const categoryKey = category.replace(/-/g, '_').toUpperCase() as keyof typeof ProductCategory
    console.log('::::: categoryKey', categoryKey)
    console.log('::::: productCategoriesData', productCategoriesData)
    const categoryData = productCategoriesData[ProductCategory[categoryKey]]
    console.log('::::: categoryData', categoryData)
    const data = categoryData?.products?.find(
      (p) => p.slug === product
    )?.data
    console.log('::::: productDataOnly', data)

    if (!data) {
      return {
        slug: product,
        title: `Indian ${product.charAt(0).toUpperCase() + product.slice(1).replace(/-/g, ' ')}`,
        headerImage: '/assets/beach.jpg',
        description: [
          `Information about ${product.replace(/-/g, ' ')} is not available yet. Please check back later.`,
        ],
        conclusion: [],
        layoutType: 'standard'
      }
    }

    return data
  }

  useEffect(() => {
    const data = getProductData(params.category, params.product)
    setProductData(data)
    setLoading(false)
  }, [params.category, params.product])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!productData) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>
  }

  return (
    <div className="min-h-screen pb-16">
      <Header productData={productData} params={params} />
      <Description productData={productData} />

      {productData.layoutType === 'standard' && (
        <StandardLayout data={productData} />
      )}
      {productData.layoutType === 'tabbed' && (
        <TabbedLayout data={productData} />
      )}
      {productData.layoutType === 'cards' && (
        <CardsLayout data={productData} />
      )}
      {productData.layoutType === 'simple-tabs' && (
        <SimpleTabsLayout data={productData} />
      )}

      {productData.conclusion && productData.conclusion.length > 0 && (
        <Conclusion conclusion={productData.conclusion} />
      )}
    </div>
  )
}

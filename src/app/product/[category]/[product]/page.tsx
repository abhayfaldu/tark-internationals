'use client'

import { ProductData, VarietyDetails, getProductData } from '@/app/data/products'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ProductPage({
  params,
}: {
  params: { category: string; product: string }
}) {
  const [productData, setProductData] = useState<ProductData | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('market')

  useEffect(() => {
    const data = getProductData(params.category, params.product)
    setProductData(data)
    setLoading(false)
  }, [params.category, params.product])

  if (loading) {
    return <div className="container mx-auto px-4 py-16">Loading...</div>
  }

  if (!productData) {
    return (
      <div className="container mx-auto px-4 py-16">
        Product not found. <Link href="/product">Return to products</Link>
      </div>
    )
  }

  // Render the appropriate tab content for tabbed layout
  const renderTabContent = () => {
    if (!productData.tabContent) return null

    switch (activeTab) {
      case 'market':
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              GLOBAL MARKET DEMAND
            </h2>
            {productData.tabContent.globalMarketDemand?.map(
              (paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            )}
          </div>
        )
      case 'specification':
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              SPECIFICATION
            </h2>
            {productData.tabContent.specification && (
              <div className="w-full">
                <table className="w-full border-collapse">
                  <tbody>
                    {productData.tabContent.specification.productName && (
                      <tr className="border-b border-gray-200">
                        <td className="py-3 font-medium">Product Name</td>
                        <td className="py-3">
                          {productData.tabContent.specification.productName}
                        </td>
                      </tr>
                    )}
                    {productData.tabContent.specification.origin && (
                      <tr className="border-b border-gray-200">
                        <td className="py-3 font-medium">Origin</td>
                        <td className="py-3">
                          {productData.tabContent.specification.origin}
                        </td>
                      </tr>
                    )}
                    {productData.tabContent.specification.family && (
                      <tr className="border-b border-gray-200">
                        <td className="py-3 font-medium">Family</td>
                        <td className="py-3">
                          {productData.tabContent.specification.family}
                        </td>
                      </tr>
                    )}
                    {productData.tabContent.specification.binomialName && (
                      <tr className="border-b border-gray-200">
                        <td className="py-3 font-medium">Binomial name</td>
                        <td className="py-3">
                          {productData.tabContent.specification.binomialName}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )
      case 'ingredients':
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              INGREDIENTS
            </h2>
            {productData.tabContent.specification && (
              <div className="w-full">
                <table className="w-full border-collapse">
                  <tbody>
                    {productData.tabContent.specification.nutrients && (
                      <tr className="border-b border-gray-200">
                        <td className="py-4 align-top font-medium">
                          Nutrients
                        </td>
                        <td className="py-4">
                          {productData.tabContent.specification.nutrients.map(
                            (nutrient, idx) => (
                              <div key={idx} className="mb-1">
                                {nutrient.name} - {nutrient.value}
                              </div>
                            )
                          )}
                        </td>
                      </tr>
                    )}
                    {productData.tabContent.specification.minerals && (
                      <tr className="border-b border-gray-200">
                        <td className="py-4 align-top font-medium">Minerals</td>
                        <td className="py-4">
                          {productData.tabContent.specification.minerals.map(
                            (mineral, idx) => (
                              <div key={idx} className="mb-1">
                                {mineral}
                              </div>
                            )
                          )}
                        </td>
                      </tr>
                    )}
                    {productData.tabContent.specification.vitamins && (
                      <tr className="border-b border-gray-200">
                        <td className="py-4 align-top font-medium">Vitamin</td>
                        <td className="py-4">
                          {productData.tabContent.specification.vitamins.map(
                            (vitamin, idx) => (
                              <div key={idx} className="mb-1">
                                {vitamin}
                              </div>
                            )
                          )}
                        </td>
                      </tr>
                    )}
                    {productData.tabContent.specification.protein && (
                      <tr className="border-b border-gray-200">
                        <td className="py-4 font-medium">Protein</td>
                        <td className="py-4">
                          {productData.tabContent.specification.protein}
                        </td>
                      </tr>
                    )}
                    {productData.tabContent.specification.fats && (
                      <tr className="border-b border-gray-200">
                        <td className="py-4 font-medium">Fats</td>
                        <td className="py-4">
                          {productData.tabContent.specification.fats}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )
      case 'benefits':
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              USES & BENEFITS
            </h2>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">USES :</h3>
              <ul className="list-disc ml-8 space-y-4">
                {productData.tabContent.usesAndBenefits?.map(
                  (paragraph, idx) => (
                    <li key={idx} className="text-gray-700">
                      {paragraph}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  // Render the cards layout for rice-style products
  const renderCardsLayout = () => {
    if (!productData.cardSections) return null

    return (
      <div className="max-w-6xl mx-auto">
        {productData.cardSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">
              {section.title}
            </h2>
            <div className="py-8 px-4 bg-[#f9f9f9]">
              <p className="text-center mb-8 text-gray-700">
                {sectionIndex === 0
                  ? 'There are around 40,000 varieties of Rice found across the world. We broadly export two categories of Rice Basmati and Non-Basmati. These are several varieties under these broad categories.'
                  : 'All other varieties of rice, except basmati is called non- basmati rice. Non-basmati rice includes rice of different varieties, sizes, and shapes. Some types of rice are long and slender, while some are short and thick. Non-Basmati Rice is used in homes for daily use and also is used and exported for commercial use.'}
              </p>

              <div className="space-y-12">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-6"
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 text-2xl font-bold">
                          {item.id}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    )
  }

  // Add this new function inside the ProductPage component, before the return statement
  const renderSimpleTabsLayout = () => {
    if (!productData || !productData.simpleTabContent) return null

    return (
      <div className="max-w-5xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex">
            <button
              onClick={() => setActiveTab('market')}
              className={`px-8 py-3 text-sm font-medium border border-green-600 ${activeTab === 'market'
                  ? 'bg-[#008000] text-white'
                  : 'text-green-600 hover:bg-green-50'
                }`}
            >
              GLOBAL MARKET DEMAND
            </button>
            <button
              onClick={() => setActiveTab('specification')}
              className={`px-8 py-3 text-sm font-medium border-t border-b border-r border-green-600 ${activeTab === 'specification'
                  ? 'bg-[#008000] text-white'
                  : 'text-green-600 hover:bg-green-50'
                }`}
            >
              SPECIFICATION
            </button>
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`px-8 py-3 text-sm font-medium border-t border-b border-r border-green-600 ${activeTab === 'ingredients'
                  ? 'bg-[#008000] text-white'
                  : 'text-green-600 hover:bg-green-50'
                }`}
            >
              INGREDIENTS
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-8 py-3 text-sm font-medium border-t border-b border-r border-green-600 ${activeTab === 'benefits'
                  ? 'bg-[#008000] text-white'
                  : 'text-green-600 hover:bg-green-50'
                }`}
            >
              USES & BENEFITS
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === 'market' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                GLOBAL MARKET DEMAND
              </h2>
              {productData.simpleTabContent.globalMarketDemand.map((text, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          )}

          {activeTab === 'specification' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                SPECIFICATION
              </h2>
              <div className="w-full">
                <table className="w-full border border-[#e5efdc]">
                  <tbody>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 w-1/4 text-gray-700 bg-[#f5f9ef]">Product Name</td>
                      <td className="py-4 px-6 text-gray-700">
                        {productData.simpleTabContent.specification.productName}
                      </td>
                    </tr>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 text-gray-700 bg-[#f5f9ef]">Origin</td>
                      <td className="py-4 px-6 text-gray-700">
                        {productData.simpleTabContent.specification.origin}
                      </td>
                    </tr>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 text-gray-700 bg-[#f5f9ef]">Family</td>
                      <td className="py-4 px-6 text-gray-700">
                        {productData.simpleTabContent.specification.family}
                      </td>
                    </tr>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 text-gray-700 bg-[#f5f9ef]">Binomial name</td>
                      <td className="py-4 px-6 text-gray-700">
                        {productData.simpleTabContent.specification.binomialName}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                INGREDIENTS
              </h2>
              <div className="w-full">
                <table className="w-full border border-[#e5efdc]">
                  <tbody>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 w-1/4 text-gray-700 bg-[#f5f9ef]">Nutrients</td>
                      <td className="py-4 px-6 text-gray-700">
                        <div>
                          {productData.simpleTabContent.ingredients.nutrients.calories}
                        </div>
                        <div>
                          Carbohydrates - {productData.simpleTabContent.ingredients.nutrients.carbohydrates}
                        </div>
                        <div>
                          Fiber - {productData.simpleTabContent.ingredients.nutrients.fiber}
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 align-top text-gray-700 bg-[#f5f9ef]">Minerals</td>
                      <td className="py-4 px-6 text-gray-700">
                        {productData.simpleTabContent.ingredients.minerals.join(', ')}
                      </td>
                    </tr>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 text-gray-700 bg-[#f5f9ef]">Vitamin</td>
                      <td className="py-4 px-6 text-gray-700">
                        {productData.simpleTabContent.ingredients.vitamins.join(', ')}
                      </td>
                    </tr>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 text-gray-700 bg-[#f5f9ef]">Protein</td>
                      <td className="py-4 px-6 text-gray-700">
                        {productData.simpleTabContent.ingredients.protein}
                      </td>
                    </tr>
                    <tr className="border-b border-[#e5efdc]">
                      <td className="py-4 px-6 text-gray-700 bg-[#f5f9ef]">Fats</td>
                      <td className="py-4 px-6 text-gray-700">
                        {productData.simpleTabContent.ingredients.fats}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                USES & BENEFITS
              </h2>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">USES :</h3>
                <div className="space-y-4">
                  {productData.simpleTabContent.usesAndBenefits.uses.map(
                    (use, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">▸</span>
                        <p className="text-gray-700">{use}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Banner Image */}
      <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
        <Image
          src={productData.headerImage}
          alt={params.product}
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="text-sm mb-8 text-gray-600">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/product/${params.category}`}
            className="hover:text-primary"
          >
            {params.category.charAt(0).toUpperCase() +
              params.category.slice(1).replace(/-/g, ' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">
            {params.product.charAt(0).toUpperCase() +
              params.product.slice(1).replace(/-/g, ' ')}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {productData.title}
        </h1>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16">
          {productData.description.map((paragraph: string, idx: number) => (
            <p
              key={idx}
              className="text-gray-700 mb-4 leading-relaxed text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Render appropriate content based on layout type */}
        {productData.layoutType === 'standard' ? (
          // Standard layout (Groundnut style)
          <>
            {/* Nutrition Facts */}
            {productData.nutritionFacts && (
              <section className="mb-20">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
                  INGREDIENTS
                </h2>

                <div className="max-w-4xl mx-auto">
                  <table className="w-full border-collapse border border-[#e5efdc]">
                    <tbody>
                      {/* Nutrients Row */}
                      <tr>
                        <td className="py-6 px-8 text-gray-700 font-medium text-lg w-1/4 align-top border border-[#e5efdc]">
                          Nutrients
                        </td>
                        <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                          <div className="space-y-2">
                            <div>Calories - 567 calories</div>
                            <div>Carbs - 16.1 grams</div>
                            <div>Fiber - 8.5 grams</div>
                          </div>
                        </td>
                      </tr>

                      {/* Protein Row */}
                      <tr>
                        <td className="py-6 px-8 text-gray-700 font-medium text-lg border border-[#e5efdc]">
                          Protein
                        </td>
                        <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                          25.8g
                        </td>
                      </tr>

                      {/* Vitamins Row */}
                      <tr>
                        <td className="py-6 px-8 text-gray-700 font-medium text-lg border border-[#e5efdc]">
                          Vitamins
                        </td>
                        <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                          Vitamin B6
                        </td>
                      </tr>

                      {/* Minerals Row */}
                      <tr>
                        <td className="py-6 px-8 text-gray-700 font-medium text-lg align-top border border-[#e5efdc]">
                          Minerals
                        </td>
                        <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]">
                          <div className="space-y-2">
                            <div>Calcium</div>
                            <div>Magnesium</div>
                            <div>Iron</div>
                          </div>
                        </td>
                      </tr>

                      {/* Fat Row */}
                      <tr>
                        <td className="py-6 px-8 text-gray-700 font-medium text-lg border border-[#e5efdc]">
                          Fat
                        </td>
                        <td className="py-6 px-8 text-gray-700 border border-[#e5efdc]"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Varieties Section */}
            {productData.varieties.length > 0 && (
              <section className="py-16 bg-[#f5f9ef]">
                <div className="container mx-auto px-4">
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
                    GROUNDNUT VARIETIES WE EXPORT
                  </h2>

                  <div className="max-w-5xl mx-auto space-y-16">
                    {productData.varieties.map((variety: VarietyDetails) => (
                      <div
                        key={variety.id}
                        className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10"
                      >
                        <div className="flex-shrink-0 relative w-16 h-16 mb-4 sm:mb-0">
                          {/* Use the numbering.png image as background */}
                          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                            <Image
                              src="/assets/numbering.png"
                              alt="Number background"
                              width={70}
                              height={70}
                              className="absolute inset-0 w-full h-full object-contain"
                              priority
                            />
                            <span className="relative z-10 text-white text-2xl font-bold">
                              {variety.id}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1 pt-0">
                          <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {variety.name}
                          </h3>
                          {variety.description.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-gray-600 mb-3 leading-relaxed text-lg"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        ) : productData.layoutType === 'tabbed' ? (
          // Tabbed layout (Rye style)
          <div className="max-w-5xl mx-auto">
            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 mb-8">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('market')}
                  className={`py-3 px-6 focus:outline-none ${activeTab === 'market'
                    ? 'border-b-2 border-green-600 font-medium text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  GLOBAL MARKET DEMAND
                </button>
                <button
                  onClick={() => setActiveTab('specification')}
                  className={`py-3 px-6 focus:outline-none ${activeTab === 'specification'
                    ? 'border-b-2 border-green-600 font-medium text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  SPECIFICATION
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`py-3 px-6 focus:outline-none ${activeTab === 'ingredients'
                    ? 'border-b-2 border-green-600 font-medium text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  INGREDIENTS
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`py-3 px-6 focus:outline-none ${activeTab === 'benefits'
                    ? 'border-b-2 border-green-600 font-medium text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  USES & BENEFITS
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {renderTabContent()}
          </div>
        ) : productData.layoutType === 'cards' ? (
          // Cards layout (Rice style)
          renderCardsLayout()
        ) : productData.layoutType === 'simple-tabs' ? (
          renderSimpleTabsLayout()
        ) : null}

        {/* Conclusion */}
        {productData.conclusion.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            {productData.conclusion.map((paragraph: string, idx: number) => (
              <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

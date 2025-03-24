'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Type definitions
interface Ingredient {
  name: string
  value: string
}

interface NutritionFacts {
  nutrients: Ingredient[]
  protein: Ingredient[]
  vitamins: Ingredient[]
  minerals: Ingredient[]
  fat: Ingredient[]
}

interface VarietyDetails {
  id: number
  name: string
  description: string[]
}

interface TabContent {
  globalMarketDemand?: string[]
  specification?: {
    productName?: string
    origin?: string
    family?: string
    binomialName?: string
    nutrients?: { name: string; value: string }[]
    minerals?: string[]
    vitamins?: string[]
    protein?: string
    fats?: string
  }
  ingredients?: NutritionFacts
  usesAndBenefits?: string[]
}

interface CategorySection {
  title: string
  items: {
    id: number
    title: string
    description: string
  }[]
}

// Define the product data structure
interface ProductData {
  title: string
  headerImage: string
  description: string[]
  nutritionFacts: NutritionFacts | null
  varieties: VarietyDetails[]
  conclusion: string[]
  layoutType?: 'standard' | 'tabbed' | 'cards' // Added 'cards' layout type for rice-style
  tabContent?: TabContent // Content for tabbed layout
  cardSections?: CategorySection[] // Content for card-based layout like rice
}

// This will be replaced with actual data fetching in a real implementation
const getProductData = (category: string, product: string): ProductData => {
  // Demo data for groundnuts
  if (category === 'oilseeds' && product === 'groundnut') {
    return {
      title: 'Indian Groundnut Exporters',
      headerImage: '/assets/banners/groundnut.jpg', // Updated with actual path
      description: [
        'Groundnut is basically a species of the legume family. It was probably first domesticated and cultivated in the valleys of Paraguay. The Groundnut exporters in India exports tonnes of groundnuts to various countries in the world. The Groundnut export from India has been increasing over the years. India holds around 15-20% of total global groundnut exports and stood third in the production of groundnuts in the year 2018-19. Therefore, groundnut export from India is said to be growing business.',
      ],
      nutritionFacts: {
        nutrients: [
          { name: 'Calories', value: '567 calories' },
          { name: 'Carbs', value: '4.7 grams' },
          { name: 'Fiber', value: '2.8 grams' },
        ],
        protein: [{ name: 'Protein', value: '25.8g' }],
        vitamins: [{ name: 'Vitamin B6', value: '0.35 mg' }],
        minerals: [
          { name: 'Calcium', value: '92 mg/100g' },
          { name: 'Magnesium', value: '168 mg/100g' },
          { name: 'Iron', value: '4.6 mg/100g' },
        ],
        fat: [{ name: 'Fat', value: '49.7g' }],
      },
      varieties: [
        {
          id: 1,
          name: 'TLG 45',
          description: [
            'Released in 2006, this variety was released in the year 2007 at the releasing centre at MAU, Latur. The yield potential of this variety is around 3500kg/ha. The oil content in this seed is around 52%. The recommended areas for this variety is Marathwada. It is a large-seeded variety.',
          ],
        },
        {
          id: 2,
          name: 'NARAYANI (TCGS 29)',
          description: [
            'Released in 2007, this promising variety was released in the releasing centre at Jabalpur, Tirupati. The yield potential of this variety is around 3784kg/ha. The oil content of this variety is around 48%. It is tolerant of mid-season moisture stress conditions.',
          ],
        },
        {
          id: 3,
          name: 'VASUNDHARA (GG 20)',
          description: [
            'Released in 2007, the variety of Vasundhara was released in 2007. The yield potential of this variety is about 3875kg/ha. The oil content in the variety is around 52%. It has been recommended to be grown in West Bengal, Orissa, Jharkhand and Karnataka. This variety is tolerant to stem rot and drought.',
          ],
        },
        {
          id: 4,
          name: 'VL - MUNGPHALI-1',
          description: [
            'The VL – Mungphali-1 variety of groundnuts was released in the year 2008 at the releasing centre at VPKAS, Almora. The yield potential of this variety is around 2250-2500kg/ha. This variety has been recommended to be grown in Uttaranchal and is resistant to late leaf spot and rust leaf spot.',
          ],
        },
        {
          id: 5,
          name: 'UTKARSH (CSMG 9810)',
          description: [
            'Released in 2009 by the CSMG series, the oil content of this variety is around 48%. This variety has been recommended to be grown in Uttar Pradesh, Tripura, northern Rajasthan. It is resistant to rust and protects from Tikka disease. It matures in up to 95-85 days. It has been released by the BARC variety.',
          ],
        },
        {
          id: 6,
          name: 'JAWAHAR GROUNDNUT 23 (JGN 23)',
          description: [
            'The Jawahar Groundnut 23 was released in the year 2010 in JNKVV, Zhatgaon. The yield potential of this variety is around 1875kg/ha. The oil content in this variety is around 48%. This variety is tolerant to ELS and LS. It is also drought tolerant and has been recommended for the Kharif season.',
          ],
        },
        {
          id: 7,
          name: 'GREESHMA',
          description: [
            'Released in the year 2010 at Anilimi, Tirupati, this variety of Greeshma has a yield potential of about 2500-2600kg/ha. The oil content in this variety is around 48%. This variety has been recommended to be grown in Andhra Pradesh. It is tolerant to LLS, drought, high temperature and drought.',
          ],
        },
        {
          id: 8,
          name: 'KADIRI 8',
          description: [
            'The Kadiri 8 variety of groundnuts was released in 2010 in Anilimi, Kadiri. The yield potential is around 2750kg/ha. The oil content in this seed is about 49%. Recommended to be grown in the areas of Andhra Pradesh, this variety is tolerant of drought and high pod yield.',
          ],
        },
        {
          id: 9,
          name: 'MALLIKA',
          description: [
            'Released in 2010 at MAU Neverageaon,gha, the Mallika variety of Groundnuts has a yield potential of 2876kg/ha. The oil content in this variety is about 48%. This variety is resistant to collar rot and Tikka both is bold seeded. It has been recommended to grow in the Kharif season.',
          ],
        },
      ],
      conclusion: [
        'Pisum Foods is one of the leading Groundnut exporters from India. We at Pisum Foods provide hassle-free food export services for our clients. The export of groundnut and groundnuts for a considerable percentage of the total agricultural exports from India. Working with us means more time every day and your products reach the destination safe and fresh. If you are looking for groundnut export, Contact Them now!',
      ],
      layoutType: 'standard',
    }
  }
  // Demo data for rye
  else if (category === 'grains' && product === 'rye') {
    return {
      title: 'Indian Rye Exporter',
      headerImage: '/assets/banners/rye.jpg',
      description: [
        'Rye is one of the extensively grown cereals in the world. One of the oldest grains to be cultivated, it is one of the top 5 grains to be consumed all over the world. India is into export tonnes of Rye each year. Rye has various nutritional benefits and therefore the rye export from India has been on the rise. The Indian rye exporter export premium quality Rye to many countries across the world. Rye export has thus gained importance in the food export industry.',
      ],
      nutritionFacts: null,
      varieties: [],
      conclusion: [
        'If you are looking for Rye importer from India, Pisum Foods is one of the best options available for you. Pisum has a global presence and will assist you in grabbing buyers for your products, conducting in-depth market analysis so on and so forth. Export of Rye is a rapidly growing business and the Indian exporters should take this opportunity and export premium quality Rye worldwide.',
      ],
      layoutType: 'tabbed',
      tabContent: {
        globalMarketDemand: [
          'Rye import from India has been increasing over the years due to various health and medicinal benefits from Rye. Rye is extensively used in India and Indonesian cuisines which may be one important reason for the increasing popularity of export of Rye. The rising global demand for Rye is a good opportunity for Rye exporter in India to expand its business and enter the international market.',
        ],
        specification: {
          productName: 'Rye',
          origin: 'Southwestern Asia',
          family: 'Poaceae',
          binomialName: 'Secale Cereale',
          nutrients: [
            { name: 'Calories', value: '259 Calories' },
            { name: 'Total Carbohydrate', value: '48 g' },
            { name: 'Dietary fiber', value: '6 g' },
          ],
          minerals: [
            'Copper',
            'Magnesium',
            'Phosphorus',
            'Thiamin',
            'Selenium',
            'Folate',
            'Pantothenic Acid',
          ],
          vitamins: ['Vitamin B6'],
          protein: '9 g',
          fats: '3.3g',
        },
        usesAndBenefits: [
          'Rye is said to help with weight loss. The type of fiber present in Rye tends to bind with water and makes one feel full so we end up eating less - Rye is also sometimes used as the basic ingredient for whiskies especially in North America and more using the digestive tract faster - Rye is also great for your immune system and is also said to be helpful in prevent arthritis - Rye is said to be good for the heart and is recommended to many heart patients - Rye is also used as the base for many whiskeys. It is also sometimes used in feed livestock.',
        ],
      },
    }
  }
  // Demo data for rice with cards layout
  else if (category === 'grains' && product === 'rice') {
    return {
      title: 'Indian Rice Exporters',
      headerImage: '/assets/banners/rice.jpg',
      description: [
        'Rice is one of the most popular and widely consumed staple foods. It is consumed extensively in Asia and Africa and is the agricultural commodity with third highest production in the world. It is generally grown as an annual plant in areas like the tropics. It can evolve as a perennial crop.',
      ],
      nutritionFacts: null,
      varieties: [],
      conclusion: [],
      layoutType: 'cards',
      cardSections: [
        {
          title: 'BASMATI RICE',
          items: [
            {
              id: 1,
              title: '1121 BASMATI RICE - WHITE',
              description:
                'Pusa Basmati 1121 is a variety having Basmati rice quality traits from the traditional Basmati varieties such as Basmati 370 and Type 3. This type is specially derived from the process of hybridization. Commercial cultivation for 1121 Basmati rice started in 2003. Its characteristics include extra-long, slender milled grains, a pleasant aroma, volume expansion more than four times, appealing taste, good mouthfeel, and easy digestibility.',
            },
            {
              id: 2,
              title: 'TRADITIONAL BASMATI RICE',
              description:
                'There are various types of basmati rice. Traditional types include Taraori 370, Basmati 386, and Basmati Keerbhogphool. Traditional Basmati Rice is available in unboiled and boiled form. It is used in Continental cuisine, Indian Cuisine, Mughal Cuisine & Chinese Cuisine.',
            },
            {
              id: 3,
              title: 'GOLDEN SELLA BASMATI RICE',
              description:
                "Retaining rice's native smell of rice, Golden Sella rice releases less starch and retains more minerals from the original grain. The parboiling guarantees it firm grain upon cooking. Parboiled rice is both cholesterol and gluten free. It is also low in sodium and saturated fat. Rice provides complex carbohydrates used by the body for energy.",
            },
            {
              id: 4,
              title: 'SUGANDHA BASMATI RICE',
              description:
                'Sugandha Basmati Rice is one of the low cost long grain basmati rice in India. It is generally cultivated in Punjab, Haryana, and Uttar Pradesh. Like each other kinds of India, Sugandha Basmati Rice has a great fragrance and is semi-sticky rice. It is visually slightly shorter than both Basmati and 1121 Basmati rice. It may swell up to twice its length if cooked well.',
            },
            {
              id: 5,
              title: 'SHARBATI BASMATI RICE',
              description:
                'Sharbati Basmati Rice is made from the harms of Traditional Basmati Rice and has no specific aroma. The cooking of Sharbati Basmati Rice is similar to basmati Rice. It is quick of shelf-long. It has grain is shaped in 7-8MM in length.',
            },
          ],
        },
        {
          title: 'NON-BASMATI RICE',
          items: [
            {
              id: 1,
              title: 'PARBOILED RICE',
              description:
                'Parboiled rice is rice that been partially boiled in the husk. It is generally fifty way to cook rice. The process of parboiling includes soaking, steaming and drying. These processes make the rice easier to process by hand, minimize the loss of nutrients that may otherwise occur during the processing, increase its nutritional value, and make it more resistant to weevils.',
            },
            {
              id: 2,
              title: 'BROKEN RICE',
              description:
                'First of all, even though this type is called broken rice, cooking is actually same with is is as nutritious as any other rice. It is basically just fragments or rice grains, broken in the rice milling during transport, or by drying. Standardized appearance size used to separate the broken grains from the whole.',
            },
            {
              id: 3,
              title: 'SWARNA RICE',
              description:
                'Swarna is one of the most healthy rice cultivar. It has a very low risk of diseases (4/10) low glycemic index. Swarna rice is grown extensively in India.',
            },
            {
              id: 4,
              title: 'SONA MASOORI RICE',
              description:
                'Sona masoori variety of rice is a medium-grain rice grown largely in the states of Andhra Pradesh, Telangana, and Karnataka in India. Sona Masoori is popularly known by Golden for Milled. This premium variety of rice is mostly exported to the USA, Canada, Europe, Australia, Singapore, Malaysia, Yemen, and Saudi Arabia. It is the Highest Exported Rice from India.',
            },
          ],
        },
      ],
    }
  }

  // Default data for other products
  return {
    title: `Indian ${product.charAt(0).toUpperCase() + product.slice(1)} Exporters`,
    headerImage: '/assets/beach.jpg',
    description: [
      `Information about ${product} is not available yet. Please check back later.`,
    ],
    nutritionFacts: null,
    varieties: [],
    conclusion: [],
    layoutType: 'standard',
  }
}

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
                  className={`py-3 px-6 focus:outline-none ${
                    activeTab === 'market'
                      ? 'border-b-2 border-green-600 font-medium text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  GLOBAL MARKET DEMAND
                </button>
                <button
                  onClick={() => setActiveTab('specification')}
                  className={`py-3 px-6 focus:outline-none ${
                    activeTab === 'specification'
                      ? 'border-b-2 border-green-600 font-medium text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  SPECIFICATION
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`py-3 px-6 focus:outline-none ${
                    activeTab === 'ingredients'
                      ? 'border-b-2 border-green-600 font-medium text-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  INGREDIENTS
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`py-3 px-6 focus:outline-none ${
                    activeTab === 'benefits'
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

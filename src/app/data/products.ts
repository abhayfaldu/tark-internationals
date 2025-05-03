// Type definitions
export interface Ingredient {
  name: string
  value: string
}

export interface NutritionFacts {
  nutrients: Ingredient[]
  protein: Ingredient[]
  vitamins: Ingredient[]
  minerals: Ingredient[]
  fat: Ingredient[]
}

export interface VarietyDetails {
  id: number
  name: string
  description: string[]
}

export interface TabContent {
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

export interface CategorySection {
  title: string
  items: {
    id: number
    title: string
    description: string
  }[]
}

export interface SimpleSpecification {
  productName: string
  origin: string
  family: string
  binomialName: string
}

export interface SimpleIngredients {
  nutrients: {
    calories: string
    carbohydrates: string
    fiber: string
  }
  minerals: string[]
  vitamins: string[]
  protein: string
  fats: string
}

export interface SimpleTabContent {
  globalMarketDemand: string[]
  specification: SimpleSpecification
  ingredients: SimpleIngredients
  usesAndBenefits: {
    uses: string[]
  }
}

export interface ProductData {
  title: string
  headerImage: string
  description: string[]
  nutritionFacts: NutritionFacts | null
  varieties: VarietyDetails[]
  conclusion: string[]
  layoutType?: 'standard' | 'tabbed' | 'cards' | 'simple-tabs'
  tabContent?: TabContent
  cardSections?: CategorySection[]
  simpleTabContent?: SimpleTabContent
}

export const getProductData = (
  category: string,
  product: string
): ProductData => {
  if (category === 'oilseeds' && product === 'groundnut') {
    return {
      title: 'Indian Groundnut Exporters',
      headerImage: '/assets/banners/groundnut.jpg',
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
        'Tark Internationals Foods is one of the leading Groundnut exporters from India. We at Tark Internationals Foods provide hassle-free food export services for our clients. The export of groundnut and groundnuts for a considerable percentage of the total agricultural exports from India. Working with us means more time every day and your products reach the destination safe and fresh. If you are looking for groundnut export, Contact Them now!',
      ],
      layoutType: 'standard',
    }
  }
  // Demo data for rye
  else if (category === 'grains-and-cereal' && product === 'rye') {
    return {
      title: 'Indian Rye Exporter',
      headerImage: '/assets/banners/rye.jpg',
      description: [
        'Rye is one of the extensively grown cereals in the world. One of the oldest grains to be cultivated, it is one of the top 5 grains to be consumed all over the world. India is into export tonnes of Rye each year. Rye has various nutritional benefits and therefore the rye export from India has been on the rise. The Indian rye exporter export premium quality Rye to many countries across the world. Rye export has thus gained importance in the food export industry.',
      ],
      nutritionFacts: null,
      varieties: [],
      conclusion: [
        'If you are looking for Rye importer from India, Tark Internationals Foods is one of the best options available for you. Tark Internationals has a global presence and will assist you in grabbing buyers for your products, conducting in-depth market analysis so on and so forth. Export of Rye is a rapidly growing business and the Indian exporters should take this opportunity and export premium quality Rye worldwide.',
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
  else if (category === 'grains-and-cereal' && product === 'rice') {
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

  // Demo data for corn
  else if (category === 'grains-and-cereal' && product === 'corn') {
    return {
      title: 'Indian Corn Exporter',
      headerImage: '/assets/banners/corn.jpg',
      description: [
        "Corn is known to be one of the world's most popular cereal grains. It is actually the seed of a plant in the grass family. Corn exporter in India export tonnes of corn each year. Humans and animals consume corn in various forms. Varieties of corn can be used in snacks, vegetables, curries, and so on. Corn export from India has been one of the rapidly growing exports. The Indian corn exporter thus earns great revenues from these exports. Corn export from India comprises of various forms and varieties of export.",
      ],
      nutritionFacts: null,
      varieties: [],
      conclusion: [
        'If you are looking for Corn importer from India, Pisum Foods is one of the best! Pisum Foods export premium quality corn to numerous countries in the world. With our advanced technology and detailed analysis of the market export of Corn from India has now become easy. Pisum Foods has an established global presence and will help you with more export from India. Want to export corn? Pisum is the place for you!',
      ],
      layoutType: 'simple-tabs',
      simpleTabContent: {
        globalMarketDemand: [
          'Corn import from India has been increasing for a few years due to the several health and medicinal benefits of corn. Corn is said to reduce the risk of Anemia and is also helpful during pregnancy. Corn exporter in India export premium quality corn to many nations in the world. Export of Corn is thus a good business opportunity for Indian exporters to enter the international market.',
        ],
        specification: {
          productName: 'Corn/Maize',
          origin: 'Mexico',
          family: 'Poaceae',
          binomialName: 'Zea mays',
        },
        ingredients: {
          nutrients: {
            calories: '177 Calories',
            carbohydrates: '41 grams',
            fiber: '4.6 grams',
          },
          minerals: [
            'Magnesium',
            'Phosphorus',
            'Zinc',
            'Copper',
            'Iron',
            'Thiamin',
            'Selenium',
            'Niacin',
            'Folate',
            'Pantothenic Acid',
          ],
          vitamins: ['Vitamin B6', 'Vitamin E'],
          protein: '5.4 g',
          fats: '2.1gm',
        },
        usesAndBenefits: {
          uses: [
            'Corn is known to be a very effective energy booster. Thus, many experts recommend eating corn after exercising.',
            'Corn also helps to gain weight. It is a much better and healthier food option rather than junk food.',
            'Corn is also said to be an excellent choice for diabetes and cholesterol patients. This is because sweet corn and corn oil increase the blood flow, lower cholesterol absorption and regulate insulin.',
            'Corn is also used to feed livestock.',
          ],
        },
      },
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

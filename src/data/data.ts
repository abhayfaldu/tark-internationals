import { TabContent } from '@/app/data/products'

export enum ProductCategory {
  GrainsAndCereal = 'grains-and-cereal',
  Pulses = 'pulses',
  Spices = 'spices',
  Fruits = 'fruits',
  Vegetables = 'vegetables',
  Oilseeds = 'oilseeds',
  Floriculture = 'floriculture',
  Herbs = 'herbs',
  DryFruits = 'dry-fruits',
  Beverages = 'beverages',
  Dehydrated = 'dehydrated',
}

export enum Products {
  Rye = 'rye',
  Rice = 'rice',
  Chickpeas = 'chickpeas',
  Turmeric = 'turmeric',
  Potato = 'potato',
  Groundnut = 'groundnut',
  Rose = 'rose',
  Neem = 'neem',
  Corn = 'corn',
  Oats = 'oats',
  Millet = 'millet',
  Wheat = 'wheat',
  Barley = 'barley',
  Triticale = 'triticale',
  Fonio = 'fonio',
  Sorghum = 'sorghum',
  Teff = 'teff',
  Pulses = 'pulses',
  Peas = 'peas',
  KidneyBeans = 'kidney-beans',
  SoyaBean = 'soyabean',
  PigeonPea = 'tur',
  BlackEyedBeans = 'black-eyed-beans',
  HorseGram = 'horse-gram',
  PuffedRice = 'puffed-rice',
  MasoorDal = 'red-lentil',
  GreenGram = 'green-gram-moog',
  BlackGram = 'black-gram',
  ChanaDal = 'chana-dal',
  BeatenRice = 'beaten-rice',
  FieldBeans = 'field-bean',
  UradDalSplit = 'urad-gota',
  TurkishGram = 'moth-bean',
  WholeMasoor = 'whole-masoor',
  UradDalGota = 'white-urad-dal',
  Sunflower = 'sunflower',
  Gerbera = 'gerbera',
  Tulip = 'tulip',
  Carnation = 'carnation',
  Chrysanthemum = 'chrysanthemum',
  Orchid = 'orchid',
  Tuberose = 'tuberose',
  Gladiolus = 'gladiolus',
  Anthurium = 'anthurium',
  Hydrangea = 'hydrangea',
  Jasmine = 'jasmine',
  Marigold = 'marigold',
  Aster = 'aster',
  Lilium = 'lilium',
  Crossandra = 'crossandra',
  Ginger = 'ginger',
  StarAnise = 'star-anise',
  Cinnamon = 'cinnamon',
  Asafoetida = 'asafoetida',
  Nutmeg = 'nutmeg',
  Cumin = 'cumin',
  BlackPepper = 'black-pepper',
  Garlic = 'garlic',
  Clove = 'clove',
  MustardSeeds = 'mustard-seeds',
  BayLeaf = 'bay-leaf',
  ChiliPepper = 'chili-pepper',
  Coriander = 'coriander',
  Saffron = 'saffron',
  CaromSeeds = 'carom-seeds',
  Mace = 'mace',
  PoppySeed = 'poppy-seed',
  GreenCardamom = 'green-cardamom',
  Peppercorns = 'peppercorns',
  BrownCardamom = 'brown-cardamom',
  GreenChilliPepper = 'green-chilli-pepper',
  Apple = 'apple',
  Banana = 'banana',
  Mango = 'mango',
  Orange = 'orange',
  Pineapple = 'pineapple',
  Pomegranate = 'pomegranate',
  DragonFruit = 'dragon-fruit',
  Strawberry = 'strawberry',
  Grapes = 'grapes',
  Guava = 'guava',
  Litchi = 'litchi',
  Papaya = 'papaya',
  Sapota = 'sapota',
  Jackfruit = 'jackfruit',
  Watermelon = 'watermelon',
  Pears = 'pears',
  Coconut = 'coconut',
  Ber = 'ber',
  Amla = 'amla',
  Onion = 'onion',
  Mushroom = 'mushroom',
  Broccoli = 'broccoli',
  Spinach = 'spinach',
  Cabbage = 'cabbage',
  Brinjal = 'brinjal',
  Cauliflower = 'cauliflower',
  DrumStick = 'drum-stick',
  LadyFinger = 'lady-finger',
  GreenChilli = 'green-chilli',
  Doodhi = 'doodhi',
  BitterGourd = 'bitter-gourd',
  Cucumber = 'cucumber',
  BellPepper = 'bell-pepper',
  RidgeGourd = 'ridge-gourd',
  Pumpkin = 'pumpkin',
  Lemon = 'lemon',
  SweetPotato = 'sweet-potato',
  Jerusalem = 'jerusalem',
  Radish = 'radish',
  Beetroot = 'beetroot',
  Carrots = 'carrots',
  Taro = 'taro',
  CurryLeaves = 'curry-leaves',
  SpringOnion = 'spring-onion',
  Mint = 'mint',
  Papal = 'papal',
  Methi = 'methi',
  Purslane = 'purslane',
  Yam = 'yam',
  Sesame = 'sesame',
  Flax = 'flax',
  Safflower = 'safflower',
  Meadowfoam = 'meadowfoam',
  Vernonia = 'vernonia',
  Canola = 'canola',
  OilPalm = 'oil-palm',
  PalmOil = 'palm-oil',
  PalmKernel = 'palm-kernel',
  PalmKernelOil = 'palm-kernel-oil',
  DehydratedFruits = 'dehydrated-fruits',
  DehydratedVegetables = 'dehydrated-vegetables',
  Tea = 'tea',
  Coffee = 'coffee',
  Ashwagandha = 'ashwagandha',
  Aloevera = 'aloe-vera',
  Sage = 'sage',
  Fenugreek = 'fenugreek',
  Giloy = 'giloy',
  Tulasi = 'tulasi',
  Carom = 'carom',
  Spearmint = 'spearmint',
  KhusVetiver = 'khus-vetiver',
  Cashew = 'cashew',
  Walnut = 'walnut',
  Almonds = 'almonds',
  Apricot = 'apricot',
  BetelNut = 'betel-nut',
  Dates = 'dates',
  DryFig = 'dry-fig',
  Hazelnut = 'hazelnut',
  Pistachio = 'pistachio',
  Raisens = 'raisens',
}

export const whyChooseUs = [
  {
    id: '01',
    title: 'Get Buyers for Your Food Products',
    description:
      'No matter the type of food or spice you plan on exporting, we will ensure that you get genuine buyers for your products who meet your expectations.',
  },
  {
    id: '02',
    title: 'Best quality food trading services',
    description:
      'Our stringent policies make sure that food handling and trading is in accordance with international quality standards.',
  },
  {
    id: '03',
    title: 'Global Presence',
    description:
      "Even if you are planning to export across multiple continents, we've got you covered. Our global presence will allow your products to be exported to various countries.",
  },
  {
    id: '04',
    title: 'Market Analysis & Up-to-date Market Information',
    description:
      'Our thorough and regular analysis and research let us update our database with up to date information on the market and allows us to stay on top of every update.',
  },
  {
    id: '05',
    title: 'Reliable & Trusted Services',
    description:
      'Trust is a pillar of our services. Our transparent and reliable operations ensure that you feel at ease with our services.',
  },
  {
    id: '06',
    title: 'Save your time & cost for searching markets',
    description:
      'Understanding and researching the market by yourself can be expensive and time-consuming. But with Tark Internations, we will do that for you instead.',
  },
]

export const productRange = [
  {
    title: 'Grains And Cereal',
    image: `/assets/product-range/${ProductCategory.GrainsAndCereal}.jpg`,
    category: ProductCategory.GrainsAndCereal,
    slug: 'rice',
  },
  {
    title: 'Pulses',
    image: `/assets/product-range/${ProductCategory.Pulses}.jpg`,
    category: ProductCategory.Pulses,
    slug: 'chickpeas',
  },
  {
    title: 'Spices',
    image: `/assets/product-range/${ProductCategory.Spices}.jpg`,
    category: ProductCategory.Spices,
    slug: 'turmeric',
  },
  {
    title: 'Fruits',
    image: `/assets/product-range/${ProductCategory.Fruits}.jpg`,
    category: ProductCategory.Fruits,
    slug: 'mango',
  },
  {
    title: 'Vegetables',
    image: `/assets/product-range/${ProductCategory.Vegetables}.jpg`,
    category: ProductCategory.Vegetables,
    slug: 'potato',
  },
  {
    title: 'Oilseeds',
    image: `/assets/product-range/${ProductCategory.Oilseeds}.jpg`,
    category: ProductCategory.Oilseeds,
    slug: 'groundnut',
  },
  {
    title: 'Floriculture',
    image: `/assets/product-range/${ProductCategory.Floriculture}.jpg`,
    category: ProductCategory.Floriculture,
    slug: 'rose',
  },
  {
    title: 'Herbs',
    image: `/assets/product-range/${ProductCategory.Herbs}.jpg`,
    category: ProductCategory.Herbs,
    slug: 'neem',
  },
]

// Add this testimonial data
export const testimonial = {
  logo: '/assets/clients/CYDA_Logo.png',
  title: 'A Great Big Thank you',
  content: [
    'Let we take the opportunity to convey our "A Great Big Thank you" for swiftly supplying us with prompt and efficient delivery of the kits at the time of crisis.',
    'We really admire the dedication and your teamwork in making us get our order in time. We shall highly recommend Your Esteemed organization to our prospects and will surely look forward to developing good relations.',
    "Thanks once again for the entire team to make this a 'Success'.",
  ],
  organization: 'Centre For Youth Development & Activities (CYDA), Pune',
  rating: 5,
}

// Add this data near your other constants
export const indianMarketBenefits = [
  {
    title: 'AGRICULTURE BASE',
    description:
      "With over 50 per cent of India's workforce involved in the agriculture sector, the country is one of the leading agriculture exporters.",
  },
  {
    title: 'AFFORDABLE RATES',
    description:
      'Cheap labour and raw materials allow India to produce spices, oils, and other food products at great affordable rates.',
  },
  {
    title: 'BEST QUALITY FOOD PRODUCTS',
    description:
      'Any food product manufactured in India goes through quality assurance tests and certifications to ensure that they are of high quality.',
  },
  {
    title: 'VARIETY OF SPICES AND TASTES',
    description:
      'Being known as the land of spices, the country is the leading producer of spices. The country boasts of a huge variety of spices providing a great range of flavour.',
  },
  {
    title: 'DIVERSITY OF INDIA AND INDIAN CULTURE',
    description:
      'The diverse Indian cultures are the reason behind the diversified food products available. With each region of the country possessing its own blend and flavour, no country does this better.',
  },
  {
    title: 'TECHNOLOGY AND INNOVATION',
    description:
      "In a land blessed with great scientific minds, India's technological advancements and innovation have made international trade all the easier, making it the perfect choice.",
  },
]

// Add this clients data near your other constants
export const clients = [
  {
    name: 'Box8',
    logo: '/assets/clients/BOX 8.jpg',
  },
  {
    name: 'CII Foundation',
    logo: '/assets/clients/cii-foundation.png',
  },
  {
    name: 'CYDA',
    logo: '/assets/clients/CYDA_Logo.png',
  },
]

export interface NutritionFacts {
  nutrients: Ingredient[]
  protein: Ingredient[]
  vitamins: Ingredient[]
  minerals: Ingredient[]
  fat: Ingredient[]
}

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

export interface Product {
  slug: string
  name: string
  img: string
  data?: ProductData
}

export interface ProductCategoryData {
  headerImg: string
  headerText: string
  descTitle: string
  descText: string[]
  products: Product[]
}

export const productCategoriesData: Record<
  ProductCategory,
  ProductCategoryData
> = {
  [ProductCategory.GrainsAndCereal]: {
    headerImg: `/assets/product/${ProductCategory.GrainsAndCereal}/header.jpg`,
    headerText: 'Grains and Cereal',
    descTitle: 'Indian Grains & Cereal Exporters',
    descText: [
      'India is one of the most important players in the global market today. Being one of the major agricultural exporters in the world, grain and cereal export from India has been growing rapidly. Tark Internationals is one of the most reliable grains importers from India. We work on the export of grains and cereal, fruits, vegetables, pulses, spices, and such other food products from India. Being one of the leading cereal exporters in India, we have been accredited to TPCI, APEDA, and such other certifications.',
      'Known to be the best grains and cereal exporter in India, we at Tark Internationals make sure that premium quality grains and cereal in India are exported abroad. When we work on the export of Indian grains, we make sure that all the health and safety regulations are followed. With extensive experience in the Food export industry and export of Indian grains, we make sure that we can get the best buyers for grains exporter from India. If you are looking for cereal import from India, Tark Internationals is the best choice for you!',
    ],
    products: [
      {
        slug: Products.Rye,
        name: 'Rye',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Rye}.jpg`,
        data: {
          title: 'Indian Rye Exporter',
          headerImage: `/assets/banners/${Products.Rye}.jpg`,
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
        },
      },
      {
        slug: Products.Corn,
        name: 'Corn / Maize',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Corn}.jpg`,
      },
      {
        slug: Products.Oats,
        name: 'Oats',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Oats}.jpg`,
      },
      {
        slug: Products.Millet,
        name: 'Millet / Bajra',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Millet}.jpg`,
      },
      {
        slug: Products.Rice,
        name: 'Rice',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Rice}.jpg`,
      },
      {
        slug: Products.Wheat,
        name: 'Wheat',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Wheat}.jpg`,
      },
      {
        slug: Products.Barley,
        name: 'Barley',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Barley}.jpg`,
      },
      {
        slug: Products.Triticale,
        name: 'Triticale',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Triticale}.jpg`,
      },
      {
        slug: Products.Fonio,
        name: 'Fonio',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Fonio}.jpg`,
      },
      {
        slug: Products.Sorghum,
        name: 'Sorghum / Jawari',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Sorghum}.jpg`,
      },
      {
        slug: Products.Teff,
        name: 'Teff',
        img: `/assets/product/${ProductCategory.GrainsAndCereal}/${Products.Teff}.jpg`,
      },
    ],
  },
  [ProductCategory.Pulses]: {
    headerImg: `/assets/product/${ProductCategory.Pulses}/${Products.Pulses}.jpg`,
    headerText: 'Pulses',
    descTitle: 'Indian Pulses Exporters',
    descText: [
      'India today is a major exporter of various food and agricultural products. Among these, we have seen exponential growth in the pulses export from India in the past few years. The export of Pulses from India was around 2.70 lakh tonnes which are worth Rs. 1679.98 crores in the year 2018-2019. Tark Internationals is one of the most recommended Pulses importers from India. We import various varieties of Pulses including chickpeas, peas, kidney beans, soybeans so on, and so forth.',
      'Being one of the largest Pulses exporters in India, Tark Internationals makes sure that the products reach the destinations fresh and on the promised time. We have connections across the globe and provide hassle-free export of Indian pulses. We are a pulses exporter who believes in transparency of services and is always happy to help with any issues our clients may have. We wish to spread Pulses in India and other Indian products to every corner of the world through our services. If you want to Pulses import from India, Tark Internationals is the place for you!',
    ],
    products: [
      {
        slug: Products.Chickpeas,
        name: 'Chickpeas / Garbanzo Beans',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.Chickpeas}.jpg`,
      },
      {
        slug: Products.Peas,
        name: 'Peas',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.Peas}.jpg`,
      },
      {
        slug: Products.KidneyBeans,
        name: 'Kidney Beans',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.KidneyBeans}.jpg`,
      },
      {
        slug: Products.SoyaBean,
        name: 'Soya Bean',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.SoyaBean}.jpg`,
      },
      {
        slug: Products.PigeonPea,
        name: 'Pigeon Pea/Arhar/Tur',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.PigeonPea}.jpg`,
      },
      {
        slug: Products.BlackEyedBeans,
        name: 'Black-Eyed Beans / Cowpea',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.BlackEyedBeans}.jpg`,
      },
      {
        slug: Products.HorseGram,
        name: 'Horse Gram',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.HorseGram}.jpg`,
      },
      {
        slug: Products.PuffedRice,
        name: 'Puffed Rice',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.PuffedRice}.jpg`,
      },
      {
        slug: Products.MasoorDal,
        name: 'Masoor Dal / Red Lentil',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.MasoorDal}.jpg`,
      },
      {
        slug: Products.GreenGram,
        name: 'Green Gram / Mung Bean',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.GreenGram}.jpg`,
      },
      {
        slug: Products.BlackGram,
        name: 'Black Gram',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.BlackGram}.jpg`,
      },
      {
        slug: Products.ChanaDal,
        name: 'Chana Dal',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.ChanaDal}.jpg`,
      },
      {
        slug: Products.BeatenRice,
        name: 'Beaten Rice',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.BeatenRice}.jpg`,
      },
      {
        slug: Products.FieldBeans,
        name: 'Field Beans',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.FieldBeans}.jpg`,
      },
      {
        slug: Products.UradDalSplit,
        name: 'Urad Dal Split',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.UradDalSplit}.jpg`,
      },
      {
        slug: Products.TurkishGram,
        name: 'Turkish Gram / Moth Bean',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.TurkishGram}.jpg`,
      },
      {
        slug: Products.WholeMasoor,
        name: 'Whole Masoor',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.WholeMasoor}.jpg`,
      },
      {
        slug: Products.UradDalGota,
        name: 'Urad Dal Gota',
        img: `/assets/product/${ProductCategory.Pulses}/${Products.UradDalGota}.jpg`,
      },
    ],
  },
  [ProductCategory.Spices]: {
    headerImg: `/assets/product/${ProductCategory.Spices}/header.jpg`,
    headerText: 'Spices',
    descTitle: 'Indian Spices Exporter',
    descText: [
      'Spices are one of the most important ingredients in Indian dishes. Indian Spices have been popular across the world for their unique flavor, aroma, and beautiful texture. Thus, the export of spices from India has increased substantially. We, at Tark Internationals, believe that Indian culture and our unique spices in India have been the best corner of the world. Tark Internationals is one of the leading export companies for the export of Indian spices. We, being whole spice exporters, export numerous spices including turmeric, ginger, star anise, Cinnamon, Asafoetida, Nutmeg, cumin, black pepper, and many more.',
      'Tark Internationals, one of the most recommended spices exporters in India, has a strong experience in the food industry, and we can get the best buyers for your products. Being one of the relevant exporters of Indian spices, we have connections across the globe. Through us, you can export Indian spices to any corner of the world. We believe that good quality products are the key to success in the international market. Our team of experts located in the heart of India, we have trained executives who analyze the market so that we can give you the latest information available. If you are looking for spice exporters in India, we are here to serve you!',
    ],
    products: [
      {
        slug: Products.Turmeric,
        name: 'Turmeric',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Turmeric}.jpg`,
      },
      {
        slug: Products.Ginger,
        name: 'Ginger',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Ginger}.jpg`,
      },
      {
        slug: Products.StarAnise,
        name: 'Star Anise',
        img: `/assets/product/${ProductCategory.Spices}/${Products.StarAnise}.jpg`,
      },
      {
        slug: Products.Cinnamon,
        name: 'Cinnamon',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Cinnamon}.jpg`,
      },
      {
        slug: Products.Asafoetida,
        name: 'Asafoetida',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Asafoetida}.jpg`,
      },
      {
        slug: Products.Nutmeg,
        name: 'Nutmeg',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Nutmeg}.jpg`,
      },
      {
        slug: Products.Cumin,
        name: 'Cumin',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Cumin}.jpg`,
      },
      {
        slug: Products.BlackPepper,
        name: 'Black Pepper',
        img: `/assets/product/${ProductCategory.Spices}/${Products.BlackPepper}.jpg`,
      },
      {
        slug: Products.Garlic,
        name: 'Garlic',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Garlic}.jpg`,
      },
      {
        slug: Products.Clove,
        name: 'Clove',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Clove}.jpg`,
      },
      {
        slug: Products.MustardSeeds,
        name: 'Mustard Seeds',
        img: `/assets/product/${ProductCategory.Spices}/${Products.MustardSeeds}.jpg`,
      },
      {
        slug: Products.BayLeaf,
        name: 'Bay-Leaf',
        img: `/assets/product/${ProductCategory.Spices}/${Products.BayLeaf}.jpg`,
      },
      {
        slug: Products.ChiliPepper,
        name: 'Chili-Pepper',
        img: `/assets/product/${ProductCategory.Spices}/${Products.ChiliPepper}.jpg`,
      },
      {
        slug: Products.Coriander,
        name: 'Coriander',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Coriander}.jpg`,
      },
      {
        slug: Products.Saffron,
        name: 'Saffron',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Saffron}.jpg`,
      },
      {
        slug: Products.CaromSeeds,
        name: 'Carom Seeds / Thyme',
        img: `/assets/product/${ProductCategory.Spices}/${Products.CaromSeeds}.jpg`,
      },
      {
        slug: Products.Mace,
        name: 'Mace',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Mace}.jpg`,
      },
      {
        slug: Products.PoppySeed,
        name: 'Poppy Seed',
        img: `/assets/product/${ProductCategory.Spices}/${Products.PoppySeed}.jpg`,
      },
      {
        slug: Products.GreenCardamom,
        name: 'Green Cardamom',
        img: `/assets/product/${ProductCategory.Spices}/${Products.GreenCardamom}.jpg`,
      },
      {
        slug: Products.Peppercorns,
        name: 'Peppercorns',
        img: `/assets/product/${ProductCategory.Spices}/${Products.Peppercorns}.jpg`,
      },
      {
        slug: Products.BrownCardamom,
        name: 'Brown Cardamom',
        img: `/assets/product/${ProductCategory.Spices}/${Products.BrownCardamom}.jpg`,
      },
      {
        slug: Products.GreenChilliPepper,
        name: 'Green Chilli Pepper',
        img: `/assets/product/${ProductCategory.Spices}/${Products.GreenChilliPepper}.jpg`,
      },
    ],
  },
  [ProductCategory.Fruits]: {
    headerImg: `/assets/product/${ProductCategory.Fruits}/header.jpg`,
    headerText: 'Fruits',
    descTitle: 'Indian Fruits Exporters',
    descText: [
      'India is popularly known as "the fruits basket of the world". In India, we have been blessed with favorable climatic and soil conditions which help the growth of not only fruits in India, but also vegetables, grains, pulses, and such other crops. Most of the fruits are grown in India including mangoes, bananas, papayas, oranges, apricots, grapes, strawberries, apples, guavas, litchis, so on, and so forth. Therefore, fruits export from India has been on the rise for a few decades. The export of fruits from India was around 372213.73 Metric tonnes in the year 2018-2019.',
      'There are numerous fruits importer from India including countries like Bangladesh, Nepal, Oman, Saudi Arabia, UAE, and many more. Tark Internationals us one of the leading fruits exporters in India. We conduct export of Indian fruits to various parts of the world. Being one of the most experienced fruits exporters, our motto is to spread the Indian food products and the Indian culture to every corner of the world. We at Tark Internationals make sure that your food products reach the buyer well packaged and on the promised time. If you are looking for fruits import from India, Tark Internationals can help you at every step on the way!',
    ],
    products: [
      {
        slug: Products.Apple,
        name: 'Apple',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Apple}.jpg`,
      },
      {
        slug: Products.Banana,
        name: 'Banana',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Banana}.jpg`,
      },
      {
        slug: Products.Mango,
        name: 'Mango',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Mango}.jpg`,
      },
      {
        slug: Products.Orange,
        name: 'Orange',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Orange}.jpg`,
      },
      {
        slug: Products.Pineapple,
        name: 'Pineapple',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Pineapple}.jpg`,
      },
      {
        slug: Products.Pomegranate,
        name: 'Pomegranate',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Pomegranate}.jpg`,
      },
      {
        slug: Products.DragonFruit,
        name: 'Dragon Fruit',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.DragonFruit}.jpg`,
      },
      {
        slug: Products.Strawberry,
        name: 'Strawberry',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Strawberry}.jpg`,
      },
      {
        slug: Products.Grapes,
        name: 'Grapes',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Grapes}.jpg`,
      },
      {
        slug: Products.Guava,
        name: 'Guava',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Guava}.jpg`,
      },
      {
        slug: Products.Litchi,
        name: 'Litchi',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Litchi}.jpg`,
      },
      {
        slug: Products.Papaya,
        name: 'Papaya',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Papaya}.jpg`,
      },
      {
        slug: Products.Sapota,
        name: 'Sapota',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Sapota}.jpg`,
      },
      {
        slug: Products.Jackfruit,
        name: 'Jackfruit',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Jackfruit}.jpg`,
      },
      {
        slug: Products.Watermelon,
        name: 'Watermelon',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Watermelon}.jpg`,
      },
      {
        slug: Products.Pears,
        name: 'Pears',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Pears}.jpg`,
      },
      {
        slug: Products.Coconut,
        name: 'Coconut',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Coconut}.jpg`,
      },
      {
        slug: Products.Ber,
        name: 'Ber',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Ber}.jpg`,
      },
      {
        slug: Products.Amla,
        name: 'Amla',
        img: `/assets/product/${ProductCategory.Fruits}/${Products.Amla}.jpg`,
      },
    ],
  },
  [ProductCategory.Vegetables]: {
    headerImg: `/assets/product/${ProductCategory.Vegetables}/header.jpg`,
    headerText: 'Vegetables',
    descTitle: 'Indian Vegetables Exporters',
    descText: [
      'Fruits, vegetables, spices, grains, pulses, and such other crops thrive in India. Due to the large amounts of vegetables produced in India, we can vegetable export from India too. Many vegetables are included in the export of vegetables from India like Onion, Broccoli, Brinjal, Spinach, Cabbage, Green chilis so on, and so forth. Tark Internationals is a leading vegetable importer from India today. We work on the export of Indian vegetables.',
      'At Tark Internationals, we believe that the customer is our king. We, therefore, assist our clients in each step on the way while exporting vegetables in India. Being one of the best vegetable exporters in India, we strictly follow all the health and safety measures of the Government of India. Tark Internationals is the largest and most reliable vegetable exporter in India. Our processes are completely transparent and we make sure that the desired products reach their destination safe, fresh, and on time. If you are looking for vegetable import from India, Tark Internationals is the best choice!',
    ],
    products: [
      {
        slug: Products.Onion,
        name: 'Onion',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Onion}.jpg`,
      },
      {
        slug: Products.Mushroom,
        name: 'Mushroom',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Mushroom}.jpg`,
      },
      {
        slug: Products.Broccoli,
        name: 'Broccoli',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Broccoli}.jpg`,
      },
      {
        slug: Products.Potato,
        name: 'Potato',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Potato}.jpg`,
      },
      {
        slug: Products.Spinach,
        name: 'Spinach / Palak',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Spinach}.jpg`,
      },
      {
        slug: Products.Cabbage,
        name: 'Cabbage',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Cabbage}.jpg`,
      },
      {
        slug: Products.Brinjal,
        name: 'Brinjal',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Brinjal}.jpg`,
      },
      {
        slug: Products.Cauliflower,
        name: 'Cauliflower',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Cauliflower}.jpg`,
      },
      {
        slug: Products.DrumStick,
        name: 'Drum Stick',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.DrumStick}.jpg`,
      },
      {
        slug: Products.LadyFinger,
        name: 'Lady Finger',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.LadyFinger}.jpg`,
      },
      {
        slug: Products.GreenChilli,
        name: 'Green Chilli',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.GreenChilli}.jpg`,
      },
      {
        slug: Products.Doodhi,
        name: 'Doodhi / Bottle Gourd / Lauki',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Doodhi}.jpg`,
      },
      {
        slug: Products.BitterGourd,
        name: 'Bitter Gourd',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.BitterGourd}.jpg`,
      },
      {
        slug: Products.Cucumber,
        name: 'Cucumber',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Cucumber}.jpg`,
      },
      {
        slug: Products.BellPepper,
        name: 'Bell Pepper',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.BellPepper}.jpg`,
      },
      {
        slug: Products.RidgeGourd,
        name: 'Ridge Gourd / Ghosali',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.RidgeGourd}.jpg`,
      },
      {
        slug: Products.Pumpkin,
        name: 'Pumpkin',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Pumpkin}.jpg`,
      },
      {
        slug: Products.Lemon,
        name: 'Lemon',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Lemon}.jpg`,
      },
      {
        slug: Products.SweetPotato,
        name: 'Sweet Potato',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.SweetPotato}.jpg`,
      },
      {
        slug: Products.Jerusalem,
        name: 'Jerusalem',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Jerusalem}.jpg`,
      },
      {
        slug: Products.Radish,
        name: 'Radish',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Radish}.jpg`,
      },
      {
        slug: Products.Beetroot,
        name: 'Beetroot',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Beetroot}.jpg`,
      },
      {
        slug: Products.Carrots,
        name: 'Carrots',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Carrots}.jpg`,
      },
      {
        slug: Products.Taro,
        name: 'Taro',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Taro}.jpg`,
      },
      {
        slug: Products.CurryLeaves,
        name: 'Curry Leaves',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.CurryLeaves}.jpg`,
      },
      {
        slug: Products.Coriander,
        name: 'Coriander',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Coriander}.jpg`,
      },
      {
        slug: Products.SpringOnion,
        name: 'Spring Onion',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.SpringOnion}.jpg`,
      },
      {
        slug: Products.Mint,
        name: 'Mint',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Mint}.jpg`,
      },
      {
        slug: Products.Papal,
        name: 'Papal / Hyacinth Bean',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Papal}.jpg`,
      },
      {
        slug: Products.Methi,
        name: 'Methi / Fenugreek',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Methi}.jpg`,
      },
      {
        slug: Products.Purslane,
        name: 'Common Purslane / Paruppu Keerai',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Purslane}.jpg`,
      },
      {
        slug: Products.Yam,
        name: 'Elephant Yam / Suran',
        img: `/assets/product/${ProductCategory.Vegetables}/${Products.Yam}.jpg`,
      },
    ],
  },
  [ProductCategory.Oilseeds]: {
    headerImg: `/assets/product/${ProductCategory.Oilseeds}/header.jpg`,
    headerText: 'Oilseeds',
    descTitle: 'Indian Oilseeds Exporters',
    descText: [
      'Oilseeds are basically crops which are specially grown to extract oil from its seeds. The major oilseeds in India include soybean, sunflower, Brassica, canola, coconut, oil palm, rapeseed, peanuts, rice, and cotton. Oilseeds export from India is one of the major export areas today. India is known to be one of the largest oilseeds exporters with a large share of export of groundnuts and sesame seeds. Tark Internationals is one of the leading oil seeds importers from India. We are known across the world for the export of oilseeds and such other premium quality food products.',
      'Being one of the most experienced oilseeds exporters in India, we help our clients at every step on the way. From getting clients for your products until your products reach the buyer, Tark Internationals will assist you with everything. We make sure that the export of Indian oilseeds is conducted and completed in an organized manner. If you are looking for oil seeds import from India, we at Tark Internationals are here to assist you!',
    ],
    products: [
      {
        slug: Products.Sunflower,
        name: 'Sunflowers',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.Sunflower}.jpg`,
      },
      {
        slug: Products.SoyaBean,
        name: 'Soybeans',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.SoyaBean}.jpg`,
      },
      {
        slug: Products.Sesame,
        name: 'Sesame',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.Sesame}.jpg`,
      },
      {
        slug: Products.Flax,
        name: 'Flax',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.Flax}.jpg`,
      },
      {
        slug: Products.Safflower,
        name: 'Safflower',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.Safflower}.jpg`,
      },
      {
        slug: Products.Groundnut,
        name: 'Groundnut',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.Groundnut}.jpg`,
        data: {
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
        },
      },
      {
        slug: Products.Meadowfoam,
        name: 'Meadowfoam',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.Meadowfoam}.jpg`,
      },
      {
        slug: Products.Vernonia,
        name: 'Vernonia',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.Vernonia}.jpg`,
      },
      {
        slug: Products.Canola,
        name: 'Spring Canola',
        img: `/assets/product/${ProductCategory.Oilseeds}/${Products.Canola}.jpg`,
      },
    ],
  },
  [ProductCategory.Floriculture]: {
    headerImg: `/assets/product/${ProductCategory.Floriculture}/header.jpg`,
    headerText: 'Floriculture',
    descTitle: 'Indian Floriculture Exporters',
    descText: [
      'Floriculture in India primarily means the cultivation of flowers or flower farming. Floriculture export from India includes the export of flowers like roses, Gerbera, Tulips, Carnation, Orchid, Jasmine, Marigold, Aster so on, and so forth. Export of floriculture has to be done with the utmost care and in an organized manner as most of these flowers are delicate and have to be handled carefully. Tark Internationals is a leading floriculture importer from India. We export various varieties of flowers to different regions in the world.',
      'Tark Internationals is known for its high-quality products and the health and safety regulations we strictly follow. Known to be one of the most popular floriculture exporters in India, we have been accredited to TPCI, APEDA, and such other certifications. We make sure that the export of Indian Floriculture is done perfectly from the documentation, finding buyers, until the products reach the destination. We at Tark Internationals understand that timely delivery of the products is an important factor for a floriculture exporter. We thus make sure that your delivery reaches in a timely manner. If you are looking for floriculture import from India, Tark Internationals is here to serve you!',
    ],
    products: [
      {
        slug: Products.Rose,
        name: 'Rose',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Rose}.jpg`,
      },
      {
        slug: Products.Gerbera,
        name: 'Gerbera',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Gerbera}.jpg`,
      },
      {
        slug: Products.Tulip,
        name: 'Tulip',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Tulip}.jpg`,
      },
      {
        slug: Products.Carnation,
        name: 'Carnation',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Carnation}.jpg`,
      },
      {
        slug: Products.Chrysanthemum,
        name: 'Chrysanthemum',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Chrysanthemum}.jpg`,
      },
      {
        slug: Products.Orchid,
        name: 'Orchid',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Orchid}.jpg`,
      },
      {
        slug: Products.Tuberose,
        name: 'Tuberose',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Tuberose}.jpg`,
      },
      {
        slug: Products.Gladiolus,
        name: 'Gladiolus',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Gladiolus}.jpg`,
      },
      {
        slug: Products.Anthurium,
        name: 'Anthurium',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Anthurium}.jpg`,
      },
      {
        slug: Products.Hydrangea,
        name: 'Hydrangea',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Hydrangea}.jpg`,
      },
      {
        slug: Products.Jasmine,
        name: 'Jasmine',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Jasmine}.jpg`,
      },
      {
        slug: Products.Marigold,
        name: 'Marigold',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Marigold}.jpg`,
      },
      {
        slug: Products.Aster,
        name: 'Aster',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Aster}.jpg`,
      },
      {
        slug: Products.Lilium,
        name: 'Lilium',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Lilium}.jpg`,
      },
      {
        slug: Products.Crossandra,
        name: 'Crossandra',
        img: `/assets/product/${ProductCategory.Floriculture}/${Products.Crossandra}.jpg`,
      },
    ],
  },
  [ProductCategory.Herbs]: {
    headerImg: `/assets/product/${ProductCategory.Herbs}/header.jpg`,
    headerText: 'Herbs',
    descTitle: 'Indian Herbs Exporters',
    descText: [
      'Herbs are generally plants with savory or aromatic properties that are used for flavoring food, garnishing dishes, or even medicinal purposes. Herbs in India include Neem, Ashwagandha, Sage, Aloe Vera, Fenugreek, Curry leaves, and so on and so forth. These herbs are also included in the export of herbs business. Tark Internationals is one of the leading herbs importers from India. Our aim at Tark Internationals is to spread the Indian food products and the Indian culture across the world.',
      'We have extensive experience in the field of export of Indian herbs, spices, pulses, grains, fruits, vegetables, and such other products. Being one of the most recognized herbs exporters in India, we see to it that our clients face no issues during herbs export from India. We help our clients to find buyers for their products in the international market and conduct an in-depth analysis of the market so that the clients are well informed. Herbs import from India is a rapidly growing sector of the export market today. If you are looking for an herbs exporter in India, Tark Internationals are here to help you!',
    ],
    products: [
      {
        slug: Products.Neem,
        name: 'Neem',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Neem}.jpg`,
      },
      {
        slug: Products.Ashwagandha,
        name: 'Ashwagandha',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Ashwagandha}.jpg`,
      },
      {
        slug: Products.Aloevera,
        name: 'Aloe Vera',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Aloevera}.jpg`,
      },
      {
        slug: Products.Sage,
        name: 'Sage',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Sage}.jpg`,
      },
      {
        slug: Products.Fenugreek,
        name: 'Fenugreek',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Fenugreek}.jpg`,
      },
      {
        slug: Products.Giloy,
        name: 'Giloy',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Giloy}.jpg`,
      },
      {
        slug: Products.CurryLeaves,
        name: 'Curry Leaves',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.CurryLeaves}.jpg`,
      },
      {
        slug: Products.Tulasi,
        name: 'Tulasi',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Tulasi}.jpg`,
      },
      {
        slug: Products.Carom,
        name: 'Carom',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Carom}.jpg`,
      },
      {
        slug: Products.Spearmint,
        name: 'Spearmint',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.Spearmint}.jpg`,
      },
      {
        slug: Products.KhusVetiver,
        name: 'Khus',
        img: `/assets/product/${ProductCategory.Herbs}/${Products.KhusVetiver}.jpg`,
      },
    ],
  },
  [ProductCategory.DryFruits]: {
    headerImg: `/assets/product/${ProductCategory.DryFruits}/header.jpg`,
    headerText: 'Dry Fruits',
    descTitle: 'Indian Dry Fruits Exporters',
    descText: [
      'Dry fruits in India are basically fruits whose water content has been removed almost completely either naturally or by processes like sun drying or specialized dehydrators or dryers. Dry fruits can be eaten in various forms and are known to be powerhouses of nutrients. Dry fruits export from India includes the export of dates, raisins, almonds, cashew, apricot, and so on and so forth. Tark Internationals is one of the best dry fruits importers from India. We work on the export of dry fruits from India to many countries in the world.',
      'We at Tark Internationals hold an extensive experience in the export of Indian dry fruits. As one of the leading dry fruits exporter in India, we make sure that our clients face no issues from documentation to the final delivery of the products. By conducting an in-depth analysis of the international market, we keep our clients well informed about the latest developments and how it may affect their exports. Tark Internationals is one of the most reliable dry fruits exporters and also helps you to find buyers for your products globally. If you are looking for dry fruits import from India, Tark Internationals is here to help you at every step!',
    ],
    products: [
      {
        slug: Products.Cashew,
        name: 'Cashew',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.Cashew}.jpg`,
      },
      {
        slug: Products.Walnut,
        name: 'Walnut',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.Walnut}.jpg`,
      },
      {
        slug: Products.Almonds,
        name: 'Almonds',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.Almonds}.jpg`,
      },
      {
        slug: Products.Apricot,
        name: 'Apricot',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.Apricot}.jpg`,
      },
      {
        slug: Products.BetelNut,
        name: 'Betel-Nut',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.BetelNut}.jpg`,
      },
      {
        slug: Products.Dates,
        name: 'Dates',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.Dates}.jpg`,
      },
      {
        slug: Products.DryFig,
        name: 'Dry-Fig',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.DryFig}.jpg`,
      },
      {
        slug: Products.Hazelnut,
        name: 'Hazelnut',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.Hazelnut}.jpg`,
      },
      {
        slug: Products.Pistachio,
        name: 'Pistachio',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.Pistachio}.jpg`,
      },
      {
        slug: Products.Raisens,
        name: 'Raisens',
        img: `/assets/product/${ProductCategory.DryFruits}/${Products.Raisens}.jpg`,
      },
    ],
  },
  [ProductCategory.Beverages]: {
    headerImg: `/assets/product/${ProductCategory.Beverages}/header.jpg`,
    headerText: 'Beverages',
    descTitle: 'Indian Beverages Exporters',
    descText: [
      'India is known for its two most popular beverages across the world, Tea and Coffee. There are also some other beverages in India that are famous worldwide including Lassi, Sholkadi, Buttermilk so on, and so forth. Beverage export from India is now a growing component of the food export industry from India. Tark Internationals is one of the best beverage importers from India. Export of beverages like tea and coffee and their various types can be done through us.',
      'Being a well-experienced beverage exporter in India, Tark Internationals is well equipped to help you at every stage of the process. Export of Beverages includes documentation, finding buyers, quality tests, and such other processes. Our trained executives at Tark Internationals will assist you with each of these processes involved in the export of Indian beverages. Through our high-quality products, high level of hygiene, and safety we meet international food safety and quality standards. Therefore, Tark Internationals is known to be one of the most reliable beverage exporters. If you are in search of beverages import from India, Tark Internationals is here to serve you!',
    ],
    products: [
      {
        slug: Products.Tea,
        name: 'Tea',
        img: `/assets/product/${ProductCategory.Beverages}/${Products.Tea}.jpg`,
      },
      {
        slug: Products.Coffee,
        name: 'Coffee',
        img: `/assets/product/${ProductCategory.Beverages}/${Products.Coffee}.jpg`,
      },
    ],
  },
  [ProductCategory.Dehydrated]: {
    headerImg: `/assets/product/${ProductCategory.Dehydrated}/header.jpg`,
    headerText: 'Dehydrated Food Products',
    descTitle: 'Dehydrated Food Products Exporters',
    descText: [
      'The dehydrated products market from India has been growing rapidly. Dehydration is basically the removal of water. Thus, dehydrated products are the products from which moisture content has been removed. The dehydrated products exporters from India export huge quantities of these products abroad each year. The export of dehydrated products includes the export of various products. Dehydrated vegetables are an essential component of the dehydrated products exported from India. Along with veggies, dehydrated fruits are also in great demand globally. Dehydrated dry fruits are widely used in desserts, cereal and such other products. The export of such products is a great opportunity for dehydrated food products exporters to earn good revenues.',
    ],
    products: [
      {
        slug: Products.DehydratedFruits,
        name: 'Dehydrated Fruits',
        img: `/assets/product/${ProductCategory.Dehydrated}/${Products.DehydratedFruits}.jpg`,
      },
      {
        slug: Products.DehydratedVegetables,
        name: 'Dehydrated Vegetables',
        img: `/assets/product/${ProductCategory.Dehydrated}/${Products.DehydratedVegetables}.jpg`,
      },
    ],
  },
}

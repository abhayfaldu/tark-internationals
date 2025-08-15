import type { ProductCategoryData } from '@/types/product'

export enum ProductCategory {
  GRAINS_AND_CEREAL = 'grains-and-cereal',
  PULSES = 'pulses',
  SPICES = 'spices',
  FRUITS = 'fruits',
  VEGETABLES = 'vegetables',
  OILSEEDS = 'oilseeds',
  FLORICULTURE = 'floriculture',
  HERBS = 'herbs',
  DRY_FRUITS = 'dry-fruits',
  BEVERAGES = 'beverages',
  DEHYDRATED = 'dehydrated',
}

export enum Products {
  RYE = 'rye',
  RICE = 'rice',
  CHICKPEAS = 'chickpeas',
  TURMERIC = 'turmeric',
  POTATO = 'potato',
  GROUNDNUT = 'groundnut',
  ROSE = 'rose',
  NEEM = 'neem',
  CORN = 'corn',
  OATS = 'oats',
  MILLET = 'millet',
  WHEAT = 'wheat',
  BARLEY = 'barley',
  TRITICALE = 'triticale',
  FONIO = 'fonio',
  SORGHUM = 'sorghum',
  TEFF = 'teff',
  PULSES = 'pulses',
  PEAS = 'peas',
  KIDNEY_BEANS = 'kidney-beans',
  SOYABEAN = 'soyabean',
  PIGEONPEA = 'tur',
  BLACK_EYED_BEANS = 'black-eyed-beans',
  HORSE_GRAM = 'horse-gram',
  PUFFED_RICE = 'puffed-rice',
  RED_LENTIL = 'red-lentil',
  GREEN_GRAM_MOONG = 'green-gram-moong',
  BLACK_GRAM = 'black-gram',
  CHANA_DAL = 'chana-dal',
  BEATEN_RICE = 'beaten-rice',
  FIELD_BEAN = 'field-bean',
  URAD_DAL_SPLIT = 'urad-dal-split',
  MOTH_BEAN = 'moth-bean',
  WHOLE_MASOOR = 'whole-masoor',
  WHITE_URAD_DAL = 'white-urad-dal',
  SUN_FLOWER = 'sunflower',
  GERBERA = 'gerbera',
  TULIP = 'tulip',
  CARNATION = 'carnation',
  CHRYSANTHEMUM = 'chrysanthemum',
  ORCHID = 'orchid',
  TUBEROSE = 'tuberose',
  GLADIOLUS = 'gladiolus',
  ANTHURIUM = 'anthurium',
  HYDRANGEA = 'hydrangea',
  JASMINE = 'jasmine',
  MARIGOLD = 'marigold',
  ASTER = 'aster',
  LILIUM = 'lilium',
  CROSSANDRA = 'crossandra',
  GINGER = 'ginger',
  STAR_ANISE = 'star-anise',
  CINNAMON = 'cinnamon',
  ASAFOETIDA = 'asafoetida',
  NUTMEG = 'nutmeg',
  CUMIN = 'cumin',
  BLACK_PEPPER = 'black-pepper',
  GARLIC = 'garlic',
  CLOVE = 'clove',
  MUSTARD_SEEDS = 'mustard-seeds',
  BAY_LEAF = 'bay-leaf',
  CHILI_PEPPER = 'chili-pepper',
  CORIANDER = 'coriander',
  SAFFRON = 'saffron',
  CAROM_SEEDS = 'carom-seeds',
  MACE = 'mace',
  POPPY_SEED = 'poppy-seed',
  GREEN_CARDAMOM = 'green-cardamom',
  PEPPERCORNS = 'peppercorns',
  BROWN_CARDAMOM = 'brown-cardamom',
  GREEN_CHILLI_PEPPER = 'green-chilli-pepper',
  APPLE = 'apple',
  BANANA = 'banana',
  MANGO = 'mango',
  ORANGE = 'orange',
  PINEAPPLE = 'pineapple',
  POMEGRANATE = 'pomegranate',
  DRAGON_FRUIT = 'dragon-fruit',
  STRAWBERRY = 'strawberry',
  GRAPES = 'grapes',
  GUAVA = 'guava',
  LITCHI = 'litchi',
  PAPAYA = 'papaya',
  SAPOTA = 'sapota',
  JACKFRUIT = 'jackfruit',
  WATERMELON = 'watermelon',
  PEARS = 'pears',
  COCONUT = 'coconut',
  BER = 'ber',
  AMLA = 'amla',
  ONION = 'onion',
  MUSHROOM = 'mushroom',
  BROCCOLI = 'broccoli',
  SPINACH = 'spinach',
  CABBAGE = 'cabbage',
  BRINJAL = 'brinjal',
  CAULIFLOWER = 'cauliflower',
  DRUM_STICK = 'drum-stick',
  LADY_FINGER = 'lady-finger',
  GREEN_CHILLI = 'green-chilli',
  DOODHI = 'doodhi',
  BITTER_GOURD = 'bitter-gourd',
  CUCUMBER = 'cucumber',
  BELL_PEPPER = 'bell-pepper',
  RIDGE_GOURD = 'ridge-gourd',
  PUMPKIN = 'pumpkin',
  LEMON = 'lemon',
  SWEET_POTATO = 'sweet-potato',
  JERUSALEM = 'jerusalem',
  RADISH = 'radish',
  BEETROOT = 'beetroot',
  CARROTS = 'carrots',
  TARO = 'taro',
  CURRY_LEAVES = 'curry-leaves',
  SPRING_ONION = 'spring-onion',
  MINT = 'mint',
  PAPAL = 'papal',
  METHI = 'methi',
  PURSLANE = 'purslane',
  YAM = 'yam',
  SESAME = 'sesame',
  FLAX = 'flax',
  SAFFLOWER = 'safflower',
  MEADOWFOAM = 'meadowfoam',
  VERNONIA = 'vernonia',
  CANOLA = 'canola',
  OIL_PALM = 'oil-palm',
  PALM_OIL = 'palm-oil',
  PALM_KERNEL = 'palm-kernel',
  PALM_KERNEL_OIL = 'palm-kernel-oil',
  DEHYDRATED_FRUITS = 'dehydrated-fruits',
  DEHYDRATED_VEGETABLES = 'dehydrated-vegetables',
  TEA = 'tea',
  COFFEE = 'coffee',
  ASHWAGANDHA = 'ashwagandha',
  ALOEVERA = 'aloe-vera',
  SAGE = 'sage',
  FENUGREEK = 'fenugreek',
  GILOY = 'giloy',
  TULASI = 'tulasi',
  CAROM = 'carom',
  SPEARMINT = 'spearmint',
  KHUS_VETIVER = 'khus-vetiver',
  CASHEW = 'cashew',
  WALNUT = 'walnut',
  ALMONDS = 'almonds',
  APRICOT = 'apricot',
  BETEL_NUT = 'betel-nut',
  DATES = 'dates',
  DRY_FIG = 'dry-fig',
  HAZELNUT = 'hazelnut',
  PISTACHIO = 'pistachio',
  RAISENS = 'raisens',
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
    image: `/assets/product-range/${ProductCategory.GRAINS_AND_CEREAL}.jpg`,
    category: ProductCategory.GRAINS_AND_CEREAL,
    slug: 'rice',
  },
  {
    title: 'Pulses',
    image: `/assets/product-range/${ProductCategory.PULSES}.jpg`,
    category: ProductCategory.PULSES,
    slug: 'chickpeas',
  },
  {
    title: 'Spices',
    image: `/assets/product-range/${ProductCategory.SPICES}.jpg`,
    category: ProductCategory.SPICES,
    slug: 'turmeric',
  },
  {
    title: 'Fruits',
    image: `/assets/product-range/${ProductCategory.FRUITS}.jpg`,
    category: ProductCategory.FRUITS,
    slug: 'mango',
  },
  {
    title: 'Vegetables',
    image: `/assets/product-range/${ProductCategory.VEGETABLES}.jpg`,
    category: ProductCategory.VEGETABLES,
    slug: 'potato',
  },
  {
    title: 'Oilseeds',
    image: `/assets/product-range/${ProductCategory.OILSEEDS}.jpg`,
    category: ProductCategory.OILSEEDS,
    slug: 'groundnut',
  },
  {
    title: 'Floriculture',
    image: `/assets/product-range/${ProductCategory.FLORICULTURE}.jpg`,
    category: ProductCategory.FLORICULTURE,
    slug: 'rose',
  },
  {
    title: 'Herbs',
    image: `/assets/product-range/${ProductCategory.HERBS}.jpg`,
    category: ProductCategory.HERBS,
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

export const productCategoriesData: Record<
  ProductCategory,
  ProductCategoryData
> = {
  [ProductCategory.GRAINS_AND_CEREAL]: {
    headerImg: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/header.jpg`,
    headerText: 'Grains and Cereal',
    descTitle: 'Indian Grains & Cereal Exporters',
    descText: [
      'India is one of the most important players in the global market today. Being one of the major agricultural exporters in the world, grain and cereal export from India has been growing rapidly. Tark Internationals is one of the most reliable grains importers from India. We work on the export of grains and cereal, fruits, vegetables, pulses, spices, and such other food products from India. Being one of the leading cereal exporters in India, we have been accredited to TPCI, APEDA, and such other certifications.',
      'Known to be the best grains and cereal exporter in India, we at Tark Internationals make sure that premium quality grains and cereal in India are exported abroad. When we work on the export of Indian grains, we make sure that all the health and safety regulations are followed. With extensive experience in the Food export industry and export of Indian grains, we make sure that we can get the best buyers for grains exporter from India. If you are looking for cereal import from India, Tark Internationals is the best choice for you!',
    ],
    products: [
      {
        slug: Products.RYE,
        name: 'Rye',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.RYE}.jpg`,
        data: {
          title: 'Indian Rye Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.RYE}.jpg`,
          description: [
            'Rye is one of the extensively grown cereals in the world. One of the oldest grains to be cultivated, it is one of the top 5 grains to be consumed all over the world. India is into export tonnes of Rye each year. Rye has various nutritional benefits and therefore the rye export from India has been on the rise. The Indian rye exporter export premium quality Rye to many countries across the world. Rye export has thus gained importance in the food export industry.',
          ],
          varieties: [],
          conclusion: [
            'If you are looking for Rye importer from India, Tark Internationals Foods is one of the best options available for you. Tark Internationals has a global presence and will assist you in grabbing buyers for your products, conducting in-depth market analysis so on and so forth. Export of Rye is a rapidly growing business and the Indian exporters should take this opportunity and export premium quality Rye worldwide.',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Rye import from India has been increasing over the years due to various health and medicinal benefits from Rye. Rye is extensively used in India and Indonesian cuisines which may be one important reason for the increasing popularity of export of Rye. The rising global demand for Rye is a good opportunity for Rye exporter in India to expand its business and enter the international market.',
            ],
            specification: {
              productName: 'Rye',
              origin: 'Southwestern Asia',
              family: 'Poaceae',
              binomialName: 'Secale Cereale',
            },
            ingredients: {
              nutrients: {
                calories: '259 Calories',
                carbohydrates: 'Total Carbohydrate - 48 g',
                fiber: 'Dietary fibre - 6 g',
              },
              minerals: [
                'Copper',
                'Magnesium',
                'Phosphorous',
                'Thiamin',
                'Riboflavin',
                'Niacin',
                'Folate',
                'Pantothenic Acid',
              ],
              vitamins: ['Vitamin B6'],
              protein: '9 g',
              fats: '3.3 g',
            },
            usesAndBenefits: {
              uses: [
                'Helps with weight loss (fiber binds water, promotes fullness)',
                'Smooths digestive process, bulks stool, aids faster movement',
                'Great for the immune system',
                'Helpful in preventing asthma',
                'Good for the heart, recommended for heart patients',
                'Used as a base for many whiskeys',
                'Sometimes used to feed livestock',
              ],
            },
          },
        },
      },
      {
        slug: Products.CORN,
        name: 'Corn / Maize',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.CORN}.jpg`,
        data: {
          title: 'Indian Corn Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.CORN}.jpg`,
          description: [
            "Corn is known to be one of the world's most popular cereal grains. It is actually the seed of a plant in the grass family. Popcorn and sweet corn are some of the popular varieties of corn. Corn can be used in salads, vegetables, curries, and so on. Corn export from India has been one of the rapidly growing exports. The Indian corn exporter that earns great revenues from these exports. Corn export from India comprises of various forms and varieties of corn and export.",
          ],
          conclusion: [
            'If you are looking for Corn importer from India, Pisum Foods is one of the best options available for you. Pisum Foods has a global presence and will assist you in grabbing buyers for your products, conducting in-depth market analysis so on and so forth. Export of Corn is a rapidly growing business and the Indian exporters should take this opportunity and export premium quality Corn worldwide.',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'There is a large demand for Indian Corn in the global market due to the growing health and medicinal benefits of corn. Corn is sold to reduce the risk of heart disease and medicinal benefits of corn. Corn is sold to reduce the risk of serious diseases and what is very helpful during pregnancy. Corn exporter in India export premium quality corn to many nations in the world. Export of Corn is thus a good business opportunity for Indian exporters to enter the international market.',
            ],
            specification: {
              productName: 'Corn Maize',
              origin: 'Mexico',
              family: 'Poaceae',
              binomialName: 'Zea mays',
            },
            ingredients: {
              nutrients: {
                calories: '365 Calories',
                carbohydrates: 'Total Carbohydrate 74 grams',
                fiber: 'Fiber - 4.6 grams',
              },
              minerals: [
                'Magnesium',
                'Phosphorous',
                'Copper',
                'Zinc',
                'Iron',
                'Manganese',
                'Potassium',
                'Pantothenic Acid',
              ],
              vitamins: ['Vitamin B6', 'Vitamin E'],
              protein: '4.6 g',
              fats: '1.5 g',
            },
            usesAndBenefits: {
              uses: [
                'Corn is known to be a very effective energy booster. Thus, many experts recommend eating corn after exercising.',
                'Corn also helps to gain weight. If you need better and healthier food options rather than junk food.',
                'Corn is also said to be an excellent choice for dilatated and constipated patients. This is because sweet corn and corn starch will increase the blood flow lower.',
                'Corn is also used for food flavoring.',
              ],
            },
          },
        },
      },
      {
        slug: Products.OATS,
        name: 'Oats',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.OATS}.jpg`,
        data: {
          title: 'Indian Oats Exporters',
          layoutType: 'standard',
          headerImage: `/assets/banners/${Products.OATS}.jpg`,
          description: [
            "Oats is a crop of the Mediterranean origin. The popularity of this crop has been on the rise due to its various uses in different fields today. Oats export is a major export variety of crop in different countries across the world. Oats export from India has been increasing over the years. It is because of the product's benefits. Oats export is a rapidly growing business. Oats export from India has become an incredible nutritious grains is a good business opportunity for Indian Oats exporter. Oats export from has become other advantages.",
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '389 calories' },
              { name: 'Carbs', value: '66.3 grams' },
              { name: 'Fiber', value: '10.6 grams' },
            ],
            protein: [{ name: 'Protein', value: '16.9g' }],
            vitamins: [{ name: 'Vitamin E', value: 'Vitamin E' }],
            minerals: [
              { name: 'Manganese', value: 'Manganese' },
              { name: 'Phosphorus', value: 'Phosphorus' },
              { name: 'Copper', value: 'Copper' },
              { name: 'Biotin', value: 'Biotin' },
              { name: 'Vitamin B1', value: 'Vitamin B1' },
              { name: 'Magnesium', value: 'Magnesium' },
            ],
          },
          varieties: [
            {
              id: 1,
              name: 'HFO – 114 (HARYANA JAM – 114)',
              description: [
                'This variety of Oats was released in 1982 and is characterized by medium maturity profuse tillering and good straw. It is resistant to lodging. The grain is bold and plump. This variety of oats has been realized for cultivation in Haryana Himachal Pradesh. This variety of oats seemed produced around 40-50 kg/ha green fodder.',
              ],
            },
            {
              id: 2,
              name: 'BRUNKER-10',
              description: [
                'This variety of oats was released in 1982. This variety of oats has fine and smooth texture. The plants of this variety of Oats are productive with profuse tillering and slow early growth. The plants of Brunker-10 are fine and upright. The green fodder yield is 40-45 t/ha in around 100 days. Brunker-10 is mainly grown in Punjab, Haryana, Uttar and West Pradesh.',
              ],
            },
            {
              id: 3,
              name: 'WESTON II',
              description: [
                'Weston II is the widely variety of oats released in 1979. This variety of oats is loved smart with a height of around 100 cm. The straws of division II are strong with narrow primitive. The plant reproduced by this variety are its plant and for maturity are 100 days.',
              ],
            },
            {
              id: 4,
              name: 'PALAMPUR-1',
              description: [
                'This variety of oats was released in 1989 and is characterized by medium maturity profuse tillering and good straw. It is resistant to lodging. The grain is bold and plump. This variety of oats has been realized for cultivation in Himachal Pradesh. This variety of oats seemed produced around 40-50 kg/ha green fodder.',
              ],
            },
            {
              id: 5,
              name: 'BUNDEL JAI-822',
              description: [
                'This variety of oats was released from the developed from a cross between OG-54-6 × HFO-114. Flowering requirement: heterogeneous, and therefore method of selection. Released in 1996, this variety has erect growth habit and glumes remain. It takes around 80-100 days for harvesting Bundel Jai-822 and matures in about 120-130 days.',
              ],
            },
            {
              id: 6,
              name: 'SABZAAR (SKO-7)',
              description: [
                'Sabzaar was released in 1997 and was developed by SKAUST in Srinagar. This variety has been certified for cultivation in temperate areas of Kashmir and high altitude regions of Jammu. SKO-7 variety is profuse stocking leafy and suitable for both grain & fodder. It produces around 25-40 tons of green fodder.',
              ],
            },
            {
              id: 7,
              name: 'HARITA (RO -19)',
              description: [
                'This variety of Harita was released in 2001 and was suitable for Maharashtra. This variety of Oats is a medium variety developed by selection from a base population of fifty plants. Harita seed is suitable for winter season under irrigated conditions. The average yield of Harita is around 15-20 kg for green forage and about 5-6 t/ha for dry matter.',
              ],
            },
            {
              id: 8,
              name: 'UPO-212',
              description: [
                'This variety of oats was released in 2002 for cultivation in the north and central India under the multi-cut system. The UPO-212 variety has a light green stem and is 1-3 times taller and suitable above. The average green fodder yield of this variety is around 40-50 t/ha.',
              ],
            },
            {
              id: 9,
              name: 'OL-125',
              description: [
                'The OL-125 variety of oats was developed for commercial hybridization using Avena and HFO-114 followed by pedigree breeding and selection. This variety was released in 1983 for cultivation in the north-west and central India at the University. This variety is suitable for single and multicut and yields 40 t/ha green fodder.',
              ],
            },
          ],
          conclusion: [
            'Tark Internationals is exporter of Oats from India. Pisum Foods is the best option for your future oats or any other oats exporter from India. Pisum Foods has extensive experience in the food industry. Our trained executives analyze the market trends and will help you to find buyers internationally. Want to export Oats? Pisum is the field through.',
          ],
        },
      },
      {
        slug: Products.MILLET,
        name: 'Millet / Bajra',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.MILLET}.jpg`,
        data: {
          title: 'Indian Pearl Millet Exporters',
          layoutType: 'standard',
          headerImage: `/assets/banners/${Products.MILLET}.jpg`,
          description: [
            'Pearl millet is a millet, an ancient grains, semi-arid resulting up to around 5 m high with a glorious root system. The global demand for pearl millet has been increasing and that the Pearl Millet exporter in India export tonnes of millet each year. Pearl millet is one known to have several other names like bajra, bulrush millet, spiked millet, cat-tail millet, and African millet. The export of millet from India has been on the rise for the past few farming years. The Indian pearl millet exporter earns good revenues from the export of their products to several countries in the world. It can be said that the pearl millet export is now a good business opportunity for food exporters.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '378 calories' },
              { name: 'Carbs', value: '73 grams' },
              { name: 'Dietary Fiber', value: '1.2g/100 grams' },
            ],
            protein: [{ name: 'Protein', value: '11g' }],
            vitamins: [
              { name: 'Vitamin C', value: 'Vitamin C' },
              { name: 'Vitamin A', value: 'Vitamin A' },
              { name: 'Vitamin E', value: 'Vitamin E' },
              { name: 'Riboflavin', value: 'Riboflavin' },
              { name: 'Niacin', value: 'Niacin' },
              { name: 'Thiamin', value: 'Thiamin' },
            ],
            minerals: [
              { name: 'Calcium', value: 'Calcium' },
              { name: 'Iron', value: 'Iron' },
              { name: 'Magnesium', value: 'Magnesium' },
              { name: 'Phosphorus', value: 'Phosphorus' },
              { name: 'Potassium', value: 'Potassium' },
              { name: 'Zinc', value: 'Zinc' },
            ],
            fat: [{ name: 'Fat', value: '4.2 gm' }],
          },
          varieties: [
            {
              id: 1,
              name: 'GIANT BAJRA',
              description: [
                'This variety of Pearl Millet has been recommended for cultivation in the entire Rajya growing zone. The plants of this variety are leafy with profuse tillering and have a big grained or best forage. It is suited to be cultivated resistant to many insects and plant diseases.',
              ],
            },
            {
              id: 2,
              name: 'RAJ BAJRA CHARI-2',
              description: [
                'This variety of Pearl Millet has been certified for cultivation for the entire Rajya growing zone. The green fodder yield is around 30-40 t/ha. Raj Bajra Chari-2 is resistant to blast diseases and sweet pests. All the ear emergence stage maintains are eliminated in the leaf development and it is semi dormant.',
              ],
            },
            {
              id: 3,
              name: 'APFB-2',
              description: [
                'The APFB-2 variety of Pearl Millet is recommended for cultivation in Andhra Pradesh. This variety belongs to the early maturity group. Non-lodging and late emergence, crop suited to summer and rainy Pearl varieties. This plant height is 160-200 cm providing green forage yield ranging up to 60 t/ha.',
              ],
            },
            {
              id: 4,
              name: 'PCB-164',
              description: [
                'The PCB-164 variety of Pearl Millet has been developed by PAU Ludhiana from the field crossing lines. This variety of Pearl Millet was released and notified for cultivation in the north-west part of India.',
              ],
            },
            {
              id: 5,
              name: 'AVIKA BAJRA CHARI (AVKB-19)',
              description: [
                'The AVIKA BAJRA CHARI variety has been certified for cultivation in the state of Haryana like Gujarat, Rajasthan, especially Punjab and some regions of Uttar Pradesh. This variety also known by the name is a semi to have a leaf sheathe with a green foliage with a plant height of 240-280 cm. It is suitable at 70-90 days for the first cut and 30 days for the subsequent cuts.',
              ],
            },
            {
              id: 6,
              name: 'NARENDRA CHARA BAJRA-2 (NDFB-2)',
              description: [
                'The Narendra Chara Bajra variety has been developed by NDUAT. Narendra this variety of Pearl Millet has been recommended for cultivation in pearl millet growing areas in the north-west and central zone of the country. This variety is excellent for single and multi-cut and very good for the green fodder.',
              ],
            },
            {
              id: 7,
              name: 'FBC-16',
              description: [
                'The FBC-16 variety of Pearl Millet has been notified for cultivation in entire north-west India. This variety is best to be a multi-cut variety and it is suitable for the whole summer season. The variety also has a low concentration of oxalates and high recovery. The protein leaves by this method. The green fodder yield produced of this variety is 70-80 t/ha.',
              ],
            },
            {
              id: 8,
              name: 'THSC-1',
              description: [
                'This variety of Pearl Millet was bred by Chau. Chaudhary and was recommended for cultivation in the entire Rajya growing zone of the country or the year 1999. THSC-1 variety produces around 40-50 t/ha green fodder and is said to be resistant to foliar diseases and insect-pests.',
              ],
            },
            {
              id: 9,
              name: 'OL-125',
              description: [
                'The OL-125 variety of oats was developed for commercial hybridization using Avena and HFO-114 followed by pedigree breeding and selection. This variety was released in 1985 for cultivation in the north-west and central zone of the country. This variety is excellent for single and multi-cut and very good for the green fodder.',
              ],
            },
          ],
          conclusion: [
            'If you are looking for a Pearl Millet importer from India, Pisum Foods is the best choice for you! Pisum Foods is one of the most trustworthy exporters of food products including grains, spices, fruits and such other products from India. Export of Pearl millet is a good opportunity for Indian exporters and thus with us, you can make the most of it. Want to export Pearl Millet? Pisum is the field through.',
          ],
        },
      },
      {
        slug: Products.RICE,
        name: 'Rice',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.RICE}.jpg`,
        data: {
          title: 'Indian Rice Exporters',
          layoutType: 'cards',
          headerImage: '/assets/banners/rice.jpg',
          description: [
            'Rice is one of the most popular and widely consumed staple foods. It is consumed extensively in Asia and Africa and is the agricultural commodity with third-highest production in the world. It is generally grown as an annual plant but in areas like the tropics, it can survive as a perennial crop.',
          ],
          cardSections: [
            {
              title: 'BASMATI RICE',
              description:
                'There are around 40,000 varieties of Rice found across the world. We broadly export two categories of Rice Basmati and Non-Basmati. These are several varieties under these broad categories.',
              items: [
                {
                  id: 1,
                  title: '1121 BASMATI RICE - WHITE',
                  description:
                    "Pusa Basmati 1121 variety having Basmati rice quality traits from the traditional Basmati varieties such as Basmati 370 and Type 3. This type is basically derived from the process of hybridization. Commercial cultivation for 1121 Basmati Rice started in 2003. It's characteristics include extra-long slender milled grains, a pleasant aroma, volume expansion more than four times, appealing taste, good mouthfeel, and easy digestibility.",
                },
                {
                  id: 2,
                  title: 'TRADITIONAL BASMATI RICE',
                  description:
                    'There are various types of basmati rice. Traditional types include basmati 370, basmati 385, and basmati Ranbirsinghpura. Traditional Basmati Rice is available in Parboiled and Raw form. It is used in Continental Cuisine, Indian Cuisine, Mughlai Cuisine & Chinese Cuisine.',
                },
                {
                  id: 3,
                  title: 'GOLDEN SELLA BASMATI RICE',
                  description:
                    'Parboiling rice retains more of the vitamins and minerals from the original grain. The procedure guarantees a firm grain upon cooking. Parboiled rice is both cholesterol and gluten free. It is also low in sodium and saturated fat. Rice provides complex carbohydrates used by the body for energy.',
                },
                {
                  id: 4,
                  title: 'SUGANDHA BASMATI RICE',
                  description:
                    'Sugandha Basmati Rice is one of the low-cost long grain basmati rice in india. It is generally cultivated in Punjab, Haryana, and Uttar Pradesh and such other states of India. Sugandha Basmati Rice has a great fragrance and is non-sticky rice. It is usually slightly shorter than 1509 Basmati and 1121 Basmati rice. It may extend up to twice its length if cooked well.',
                },
                {
                  id: 5,
                  title: 'SHARBATI BASMATI RICE',
                  description:
                    'Sharbati Basmati Rice is made from the hybrid of Traditional Basmati Rice and has no specific aroma. The cooking of Sharbati Basmati Rice is similar to Basmati Rice. It is about 14-15MM long. Its rice grain is around 7.1-7.2MM in length.',
                },
              ],
            },
            {
              title: 'NON-BASMATI RICE',
              description:
                'All other varieties of rice, except basmati is called non- basmati rice. Non-basmati rice includes rice of different varieties, sizes, and shapes. Some types of rice are long and slender, while some are short and thick. Non-Basmati Rice is used in homes for daily use and also is used and exported for commercial use.',
              items: [
                {
                  id: 1,
                  title: 'PARBOILED RICE',
                  description:
                    'Parboiled rice that has been partially boiled in the husk. It is basically like easy to cook rice. The process of parboiling includes soaking, steaming and drying. These processes make the rice easier to process by hand. Parboiling also boosts its nutritional profile, changing its texture, and making it more resistant to weevils.',
                },
                {
                  id: 2,
                  title: 'BROKEN RICE',
                  description:
                    'First of all, even though this type is called broken rice, nothing is actually wrong with it, it is os nutritious any other rice. It is basically just fragments of rice grains, broken in the field, during drying, transport, or by milling. Mechanical separators are used to separate the broken grains from the whole grains and sort them by size.',
                },
                {
                  id: 3,
                  title: 'SWARNA RICE',
                  description:
                    'Swarna is one of the most healthy rice choices, it has a very low risk of diabetes as it has a low glycemic index. Swara rice is grown extensively in India.',
                },
                {
                  id: 4,
                  title: 'SONA MASOORI RICE',
                  description:
                    'Sona masuri variety of rice is a medium-grain rice grown largely in the states of Andhra Pradesh, Telangana, and Karnataka in India. Sona Masuri literally translates to Golden ivy. It is lightweight and aromatic. This premium variety of rice is mainly exported to the USA, Canada, Europe, Malaysia, and Middle East countries such as Saudi Arabia and Qatar.',
                },
              ],
            },
          ],
          conclusion: [
            'India is one of the major basmati rice exporters in the world. With our extensive experience in rice export, Tark Internationals ensures that premium quality rice varieties reach international markets while maintaining the highest standards of quality and safety.',
          ],
        },
      },
      {
        slug: Products.WHEAT,
        name: 'Wheat',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.WHEAT}.jpg`,
        data: {
          title: 'Indian Wheat Exporters',
          layoutType: 'standard',
          headerImage: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.WHEAT}.jpg`,
          description: [
            'Wheat is a cereal grain mostly eaten in the form of bread in different parts of the world. Wheat exporter in India exports tonnes of wheat abroad each year. Wheat is also known to have a higher protein content than other major cereals such as maize or rice. Thus the global demand for wheat export is on the rise. The Indian wheat exporter, therefore, exports increasing amount of wheat and wheat products each year. This is a good opportunity for wheat export from India to rise and earn good revenues for the vendors and farmers.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '340 calories' },
              { name: 'Dietary Fiber', value: '2.7g' },
              { name: 'Total Carbohydrate', value: '72 g' },
            ],
            protein: [{ name: 'Protein', value: '13g' }],
            vitamins: [{ name: 'Vitamin B6', value: 'Vitamin B6' }],
            minerals: [
              { name: 'Iron', value: 'Iron' },
              { name: 'Calcium', value: 'Calcium' },
              { name: 'Sodium', value: 'Sodium' },
              { name: 'Potassium', value: 'Potassium' },
              { name: 'Magnesium', value: 'Magnesium' },
              { name: 'Phosphorus', value: 'Phosphorus' },
              { name: 'Copper', value: 'Copper' },
              { name: 'Folate', value: 'Folate' },
            ],
            fat: [{ name: 'Fat', value: '2g' }],
          },
          varieties: [
            {
              id: 1,
              name: 'VL-832',
              description: [
                'The VL-832 variety of wheat is exported from India to many countries in the world. The class required for the maturity of this variety is around 165-180 days. The average yield of this variety of wheat is 25-30q/ha. This variety of wheat is said to be resistant to brown and yellow rusts and leaf rust.',
              ],
            },
            {
              id: 2,
              name: 'VL-804',
              description: [
                'Also known as Vijay VL-804, the time required for this plant to mature after transplanting is around 160-170 days. This variety of wheat is known to be tolerant of smut/leaf. It is also resistant to brown and yellow rusts.',
              ],
            },
            {
              id: 3,
              name: 'HS-365',
              description: [
                'The HS-365 variety of wheat is majorly grown in the state of Himachal, in hilly fields, this variety is said to be grown in hilly areas from low regions. This variety of wheat grows well at a high altitude in hill situations.',
              ],
            },
            {
              id: 4,
              name: 'HS-240',
              description: [
                'This variety of wheat grows well in the hills of Uttaranchal, Himachal Pradesh, J&K, Sikkim and other hill eastern states. HS-240 grows well at a maximum altitude and is irrigated timely based or rainfed timely sown.',
              ],
            },
            {
              id: 5,
              name: 'HD 2687',
              description: [
                'The HD 2687 variety of wheat is generally grown in the regions of Punjab, Haryana, Delhi, Western Uttar Pradesh, Rajasthan, Madhya of Himachal Pradesh, Jammu, Kashmir and Uttaranchal. The cultural conditions required for this variety are irrigated timely sown.',
              ],
            },
            {
              id: 6,
              name: 'PBW-343',
              description: [
                'The PBW-343 is a variety of wheat which is grown in states like Punjab, Haryana, Delhi, Western Uttar Pradesh, Rajasthan, hilly/hills of Himachal Pradesh, Jammu, Kashmir, Uttaranchal and such other states. The cultural conditions required for this variety include irrigated timely sown.',
              ],
            },
            {
              id: 7,
              name: 'SHRESTH (HD 2687)',
              description: [
                'Shresth, also known as HD 2687, is a variety of wheat exported from India. The states where this variety is grown are Punjab, Haryana, Delhi, Western Uttar Pradesh, Rajasthan, Madhya of Himachal Pradesh, Jammu, Kashmir, Uttaranchal and such other states.',
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the most recommended wheat importer from India. Wheat is eaten in various forms across the world thus export of wheat from India has a good opportunity to expand. Pisum food has a strong experience in wheat export from India. We make sure that all the health and safety parameters and regulations are met high-quality wheat is exported from India. Want to export wheat? Pisum Foods is the best choice for you!',
          ],
        },
      },
      {
        slug: Products.BARLEY,
        name: 'Barley',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.BARLEY}.jpg`,
        data: {
          title: 'Indian Barley Exporters',
          layoutType: 'standard',
          headerImage: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.BARLEY}.jpg`,
          description: [
            'One of the major cereal grains in the world, Barley is from the grass family and is extensively grown in temperate climates in different parts of the world. Barley exporter in India exports tonnes of barley to various countries in the world. With the growing demand of barley in the world, barley export from India has been on the rise. Over the years, the Indian barley exporter export good quality barley and barley products. Barley export from India includes many varieties of barley.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '354 calories' },
              { name: 'Dietary Fiber', value: '17 g' },
              { name: 'Total Carbohydrate', value: '73 g' },
            ],
            protein: [{ name: 'Protein', value: '12g' }],
            vitamins: [{ name: 'Vitamin B6', value: 'Vitamin B6' }],
            minerals: [
              { name: 'Manganese', value: 'Manganese' },
              { name: 'Magnesium', value: 'Magnesium' },
              { name: 'Iron', value: 'Iron' },
              { name: 'Copper', value: 'Copper' },
              { name: 'Potassium', value: 'Potassium' },
              { name: 'Phosphorus', value: 'Phosphorus' },
              { name: 'Selenium', value: 'Selenium' },
              { name: 'Niacin', value: 'Niacin' },
            ],
            fat: [{ name: 'Fat', value: '2g' }],
          },
          varieties: [
            {
              id: 1,
              name: 'AZAD (K125)',
              description: [
                'The Azad variety is generally suitable for cultivation in areas of western Uttar Pradesh, Bihar and West Bengal. This variety of barley is said to be tolerant to salt and resistance to yellow rust disease. It can be good as fodder and grain. The Azad variety generally matures in 90-100 days. It has a yield potential of about 30-35 quintals of grains per hectare under irrigated conditions.',
              ],
            },
            {
              id: 2,
              name: 'RATNA',
              description: [
                'This variety of Ratna was released for central areas of western Uttar Pradesh, Bihar and West Bengal. This variety is said to be highly tolerant of saline and alkaline soil conditions. Ratna is said to mature within around 100-105 days and grows in fairly good yield even under unfavorable environmental conditions. The plants of this variety have a good tillering ability.',
              ],
            },
            {
              id: 3,
              name: 'VIJAYA',
              description: [
                'The Vijaya variety has been released for the rainfed regions of western Uttar Pradesh, Delhi and Madhya Pradesh. It matures in about 120-135 days. Vijaya variety has been released for rainfed regions of western Uttar Pradesh, Delhi and Madhya Pradesh. It matures in about 120-135 days. This variety has a yield potential of 20-25 quintals of grains per hectare.',
              ],
            },
            {
              id: 4,
              name: 'RS-6',
              description: [
                'Developed in Rajasthan, the RS-6 variety of Barley is suitable for cultivation under semi-north-east as well as irrigated conditions. This variety has specifically been recommended for central and western Rajasthan. It matures around 120-130 days and has a yield potential of 35-40 quintals of grains per hectare.',
              ],
            },
            {
              id: 5,
              name: 'RANJIT (OL - 70)',
              description: [
                'Ranjit (OL-70) is a six-rowed hulled barley (Hordeum vulgare of Barley recommended for commercial cultivation in only Punjab. This variety is suitable for growing under irrigated conditions. It has a yield potential of 35-40 quintals of grains per hectare.',
              ],
            },
            {
              id: 6,
              name: 'C- 164',
              description: [
                'The C-164 variety of Barley is a tall, erect variety with compound ears and long awns. This grain is usually bold, bright and golden. C-164 is said to be resistant to yellow rust. It can still show slow to thus more suitable for cultivation under irrigated conditions. The yield of this variety is around 35-40 quintals of grains per hectare.',
              ],
            },
            {
              id: 7,
              name: 'LSB-2',
              description: [
                'LSB-2 is known to be a six-row naked type barley variety. It is a variety suitable for growing at a higher altitude like Himachal Pradesh and Uttar Pradesh hills, maturing in about 140-160 days. this variety has a yield potential of 25-30 quintals of grains per hectare.',
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the best barley importer from India. We export barley and several other food products from India to numerous countries of the world. Barley export from India is a great opportunity for Indian exporters and farmers to enter the international market and export their products worldwide. Want to export barley from India? Pisum Foods is the field through.',
          ],
        },
      },
      {
        slug: Products.TRITICALE,
        name: 'Triticale',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.TRITICALE}.jpg`,
        data: {
          title: 'Indian Triticale Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.TRITICALE}.jpg`,
          description: [
            'Triticale is a hybrid cross of wheat and rye. It can be used as a grain, feed, fuel, forage, wildlife food-plot, cover crop, and so on. The Triticale exporter in India exports tonnes of Triticale to various countries in the world. Due to the diverse uses and benefits of the crop, Triticale export from India has been growing over the years. The Indian Triticale exporter is now exporting increasing amounts of Triticale abroad each year. The Triticale export from India provides the export of various varieties of the crop.',
          ],
          conclusion: [
            "Pisum Foods is the leading Triticale Importer from India. We at Pisum Foods understand that the export of Triticale from India may be a complicated process for some of you. Don't worry, we are here to help you! With extensive experience in the food export industry, our executives at Pisum make sure that the export of Triticale is carried out smoothly with any issues. We help our clients right from documentation until the final delivery of the products. If you are looking for Triticale export from India, Contact Pisum now!",
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Triticale is a man-made hybrid and thus has many advantages. For instance, it benefits from having the disease resistance of rye, coupled with the seed and forage quality of wheat. Therefore, the global market demand for Triticale has increased recently. The Triticale exporter in India exports premium quality Triticale to different parts of the world. Due to its excellent resistance to plant diseases and viruses, Triticale import from India is predicted to grow even in the coming years.',
            ],
            specification: {
              productName: 'Triticale',
              origin: 'Scotland and Germany',
              family: 'Poaceae',
              binomialName: 'Triticosecale',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 336',
                carbohydrates: 'Total Carbohydrates - 72g',
                fiber: 'Dietary Fiber - 19g',
              },
              minerals: ['Calcium', 'Iron', 'Potassium'],
              vitamins: ['Vitamin D'],
              protein: '13 g',
              fats: '2 g',
            },
            usesAndBenefits: {
              uses: [
                'Triticale is used in grain milling. It can be milled into flour using wheat or rye flour milling processes.',
                'Whole and refined triticale are used for making baking products such as different types of breads, oriental noodles, soft wheat products, and so on.',
                'Some varieties of triticales can also produce dense and flavorful or special flavor-making conditions, such as like making bread and reduced fermentation time.',
              ],
            },
          },
        },
      },
      {
        slug: Products.FONIO,
        name: 'Fonio',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.FONIO}.jpg`,
        data: {
          title: 'Indian Fonio Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.FONIO}.jpg`,
          description: [
            'Fonio is an annual grass grown for its grain which is generally used to make porridge. The Fonio exporter in India exports tonnes of Fonio every year. The growing popularity of Fonio has led to an increase in Fonio export from India. The leaves of Fonio are blade-like linear and tapering. The Indian Fonio exporter exports premium quality Fonio to different countries in the world. The Fonio export from India includes the export of varieties of Fonio.',
          ],
          conclusion: [
            'Pisum is one of the best Fonio importer from India. We at Pisum Foods understand the issues one can face during the export of Fonio, so we are here to help! Pisum has an extensive experience in the food export industry. Our executives are trained to support you through the entire export process and resolve any issues which might arise. If you are looking for Fonio export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The global market demand for Fonio has been increasing due to its rich nutritional qualities. This is a good business opportunity for the Fonio exporter in India to expand his business and enter the international market. Due to an increase in the Fonio import from India, the local vendors and farmers who cultivate Fonio are also earning good revenues.',
            ],
            specification: {
              productName: 'Fonio',
              origin: 'Africa',
              family: 'Poaceae',
              binomialName: 'Digitaria exilis',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 170',
                carbohydrates: 'Carbohydrates - 39g',
                fiber: 'Fiber - 1g',
              },
              minerals: ['Calcium', 'Iron', 'Phosphorus'],
              vitamins: [],
              protein: '2g',
              fats: '0.5g',
            },
            usesAndBenefits: {
              uses: [
                'Fonio may be consumed after cooking, either as a porridge or couscous. The grain is sometimes also ground and mixed with other cereals.',
                'Fonio grain is sometimes used to brew beer and malted beverages. The fonio grain can be used as animal fodder.',
                'Fonio is said to have a high concentration of iron which helps against anemia. It also contains folic acid and other amino acids that are beneficial during pregnancy.',
                'Fonio contains certain essential amino acids, especially cysteine and methionine, which help to detoxify the liver and the body.',
              ],
            },
          },
        },
      },
      {
        slug: Products.SORGHUM,
        name: 'Sorghum / Jawari',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.SORGHUM}.jpg`,
        data: {
          title: 'Indian Sorghum Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.SORGHUM}.jpg`,
          description: [
            'Sorghum is primarily a strong grass and has edible starchy seeds. Sorghum is a diverse crop and has many uses in different industries. In India sorghum is popularly known as Jowar, Cholam, or Jonna. The Sorghum exporter in India exports a huge quantity of the crop each year. Due to the growing popularity of sorghum, sorghum export from India has also seen an a rise. This is, therefore, a good opportunity for the Indian Sorghum exporter to expand his business and enter the international marketplace. The Jowar export includes various varieties and qualities of the product.',
          ],
          conclusion: [
            'Pisum Foods is a leading Sorghum importer from India. We at Pisum Foods help our clients with each and every step while exporting products from India. Our team has extensive experience in the field of export of Sorghum. We will make sure that the process is carried out smoothly with the least confusion and hassle. We strictly adhere to all the health and safety restrictions of the government and make sure that your products are delivered safely. If you are looking for Sorghum export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Sorghum is a major food crop in Africa and has many other uses as well. It is used as a food product, as hay and also as fodder. Sorghum is valued in hot and arid regions largely for its resistance to drought and heat. The Sorghum exporter in India exports good quality Sorghum to various parts of the world. The Sorghum import from India has thus seen a steady increase over the past few years.',
            ],
            specification: {
              productName: 'Sorghum',
              origin: 'Northeastern Africa',
              family: 'Poaceae',
              binomialName: 'Sorghum bicolor',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 339',
                carbohydrates: 'Carbohydrates - 75g',
                fiber: 'Fiber - 6g',
              },
              minerals: [
                'Magnesium',
                'Iron',
                'Copper',
                'Phosphorous',
                'Zinc',
                'Potassium',
              ],
              vitamins: [
                'Vitamin B1',
                'Vitamin B2',
                'Vitamin B3',
                'Vitamin B6',
              ],
              protein: '11g',
              fats: '3g',
            },
            usesAndBenefits: {
              uses: [
                'Sorghum is used as a food product. It is also used to make soda, all sorts, alcoholic and certain alcoholic beverages.',
                'Sorghum is also used as hay and fodder. The stalks of the crop are used as fodder and building materials.',
                'Sorghum is used to make brooms and brushes.',
                'Sweet Sorghum is also used for syrup manufacture and in the production of ethyl alcohol for biofuel.',
              ],
            },
          },
        },
      },
      {
        slug: Products.TEFF,
        name: 'Teff',
        img: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.TEFF}.jpg`,
        data: {
          title: 'Indian Teff Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.TEFF}.jpg`,
          description: [
            'Teff is a very fine grain, around the size of a poppy grain. It is an ancient grain from Ethiopia and Eritrea and is a part of their staple cuisines. The Teff exporter in India exports a large quantity of the product every year. Due to the growing popularity of Teff all over the world, the Teff export from India exports increasing amounts of Teff every year. The Indian Teff exporter exports premium quality Teff abroad. The Teff export includes the export of various varieties of Teff.',
          ],
          conclusion: [
            'Pisum Foods is the leading Teff importer from India. We at Pisum Foods help our clients from the documentation process until the final delivery of the products. Our global presence and extensive experience have proved to be beneficial for most of our past customers. Our executives will make sure that you are in safe of any issues, contact us without any hesitation in this segment of teff. If you are looking for Teff export from India, Contact us now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global Market demand for Teff has been increasing over the years. As gluten-free alternatives to wheat are gaining popularity, Teff is definitely a good option. This is, therefore, a great opportunity for the Teff exporter in India to expand his business and enter the international market. Due to the great quality of this grain, Teff import from India has been rising over the years.',
            ],
            specification: {
              productName: 'Teff',
              origin: 'Ethiopia',
              family: 'Poaceae',
              binomialName: 'Eragrostis tef',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 366',
                carbohydrates: 'Carbs - 73 g',
                fiber: 'Fiber - 8 g',
              },
              minerals: [
                'Calcium',
                'Magnesium',
                'Potassium',
                'Phosphorus',
                'Manganese',
                'Zinc',
                'Selenium',
              ],
              vitamins: [],
              protein: '13.3g',
              fats: '2.4g',
            },
            usesAndBenefits: {
              uses: [
                'Teff is popular across the world as it is gluten-free. Thus it can be ground and used as whole grain and gluten-free flour.',
                'In Ethiopia, teff flour is fermented with yeast and is then used to make a traditional sourdough flatbread known as injera.',
                'Teff flour is also used for baking bread or manufacturing packaged foods like pasta. It is a good gluten-free alternative even for such products.',
              ],
            },
          },
        },
      },
    ],
  },
  [ProductCategory.PULSES]: {
    headerImg: `/assets/product/${ProductCategory.PULSES}/${Products.PULSES}.jpg`,
    headerText: 'Pulses',
    descTitle: 'Indian Pulses Exporters',
    descText: [
      'India today is a major exporter of various food and agricultural products. Among these, we have seen exponential growth in the pulses export from India in the past few years. The export of Pulses from India was around 2.70 lakh tonnes which are worth Rs. 1679.98 crores in the year 2018-2019. Tark Internationals is one of the most recommended Pulses importers from India. We import various varieties of Pulses including chickpeas, peas, kidney beans, soybeans so on, and so forth.',
      'Being one of the largest Pulses exporters in India, Tark Internationals makes sure that the products reach the destinations fresh and on the promised time. We have connections across the globe and provide hassle-free export of Indian pulses. We are a pulses exporter who believes in transparency of services and is always happy to help with any issues our clients may have. We wish to spread Pulses in India and other Indian products to every corner of the world through our services. If you want to Pulses import from India, Tark Internationals is the place for you!',
    ],
    products: [
      {
        slug: Products.CHICKPEAS,
        name: 'Chickpeas / Garbanzo Beans',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.CHICKPEAS}.jpg`,
        data: {
          title: 'Indian Chickpea Exporters',
          layoutType: 'standard',
          headerImage: `/assets/product/${ProductCategory.PULSES}/${Products.CHICKPEAS}.jpg`,
          description: [
            "Known to be one of the world's largest producer of chickpeas, the chickpea exporter in India is exporting more and more chickpeas each year. There are broadly two varieties of chickpeas known as Desi and Kabuli. Chickpeas export from India includes both these varieties and many more. The Indian chickpeas exporter export premium quality chickpeas from India.",
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '364 calories / kilogram' },
              { name: 'Carbohydrates', value: '60g/100 grams' },
              { name: 'Fiber', value: '12g/100 grams' },
            ],
            protein: [{ name: 'Protein', value: '19g' }],
            fat: [{ name: 'Fat', value: '6g' }],
            vitamins: [
              { name: 'Vitamin C', value: 'Vitamin C' },
              { name: 'Vitamin A', value: 'Vitamin A' },
              { name: 'Vitamin B6', value: 'Vitamin B6' },
            ],
            minerals: [
              { name: 'Calcium', value: 'Calcium' },
              { name: 'Magnesium', value: 'Magnesium' },
              { name: 'Iron', value: 'Iron' },
              { name: 'Pantothenic acid', value: 'Pantothenic acid' },
            ],
          },
          varieties: [
            {
              id: 1,
              name: 'L 550',
              description: [
                'The L 550 variety of chickpeas was released in the year 2016. The L 550 variety of chickpeas matures around 100-105 days after transplanting. These chickpeas have bold grains and are popular with in color. The maturity yield for this variety of chickpeas is 20-25kg/ha.',
              ],
            },
            {
              id: 2,
              name: 'JG 315',
              description: [
                'The JG 315 variety of chickpeas was released in 1994. The JG 315 variety of chickpeas takes around 105-110 days to mature after transplanting. These chickpeas are resistant and have brown and wrinkled seeds. This variety of chickpeas yield can average yield of around 20-25kg/ha.',
              ],
            },
            {
              id: 3,
              name: 'PUSA 391',
              description: [
                'The PUSA 391 of chickpeas was released in the year 1997. The Pusa 391 variety takes about 100-105 days in order to mature after being transplanted. This variety of chickpeas can be characterized by bold and light brown seeds. The average yield for this variety of chickpeas is 17-20kg/ha.',
              ],
            },
            {
              id: 4,
              name: 'BDN 72',
              description: [
                'Released in 1999, the BDN 72 is another variety of chickpeas exported from India. This variety takes around 145-155 to mature after transplanting. The BDN 72 variety is resistant to wilt and rust but and is known to be bold seeded. The average yield of this variety is 20-25kg/ha.',
              ],
            },
            {
              id: 5,
              name: 'GUJARAT GRAM I',
              description: [
                'The Gujarat Gram I was released in 1998. The time took for maturing for this variety of chickpeas is around 100-110 days. These chickpeas are generally resistant to wilt. The average yield of this variety of chickpeas is 17-20kg/ha.',
              ],
            },
            {
              id: 6,
              name: 'ICCC 32',
              description: [
                'The ICCC 32 is another variety of chickpeas we export from India released in 1999. These chickpeas take around 100-105 days to mature after transplanting. One of the seed of ICCC 32 is medium. This variety is usually resistant to wilt and the average yield is 17-20kg/ha.',
              ],
            },
            {
              id: 7,
              name: 'KAK 2',
              description: [
                'The KAK 2 variety of chickpeas was released in the year 2004. This variety of chickpeas required from 90-95 takes about 105-110 days for mature after transplanting. The KAK 2 variety is generally bold seeded and has an average yield of around 17-20kg/ha.',
              ],
            },
            {
              id: 8,
              name: 'UDAY (GPG 55)',
              description: [
                'Released in the year 2004, the UDAY is another variety of chickpeas exported from India. GPG 55 its takes around 100-105 days to mature after transplanting. This variety comes with its bold seeded. The average yield of this variety of chickpeas is 18-20kg/ha.',
              ],
            },
            {
              id: 9,
              name: 'GNG 663 (VARDAN)',
              description: [
                'The GNG 663 was released in the year 1999. This variety is also known as Vardan. The time take for maturing for this variety of chickpeas is around 100-105 days. Resistant to wilt, this variety is said bold and of Rajasthan bright and the average yield of this variety is 22-25kg/ha.',
              ],
            },
            {
              id: 10,
              name: 'KARNA CHANA (CSG 8962)',
              description: [
                'The Karna Chana was released in the year 2001 also, known as CSG 8962, this variety takes 140-145 days to mature after transplanting. This variety is said to be good for non-irrigated areas. The average yield of this variety of chickpeas is 22-25kg/ha.',
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is known as one of the best chickpea importer from India and we can be trusted with various export-related work with ease. The world, Chickpeas are one of our main popular export products. Healthy to eat and delicious in taste, chickpea is now demanded by various countries. If you are looking to export of chickpeas, Pisum is the best choice!',
          ],
        },
      },
      {
        slug: Products.PEAS,
        name: 'Peas',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.PEAS}.jpg`,
        data: {
          title: 'Indian Pea Exporters',
          layoutType: 'standard',
          headerImage: `/assets/product/${ProductCategory.PULSES}/${Products.PEAS}.jpg`,
          description: [
            'Due to the growing popularity of peas around the world, the pea exporter in India has to increase their exports accordingly. Peas are healthy to eat and are specifically used for many cuisines looking to the increased to get export from India. Peas can be exported to the from frozen form. The Indian peas exporter export premium quality peas from India.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '84 calories / kilogram' },
              { name: 'Carbs', value: '14 grams' },
              { name: 'Fiber', value: '6 grams' },
            ],
            protein: [{ name: 'Protein', value: '5 grams' }],
            fat: [{ name: 'Fat', value: '0.4g/100 grams' }],
            vitamins: [
              { name: 'Vitamin A', value: 'Vitamin A' },
              { name: 'Vitamin C', value: 'Vitamin C' },
              { name: 'Vitamin K', value: 'Vitamin K' },
            ],
            minerals: [
              { name: 'Sodium', value: 'Sodium' },
              { name: 'Calcium', value: 'Calcium' },
              { name: 'Iron', value: 'Iron' },
              { name: 'Magnesium', value: 'Magnesium' },
              { name: 'Potassium', value: 'Potassium' },
              { name: 'Phosphorus', value: 'Phosphorus' },
              { name: 'Copper', value: 'Copper' },
            ],
          },
          varieties: [
            {
              id: 1,
              name: 'ASAUJI',
              description: [
                'Asauji is a Desi variety with compact bushed variety of peas. Pods in this variety are produced singly. The flowering takes place in 30-35 days after planting. The plant of this variety of peas are mixed to 3 cm long, rounded, dark green in color and narrow in shape. These peas appear round when fully developed and are mostly seeded.',
              ],
            },
            {
              id: 2,
              name: 'ARKEL',
              description: [
                'The Arkel variety of peas is an early variety from Punjab. The plant is a dwarf but the growth is vigorous and it can grow up to 40 cm. The flowers of Arkel are white and are borne in doubles. The pods are dark green in colour and 8 cm long flavored bearing the pods mostly borne at the top nodes.',
              ],
            },
            {
              id: 3,
              name: 'LITTLE MARVEL',
              description: [
                'The Little Marvel is a dwarf with wrinkled seeded cultivated from England. The pods are of foliage dark green color. The first flowers appears at the 7th node. This variety is well adapted to the long, cool, thick and dark green. Common to it are sweet taste.',
              ],
            },
            {
              id: 4,
              name: 'JAWAHAR MATAR',
              description: [
                'The Jawahar Matar variety was developed at Jabalpur through line hybridization of 77-3 pury dwarf developed by selection. The height of Jawahar Matar variety is 50 cm. The pods are light green in color and in shape are 8 cm various seeded. The first flowering and shortend at 50-55 days after sowing.',
              ],
            },
            {
              id: 5,
              name: 'HARBHAJAN (EC 33866)',
              description: [
                'The Harbhajan variety of peas was developed at Jabalpur by selection from the exotic germline lines. It is an early variety and from growing can be made in all days of sowing. The pods of these peas are small with golden, round and small seeded. The average pod yield of this variety is 8.1 tons.',
              ],
            },
            {
              id: 6,
              name: 'BONNEVILLE',
              description: [
                'Bonneville comes was introduced in the USA. It is one of the most popular varieties of peas. This plant is characterized in height and the flowers are mostly borne in doubles. The pods are light green, straight, dark and wrinkled seeds. It bears around 6-7 kg pods mostly borne.',
              ],
            },
            {
              id: 7,
              name: 'LINCOLN',
              description: [
                'The Lincoln is a tall variety are medium tall in size. It is generally double podded and the pods are dark green, curved, and big with 8-9 seeds. The flowering of this variety can start around 60-70 days after sowing. The average pod yield of this variety is around 8.0 tons.',
              ],
            },
            {
              id: 8,
              name: 'PUNJAB 89 (P-89)',
              description: [
                'The Punjab 89 variety of peas was developed at Ludhiana through combined from the hybrid progeny of the cross Punjab × Arenson 69. The plant is the picking to the medium height for about 60 cm. The plant of sowing. The pods are dark green, long, and slightly curved at the same with 7-9 green, wrinkled, and have sweet taste.',
              ],
            },
            {
              id: 9,
              name: 'AZAD P-2',
              description: [
                'The Azad P-2 is another medium resistant variety developed at Kantnagar through advanced pedigreed selection from the cross Bonneville × early. Peas plants of this variety are tall, semi with light green foliage and dark leaves. The pods of Azad P-2 are medium in size, light green, straight, pointed, and have a high yield of around 8 tons per hectare and cropped seeds.',
              ],
            },
            {
              id: 10,
              name: 'OOTY-1',
              description: [
                'The Ooty-1 developed at Udagamandalam through pure line selection from the accession of P.S. This plant is a dwarf type and has a yield potential of 8.5 tons per hectare. The Ooty-1 is resistant to powdery.',
              ],
            },
          ],
          conclusion: [
            'Pisum Foods export the finest quality of peas derived being one of the leading pea importer from India, Pisum has extensive experience of the food industry and experts products to numerous corners of the world with our global connections and in-depth knowledge and expertise of the export industry, we will help you get the best buyers for your products. If you are looking to export peas from India, contact us now!',
          ],
        },
      },
      {
        slug: Products.KIDNEY_BEANS,
        name: 'Kidney Beans',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.KIDNEY_BEANS}.jpg`,
        data: {
          title: 'Indian Kidney Beans Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/product/${ProductCategory.PULSES}/${Products.KIDNEY_BEANS}.jpg`,
          description: [
            'The kidney beans are a variety of the common beans that are dried and are generally available throughout the year. They are reddish-brown in color and are shaped like a kidney. They have a unique taste and are used in both hot and cold recipes. Therefore, kidney beans exporter in India export kidney beans to numerous countries in the world. These beans are majorly used in Mexican and Indian cuisines to make curries, salads as an and so forth. The kidney beans export from India has thus been growing over the years. The Indian kidney beans exporter also earns good revenues from these exports today. Pisum Foods is one of the best exporters of kidney beans export from India.',
          ],
          conclusion: [
            'If you wish to export from India, Pisum Foods is one of the leading exporters in India. When you export products, it comes with several responsibilities including documentation, checking if the product meets the quality and health standards and so on. Pisum foods, the best importers from India, will assist you with every step on the way. Pisum will make sure that your products reach any corner of the world fresh and safe!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Kidney beans are known to be an excellent source of protein and nutrients. This is one reason why kidney beans import from India has seen the rise. These beans are also said to be rich in minerals, vitamins, antioxidants, there are on, and so forth. The kidney beans exporter in India export premium quality beans to many places in the world. Exporters also ensure timely delivery and health and safety measures for the export of kidney beans.',
            ],
            specification: {
              productName: 'Kidney Beans',
              origin: 'Peru',
              family: 'Fabaceae',
              binomialName: 'Phaseolus vulgaris',
            },
            ingredients: {
              nutrients: {
                calories: 'Carbohydrates 23.0',
                carbohydrates: '',
                fiber: '',
              },
              minerals: ['Folate', 'Iron', 'Copper', 'Manganese', 'Molybdenum'],
              vitamins: ['Vitamin K1'],
              protein: '8.7 g',
              fats: 'Fat 0.5mg',
            },
            usesAndBenefits: {
              uses: [
                'Kidney beans are also known as Rajma in India. They are famous for a dish also called Rajma. It is a curry which can be eaten with rice or bread. Rajma is used in many cuisines across the world.',
                'Kidney beans are a rich source of many minerals like potassium and magnesium. The beans also contain dietary fiber that helps to lower cholesterol levels.',
                'It has a high content of protein and helps maintain healthy blood sugar level.',
                'These beans does not act as energy booster because of the iron content present in it and helps in better digestion.',
              ],
            },
          },
        },
      },
      {
        slug: Products.SOYABEAN,
        name: 'Soya Bean',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.SOYABEAN}.jpg`,
        data: {
          title: 'Indian Soya Bean Exporters',
          layoutType: 'standard',
          headerImage: `/assets/product/${ProductCategory.PULSES}/${Products.SOYABEAN}.jpg`,
          description: [
            'India has a favourable climate and soil conditions for the growth of many fruits, vegetables, grains, spices so on and so forth. Soybean exporter in India export tonnes of soybean abroad every year. Soya bean export from India is on the rise due to the growing popularity of soybean worldwide. Indian Soya bean exporter exports around 13 million tonnes of soybean to countries like Vietnam, Japan, Thailand, Indonesia, Iran, Belarus using container and bulk vessels.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '446/100 grams' },
              { name: 'Carbohydrates', value: '30g' },
              { name: 'Fiber', value: '9g' },
            ],
            protein: [{ name: 'Protein', value: '36 g' }],
            fat: [{ name: 'Fat', value: '20g' }],
            vitamins: [{ name: 'Vitamin K1', value: 'Vitamin K1' }],
            minerals: [
              { name: 'Calcium', value: 'Calcium' },
              { name: 'Copper', value: 'Copper' },
              { name: 'Iron', value: 'Iron' },
              { name: 'Manganese', value: 'Manganese' },
              { name: 'Phosphorus', value: 'Phosphorus' },
            ],
          },
          varieties: [
            {
              id: 1,
              name: 'AHILYA-1 (NRC 2)',
              description: [
                'Ahilya-1 was known as NRC 2 is a variety of Soybean which is resistant to Rhizoctonia and bright, green mosaic virus, bacterial blight, and bacterial by Rhizoctonia leaf spot and Anthracnose. This variety of soybean takes around 95-100 to mature after transplanting. The average yield for this variety of soybean is 20-25q/ha.',
              ],
            },
            {
              id: 2,
              name: 'AHILYA-3 (NRC 7)',
              description: [
                'Ahilya-3 is a variety of soybean which is resistant to bacterial blight, green mosaic virus, bacterial pustules aflatoxin, soybean mosaic, Rhizoctonia and Cercospora leaf spots. It is tolerant to stem fly, girdle beetle, powdery and grey mold fungal, rust so on. This variety of Ahilya-3 takes around 90-95 to mature after transplantation.',
              ],
            },
            {
              id: 3,
              name: 'ALANKAR',
              description: [
                'This is a variety of soybean which matures around 95-105 days after transplanting. The average yield for this variety of soybean is around 20-25q/ha. This Alankar variety of soybean is resistant to bacterial pustules and tolerant to yellow mosaic.',
              ],
            },
            {
              id: 4,
              name: 'ADT-1',
              description: [
                'This variety of soybean matures around 85-90 days after transplanting. The ADT-1 variety of soybean is also known for tolerance to leaf minor and leaf mosaic.',
              ],
            },
            {
              id: 5,
              name: 'DURGA ( JS 79-280)',
              description: [
                'The Durga variety of soybean matures around 90-105 days after transplanting. The average yield of this variety of soybean which is exported from India by many exporters is 23-28q/ha. This variety is also resistant to bacterial pustules.',
              ],
            },
            {
              id: 6,
              name: 'GUJARAT SOYBEAN I ( J-231)',
              description: [
                'The Gujarat Soybean I also known as J-231 matures around 90-95 days after transplanting. The average yield of this variety of soybean is 20-25q/ha. This variety is being resistant of diseases and pests in Gujarat.',
              ],
            },
            {
              id: 7,
              name: 'HARA SOY (HIMSO 1563)',
              description: [
                'The Hara Soy variety of Soybean is immune to a bacterial pustules and highly resistant to brown spot, bacterial blight, and is long pod and pod and leaf blight. This variety is said to be the first green culinary purpose variety in soybean. The average yield for this variety is around 15-20q/ha.',
              ],
            },
            {
              id: 8,
              name: 'INDIRA SOY 9',
              description: [
                'Indira Soy 9 is a variety of Soybean resistant to rust. It is also moderately resistant to stem tunneling, girdle beetle and leaf folder. This variety is said to perform well under low to moderate plant densities.',
              ],
            },
            {
              id: 9,
              name: 'JS 2',
              description: [
                'The JS-2 variety for JS 2 it matures is around 90-95 days after transplanting. The average yield for this variety of Soybean is around 20-25q/ha. JS-2 variety is also said to be resistant to bacterial pustule and is tolerant to Rhizoctoniosis.',
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the leading soybean importers from India. Due to the rising demand of Soybeans, Indian agriculture have also increased the amount of soybeans produced and exported from India. The export of soya bean has also been a revenue earning industry for many exporters. If you are interested in the export of Soybeans, Pisum is the best option!',
          ],
        },
      },
      {
        slug: Products.PIGEONPEA,
        name: 'Pigeon Pea/Arhar/Tur',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.PIGEONPEA}.jpg`,
        data: {
          title: 'Indian Pigeon Pea Exporters',
          layoutType: 'standard',
          headerImage: `/assets/product/${ProductCategory.PULSES}/${Products.PIGEONPEA}.jpg`,
          description: [
            'Pigeon peas is one of the most popular tropical and subtropical legumes. It is fast-growing and also known to be drought resistant. The pigeon pea exporter in India exports tonnes of pigeon pea each year. Pigeon peas are used in many cuisines across the world including India and Indonesia. Thus the pigeon pea export from India has been on the rise. Due to its use in several cooking and as an Indian pigeon pea exporter is earning good profits. Many varieties are included in pigeon pea export from India.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '343 calories' },
              { name: 'Dietary Fiber', value: '15 g' },
              { name: 'Sugar', value: '5.7 g' },
              { name: 'Carbohydrates', value: '63 g' },
            ],
            protein: [{ name: 'Protein', value: '22g' }],
            minerals: [
              { name: 'Folates', value: 'Folates' },
              { name: 'Magnesium', value: 'Magnesium' },
              { name: 'Potassium', value: 'Potassium' },
              { name: 'Phosphorus', value: 'Phosphorus' },
              { name: 'Copper', value: 'Copper' },
              { name: 'Manganese', value: 'Manganese' },
            ],
          },
          varieties: [
            {
              id: 1,
              name: 'UPAS-120',
              description: [
                'UPAS-120 is known to be enriched at Pantnagar and is an early black maturing selection. The plants of this variety of Pigeon Pea are medium size with long pod of semi-spreading type. Generally, it is yellow in color with red streaks on it. The leaves are broad and light brownish-green.',
              ],
            },
            {
              id: 2,
              name: 'PANT A3',
              description: [
                'Pant A3 is a variety of pigeon peas which takes around 125-150 to mature after transplanting. These plants are semi-erect and determinate. Based on less three plants have a 4 seeds per pod.',
              ],
            },
            {
              id: 3,
              name: 'ICPL 87 (PRAGATI)',
              description: [
                'ICPL 87 is a short-duration, wilt-resistant, high-yielding variety of pigeon pea. This variety is known to be suitable for both single and multiple harvest systems. It was released as the Pragati variety in the peninsular part of India in 1986. It was developed by pedigree selection from a cross ICPA 8508 (1-1-4) × 877.',
              ],
            },
            {
              id: 4,
              name: 'PUSA AGETI',
              description: [
                'Pusa Ageti is an early variety of pigeon pea. The plants are dwarf, compact, determining and bold seeded. It has a 3 seeds pod potential and the average yield of this variety is around 1.5 t/ha. The time to maturity is 90-100 days.',
              ],
            },
            {
              id: 5,
              name: 'PUSA 84',
              description: [
                'The Pusa 84 variety plants are usually medium tall and semi-spreading. The time to maturing is around 140-160 days for this variety of pigeon pea. Pusa 84 grains are brown seeded.',
              ],
            },
            {
              id: 6,
              name: 'HY 3A',
              description: [
                'The HY 3A plants are small tall plants with a green stem. They are white and bold seeded with the average yield of around 1.5-2.0 t/ha. The time to maturity for these plants is around 160-180 days.',
              ],
            },
            {
              id: 7,
              name: 'GWALIOR 3',
              description: [
                'Gwalior 3 is a late-maturing variety of pigeon pea. The plants are usually tall and bushy. The stem of this variety is generally greenish red in color. The grains of this plant are medium in size and light brown in color.',
              ],
            },
            {
              id: 8,
              name: 'LAXMI',
              description: [
                'Laxmi is another variety of pigeon peas exported from India. This is a perennial variety used in semi-spreading. This variety is known to be tolerant to wilt and has a potential yield of around 2 t/ha.',
              ],
            },
            {
              id: 9,
              name: 'BDN 1',
              description: [
                'The BDN 1 variety is known to be moderately resistant to wilt and resistant to sterility mosaic. It was released for the general cultivation in southern Maharastra and Marathwada region for rain-rainfed areas, light and medium soils. The genotype matures in around 155-165 days.',
              ],
            },
          ],
          conclusion: [
            'If you are looking for a pigeon pea importer from India, Pisum Foods is one of the best options! We at Pisum Foods have extensive experience in the food export industry and have global connections. We export spices, pulses, grains, fruits, vegetables and such other food products to various corners of the world. Pigeon pea import from India is a rapidly growing business and we can assure you that you will find the best buyers and reach the customers in a timely manner. Looking for export of pigeon pea? Pisum is the place for you!',
          ],
        },
      },
      {
        slug: Products.BLACK_EYED_BEANS,
        name: 'Black-Eyed Beans / Cowpea',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.BLACK_EYED_BEANS}.jpg`,
        data: {
          title: 'Indian Cowpea Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/product/${ProductCategory.PULSES}/${Products.BLACK_EYED_BEANS}.jpg`,
          description: [
            'The Cowpea is an annual herbaceous legume and is primarily self-pollinated. The cowpea exporter in India exports tonnes of cowpea abroad. People are now understanding the importance and uses of Cowpeas. The black-eyed beans export from India has thus been on a rise for a few years for an Indian cowpea exporter, this is a good business opportunity. The cowpea export from India includes different varieties being exported.',
          ],
          conclusion: [
            'If you are interested in the export of Cowpeas, Pisum Foods is the best choice for you! We at Pisum Foods understand that the process of cowpea export from India can be complicated at times. We are here to make it easy for you! Our trained executives will help you at every step during the export of cowpea from India. We make sure that the export of cowpeas from India is carried out in many years, we make sure that all the health and safety regulations are maintained. Looking for export of cowpeas? Contact Pisum Foods now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global demand for Cowpea has been increasing steadily. The black-eyed beans exporter in India has to increase the exports each year. The Cowpea import from India involves importing premium quality beans to different countries in the world. The Cowpea is known to be an important grain legume in South Africa and parts of Sub-Saharan Africa.',
            ],
            specification: {
              productName: 'Cowpea',
              origin: 'West Africa',
              family: 'Vigna unguiculata',
              binomialName: 'Fabaceae',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 116',
                carbohydrates: 'Total Carbohydrates 21 g',
                fiber: 'Dietary Fiber 7 g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin C', 'Vitamin D', 'Vitamin A', 'Vitamin B6'],
              protein: '8 g',
              fats: '0.5g',
            },
            usesAndBenefits: {
              uses: [
                'The leaves of the cowpea plants are sometimes used as a vegetable dish. The leaves of this plant can also be dried and used as a meat substitute.',
                'The seeds, the sometimes roasted and used as a substitute for coffee. Several local seeds of cowpeas can be mixed with onions and spices can be fried in oil.',
                'Cowpeas can also be planted for hay production. The hay can then be sold.',
                'Cowpea seed is very nutritious. It can form an essential component of our diet. It is also a nutritious livestock feed.',
              ],
            },
          },
        },
      },
      {
        slug: Products.HORSE_GRAM,
        name: 'Horse Gram',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.HORSE_GRAM}.jpg`,
        data: {
          title: 'Indian Horse Gram Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.HORSE_GRAM}.jpg`,
          description: [
            'Horse gram is a slow growing arid and semi-arid annual or perennial herb. It grows best on tropics and subtropics. The horse gram exporter in India exports tonnes of Horse Gram each year to many countries. Horse Gram is also known as a miraculous superfood. Therefore, horse gram export from India has been increasing over time. This is a good opportunity for the Indian Horse Gram exporter to expand his business and enter the international market. The horse Gram export from India includes the export of many varieties of this product.',
          ],
          conclusion: [
            'Pisum Foods is one of the leading Horse Gram importers from India. We help our clients export various food products including fruits, vegetables, grains, pulses, oilseeds, so on and so forth. The export of Horse Gram is a great business opportunity for our local farmers and vendors to enter the international market and earn good revenues. If you are looking for Horse Gram export from India, Contact Pisum Foods now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global market demand of Horse Gram has been increasing worldwide. This may be because of the several benefits one gets from this superfood. The horse gram exporter in India exports more and more horse grain to various parts of the world. The horse gram import from India has thus been increasing too.',
            ],
            specification: {
              productName: 'Horse Gram',
              origin: 'Peninsular India',
              family: 'Macrotyloma uniflorum',
              binomialName: 'Fabaceae',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 321 kcal',
                carbohydrates: 'Carbs - 57g',
                fiber: 'Dietary Fiber - 5.3g',
              },
              minerals: ['Calcium', 'Iron', 'Potassium'],
              vitamins: ['Vitamin D'],
              protein: '22 g',
              fats: '0g',
            },
            usesAndBenefits: {
              uses: [
                'Horse gram is said to help with digestion and prevent diarrhea. Horse Gram has a good amount of fiber which helps solve up nutritional fluids from the intestine and the stomach. This, therefore, reduces the occurrence of diarrhea and less motions.',
                'It Ayurveda it is suggested that eating horse grain every day may help a person lose weight.',
                'Experts say that horse gram helps to reduce the LDL or bad cholesterol levels. Bad cholesterol levels in the veins could be removed when horse gram is consumed due to the levels of lipids in it.',
                'Horse gram is also said to be good for the skin. It may be used as a topical face pack to treat rashes, boils, and disorders of the skin to some extent as well. This is because it is antimicrobial and antibacterial. It also has plenty of antioxidants in a along with minerals to nourish the skin.',
              ],
            },
          },
        },
      },
      {
        slug: Products.PUFFED_RICE,
        name: 'Puffed Rice',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.PUFFED_RICE}.jpg`,
        data: {
          title: 'Indian Puffed Rice Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.PUFFED_RICE}.jpg`,
          description: [
            'Puffed rice is made by introducing air into the rice which makes the grains larger and lighter, and also reduces moisture to achieve a crisp texture. The Puffed rice exporter in India exports tonnes of puffed rice abroad from India. The Puffed Rice export from India has been increasing over the years. This may be because of the several benefits of this type of rice. The Indian Puffed Rice exporter, therefore, is earning good revenues from this export. The puffed rice export includes the export of various varieties of this rice.',
          ],
          conclusion: [
            'If you are looking for a Puffed Rice importer from India, Pisum Foods is your best choice! We at Pisum Foods have extensive experience and knowledge in the food export industry. Our executives will help you at every step of the process of the export of Puffed Rice. From documentation until the final delivery of the products, it will all be taken care of by Pisum. Interested in Puffed Rice export from India? Contact us now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The global market demand for Puffed Rice has been growing over the years. Therefore, the puffed rice exporter in India exports an increasing amount of puffed rice and its products to many countries in the world. New York, Hongkong, Singapore, and such other parts are some of the top importing parts for Puffed Rice import from India. Puffed Rice also enjoys growing popularity due to its nutritional values.',
            ],
            specification: {
              productName: 'Puffed Rice',
              origin: 'India',
              family: '',
              binomialName: '',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 56 kcal',
                carbohydrates: 'Carbohydrates - 12.3g',
                fiber: 'Fiber - 0.4g',
              },
              minerals: ['Thiamine', 'Riboflavin', 'Niacin', 'Folate'],
              vitamins: [],
              protein: '1 g',
              fats: '0.1mg',
            },
            usesAndBenefits: {
              uses: [
                'Puffed rice has many culinary benefits, for example, puffed rice is the main ingredient of the famous Indian snack called bhelpuri!',
                'Puffed rice is said to be good to prevent constipation. The constipatory and the beneficial bacteria in puffed rice help in reducing constipation problems.',
                'Puffed rice is also said to be helpful for maintaining blood pressure.',
                'Puffed rice is good for weight loss. It is extremely light and has low calories. It helps you to get rid of those deposited fats too.',
              ],
            },
          },
        },
      },
      {
        slug: Products.RED_LENTIL,
        name: 'Masoor Dal / Red Lentil',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.RED_LENTIL}.jpg`,
        data: {
          title: 'Indian Red Lentil Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.RED_LENTIL}.jpg`,
          description: [
            'Red Lentils are known across the world for their great nutritional values. The red lentil exporter in India exports tonnes of red lentil abroad each year. These lentils can be eaten in different forms and have a delicious taste. The Red Lentil export from India has been increasing over the years. It is a good opportunity for the Indian Red Lentil exporter to enter the international market and expand his business. Red Lentil export includes the export of various varieties of lentils.',
          ],
          conclusion: [
            "If you are looking for a Red Lentil importer from India, Pisum Foods is the best option for you! We understand that the process of the export of Red Lentil may be complicated for some people. But don't worry now! We at Pisum Foods will help you with each process involved in the Red Lentil export from India. Want to export Red Lentil? Contact Pisum Foods now!",
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The global demand for red lentil has been rapidly increasing. The Red lentil bulk contract to 22.5 cents per pound at the start of 2020, up from 20 cents a month ago. The Red Lentil exporter in India has been exporting increasing amounts of red lentil each year. The Red Lentil import from India may also be increasing due to the increasing realization of the health benefits of the products.',
            ],
            specification: {
              productName: 'Red Lentil',
              origin: 'Western and Central Asia',
              family: 'Leguminae',
              binomialName: 'Lens culinaris',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 166',
                carbohydrates: 'Total Carbohydrates 20 g',
                fiber: 'Dietary Fiber 8 g',
              },
              minerals: ['Magnesium', 'Cobalt/iron'],
              vitamins: [],
              protein: '9 g',
              fats: '0.4g',
            },
            usesAndBenefits: {
              uses: [
                'Red Lentils consist of Polyphenols, Polyphenols are active compounds that fight against various bad agents in the body. They protect you from ultraviolet rays, radiation, heart disease, cancer so on, and so forth.',
                'They are rich in proteins. Protein deficiency is sometimes found in vegans and vegetarians. Eating lentils is a good source of protein for your body.',
                'Red lentils can also a good source of Iron. Iron is essential for keeping oxygen pumping throughout your body.',
                'Red lentils and also a very good source of fiber. Fiber is essential to maintain a good digestive system and also useful for weight loss.',
              ],
            },
          },
        },
      },
      {
        slug: Products.GREEN_GRAM_MOONG,
        name: 'Green Gram / Mung Bean',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.GREEN_GRAM_MOONG}.jpg`,
        data: {
          title: 'Indian Green Gram Exporters',
          layoutType: 'standard',
          headerImage: `/assets/banners/${Products.GREEN_GRAM_MOONG}.jpg`,
          description: [
            'The green gram, also known as Mung Bean, is basically a plant species in the legume family. The green gram exporter in India exports tonnes of green gram abroad every year. The popularity of green gram has been growing in the world. This may be a reason why green gram export from India has been increasing over the years. This is a good business opportunity for the Indian green gram exporter to enter the international market. The green gram export includes the export of various varieties of green gram.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '347 calories' },
              { name: 'Carbs', value: '63 g' },
              { name: 'Dietary fiber', value: '16 g' },
            ],
            protein: [{ name: 'Protein', value: '24g' }],
            vitamins: [
              { name: 'Vitamin A', value: 'Vitamin A' },
              { name: 'Vitamin C', value: 'Vitamin C' },
              { name: 'Vitamin D', value: 'Vitamin D' },
              { name: 'Vitamin B6', value: 'Vitamin B6' },
            ],
            minerals: [
              { name: 'Calcium', value: 'Calcium' },
              { name: 'Magnesium', value: 'Magnesium' },
            ],
            fat: [{ name: 'Fat', value: '1.2g' }],
          },
          varieties: [
            {
              id: 1,
              name: 'CO 1',
              description: [
                'Released in 1985, CO 1 is a variety of Green gram imported from India. It is a pure line selection from Coimbatore local. The duration required to mature is 65 days. The grain yield is around 750 kg/ha. This variety is suitable for summer.',
              ],
            },
            {
              id: 2,
              name: 'ADT 1',
              description: [
                'The ADT 1 is a variety of green gram released in 1986. It is a pure line selection from Adiuthurai local. The time taken for this variety of green gram to mature is around 60 days. The normal grain yield of this variety is around 650 kg/ha. This variety is suitable for rice follow.',
              ],
            },
            {
              id: 3,
              name: 'JGG 1 (RAJENDRAN)',
              description: [
                'Released in 1973, this variety of green gram is a selection from Jeyendradevi local. The JGG 1 variety of green gram. The time required for this variety to mature is around 65 days. The grain yield of JGG 1 is around 850 kg/ha. This variety is said to be tolerant to drought.',
              ],
            },
            {
              id: 4,
              name: 'KM 1',
              description: [
                'The KM 1 is a variety of green gram appeared from India to many countries in the world. It was released in 1978. It is said to be produced from the cross of K1 and K 10. The time required for this variety to mature is about 60-70 days. The grain yield of this variety is around 750kg/ha.',
              ],
            },
            {
              id: 5,
              name: 'KM 2',
              description: [
                'The KM 2 is a variety of green gram released in the year 1978. The normal grains yield of this variety of green gram is about 750kg/ha. This variety of green gram is said to be resistant to YMV and is a good base.',
              ],
            },
            {
              id: 6,
              name: 'PAIYUR I',
              description: [
                'Released in 1985, the Paiyur variety of green gram is a pure line selection from OPT 103. The time taken for this variety of green gram to mature is about 60-70 days. The grain yield of this variety is around 750kg/ha. There is a low incidence of YMV for this variety and is a well suited for rainfed crops of monocrop, fallow, summer, Kharif and Rabi seasons.',
              ],
            },
            {
              id: 7,
              name: 'VAMBAN 1',
              description: [
                'The Vamban 1 variety of green gram is a hybrid derivative of K 8 × PMB 5. This variety was released in 1993. The time required for this variety to mature is around 60-70 days. The grain yield of Vamban 1 is around 950 kg/ha. It is said to be tolerant of YMV.',
              ],
            },
            {
              id: 8,
              name: 'VBN (Gg) 2',
              description: [
                'This variety is a cross between VBN 4 and KM 204. It was released in 2001. This variety of green gram produces other around 85-90 days. The average grain yield for this variety is 750kg/ha. The grains are deep white in flowers are infused and powdery in YMV.',
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the leading Green Gram Importers from India. We understand that export of green gram can be a complicated process. But no worries! Pisum is here to help you! Our highly trained executives will help you with every process involved in the export of green gram until your products are delivered to the destination. We have extensive experience in the food export industry and will support you in case of any issues. If you are looking for a Green Gram exporter from India!',
          ],
        },
      },
      {
        slug: Products.BLACK_GRAM,
        name: 'Black Gram',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.BLACK_GRAM}.jpg`,
        data: {
          title: 'Indian Black Gram Exporters',
          layoutType: 'standard',
          headerImage: `/assets/banners/${Products.BLACK_GRAM}.jpg`,
          description: [
            'Black Gram also called Black lentil, is one of the most widely consumed lentils in India. The lentils are round and black in colour and are slightly flattened in shape. Black gram is generally used for cooking various curries and is also used to make fermented foods like dosa, idli and vada. Due to the increasing global demand of Black Gram, the Black Gram export from India has been on a rise over the years. This is a great opportunity for the Indian Black Gram exporter to expand their business and enter the international marketplace. The Black Gram export includes the export of various varieties of Black Gram.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '341 kcal' },
              { name: 'Dietary Fiber', value: '18.3 g' },
              { name: 'Carbohydrates', value: '58.99 g' },
            ],
            protein: [{ name: 'Protein', value: '25.21g' }],
            vitamins: [
              { name: 'Vitamin B', value: 'Vitamin B' },
              { name: 'Vitamin C', value: 'Vitamin C' },
              { name: 'Vitamin K', value: 'Vitamin K' },
            ],
            minerals: [
              { name: 'Calcium', value: 'Calcium' },
              { name: 'Iron', value: 'Iron' },
              { name: 'Magnesium', value: 'Magnesium' },
            ],
            fat: [{ name: 'Fat', value: '1g' }],
          },
          varieties: [
            {
              id: 1,
              name: 'ADT 1',
              description: [
                'The ADT 1 variety of Black gram is a selection from Aduthurai local released in the year 1985. This variety takes around 85 days to mature from transplantation. The grain yield produced is around 490 kg/ha. This variety of black gram has a high protein content of 18.1%.',
              ],
            },
            {
              id: 2,
              name: 'CO 1',
              description: [
                'The CO 1 variety of Black Gram is a pure line selection from Tiruchirappalli local released in 1985. This variety of black gram takes around 85 days to mature. The grain yield is around 800 kg/ha when normal and 700 kg/ha when irrigated. The variety was released for summer condition.',
              ],
            },
            {
              id: 3,
              name: 'KM 1',
              description: [
                'The KM 1 variety of Black Gram was released in 1977. This variety takes around 90-75 to mature from transplantation. The KM 1 has a grain yield of about 650 kg/ha when irrigated. This variety of Urd seed type and is also known for its drought tolerant.',
              ],
            },
            {
              id: 4,
              name: 'TMV 1',
              description: [
                'The TMV 1 variety of Black Gram was developed from the cross of Vellon Jhaula and KM 1. This variety was released in 1976. It takes around 80-90 days for this variety to mature. The grain yield of TMV 1 is around 650 kg/ha when irrigated. This variety is said to be resistant to YMV and resistant to root rot.',
              ],
            },
            {
              id: 5,
              name: 'VAMBAN 1',
              description: [
                'The Vamban 1 variety of Black Gram was released in the year 1987. It takes around 80-85 days for this variety to mature from transplantation. The grain yield of this variety is around 750 kg/ha when normal and 900 kg/ha when irrigated. This selection is a high yielding variety and is moderately resistant to YMV.',
              ],
            },
            {
              id: 6,
              name: 'APK 1',
              description: [
                'The APK 1 variety of Black Gram was released in 1991. This variety takes around 75 days for mature after transplantation. The grains yield for this variety when irrigated is around 450 kg/ha. The APK 1 is well suited for summer conditions for their cropping 100° celsius.',
              ],
            },
            {
              id: 7,
              name: 'VBN (BG) 4',
              description: [
                'The VBN Bg 4 variety of Black Gram was released in 2003. This variety takes about 75-80 days to mature after transplanting. The grain yield for this variety is around 780 kg/ha when normal and 850 kg/ha when irrigated. This variety is resistant to Yellow Mosaic Virus.',
              ],
            },
            {
              id: 8,
              name: 'MDU 1',
              description: [
                'The MDU 1 variety of Black Gram was released in 1994. This variety matures around 65 – 75 days after transplanting. The grain yield for this variety is about 750 kg/ha when irrigated. The MDU 1 is a high yielding variety and is resistant to leaf crinkle virus.',
              ],
            },
            {
              id: 9,
              name: 'KKM 1',
              description: [
                'The KKM 1 variety of Black Gram was released in 1997. This variety matures around 65 – 75 days after transplanting. The grain yield of this variety is around 900 kg/ha from Tirunal. The KKM 1 variety is a high yielding one and is moderately resistant to YMV and powdery mildew. It is also suitable for rice fallow.',
              ],
            },
          ],
          conclusion: [
            "Pisum Foods is the leading Black Gram Importers from India. We at Pisum Foods understand that the export of food products from India may be a complicated process for some of you. Don't worry, we are here to help you! With extensive experience in the food export industry, our executives at Pisum make sure that the export of Black Gram is carried out smoothly with any issues. We help our clients right from documentation until the final delivery of the products. If you are looking for food export from India, Contact Pisum now!",
          ],
        },
      },
      {
        slug: Products.CHANA_DAL,
        name: 'Chana Dal',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.CHANA_DAL}.jpg`,
        data: {
          title: 'Indian Chana Dal Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.CHANA_DAL}.jpg`,
          description: [
            'Chana dal is a split lentil. They are primarily baby chickpeas which have been split and polished. The Chana Dal exporter in India exports tonnes of Chana Dal to various countries in the world. Chana Dal is highly nutritious and also delicious to taste. Therefore, black-eyed beans export from India has been on a rise over the years. The Chana Dal export is a good opportunity for the Indian Chana Dal exporter, farmer and local vendors to expand their business and enter the international market.',
          ],
          conclusion: [
            'Pisum Foods is the leading Chana Dal importer from India. We at Pisum Foods help our clients right from the documentation process until the final delivery of the products. Our global presence and extensive experience in the export of Chana Dal have proved to be beneficial for most of our past customers. Our executives will support you in case of any issues, doubts or queries with regards to the export process. If you are looking for Chana Dal export from India, Contact us now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global Market demand for Chana Dal has been increasing in the world. This may be due to various reasons including the benefits and uses of Chana Dal. Chana dal is a good source of protein, especially for vegetarians. It is also diabetic friendly and keeps your heart healthy. The Chana dal exporter in India exports premium quality chana dal every year. Health, safety and such other measures must be adhered to while Chana Dal import from India is conducted.',
            ],
            specification: {
              productName: 'Chana Dal',
              origin: 'Indian Subcontinent',
              family: 'Fabaceae',
              binomialName: 'Cicer arietinum',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories - 364 kcal',
                carbohydrates: 'Total Carbohydrates 61 g',
                fiber: 'Dietary Fiber 17 g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin B6'],
              protein: '19 g',
              fats: '6g',
            },
            usesAndBenefits: {
              uses: [
                'Chana Dal is a great energy booster. It contains around 300 calories and is rich in vitamins and minerals.',
                'Chana Dal is also said to improve insulin response. As it is rich in magnesium, Chana Dal improves insulin response by lowering insulin resistance.',
                'Chana Dal is also effective in the regulation of blood pressure. It contains a high amount of potassium and a low amount of sodium which makes it an effective blood pressure regulator.',
                'Chana Dal also has a high amount of fiber. Fiber helps slow digestion and makes you feel full for a longer period.',
              ],
            },
          },
        },
      },
      {
        slug: Products.BEATEN_RICE,
        name: 'Beaten Rice',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.BEATEN_RICE}.jpg`,
        data: {
          title: 'Indian Beaten Rice Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.BEATEN_RICE}.jpg`,
          description: [
            'Beaten rice also called flattened rice is primarily rice which is flattened, light, and dry. Beaten rice is a low-cost wholesome food with good nutritional value. The Beaten Rice exporter in India exports a large quantity of the product every year. Due to the growing popularity of Beaten Rice all over the world, the Beaten Rice export from India has been increasing over the years. The Indian Beaten Rice exporter exports premium quality products abroad. The Beaten Rice export includes the export of various varieties of rice.',
          ],
          conclusion: [
            'Pisum Foods is one of the leading Beaten Rice importers from India. We at Pisum Foods provide holistic food export services for our clients. The export of Beaten Rice can sometimes be a complicated process. But no worries! The executives at Pisum will help you with each and every step until your products reach the destination safe and fresh. If you are looking for Beaten Rice export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Beaten rice also called Chura is made from paddy. It is popular in various parts of India. People of all age groups and from different regions love Beaten Rice recipes and therefore it is in mass consumption item. This is, therefore, a great opportunity for the Beaten Rice exporter in India to expand his business and enter the international market. Due to the great quality of the product, Beaten Rice import from India has been rising over the years.',
            ],
            specification: {
              productName: 'Beaten Rice',
              origin: 'India',
              family: '',
              binomialName: '',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories - 100 kcal',
                carbohydrates: 'Total Carbohydrates 25 g',
                fiber: 'Dietary Fiber 3 g',
              },
              minerals: [],
              vitamins: ['Vitamin C', 'Vitamin B6'],
              protein: '3 g',
              fats: '1g',
            },
            usesAndBenefits: {
              uses: [
                'Beaten Rice can be consumed in different ways like cooking rice in water, fried, with curd or milk or after cooking the cooked one. Beaten Rice can be cooked as short notice and is thus a convenient food item.',
                'Beaten Rice is also used in making snacks and other dishes such as Poha. It is majorly used in breakfast and such other places.',
                'Beaten Rice is good for diabetics. As it is rich in fiber, it promotes a slow and steady release of sugar into the bloodstream.',
                'Beaten Rice consists of 76.9% of carbohydrates and about 23% of fats. The healthy carbs are good for the body and provide the energy to the body to carry out its functions.',
              ],
            },
          },
        },
      },
      {
        slug: Products.FIELD_BEAN,
        name: 'Field Beans',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.FIELD_BEAN}.jpg`,
        data: {
          title: 'Indian Field Beans Exporters',
          layoutType: 'standard',
          headerImage: `/assets/banners/${Products.FIELD_BEAN}.jpg`,
          description: [
            'A field bean is a bean grown primarily for the raw edible beans. The Field Beans exporter in India exports tonnes of beans to various countries in the world. The Field Beans export from India has been increasing over the years probably due to the increasing global demand of the product. The Indian Field Beans exporter has a good opportunity to export this produces abroad and earn good revenues. Therefore, Field Beans export can be said to be a growing business.',
          ],
          nutritionFacts: {
            nutrients: [
              { name: 'Calories', value: '88 kcal' },
              { name: 'Fiber', value: '7 g' },
              { name: 'Total Carbohydrate', value: '16 g' },
            ],
            protein: [{ name: 'Protein', value: '5g' }],
            vitamins: [
              { name: 'Vitamin A', value: 'Vitamin A' },
              { name: 'Vitamin C', value: 'Vitamin C' },
              { name: 'Vitamin B-6', value: 'Vitamin B-6' },
            ],
            minerals: [
              { name: 'Calcium', value: 'Calcium' },
              { name: 'Iron', value: 'Iron' },
              { name: 'Magnesium', value: 'Magnesium' },
            ],
            fat: [{ name: 'Fat', value: '0g' }],
          },
          varieties: [
            {
              id: 1,
              name: 'RONQAI',
              description: [
                'Ronqai is known as a late flowering variety with high dry matter production. This variety of field Beans has white flowers and light brown husks. It is not much common fungal cultivar. The seed weight is about 6.5kg/ha. The Ronqai variety of field Beans grown in summer in Australia is a specific late-vigorous maturing herbaceous annual to avoid these perennial.',
              ],
            },
            {
              id: 2,
              name: 'KOALA',
              description: [
                'The Koala is an early maturing grain type. The average yield of Koala is around 6.5 t/ha to 7 t/ha. This field variety is relatively insensitive to day length and usually requires 55% flowering range is around 50-55 days from a horizontal planting to reach early local harvest.',
              ],
            },
            {
              id: 3,
              name: 'PUSA EARLY PROLIFIC',
              description: [
                'The Pusa Early Prolific is a variety of Field Beans. This variety bears early, medium-sized, thin and stringless pods in clusters. This variety is suitable for sowing both in the summer and the rainy season.',
              ],
            },
            {
              id: 4,
              name: 'PUSA SEM-2',
              description: [
                'The pods of the Pusa Sem-2 variety are long, dark green stringless and semi-round in outline. This variety is high yielding and tolerant of viruses and insect pest bases. Since its early is a suitable basis for all sowing to North India. The flowers of this variety appear on vigorous spikes, before the plant flowers.',
              ],
            },
            {
              id: 5,
              name: 'IGFRI - S - 224-II',
              description: [
                'IGFRI-S is known to be a quick growing dual semi-variety of field beans. It possesses a medium bearing habit. The pods of this variety are broad, flat, green, glabrous and fibrous. These are around 4-5 seeds per pod that greenish brown oval round at shape. The thickness of this variety varied from 4-5 HAs.',
              ],
            },
            {
              id: 6,
              name: 'IGFRI-S-228-I',
              description: [
                'The IGFRI-S-228-I variety is medium in growth. The size of development habit. It possesses a good rooting habit. The sizes of this plant are long, robust, thick, pigmented and yellowish. There are around 3 - 5 seeds per pod. The yield for this variety when sowed nutritional varieties from July - Aug. The size of grain brown colour that are later dried green beans.',
              ],
            },
            {
              id: 7,
              name: 'HA-3',
              description: [
                'The HA-3 variety is a photo-insensitive and determinant type with short branches 15-20 spikes. It can be cultivated throughout the year. It belongs to the Himalayan region and is medium to late maturity. The pods of this variety are said to be characterized above the foliage pods to remaining stems.',
              ],
            },
            {
              id: 8,
              name: 'CO-1',
              description: [
                'The CO-1 plants are generally short, bushy and erect. The flowering starts from the 45th day after sowing and continues for around 50 - 60 days. The average number of flowers in each inflorescence ranges between 15 - 50 and about 50% of the flowers set pods. The green pods are harvested around 60 - 80 days after sowing.',
              ],
            },
            {
              id: 9,
              name: 'KONKAN BHUSHAN',
              description: [
                'This is a high yielding determinate type plant. It has a shorter stem (about 1.8 - 2m) spread per hectare or approx 3.5 to 3.5 tonnes per hectare) compared to their original plants. It is a multi-type plant that requires is about 55 - 60 days after sowing.',
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is the leading Field Beans importer from India. We at Pisum Foods help our clients from the documentation process until the final delivery of the products. Our global presence and extensive experience have proved to be beneficial for most of our past customers. Our executives will support you in case of any issues doubts or queries with regards to the export of field beans. If you are looking for field beans export from India, Contact us now!',
          ],
        },
      },
      {
        slug: Products.URAD_DAL_SPLIT,
        name: 'Urad Dal Split',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.URAD_DAL_SPLIT}.jpg`,
        data: {
          title: 'Indian Urad Dal Split Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.URAD_DAL_SPLIT}.jpg`,
          description: [
            'Urad Dal Split also known as split black lentils. This dal retains the skin and has a strong flavour. It can be ground into a flour or a paste and used in various recipes. The Urad Dal Split exporter in India exports a large quantity of Dal every year. Due to its various uses and health benefits, the Urad Dal Split export from India has been growing over the years. The Indian Urad Dal Split exporter has a good opportunity to export his products to different corners of the world. The Urad Dal Split export includes various varieties of the Dal being exported from India.',
          ],
          conclusion: [
            'Pisum Foods is the best Urad Dal Split importer from India. Having extensive experience in the food export industry, we make sure that the process of export of Urad Dal Split is hassle-free for all our clients. We support our clients in every way possible, right from finding buyers for their products until the final delivery of the order. If you are looking for Urad Dal Split export from India, contact Pisum Foods now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Urad Dal Split is used while cooking various recipes. It is widely used while making South Indian cuisine like Dosa, chutney so on and so forth. The Urad Dal Split exporter in India has to export premium quality dal. The products should also adhere to the quality and safety guidelines of the country in order to avoid any complications or issues during the process. The Urad Dal Split import from India has been increasing due to the great reputation of the grain in the market.',
            ],
            specification: {
              productName: 'Urad Dal Split',
              origin: 'India',
              family: 'Fabaceae',
              binomialName: 'Vigna mungo (L.) Hepper',
            },
            ingredients: {
              nutrients: {
                calories: '',
                carbohydrates: '',
                fiber: '',
              },
              minerals: [],
              vitamins: [],
              protein: '',
              fats: '',
            },
            usesAndBenefits: {
              uses: [
                'Urad Dal Split has a high amount of Folic Acid. Folic Acid is required for various metabolic processes of your body.',
                'Urad Dal Split is also good for your blood. The Folic Acid in this dal helps your body to form and maintain new cells.',
                'Urad Dal Split is rich in calcium and Phosphorus. Therefore, this dal is said to be very good for your bones and teeth.',
              ],
            },
          },
        },
      },
      {
        slug: Products.MOTH_BEAN,
        name: 'Turkish Gram / Moth Bean',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.MOTH_BEAN}.jpg`,
        data: {
          title: 'Indian Moth Bean Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.MOTH_BEAN}.jpg`,
          description: [
            'Moth Bean is a herbaceous creeping plant from the Fabaceae family and Fabaceae subfamily. It is said to form a low lying but cover when grown fully. The Moth Beans exporter in India exports a huge quantity of the beans each year. Due to the growing popularity of Moth Beans, Moth Beans export from India has also been on a rise. This is, therefore, a great opportunity for the Indian Moth Beans exporter to expand his business and enter the international marketplace. The Moth Beans export includes various varieties and qualities of the product.',
          ],
          conclusion: [
            'Pisum Foods is a leading Moth Beans importer from India. We at Pisum Foods help our clients with each and every step while exporting products from India. Our team has extensive experience in the export industry. We make sure that the process of export of Moth Beans is carried out smoothly with the least confusion and hassle. We strictly adhere to all the health and safety restrictions of the government and make sure that your products are delivered safely. If you are looking for Moth Beans export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Moth Beans exporter in India exports good quality Beans to various parts of the world. The uses and benefits of Moth Beans are known to people today and so the Global Market Demand for the Moth Beans has been increasing over the years. The Moth Beans import from India has thus been a steady increase due to the great reputation and quality of the beans exported from India.',
            ],
            specification: {
              productName: 'Moth Bean',
              origin: 'India and Pakistan',
              family: 'Fabaceae',
              binomialName: 'Vigna aconitifolia',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 343 kcal',
                carbohydrates: 'Total Carbohydrates 62g',
                fiber: 'Dietary Fiber 4g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin B-6', 'Vitamin C'],
              protein: '23 g',
              fats: 'Fat 1.6g',
            },
            usesAndBenefits: {
              uses: [
                'Moth Beans are said to be useful for those who are trying to lose weight. These beans increase muscle mass that causes the burning of calories.',
                'Moth Beans are rich in protein which is essential to build and repair tissues. It is a great source of protein, especially for vegetarians.',
                'Eating Moth Beans regularly is effective for people having busy lives. Consuming Moth Beans and other food containing zinc helps to lower the impact of stress on the body.',
                'Moth beans are a powerhouse of nutrients. So its consumption helps you to build a strong immune system and defends the body against bacteria, fungi and viruses.',
              ],
            },
          },
        },
      },
      {
        slug: Products.WHOLE_MASOOR,
        name: 'Whole Masoor',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.WHOLE_MASOOR}.jpg`,
        data: {
          title: 'Indian Whole Masoor Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.WHOLE_MASOOR}.jpg`,
          description: [
            'Masoor dal also known as red lentils, is one of the most nutritious pulses with various health and medicinal benefits. Masoor Dal is a very important part of Indian cuisine. The Masoor Dal exporter in India exports a large quantity of the Dal abroad each year. Due to the growing popularity of this Dal in the global market, Whole Masoor export from India has been on the rise for a few years. The Indian Whole Masoor exporter exports premium quality products to various countries in the world. Whole Masoor export is, therefore, an emerging business opportunity today.',
          ],
          conclusion: [
            'If you are looking for the best Whole Masoor importer from India, Pisum Foods is your best choice! We at Pisum work in the field of export of Whole Masoor, vegetables, spices, grains, pulses, so on and so forth. Exporting food products can be a complicated process at times. But no worries! You can just drop a message to Pisum Foods and we will take care of your Whole Masoor export from India.',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Due to the popularity of the Masoor Dal worldwide, the Whole Masoor exporter in India is exporting more and more quantity of this product each year. Masoor Dal is said to be a powerhouse of nutrients and also may help in fighting various diseases. The Whole Masoor import from India has been growing due to the great reputation and quality of the Dal exported from India.',
            ],
            specification: {
              productName: 'Whole Masoor',
              origin: 'Mediterranean',
              family: 'Leguminosae',
              binomialName: 'Lens culinaris Medikus',
            },
            ingredients: {
              nutrients: {
                calories: 'Calories 67 kcal',
                carbohydrates: 'Total Carbohydrates 20g',
                fiber: 'Dietary Fiber 3.3g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin A', 'Vitamin B6', 'Vitamin C', 'Vitamin B5'],
              protein: '5 g',
              fats: 'Fat 1.6g',
            },
            usesAndBenefits: {
              uses: [
                'Whole Masoor may help Stabilize Blood Sugar Levels. It has a low glycemic index and inhibits the rise at which food is absorbed in the small intestine by blood.',
                'Due to the high proportion of dietary fiber, masoor dal effectively lowers the amount of cholesterol in the body and is thus healthy for the heart.',
                'Masoor dal is also consumed for weight loss. It has the perfect amount of carbohydrates with low fat content.',
                'Masoor dal is a powerhouse of vitamins and other nutrients like calcium and magnesium. Thus it also helps to maintain healthy teeth and bones.',
              ],
            },
          },
        },
      },
      {
        slug: Products.WHITE_URAD_DAL,
        name: 'Urad Dal Gota',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.WHITE_URAD_DAL}.jpg`,
        data: {
          title: 'Indian Urad Dal Gota Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.WHITE_URAD_DAL}.jpg`,
          description: [
            'Urad dal is also known as Split Black Gram. It is one of the most popular lentils and is used widely in the southern part of Asia. The Urad Dal Gota exporter in India exports tonnes of Urad Dal products from India. Due to the various uses and benefits of Urad Dal, the Urad Dal Gota export from India has been on the rise over the years. This is, therefore, a great opportunity for the Indian Urad Dal Gota exporter to expand his business and enter the international market. The Urad Dal Gota export from India includes various varieties of Urad Dal.',
          ],
          conclusion: [
            'Pisum Foods is a leading Urad Dal Gota importer from India. We at Pisum Foods help our clients with each and every step while exporting products from India. Our team has extensive experience in the export industry. We make sure that the export of Urad Dal Gota process is carried out smoothly with the least confusion and hassle. Being a very reliable exporter, we strictly adhere to all the health and safety restrictions of the government and make sure that your products are delivered safely. If you are looking for Urad Dal Gota export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Urad Dal Gota exporter in India exports the good quality of the Dal to various parts of the world. The uses and benefits of the Urad Dal are known to people today and so the Global Market Demand for the Dal has been increasing. The Urad Dal Gota import from India has thus seen a steady increase over the past few years.',
            ],
            specification: {
              productName: 'Urad Dal',
              origin: 'India',
              family: 'Fabaceae',
              binomialName: 'Vigna mungo',
            },
            ingredients: {
              nutrients: {
                calories: '',
                carbohydrates: '',
                fiber: '',
              },
              minerals: [],
              vitamins: [],
              protein: '',
              fats: '',
            },
            usesAndBenefits: {
              uses: [
                'Urad dal is rich in fiber, both soluble and insoluble. Thus it helps to improve our digestion. It bulks up the stool and stimulates peristaltic motion.',
                'Urad dal is rich in fiber, magnesium and potassium. This makes it beneficial for your heart health. It maintains our cardiovascular system healthy by maintaining cholesterol levels and preventing atherosclerosis.',
                'Urad dal has a high iron content. This helps in increasing the overall energy levels in your body and keeps you active.',
                'Urad dal contains essential minerals such as magnesium, iron, potassium, phosphorus and calcium. These help in improving your bone mineral density.',
              ],
            },
          },
        },
      },
    ],
  },
  [ProductCategory.SPICES]: {
    headerImg: `/assets/product/${ProductCategory.SPICES}/header.jpg`,
    headerText: 'Spices',
    descTitle: 'Indian Spices Exporter',
    descText: [
      'Spices are one of the most important ingredients in Indian dishes. Indian Spices have been popular across the world for their unique flavor, aroma, and beautiful texture. Thus, the export of spices from India has increased substantially. We, at Tark Internationals, believe that Indian culture and our unique spices in India have been the best corner of the world. Tark Internationals is one of the leading export companies for the export of Indian spices. We, being whole spice exporters, export numerous spices including turmeric, ginger, star anise, Cinnamon, Asafoetida, Nutmeg, cumin, black pepper, and many more.',
      'Tark Internationals, one of the most recommended spices exporters in India, has a strong experience in the food industry, and we can get the best buyers for your products. Being one of the relevant exporters of Indian spices, we have connections across the globe. Through us, you can export Indian spices to any corner of the world. We believe that good quality products are the key to success in the international market. Our team of experts located in the heart of India, we have trained executives who analyze the market so that we can give you the latest information available. If you are looking for spice exporters in India, we are here to serve you!',
    ],
    products: [
      {
        slug: Products.TURMERIC,
        name: 'Turmeric',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.TURMERIC}.jpg`,
        data: {
          title: 'Turmeric',
          layoutType: 'extended-tabs',
          headerImage: `/assets/product/${ProductCategory.SPICES}/${Products.TURMERIC}.jpg`,
          description: [
            "From curing ulcers and preventing heart diseases to being a common ingredient in dishes, turmeric is one of nature's most special gifts. This magnificent spice not just makes your food get a unique taste, but it also acts of medicine on many health issues. Turmeric has been known in trade for its anti-inflammatory properties. It always been and will continue to remain in high demand all across the globe.",
          ],
          conclusion: [
            "Turmeric is a spice known to have multiple uses and health benefits. Let's take a look at some of the common uses.",
          ],
          extendedTabContent: {
            description: [
              'The dried root of Curcuma longa plant of the ginger family, Turmeric is native to the Indian subcontinent and Southeast Asia. Being perennial and rhizomatous, it requires between 20-30°C. Curcuma and a good amount of annual rainfall to grow. The rhizomes are collected every year. They are boiled, dried in hot air ovens, polished and ground to orange-yellow powder.',
            ],
            history: [
              "Turmeric has been virtually used as a main chemical since the discovery of its medicinal properties. It's been used in Ayurvedic traditional Chinese medicine, other being as well. Indian is known to have the largest number of business with Thailand up close in the second position.",
            ],
            specification: {
              productName: 'Turmeric',
              origin: 'Indian subcontinent and Southeast Asia',
              family: 'Zingiberaceae',
              binomialName: 'Curcuma longa',
            },
            features: {
              color: 'Orange-yellow',
              tasteAndSmell:
                'Bitter taste with mildly aromatic smell/ginger scent',
              quality: '',
            },
            ingredients: {
              nutrients: {
                calories: '312 Calories',
                carbohydrates: '65 gm',
                fiber: '21 gm carbohydrates',
              },
              minerals: ['Iron', 'Potassium', 'Manganese'],
              vitamins: ['Vitamin C'],
              protein: '10 gm',
              fats: '10 gm',
            },
            usesAndBenefits: {
              uses: [
                'Culinary - Turmeric is the powdered herb used as a spice in a number of various dishes across the planet.',
                'Dye - The golden yellow colour of turmeric is used as a dye.',
                'Moisturizer - It is used as a chemical indicator to test for acidity and alkalinity.',
                'Medicinal - As a plant with medicinal values, Curcumin has plenty of use in herbal remedies and ayurvedic treatments.',
              ],
              healthBenefits: [
                'Anti-inflammatory medicine',
                'Pain relieved',
                'Antioxidant',
                'General treatment',
                'Digestion',
              ],
            },
          },
        },
      },
      {
        slug: Products.GINGER,
        name: 'Ginger',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.GINGER}.jpg`,
      },
      {
        slug: Products.STAR_ANISE,
        name: 'Star Anise',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.STAR_ANISE}.jpg`,
      },
      {
        slug: Products.CINNAMON,
        name: 'Cinnamon',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CINNAMON}.jpg`,
      },
      {
        slug: Products.ASAFOETIDA,
        name: 'Asafoetida',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.ASAFOETIDA}.jpg`,
      },
      {
        slug: Products.NUTMEG,
        name: 'Nutmeg',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.NUTMEG}.jpg`,
      },
      {
        slug: Products.CUMIN,
        name: 'Cumin',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CUMIN}.jpg`,
      },
      {
        slug: Products.BLACK_PEPPER,
        name: 'Black Pepper',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.BLACK_PEPPER}.jpg`,
      },
      {
        slug: Products.GARLIC,
        name: 'Garlic',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.GARLIC}.jpg`,
      },
      {
        slug: Products.CLOVE,
        name: 'Clove',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CLOVE}.jpg`,
      },
      {
        slug: Products.MUSTARD_SEEDS,
        name: 'Mustard Seeds',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.MUSTARD_SEEDS}.jpg`,
      },
      {
        slug: Products.BAY_LEAF,
        name: 'Bay-Leaf',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.BAY_LEAF}.jpg`,
      },
      {
        slug: Products.CHILI_PEPPER,
        name: 'Chili-Pepper',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CHILI_PEPPER}.jpg`,
      },
      {
        slug: Products.CORIANDER,
        name: 'Coriander',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CORIANDER}.jpg`,
      },
      {
        slug: Products.SAFFRON,
        name: 'Saffron',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.SAFFRON}.jpg`,
      },
      {
        slug: Products.CAROM_SEEDS,
        name: 'Carom Seeds / Thyme',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CAROM_SEEDS}.jpg`,
      },
      {
        slug: Products.MACE,
        name: 'Mace',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.MACE}.jpg`,
      },
      {
        slug: Products.POPPY_SEED,
        name: 'Poppy Seed',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.POPPY_SEED}.jpg`,
      },
      {
        slug: Products.GREEN_CARDAMOM,
        name: 'Green Cardamom',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.GREEN_CARDAMOM}.jpg`,
      },
      {
        slug: Products.PEPPERCORNS,
        name: 'Peppercorns',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.PEPPERCORNS}.jpg`,
      },
      {
        slug: Products.BROWN_CARDAMOM,
        name: 'Brown Cardamom',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.BROWN_CARDAMOM}.jpg`,
      },
      {
        slug: Products.GREEN_CHILLI_PEPPER,
        name: 'Green Chilli Pepper',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.GREEN_CHILLI_PEPPER}.jpg`,
      },
    ],
  },
  [ProductCategory.FRUITS]: {
    headerImg: `/assets/product/${ProductCategory.FRUITS}/header.jpg`,
    headerText: 'Fruits',
    descTitle: 'Indian Fruits Exporters',
    descText: [
      'India is popularly known as "the fruits basket of the world". In India, we have been blessed with favorable climatic and soil conditions which help the growth of not only fruits in India, but also vegetables, grains, pulses, and such other crops. Most of the fruits are grown in India including mangoes, bananas, papayas, oranges, apricots, grapes, strawberries, apples, guavas, litchis, so on, and so forth. Therefore, fruits export from India has been on the rise for a few decades. The export of fruits from India was around 372213.73 Metric tonnes in the year 2018-2019.',
      'There are numerous fruits importer from India including countries like Bangladesh, Nepal, Oman, Saudi Arabia, UAE, and many more. Tark Internationals us one of the leading fruits exporters in India. We conduct export of Indian fruits to various parts of the world. Being one of the most experienced fruits exporters, our motto is to spread the Indian food products and the Indian culture to every corner of the world. We at Tark Internationals make sure that your food products reach the buyer well packaged and on the promised time. If you are looking for fruits import from India, Tark Internationals can help you at every step on the way!',
    ],
    products: [
      {
        slug: Products.APPLE,
        name: 'Apple',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.APPLE}.jpg`,
      },
      {
        slug: Products.BANANA,
        name: 'Banana',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.BANANA}.jpg`,
      },
      {
        slug: Products.MANGO,
        name: 'Mango',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.MANGO}.jpg`,
      },
      {
        slug: Products.ORANGE,
        name: 'Orange',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.ORANGE}.jpg`,
      },
      {
        slug: Products.PINEAPPLE,
        name: 'Pineapple',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.PINEAPPLE}.jpg`,
      },
      {
        slug: Products.POMEGRANATE,
        name: 'Pomegranate',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.POMEGRANATE}.jpg`,
      },
      {
        slug: Products.DRAGON_FRUIT,
        name: 'Dragon Fruit',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.DRAGON_FRUIT}.jpg`,
      },
      {
        slug: Products.STRAWBERRY,
        name: 'Strawberry',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.STRAWBERRY}.jpg`,
      },
      {
        slug: Products.GRAPES,
        name: 'Grapes',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.GRAPES}.jpg`,
      },
      {
        slug: Products.GUAVA,
        name: 'Guava',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.GUAVA}.jpg`,
      },
      {
        slug: Products.LITCHI,
        name: 'Litchi',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.LITCHI}.jpg`,
      },
      {
        slug: Products.PAPAYA,
        name: 'Papaya',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.PAPAYA}.jpg`,
      },
      {
        slug: Products.SAPOTA,
        name: 'Sapota',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.SAPOTA}.jpg`,
      },
      {
        slug: Products.JACKFRUIT,
        name: 'Jackfruit',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.JACKFRUIT}.jpg`,
      },
      {
        slug: Products.WATERMELON,
        name: 'Watermelon',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.WATERMELON}.jpg`,
      },
      {
        slug: Products.PEARS,
        name: 'Pears',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.PEARS}.jpg`,
      },
      {
        slug: Products.COCONUT,
        name: 'Coconut',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.COCONUT}.jpg`,
      },
      {
        slug: Products.BER,
        name: 'Ber',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.BER}.jpg`,
      },
      {
        slug: Products.AMLA,
        name: 'Amla',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.AMLA}.jpg`,
      },
    ],
  },
  [ProductCategory.VEGETABLES]: {
    headerImg: `/assets/product/${ProductCategory.VEGETABLES}/header.jpg`,
    headerText: 'Vegetables',
    descTitle: 'Indian Vegetables Exporters',
    descText: [
      'Fruits, vegetables, spices, grains, pulses, and such other crops thrive in India. Due to the large amounts of vegetables produced in India, we can vegetable export from India too. Many vegetables are included in the export of vegetables from India like Onion, Broccoli, Brinjal, Spinach, Cabbage, Green chilis so on, and so forth. Tark Internationals is a leading vegetable importer from India today. We work on the export of Indian vegetables.',
      'At Tark Internationals, we believe that the customer is our king. We, therefore, assist our clients in each step on the way while exporting vegetables in India. Being one of the best vegetable exporters in India, we strictly follow all the health and safety measures of the Government of India. Tark Internationals is the largest and most reliable vegetable exporter in India. Our processes are completely transparent and we make sure that the desired products reach their destination safe, fresh, and on time. If you are looking for vegetable import from India, Tark Internationals is the best choice!',
    ],
    products: [
      {
        slug: Products.ONION,
        name: 'Onion',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.ONION}.jpg`,
      },
      {
        slug: Products.MUSHROOM,
        name: 'Mushroom',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.MUSHROOM}.jpg`,
      },
      {
        slug: Products.BROCCOLI,
        name: 'Broccoli',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.BROCCOLI}.jpg`,
      },
      {
        slug: Products.POTATO,
        name: 'Potato',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.POTATO}.jpg`,
      },
      {
        slug: Products.SPINACH,
        name: 'Spinach / Palak',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.SPINACH}.jpg`,
      },
      {
        slug: Products.CABBAGE,
        name: 'Cabbage',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.CABBAGE}.jpg`,
      },
      {
        slug: Products.BRINJAL,
        name: 'Brinjal',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.BRINJAL}.jpg`,
      },
      {
        slug: Products.CAULIFLOWER,
        name: 'Cauliflower',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.CAULIFLOWER}.jpg`,
      },
      {
        slug: Products.DRUM_STICK,
        name: 'Drum Stick',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.DRUM_STICK}.jpg`,
      },
      {
        slug: Products.LADY_FINGER,
        name: 'Lady Finger',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.LADY_FINGER}.jpg`,
      },
      {
        slug: Products.GREEN_CHILLI,
        name: 'Green Chilli',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.GREEN_CHILLI}.jpg`,
      },
      {
        slug: Products.DOODHI,
        name: 'Doodhi / Bottle Gourd / Lauki',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.DOODHI}.jpg`,
      },
      {
        slug: Products.BITTER_GOURD,
        name: 'Bitter Gourd',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.BITTER_GOURD}.jpg`,
      },
      {
        slug: Products.CUCUMBER,
        name: 'Cucumber',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.CUCUMBER}.jpg`,
      },
      {
        slug: Products.BELL_PEPPER,
        name: 'Bell Pepper',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.BELL_PEPPER}.jpg`,
      },
      {
        slug: Products.RIDGE_GOURD,
        name: 'Ridge Gourd / Ghosali',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.RIDGE_GOURD}.jpg`,
      },
      {
        slug: Products.PUMPKIN,
        name: 'Pumpkin',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.PUMPKIN}.jpg`,
      },
      {
        slug: Products.LEMON,
        name: 'Lemon',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.LEMON}.jpg`,
      },
      {
        slug: Products.SWEET_POTATO,
        name: 'Sweet Potato',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.SWEET_POTATO}.jpg`,
      },
      {
        slug: Products.JERUSALEM,
        name: 'Jerusalem',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.JERUSALEM}.jpg`,
      },
      {
        slug: Products.RADISH,
        name: 'Radish',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.RADISH}.jpg`,
      },
      {
        slug: Products.BEETROOT,
        name: 'Beetroot',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.BEETROOT}.jpg`,
      },
      {
        slug: Products.CARROTS,
        name: 'Carrots',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.CARROTS}.jpg`,
      },
      {
        slug: Products.TARO,
        name: 'Taro',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.TARO}.jpg`,
      },
      {
        slug: Products.CURRY_LEAVES,
        name: 'Curry Leaves',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.CURRY_LEAVES}.jpg`,
      },
      {
        slug: Products.CORIANDER,
        name: 'Coriander',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.CORIANDER}.jpg`,
      },
      {
        slug: Products.SPRING_ONION,
        name: 'Spring Onion',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.SPRING_ONION}.jpg`,
      },
      {
        slug: Products.MINT,
        name: 'Mint',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.MINT}.jpg`,
      },
      {
        slug: Products.PAPAL,
        name: 'Papal / Hyacinth Bean',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.PAPAL}.jpg`,
      },
      {
        slug: Products.METHI,
        name: 'Methi / Fenugreek',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.METHI}.jpg`,
      },
      {
        slug: Products.PURSLANE,
        name: 'Common Purslane / Paruppu Keerai',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.PURSLANE}.jpg`,
      },
      {
        slug: Products.YAM,
        name: 'Elephant Yam / Suran',
        img: `/assets/product/${ProductCategory.VEGETABLES}/${Products.YAM}.jpg`,
      },
    ],
  },
  [ProductCategory.OILSEEDS]: {
    headerImg: `/assets/product/${ProductCategory.OILSEEDS}/header.jpg`,
    headerText: 'Oilseeds',
    descTitle: 'Indian Oilseeds Exporters',
    descText: [
      'Oilseeds are basically crops which are specially grown to extract oil from its seeds. The major oilseeds in India include soybean, sunflower, Brassica, canola, coconut, oil palm, rapeseed, peanuts, rice, and cotton. Oilseeds export from India is one of the major export areas today. India is known to be one of the largest oilseeds exporters with a large share of export of groundnuts and sesame seeds. Tark Internationals is one of the leading oil seeds importers from India. We are known across the world for the export of oilseeds and such other premium quality food products.',
      'Being one of the most experienced oilseeds exporters in India, we help our clients at every step on the way. From getting clients for your products until your products reach the buyer, Tark Internationals will assist you with everything. We make sure that the export of Indian oilseeds is conducted and completed in an organized manner. If you are looking for oil seeds import from India, we at Tark Internationals are here to assist you!',
    ],
    products: [
      {
        slug: Products.SUN_FLOWER,
        name: 'Sunflowers',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.SUN_FLOWER}.jpg`,
      },
      {
        slug: Products.SOYABEAN,
        name: 'Soybeans',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.SOYABEAN}.jpg`,
      },
      {
        slug: Products.SESAME,
        name: 'Sesame',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.SESAME}.jpg`,
      },
      {
        slug: Products.FLAX,
        name: 'Flax',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.FLAX}.jpg`,
      },
      {
        slug: Products.SAFFLOWER,
        name: 'Safflower',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.SAFFLOWER}.jpg`,
      },
      {
        slug: Products.GROUNDNUT,
        name: 'Groundnut',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.GROUNDNUT}.jpg`,
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
        slug: Products.MEADOWFOAM,
        name: 'Meadowfoam',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.MEADOWFOAM}.jpg`,
      },
      {
        slug: Products.VERNONIA,
        name: 'Vernonia',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.VERNONIA}.jpg`,
      },
      {
        slug: Products.CANOLA,
        name: 'Spring Canola',
        img: `/assets/product/${ProductCategory.OILSEEDS}/${Products.CANOLA}.jpg`,
      },
    ],
  },
  [ProductCategory.FLORICULTURE]: {
    headerImg: `/assets/product/${ProductCategory.FLORICULTURE}/header.jpg`,
    headerText: 'Floriculture',
    descTitle: 'Indian Floriculture Exporters',
    descText: [
      'Floriculture in India primarily means the cultivation of flowers or flower farming. Floriculture export from India includes the export of flowers like roses, Gerbera, Tulips, Carnation, Orchid, Jasmine, Marigold, Aster so on, and so forth. Export of floriculture has to be done with the utmost care and in an organized manner as most of these flowers are delicate and have to be handled carefully. Tark Internationals is a leading floriculture importer from India. We export various varieties of flowers to different regions in the world.',
      'Tark Internationals is known for its high-quality products and the health and safety regulations we strictly follow. Known to be one of the most popular floriculture exporters in India, we have been accredited to TPCI, APEDA, and such other certifications. We make sure that the export of Indian Floriculture is done perfectly from the documentation, finding buyers, until the products reach the destination. We at Tark Internationals understand that timely delivery of the products is an important factor for a floriculture exporter. We thus make sure that your delivery reaches in a timely manner. If you are looking for floriculture import from India, Tark Internationals is here to serve you!',
    ],
    products: [
      {
        slug: Products.ROSE,
        name: 'Rose',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.ROSE}.jpg`,
      },
      {
        slug: Products.GERBERA,
        name: 'Gerbera',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.GERBERA}.jpg`,
      },
      {
        slug: Products.TULIP,
        name: 'Tulip',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.TULIP}.jpg`,
      },
      {
        slug: Products.CARNATION,
        name: 'Carnation',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.CARNATION}.jpg`,
      },
      {
        slug: Products.CHRYSANTHEMUM,
        name: 'Chrysanthemum',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.CHRYSANTHEMUM}.jpg`,
      },
      {
        slug: Products.ORCHID,
        name: 'Orchid',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.ORCHID}.jpg`,
      },
      {
        slug: Products.TUBEROSE,
        name: 'Tuberose',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.TUBEROSE}.jpg`,
      },
      {
        slug: Products.GLADIOLUS,
        name: 'Gladiolus',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.GLADIOLUS}.jpg`,
      },
      {
        slug: Products.ANTHURIUM,
        name: 'Anthurium',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.ANTHURIUM}.jpg`,
      },
      {
        slug: Products.HYDRANGEA,
        name: 'Hydrangea',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.HYDRANGEA}.jpg`,
      },
      {
        slug: Products.JASMINE,
        name: 'Jasmine',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.JASMINE}.jpg`,
      },
      {
        slug: Products.MARIGOLD,
        name: 'Marigold',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.MARIGOLD}.jpg`,
      },
      {
        slug: Products.ASTER,
        name: 'Aster',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.ASTER}.jpg`,
      },
      {
        slug: Products.LILIUM,
        name: 'Lilium',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.LILIUM}.jpg`,
      },
      {
        slug: Products.CROSSANDRA,
        name: 'Crossandra',
        img: `/assets/product/${ProductCategory.FLORICULTURE}/${Products.CROSSANDRA}.jpg`,
      },
    ],
  },
  [ProductCategory.HERBS]: {
    headerImg: `/assets/product/${ProductCategory.HERBS}/header.jpg`,
    headerText: 'Herbs',
    descTitle: 'Indian Herbs Exporters',
    descText: [
      'Herbs are generally plants with savory or aromatic properties that are used for flavoring food, garnishing dishes, or even medicinal purposes. Herbs in India include Neem, Ashwagandha, Sage, Aloe Vera, Fenugreek, Curry leaves, and so on and so forth. These herbs are also included in the export of herbs business. Tark Internationals is one of the leading herbs importers from India. Our aim at Tark Internationals is to spread the Indian food products and the Indian culture across the world.',
      'We have extensive experience in the field of export of Indian herbs, spices, pulses, grains, fruits, vegetables, and such other products. Being one of the most recognized herbs exporters in India, we see to it that our clients face no issues during herbs export from India. We help our clients to find buyers for their products in the international market and conduct an in-depth analysis of the market so that the clients are well informed. Herbs import from India is a rapidly growing sector of the export market today. If you are looking for an herbs exporter in India, Tark Internationals are here to help you!',
    ],
    products: [
      {
        slug: Products.NEEM,
        name: 'Neem',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.NEEM}.jpg`,
      },
      {
        slug: Products.ASHWAGANDHA,
        name: 'Ashwagandha',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.ASHWAGANDHA}.jpg`,
      },
      {
        slug: Products.ALOEVERA,
        name: 'Aloe Vera',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.ALOEVERA}.jpg`,
      },
      {
        slug: Products.SAGE,
        name: 'Sage',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.SAGE}.jpg`,
      },
      {
        slug: Products.FENUGREEK,
        name: 'Fenugreek',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.FENUGREEK}.jpg`,
      },
      {
        slug: Products.GILOY,
        name: 'Giloy',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.GILOY}.jpg`,
      },
      {
        slug: Products.CURRY_LEAVES,
        name: 'Curry Leaves',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.CURRY_LEAVES}.jpg`,
      },
      {
        slug: Products.TULASI,
        name: 'Tulasi',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.TULASI}.jpg`,
      },
      {
        slug: Products.CAROM,
        name: 'Carom',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.CAROM}.jpg`,
      },
      {
        slug: Products.SPEARMINT,
        name: 'Spearmint',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.SPEARMINT}.jpg`,
      },
      {
        slug: Products.KHUS_VETIVER,
        name: 'Khus',
        img: `/assets/product/${ProductCategory.HERBS}/${Products.KHUS_VETIVER}.jpg`,
      },
    ],
  },
  [ProductCategory.DRY_FRUITS]: {
    headerImg: `/assets/product/${ProductCategory.DRY_FRUITS}/header.jpg`,
    headerText: 'Dry Fruits',
    descTitle: 'Indian Dry Fruits Exporters',
    descText: [
      'Dry fruits in India are basically fruits whose water content has been removed almost completely either naturally or by processes like sun drying or specialized dehydrators or dryers. Dry fruits can be eaten in various forms and are known to be powerhouses of nutrients. Dry fruits export from India includes the export of dates, raisins, almonds, cashew, apricot, and so on and so forth. Tark Internationals is one of the best dry fruits importers from India. We work on the export of dry fruits from India to many countries in the world.',
      'We at Tark Internationals hold an extensive experience in the export of Indian dry fruits. As one of the leading dry fruits exporter in India, we make sure that our clients face no issues from documentation to the final delivery of the products. By conducting an in-depth analysis of the international market, we keep our clients well informed about the latest developments and how it may affect their exports. Tark Internationals is one of the most reliable dry fruits exporters and also helps you to find buyers for your products globally. If you are looking for dry fruits import from India, Tark Internationals is here to help you at every step!',
    ],
    products: [
      {
        slug: Products.CASHEW,
        name: 'Cashew',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.CASHEW}.jpg`,
      },
      {
        slug: Products.WALNUT,
        name: 'Walnut',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.WALNUT}.jpg`,
      },
      {
        slug: Products.ALMONDS,
        name: 'Almonds',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.ALMONDS}.jpg`,
      },
      {
        slug: Products.APRICOT,
        name: 'Apricot',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.APRICOT}.jpg`,
      },
      {
        slug: Products.BETEL_NUT,
        name: 'Betel-Nut',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.BETEL_NUT}.jpg`,
      },
      {
        slug: Products.DATES,
        name: 'Dates',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.DATES}.jpg`,
      },
      {
        slug: Products.DRY_FIG,
        name: 'Dry-Fig',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.DRY_FIG}.jpg`,
      },
      {
        slug: Products.HAZELNUT,
        name: 'Hazelnut',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.HAZELNUT}.jpg`,
      },
      {
        slug: Products.PISTACHIO,
        name: 'Pistachio',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.PISTACHIO}.jpg`,
      },
      {
        slug: Products.RAISENS,
        name: 'Raisens',
        img: `/assets/product/${ProductCategory.DRY_FRUITS}/${Products.RAISENS}.jpg`,
      },
    ],
  },
  [ProductCategory.BEVERAGES]: {
    headerImg: `/assets/product/${ProductCategory.BEVERAGES}/header.jpg`,
    headerText: 'Beverages',
    descTitle: 'Indian Beverages Exporters',
    descText: [
      'India is known for its two most popular beverages across the world, Tea and Coffee. There are also some other beverages in India that are famous worldwide including Lassi, Sholkadi, Buttermilk so on, and so forth. Beverage export from India is now a growing component of the food export industry from India. Tark Internationals is one of the best beverage importers from India. Export of beverages like tea and coffee and their various types can be done through us.',
      'Being a well-experienced beverage exporter in India, Tark Internationals is well equipped to help you at every stage of the process. Export of Beverages includes documentation, finding buyers, quality tests, and such other processes. Our trained executives at Tark Internationals will assist you with each of these processes involved in the export of Indian beverages. Through our high-quality products, high level of hygiene, and safety we meet international food safety and quality standards. Therefore, Tark Internationals is known to be one of the most reliable beverage exporters. If you are in search of beverages import from India, Tark Internationals is here to serve you!',
    ],
    products: [
      {
        slug: Products.TEA,
        name: 'Tea',
        img: `/assets/product/${ProductCategory.BEVERAGES}/${Products.TEA}.jpg`,
      },
      {
        slug: Products.COFFEE,
        name: 'Coffee',
        img: `/assets/product/${ProductCategory.BEVERAGES}/${Products.COFFEE}.jpg`,
      },
    ],
  },
  [ProductCategory.DEHYDRATED]: {
    headerImg: `/assets/product/${ProductCategory.DEHYDRATED}/header.jpg`,
    headerText: 'Dehydrated Food Products',
    descTitle: 'Dehydrated Food Products Exporters',
    descText: [
      'The dehydrated products market from India has been growing rapidly. Dehydration is basically the removal of water. Thus, dehydrated products are the products from which moisture content has been removed. The dehydrated products exporters from India export huge quantities of these products abroad each year. The export of dehydrated products includes the export of various products. Dehydrated vegetables are an essential component of the dehydrated products exported from India. Along with veggies, dehydrated fruits are also in great demand globally. Dehydrated dry fruits are widely used in desserts, cereal and such other products. The export of such products is a great opportunity for dehydrated food products exporters to earn good revenues.',
    ],
    products: [
      {
        slug: Products.DEHYDRATED_FRUITS,
        name: 'Dehydrated Fruits',
        img: `/assets/product/${ProductCategory.DEHYDRATED}/${Products.DEHYDRATED_FRUITS}.jpg`,
      },
      {
        slug: Products.DEHYDRATED_VEGETABLES,
        name: 'Dehydrated Vegetables',
        img: `/assets/product/${ProductCategory.DEHYDRATED}/${Products.DEHYDRATED_VEGETABLES}.jpg`,
      },
    ],
  },
}

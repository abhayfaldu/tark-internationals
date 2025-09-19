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
  TUR = 'tur',
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
            'If you are looking for Corn importer from India, Tark Internationals is one of the best options available for you. Tark Internationals has a global presence and will assist you in grabbing buyers for your products, conducting in-depth market analysis so on and so forth. Export of Corn is a rapidly growing business and the Indian exporters should take this opportunity and export premium quality Corn worldwide.',
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
            'Tark Internationals is exporter of Oats from India. Tark Internationals is the best option for your future oats or any other oats exporter from India. Tark Internationals has extensive experience in the food industry. Our trained executives analyze the market trends and will help you to find buyers internationally. Want to export Oats? Pisum is the field through.',
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
            'If you are looking for a Pearl Millet importer from India, Tark Internationals is the best choice for you! Tark Internationals is one of the most trustworthy exporters of food products including grains, spices, fruits and such other products from India. Export of Pearl millet is a good opportunity for Indian exporters and thus with us, you can make the most of it. Want to export Pearl Millet? Pisum is the field through.',
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
          headerImage: `/assets/banners/${Products.RICE}.jpg`,
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
          headerImage: `/assets/banners/${Products.WHEAT}.jpg`,
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
            'Tark Internationals is one of the most recommended wheat importer from India. Wheat is eaten in various forms across the world thus export of wheat from India has a good opportunity to expand. Tark International has a strong experience in wheat export from India. We make sure that all the health and safety parameters and regulations are met high-quality wheat is exported from India. Want to export wheat? Tark Internationals is the best choice for you!',
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
          headerImage: `/assets/banners/${Products.BARLEY}.jpg`,
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
            'Tark Internationals is one of the best barley importer from India. We export barley and several other food products from India to numerous countries of the world. Barley export from India is a great opportunity for Indian exporters and farmers to enter the international market and export their products worldwide. Want to export barley from India? Tark Internationals is the field through.',
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
          headerImage: `/assets/banners/${Products.TRITICALE}.jpg`,
          description: [
            'Triticale is a hybrid cross of wheat and rye. It can be used as a grain, feed, fuel, forage, wildlife food-plot, cover crop, and so on. The Triticale exporter in India exports tonnes of Triticale to various countries in the world. Due to the diverse uses and benefits of the crop, Triticale export from India has been growing over the years. The Indian Triticale exporter is now exporting increasing amounts of Triticale abroad each year. The Triticale export from India provides the export of various varieties of the crop.',
          ],
          conclusion: [
            "Tark Internationals is the leading Triticale Importer from India. We at Tark Internationals understand that the export of Triticale from India may be a complicated process for some of you. Don't worry, we are here to help you! With extensive experience in the food export industry, our executives at Pisum make sure that the export of Triticale is carried out smoothly with any issues. We help our clients right from documentation until the final delivery of the products. If you are looking for Triticale export from India, Contact Pisum now!",
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
          headerImage: `/assets/banners/${Products.FONIO}.jpg`,
          description: [
            'Fonio is an annual grass grown for its grain which is generally used to make porridge. The Fonio exporter in India exports tonnes of Fonio every year. The growing popularity of Fonio has led to an increase in Fonio export from India. The leaves of Fonio are blade-like linear and tapering. The Indian Fonio exporter exports premium quality Fonio to different countries in the world. The Fonio export from India includes the export of varieties of Fonio.',
          ],
          conclusion: [
            'Pisum is one of the best Fonio importer from India. We at Tark Internationals understand the issues one can face during the export of Fonio, so we are here to help! Pisum has an extensive experience in the food export industry. Our executives are trained to support you through the entire export process and resolve any issues which might arise. If you are looking for Fonio export from India, Contact Pisum now!',
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
          headerImage: `/assets/banners/${Products.SORGHUM}.jpg`,
          description: [
            'Sorghum is primarily a strong grass and has edible starchy seeds. Sorghum is a diverse crop and has many uses in different industries. In India sorghum is popularly known as Jowar, Cholam, or Jonna. The Sorghum exporter in India exports a huge quantity of the crop each year. Due to the growing popularity of sorghum, sorghum export from India has also seen an a rise. This is, therefore, a good opportunity for the Indian Sorghum exporter to expand his business and enter the international marketplace. The Jowar export includes various varieties and qualities of the product.',
          ],
          conclusion: [
            'Tark Internationals is a leading Sorghum importer from India. We at Tark Internationals help our clients with each and every step while exporting products from India. Our team has extensive experience in the field of export of Sorghum. We will make sure that the process is carried out smoothly with the least confusion and hassle. We strictly adhere to all the health and safety restrictions of the government and make sure that your products are delivered safely. If you are looking for Sorghum export from India, Contact Pisum now!',
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
          headerImage: `/assets/banners/${Products.TEFF}.jpg`,
          description: [
            'Teff is a very fine grain, around the size of a poppy grain. It is an ancient grain from Ethiopia and Eritrea and is a part of their staple cuisines. The Teff exporter in India exports a large quantity of the product every year. Due to the growing popularity of Teff all over the world, the Teff export from India exports increasing amounts of Teff every year. The Indian Teff exporter exports premium quality Teff abroad. The Teff export includes the export of various varieties of Teff.',
          ],
          conclusion: [
            'Tark Internationals is the leading Teff importer from India. We at Tark Internationals help our clients from the documentation process until the final delivery of the products. Our global presence and extensive experience have proved to be beneficial for most of our past customers. Our executives will make sure that you are in safe of any issues, contact us without any hesitation in this segment of teff. If you are looking for Teff export from India, Contact us now!',
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
          headerImage: `/assets/banners/${Products.CHICKPEAS}.jpg`,
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
            'Tark Internationals is known as one of the best chickpea importer from India and we can be trusted with various export-related work with ease. The world, Chickpeas are one of our main popular export products. Healthy to eat and delicious in taste, chickpea is now demanded by various countries. If you are looking to export of chickpeas, Pisum is the best choice!',
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
          headerImage: `/assets/banners/${Products.PEAS}.jpg`,
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
            'Tark Internationals export the finest quality of peas derived being one of the leading pea importer from India, Pisum has extensive experience of the food industry and experts products to numerous corners of the world with our global connections and in-depth knowledge and expertise of the export industry, we will help you get the best buyers for your products. If you are looking to export peas from India, contact us now!',
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
          headerImage: `/assets/banners/${Products.KIDNEY_BEANS}.jpg`,
          description: [
            'The kidney beans are a variety of the common beans that are dried and are generally available throughout the year. They are reddish-brown in color and are shaped like a kidney. They have a unique taste and are used in both hot and cold recipes. Therefore, kidney beans exporter in India export kidney beans to numerous countries in the world. These beans are majorly used in Mexican and Indian cuisines to make curries, salads as an and so forth. The kidney beans export from India has thus been growing over the years. The Indian kidney beans exporter also earns good revenues from these exports today. Tark Internationals is one of the best exporters of kidney beans export from India.',
          ],
          conclusion: [
            'If you wish to export from India, Tark Internationals is one of the leading exporters in India. When you export products, it comes with several responsibilities including documentation, checking if the product meets the quality and health standards and so on. Tark Internationals, the best importers from India, will assist you with every step on the way. Pisum will make sure that your products reach any corner of the world fresh and safe!',
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
          headerImage: `/assets/banners/${Products.SOYABEAN}.jpg`,
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
            'Tark Internationals is one of the leading soybean importers from India. Due to the rising demand of Soybeans, Indian agriculture have also increased the amount of soybeans produced and exported from India. The export of soya bean has also been a revenue earning industry for many exporters. If you are interested in the export of Soybeans, Pisum is the best option!',
          ],
        },
      },
      {
        slug: Products.TUR,
        name: 'Pigeon Pea/Arhar/Tur',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.TUR}.jpg`,
        data: {
          title: 'Indian Pigeon Pea Exporters',
          layoutType: 'standard',
          headerImage: `/assets/banners/${Products.TUR}.jpg`,
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
            'If you are looking for a pigeon pea importer from India, Tark Internationals is one of the best options! We at Tark Internationals have extensive experience in the food export industry and have global connections. We export spices, pulses, grains, fruits, vegetables and such other food products to various corners of the world. Pigeon pea import from India is a rapidly growing business and we can assure you that you will find the best buyers and reach the customers in a timely manner. Looking for export of pigeon pea? Pisum is the place for you!',
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
          headerImage: `/assets/banners/${Products.BLACK_EYED_BEANS}.jpg`,
          description: [
            'The Cowpea is an annual herbaceous legume and is primarily self-pollinated. The cowpea exporter in India exports tonnes of cowpea abroad. People are now understanding the importance and uses of Cowpeas. The black-eyed beans export from India has thus been on a rise for a few years for an Indian cowpea exporter, this is a good business opportunity. The cowpea export from India includes different varieties being exported.',
          ],
          conclusion: [
            'If you are interested in the export of Cowpeas, Tark Internationals is the best choice for you! We at Tark Internationals understand that the process of cowpea export from India can be complicated at times. We are here to make it easy for you! Our trained executives will help you at every step during the export of cowpea from India. We make sure that the export of cowpeas from India is carried out in many years, we make sure that all the health and safety regulations are maintained. Looking for export of cowpeas? Contact Tark Internationals now!',
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
            'Tark Internationals is one of the leading Horse Gram importers from India. We help our clients export various food products including fruits, vegetables, grains, pulses, oilseeds, so on and so forth. The export of Horse Gram is a great business opportunity for our local farmers and vendors to enter the international market and earn good revenues. If you are looking for Horse Gram export from India, Contact Tark Internationals now!',
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
            'If you are looking for a Puffed Rice importer from India, Tark Internationals is your best choice! We at Tark Internationals have extensive experience and knowledge in the food export industry. Our executives will help you at every step of the process of the export of Puffed Rice. From documentation until the final delivery of the products, it will all be taken care of by Pisum. Interested in Puffed Rice export from India? Contact us now!',
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
            "If you are looking for a Red Lentil importer from India, Tark Internationals is the best option for you! We understand that the process of the export of Red Lentil may be complicated for some people. But don't worry now! We at Tark Internationals will help you with each process involved in the Red Lentil export from India. Want to export Red Lentil? Contact Tark Internationals now!",
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
            'Tark Internationals is one of the leading Green Gram Importers from India. We understand that export of green gram can be a complicated process. But no worries! Pisum is here to help you! Our highly trained executives will help you with every process involved in the export of green gram until your products are delivered to the destination. We have extensive experience in the food export industry and will support you in case of any issues. If you are looking for a Green Gram exporter from India!',
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
            "Tark Internationals is the leading Black Gram Importers from India. We at Tark Internationals understand that the export of food products from India may be a complicated process for some of you. Don't worry, we are here to help you! With extensive experience in the food export industry, our executives at Pisum make sure that the export of Black Gram is carried out smoothly with any issues. We help our clients right from documentation until the final delivery of the products. If you are looking for food export from India, Contact Pisum now!",
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
            'Tark Internationals is the leading Chana Dal importer from India. We at Tark Internationals help our clients right from the documentation process until the final delivery of the products. Our global presence and extensive experience in the export of Chana Dal have proved to be beneficial for most of our past customers. Our executives will support you in case of any issues, doubts or queries with regards to the export process. If you are looking for Chana Dal export from India, Contact us now!',
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
            'Tark Internationals is one of the leading Beaten Rice importers from India. We at Tark Internationals provide holistic food export services for our clients. The export of Beaten Rice can sometimes be a complicated process. But no worries! The executives at Pisum will help you with each and every step until your products reach the destination safe and fresh. If you are looking for Beaten Rice export from India, Contact Pisum now!',
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
            'Tark Internationals is the leading Field Beans importer from India. We at Tark Internationals help our clients from the documentation process until the final delivery of the products. Our global presence and extensive experience have proved to be beneficial for most of our past customers. Our executives will support you in case of any issues doubts or queries with regards to the export of field beans. If you are looking for field beans export from India, Contact us now!',
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
            'Tark Internationals is the best Urad Dal Split importer from India. Having extensive experience in the food export industry, we make sure that the process of export of Urad Dal Split is hassle-free for all our clients. We support our clients in every way possible, right from finding buyers for their products until the final delivery of the order. If you are looking for Urad Dal Split export from India, contact Tark Internationals now!',
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
            'Tark Internationals is a leading Moth Beans importer from India. We at Tark Internationals help our clients with each and every step while exporting products from India. Our team has extensive experience in the export industry. We make sure that the process of export of Moth Beans is carried out smoothly with the least confusion and hassle. We strictly adhere to all the health and safety restrictions of the government and make sure that your products are delivered safely. If you are looking for Moth Beans export from India, Contact Pisum now!',
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
            'If you are looking for the best Whole Masoor importer from India, Tark Internationals is your best choice! We at Pisum work in the field of export of Whole Masoor, vegetables, spices, grains, pulses, so on and so forth. Exporting food products can be a complicated process at times. But no worries! You can just drop a message to Tark Internationals and we will take care of your Whole Masoor export from India.',
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
            'Tark Internationals is a leading Urad Dal Gota importer from India. We at Tark Internationals help our clients with each and every step while exporting products from India. Our team has extensive experience in the export industry. We make sure that the export of Urad Dal Gota process is carried out smoothly with the least confusion and hassle. Being a very reliable exporter, we strictly adhere to all the health and safety restrictions of the government and make sure that your products are delivered safely. If you are looking for Urad Dal Gota export from India, Contact Pisum now!',
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
          headerImage: `/assets/banners/${Products.TURMERIC}.jpg`,
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
        data: {
          title: 'Indian Ginger Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.GINGER}.jpg`,
          description: [
            'Ginger is said to be one of the earliest known oriental spices. It is extensively used in Indian cuisine and other cuisines across the globe. The ginger family is a tropical group and is found in abundance in the Indo-Malaysian region. Ginger export from India, therefore, is increasing rapidly due to a few years. Export of ginger from India requires health and quality standards to be followed. Ginger exporters have now become a good way to earn revenues for exporters.',
          ],
          cardSections: [
            {
              title: 'GINGER VARIETIES WE EXPORT',
              description:
                'India produces around 160-32 thousand tons of ginger and is one of the leading producers of ginger in the world. Export of ginger from India has increased from 6,532.32 tons in 2007-08 to 25,000.30 tons in 2016-19. So ginger exporter in India has improved their quality of products and are exporting more ginger every year.',
              items: [
                {
                  id: 1,
                  title: 'RIO-DE-JANEIRO',
                  description:
                    'Rio-de-Janeiro is one of the popular varieties of ginger. This variety can be classified by certain characteristics. The size of this rhizome is bold while the colour of the skin is buff. Also, Rio-de-Janeiro is pungent, known for high flavour and is less fibrous.',
                },
                {
                  id: 2,
                  title: 'THINGPUI',
                  description:
                    'Thingpui is one of the varieties of ginger grown in India. This variety of ginger is pungent. The size of this rhizome of the Thingpui is said to be medium. The colour of the skin can be identified as a buff. Thingpui is less fibrous and has a high amount of flavour.',
                },
                {
                  id: 3,
                  title: 'WYNAD',
                  description:
                    'Wynad is a variety of ginger, one of the spiciest known oriental spices. The size of the rhizome of Wynad is bold. The colour of the skin is said like many other varieties of ginger. It is pungent and less fibrous.',
                },
                {
                  id: 4,
                  title: 'MARAN',
                  description:
                    'Maran is a variety of ginger which is pungent and has a high flavour. The size of the rhizome of the Maran is said to be medium. The colour of the skin of Maran is buff and this variety of ginger is less fibrous.',
                },
                {
                  id: 5,
                  title: 'NADIA',
                  description:
                    'Nadia is a type of ginger which is yellowish in colour. The size of the rhizome is said to be medium to bold but the Nadia variety of Ginger. Nadia is moderately pungent and mild flavoured. It is also less fibrous compared to other varieties of Ginger.',
                },
                {
                  id: 6,
                  title: 'HSR-REJATHA',
                  description:
                    'Released in 2005, this variety of ginger is lumpy and round in shape. It is said to have bold rhizomes with three-layered compact rhizome. This variety has low fibre content and is rich in fibre (flavourful).',
                },
                {
                  id: 7,
                  title: 'HSR-MAHIMA',
                  description:
                    'The HSR-Mahima was released in the year 2001 and is plumpy. The rhizome of adoption for this variety of ginger includes Kerala. This variety of ginger has bold rhizomes with fibre content. The HSR-Mahima is resistant to root-knot nematodes.',
                },
                {
                  id: 8,
                  title: 'HSR-VARADA',
                  description:
                    'HSR-Varada is good quality and a high yielding variety of ginger. It has plumpy rhizomes and medium-sized reddish-brown scales. Farmers say that the Varada variety is tolerant to diseases and has low fibre content.',
                },
              ],
            },
          ],
          conclusion: [
            'Not only India is a leading ginger producer across the globe but also a leading global exporter of ginger. More than 50% of the total ginger production in India takes place in the North-East, concentrated and Sikkim alone. If you wish to export ginger, Tark Internationals is one of the leading exporters in India. With their extensive experience and expertise in this field, they make sure that your products are delivered safely across the world.',
          ],
        },
      },
      {
        slug: Products.STAR_ANISE,
        name: 'Star Anise',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.STAR_ANISE}.jpg`,
        data: {
          title: 'Indian Star Anise Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.STAR_ANISE}.jpg`,
          description: [
            'Star anise is the fruit of a small oriental tree. It is star-shaped and has five to ten pointed boat-shaped sections. These hard sections are seed pods. Star anise trees are short, compact and pleasant-looking. It has the flavour which is reminiscent of licorice. Star anise is sometimes confused with anise due to the similarity of name and flavour, but the two spices are unrelated. Export of Star Anise is done from many countries in the world. It is not only used in several dishes across the world but it also has medicinal properties. Therefore, star anise export from India is, on the rise.',
          ],
          conclusion: [
            'If you wish to export Star Anise, Tark Internationals is one of the leading exporters in India. When you export products, it comes with several responsibilities including documentation, checking if the product meets the quality and health standards and so on. Tark Internationals, the best exporters from India, will assist you with every step on the way. Pisum will make sure that your products reach any corner of the world fresh and safe!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Star anise is widely used in culinary applications and traditional medicine across various cultures. It is a prominent ingredient in Asian cuisines, particularly Chinese, Vietnamese, and Indian cooking. The spice contains rich flavonoids and polyphenolic compounds, making it valuable for treating fungal, bacterial, and viral infections. Tark Internationals exports star anise and other food products from India to European and Asian markets, including Germany, USA, France, Russia, Korea, Singapore, Japan, and the Middle East.',
            ],
            specification: {
              productName: 'Star Anise',
              origin: 'Southeastern part of China and Vietnam',
              family: 'Schisandraceae',
              binomialName: 'Illicium verum',
            },
            ingredients: {
              nutrients: {
                calories: '21.9 (91.7 kJ)',
                carbohydrates: '3.3g',
              },
              minerals: [
                'Calcium',
                'Iron',
                'Magnesium',
                'Phosphorus',
                'Potassium',
                'Sodium',
                'Zinc',
                'Copper',
                'Manganese',
                'Selenium',
                'Fluoride',
              ],
              vitamins: ['Vitamin A', 'Vitamin C'],
              protein: '1.0 g',
              fats: '1.0g',
            },
            usesAndBenefits: {
              uses: [
                'Medicinal Uses: The oil produced from star anise contains thymol, terpineol and anethole. This may be used for treating cough and flu. Anise also may help to improve digestion, alleviate cramps and reduce nausea.',
                'Culinary Uses: It can be used as a whole or as a powder in various dishes. Star Anise is used in Indian, Chinese and Vietnamese cuisines.',
              ],
            },
          },
        },
      },
      {
        slug: Products.CINNAMON,
        name: 'Cinnamon',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CINNAMON}.jpg`,
        data: {
          title: 'Indian Cinnamon Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.CINNAMON}.jpg`,
          description: [
            'Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum. It is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snack foods, tea and traditional foods. The aroma and flavour of cinnamon derive from its essential oil and principal component, cinnamaldehyde, as well as numerous other constituents including eugenol. Cinnamon is available in ground form and as sticks. Cinnamon export from India has been growing rapidly over the years. The major cinnamon-producing regions in India are Western Ghats, Kerala, Karnataka, and Tamil Nadu.',
          ],
          conclusion: [
            'If you wish to export Cinnamon, Tark Internationals is one of the leading exporters in India. When you export products, it comes with several responsibilities including documentation, checking if the product meets the quality and health standards and so on. Tark Internationals, the best exporters from India, will assist you with every step on the way. Pisum will make sure that your products reach any corner of the world fresh and safe!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Cinnamon has a sweet-spicy flavour and is used in food, chocolate, apple pie, confectionery, liquors, pharmaceuticals, and cosmetics. It is said to be beneficial for diabetics. The rise in cinnamon import to India has been increasing over the years. India is among the top ten exporters of cinnamon in the world. The global cinnamon market was valued at US$692.4 million in 2019. Tark Internationals exports cinnamon and other food products from India to USA, Canada, Australia, UK, and New Zealand.',
            ],
            specification: {
              productName: 'Cinnamon',
              origin: 'Native to Ceylon, Sri Lanka',
              family: 'Laurels',
              binomialName: 'Cinnamomum verum',
            },
            ingredients: {
              nutrients: {
                calories: '6.42 calories',
                carbohydrates: '2.1g',
                fiber: '53g/100 grams',
              },
              minerals: [
                'Iron',
                'Zinc',
                'Calcium',
                'Chromium',
                'Manganese',
                'Magnesium',
                'Sodium',
                'Potassium',
                'Phosphorous',
              ],
              vitamins: ['Vitamin A', 'Vitamin B', 'Vitamin K'],
              protein: '4g/100 grams',
              fats: '1.2g/100 grams',
            },
            usesAndBenefits: {
              uses: [
                'Medicinal Benefits: Cinnamon is rich in antioxidants, has anti-inflammatory properties, and is said to cut the risk of heart diseases.',
                'Culinary Uses: Cinnamon is used in several dishes for its unique flavor and aroma.',
              ],
            },
          },
        },
      },
      {
        slug: Products.ASAFOETIDA,
        name: 'Asafoetida',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.ASAFOETIDA}.jpg`,
        data: {
          title: 'Indian Asafoetida Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.ASAFOETIDA}.jpg`,
          description: [
            'Asafoetida is basically the dried sap obtained from the roots of Ferula plants. Native to Afghanistan and Iraq, asafoetida is dried, ground into a spice, and used as a spice in various cuisines across the world. The Asafoetida exporter in India exports tonnes of Asafoetida to various countries in the world. Besides, its unique flavor and aroma, Asafoetida also has many health benefits. Asafoetida export from India has thus been increasing over a period of time. This high global demand of Asafoetida is a good opportunity for the Indian asafoetida exporter to export his products abroad and gain recognition internationally. Asafoetida export is one of the most important export sectors today.',
          ],
          conclusion: [
            'Tark Internationals is one of the leading asafoetida importer from India. We export premium quality Asafoetida to various countries in the world. Due to its beautiful texture and aroma and its health benefits, the export of asafoetida from India has grown rapidly over the past few years. If you are looking for asafoetida export from India, Tark Internationals is the best choice for you!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Asafoetida exporter in India exports asafoetida to around 114 countries and territories in the world. The combined value of total Asafoetida import from India is 7.93 USD million. The growing popularity of Asafoetida worldwide is due to its several healthy and medicinal uses. Asafoetida is used for curing and preventing health conditions such as breathing or throat problems, digestion problems, to restart their menstrual periods after menstruation by women, and so on.',
            ],
            specification: {
              productName: 'Asafoetida',
              origin: 'Central Asia, eastern Iran to Afghanistan',
              family: 'Umbellifers',
              binomialName: 'Ferula assafoetida',
            },
            ingredients: {
              nutrients: {
                calories: '297.1',
                carbohydrates: '67.8g',
                fiber: '4.1g',
              },
              minerals: [
                'Calcium',
                'Iron',
                'Magnesium',
                'Phosphorous',
                'Zinc',
                'Copper',
                'Manganese',
              ],
              vitamins: [],
              protein: '4g',
              fats: '1.1g',
            },
            usesAndBenefits: {
              uses: [
                'Asafoetida has many health benefits. It is used to reduce bloating and such other digestion and stomach problems.',
                'Asafoetida is also known to be a natural source to lower blood pressure levels. It is a blood thinner and is packed with a compound called coumarin that aids in improving blood flow.',
                'Asafoetida is also said to heal insect and animal bites. It is also known to reduce menstrual pain and headaches.',
                'Asafoetida is also sometimes applied directly to the skin for corns and calluses. But no scientific evidence has supported this use.',
              ],
            },
          },
        },
      },
      {
        slug: Products.NUTMEG,
        name: 'Nutmeg',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.NUTMEG}.jpg`,
        data: {
          title: 'Indian Nutmeg Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.NUTMEG}.jpg`,
          description: [
            'Nutmeg is basically the seed or ground spice of several species of the genus Myristica. Nutmeg exporter from India export tonnes of Nutmeg abroad every year. The annual production of Nutmeg in India is around 14,000 - 16,000 Metric Tons. Nutmeg export from India thus has been increasing year after year. Due to the various uses and benefits of Nutmeg in diverse fields, the Indian nutmeg exporter has a great opportunity to export his products abroad. Nutmeg export has been on the rise due to this rising demand for Nutmeg worldwide.',
          ],
          conclusion: [
            'If you are looking for a Nutmeg importer from India, Tark Internationals is the best option! We at Tark Internationals have extensive experience in the food export industry and export various Indian food products to different corners of the world. The export of Nutmeg has seen a recent increase due to the popularity of its benefits and uses. Tark Internationals makes sure that your Nutmeg Export from India is exported in a timely manner, maintaining all the health and safety regulations. Want to export Nutmeg from India? Pisum is here to help you!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Nutmeg is used in many industries today. It has medicinal and health benefits uses in the manufacturing industry so on and so forth. The nutmeg exporter in India export nutmeg abroad after careful testing and quality checks put in place by the government. The nutmeg import from India is thus safe and your products will reach the destination fresh and on time.',
            ],
            specification: {
              productName: 'Nutmeg',
              origin: 'Moluccas or Spice Islands, of Indonesia',
              family: 'Myristicaceae',
              binomialName: 'Myristica fragrans',
            },
            ingredients: {
              nutrients: {
                calories: '525',
                carbohydrates: '49g',
                fiber: '21g',
              },
              minerals: [
                'Magnesium',
                'Manganese',
                'Copper',
                'Phosphorous',
                'Zinc',
              ],
              vitamins: ['Vitamin B1'],
              protein: '6g',
              fats: '36g',
            },
            usesAndBenefits: {
              uses: [
                'Nutmeg is known to have health and medicinal benefits. It helps digestion and has the ability to relieve pain.',
                'Nutmeg is said to strengthen the cognitive function and also detoxify the body.',
                'Nutmeg also boosts your skin health and alleviates oral conditions. It also may help to reduce insomnia and increase the immune system function.',
                'Nutmeg may also be useful to prevent leukaemia and improve blood circulation.',
              ],
            },
          },
        },
      },
      {
        slug: Products.CUMIN,
        name: 'Cumin',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CUMIN}.jpg`,
        data: {
          title: 'Indian Cumin Seeds Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.CUMIN}.jpg`,
          description: [
            'Being the third most consumed spices in the world, the aromatic and spicy-sweet flavour of Cumin has amazed the entire planet. The seeds have been used since ancient times and are still a signature ingredient in many lovely dishes across the world. Cumin is the seeds of the fruit of the Cuminum cyminum plants. Native to South Western Asia as well as the Middle East, these seeds are dried and used in food as well as for other purposes. Currently, India holds the position of being the leading producers as well as consumers of Cumin.',
          ],
          conclusion: [
            'At Pisum, we are leading exporters of the best quality Cumin seeds. We ensure that your products reach any corner of the world fresh and safe!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Cumin seeds have been used since ancient times and are still a signature ingredient in many lovely dishes across the world. Apart from the seed form, it is also used in the powdered form or as essential oils. The plant requires optimum temperatures between 25-30 degree Celsius and good Mediterranean climate. India holds the position of being the leading producers as well as consumers of Cumin.',
            ],
            specification: {
              productName: 'Cumin seeds',
              origin: 'Levant (Eastern Mediterranean)',
              family: 'Apiaceae',
              binomialName: 'Cuminum cyminum',
            },
            ingredients: {
              nutrients: {
                calories: '375 Kcl',
                carbohydrates: '44.24 gm',
                fiber: '10.5 gm',
              },
              minerals: [
                'Calcium',
                'Iron',
                'Magnesium',
                'Manganese',
                'Phosphorus',
                'Potassium',
                'Sodium',
                'Zinc',
              ],
              vitamins: ['Vitamin C', 'Vitamin E', 'Vitamin B'],
              protein: '17.81 gm',
              fats: '22.27 gm',
            },
            usesAndBenefits: {
              uses: [
                'Culinary: Cumin seeds or in the powdered form is used as a spice in a number of dishes across the planet.',
                'Essential oils: Due to its aroma and pungent smell, cumin is also used as essential oils and perfumes.',
                'Skincare: It is mixed with other products such as honey in skincare including exfoliation.',
                'Medicinal: Cumin is used in traditional medicine to make kashaya, arishta, etc. It is also used in several Indian households as jira water.',
              ],
            },
          },
        },
      },
      {
        slug: Products.BLACK_PEPPER,
        name: 'Black Pepper',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.BLACK_PEPPER}.jpg`,
        data: {
          title: 'Indian Black Pepper Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.BLACK_PEPPER}.jpg`,
          description: [
            'Black Pepper is one of the most commonly used spices in the world. Originally from South India, black pepper is grown in several tropical countries in the world. Black Pepper exporter in India export tonnes of black pepper abroad each year. Black pepper export from India was around 17600 metric tonnes last year. Therefore, Black pepper export stands as a great opportunity for the Indian Black pepper exporter to export his products abroad and thrive in the international market.',
          ],
          conclusion: [
            'Tark Internationals is one of the leading Black Pepper importers from India. We have been working in the field of export of Black Pepper for a long time and have extensive experience in the field. We help our clients right from finding buyers for their products until the final delivery of the products. We make sure that the clients face no issues with any processes involved in the export of Black Pepper. If you are looking for Black Pepper export from India, drop a message to Tark Internationals and our executives will be here to help you!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Black pepper is used in various cuisines across the world for its unique flavor and aroma. Besides culinary uses, Black pepper is also said to have many health and medicinal uses. Black pepper exporter in India export premium quality black pepper to various countries including the US, Sweden, UK, Italy, Canada, and so on and so forth. If you wish to Black Pepper import from India, Pisum is here to help you!',
            ],
            specification: {
              productName: 'Black pepper',
              origin: 'Kerala in South India',
              family: 'Piperaceae',
              binomialName: 'Piper nigrum',
            },
            ingredients: {
              nutrients: {
                calories: '251',
                carbohydrates: '64 g',
                fiber: '25g',
              },
              minerals: [
                'Potassium',
                'Manganese',
                'Iron',
                'Zinc',
                'Magnesium',
                'Calcium',
              ],
              vitamins: ['Vitamin K'],
              protein: '10 g',
              fats: '3.3g',
            },
            usesAndBenefits: {
              uses: [
                'Black Pepper is used in many cuisines across the world. It has a beautiful aroma and tastes delicious when used properly in different dishes.',
                'Some people apply black pepper to the skin for measles, nerve pain, itchy skin caused by mites, and also for insect bites.',
                'It is said that inhaling black pepper oil helps to quit smoking and reduce cravings, and for trouble swallowing.',
                'Black pepper is also used to stimulate digestion and helps relieve cough and cold. It is also said to improve skin health and help weight loss.',
              ],
            },
          },
        },
      },
      {
        slug: Products.GARLIC,
        name: 'Garlic',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.GARLIC}.jpg`,
        data: {
          title: 'Indian Garlic Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.GARLIC}.jpg`,
          description: [
            'Garlic is a species in the onion genus and is primarily grown all around the world. The garlic exporter in India exports tonnes of garlic to various countries each year. Due to the unique taste and aroma of garlic, the garlic export from India has been on a rise. This is a good opportunity for the Indian Garlic exporter to expand his business and enter the international marketplace. The garlic export from India includes the export of various varieties of Garlic.',
          ],
          cardSections: [
            {
              title: 'GARLIC VARIETIES WE EXPORT',
              description:
                'India produces various varieties of garlic, each with unique characteristics and growing conditions. These varieties are cultivated across different regions and exported worldwide.',
              items: [
                {
                  id: 1,
                  title: 'AGRIFOUND WHITE',
                  description:
                    'Developed by mass selection from Bihar. Compact, silvery-white with creamy flesh. Susceptible to purple blotch and stemphyllum blight. Yield: ~150 q/ha.',
                },
                {
                  id: 2,
                  title: 'YAMUNA SAFED (G-1)',
                  description:
                    'Developed from Delhi (Azadpur) market. Compact, silvery-white skin, creamy flesh. Sickle-shaped cloves (25-30). Tolerant to insect pests and diseases.',
                },
                {
                  id: 3,
                  title: 'YAMUNA SAFED-2 (G-50)',
                  description:
                    'Developed from Karnal, Haryana. Compact, attractive, white creamy flesh. Average yield: ~150-200 q/ha. Recommended for Northern India.',
                },
                {
                  id: 4,
                  title: 'YAMUNA SAFED-3 (G-282)',
                  description:
                    'Thrived in Northern and Central India. Developed from Dindigul (1990). Wider leaves. Creamy-white, bigger sized bulbs.',
                },
                {
                  id: 5,
                  title: 'AGRIFOUND PARVATI',
                  description:
                    'Developed in 1992 from Hongkong market. Long day type, suitable for mid and high hills of Northern states. Bigger size, creamy white with a pinkish tinge.',
                },
                {
                  id: 6,
                  title: 'YAMUNA SAFED-4 (G-323)',
                  description:
                    'Developed from Jaunpur, Uttar Pradesh. Compact, attractive, creamy white. Matures in 165-175 days. Average yield: ~200-250 q/ha.',
                },
                {
                  id: 7,
                  title: 'PORCELAIN GARLIC',
                  description:
                    "Classic, pearly white, stiff neck. Four or five uniform cloves. Scape (bulb's shoots) can be used in cooking. Simple, strong taste.",
                },
                {
                  id: 8,
                  title: 'ROCAMBOLE GARLIC',
                  description:
                    "Purple-streaked, loose skin. Big-flavoured, doesn't keep long. High in sulfenic acid (chilli-like burning taste).",
                },
              ],
            },
          ],
          conclusion: [
            'Tark Internationals is the leading Garlic importer from India. We at Tark Internationals understand that the export of Garlic may be a complicated process. Our executives will help you with each and every step involved in the process of export, right from documentation to the final delivery of the products. If you are looking for Garlic export from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.CLOVE,
        name: 'Clove',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CLOVE}.jpg`,
        data: {
          title: 'Indian Clove Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.CLOVE}.jpg`,
          description: [
            'Cloves are primarily the aromatic flower buds of a tree in the family Myrtaceae. The Clove exporter in India exports cloves to around 149 countries in the world. The Clove export from India has been growing over the years due to the popularity of spice all over the world. This is a good business opportunity for the Indian Clove exporter to expand his business and export cloves worldwide. The clove export from India involves exporting various varieties of the spice.',
          ],
          conclusion: [
            'Tark Internationals is one of the leading Clove importers from India. We at Tark Internationals hold extensive experience in the field of food export and know the ins and outs of the industry. Our global connections and in-depth knowledge of the industry have proved to be useful to many of our past clients. We will help you in the export of clove process right from finding buyers to quality checks and until your products have been successfully delivered to the destination. If you are looking for Clove export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'In the year 2019-2020, the Clove exporter in India exported Cloves worth around 91.62 USD million. The total volume of the cloves exported in 2019-2020 was around 5498639 MT. Clove import from India includes Kuwait, Singapore, Saudi Arabia, Panama Republic and the United Arab Emirates. The total export value of Clove in these top 5 countries was about 45.76 USD million.',
            ],
            specification: {
              productName: 'Cloves',
              origin: 'Maluku Islands (or Moluccas) in Indonesia',
              family: 'Myrtaceae',
              binomialName: 'Syzygium aromaticum',
            },
            ingredients: {
              nutrients: {
                calories: '6 kcal',
                carbohydrates: '1.38 g',
                fiber: '0.7 grams',
              },
              minerals: [
                'Potassium',
                'Manganese',
                'Iron',
                'Selenium',
                'Magnesium',
              ],
              vitamins: ['Vitamin K'],
              protein: '0.13 g',
              fats: '0.27 g',
            },
            usesAndBenefits: {
              uses: [
                'Cloves are said to help fight tooth plague. Some research shows that using toothpaste or mouth wash which contains clove is beneficial for your teeth.',
                'Cloves may also help reduce excessive sweating. Research states that applying clove oil to the palms for around 2 weeks may help reduce excessive sweating of the palms.',
                'Clove oil is also said to be a Mosquito repellent. Applying clove oil or clove oil gel directly to the skin is said to repel mosquitos for up to 5 hours.',
                'Applying a solution containing clove oil gel on the skin may also help with severe itching.',
              ],
            },
          },
        },
      },
      {
        slug: Products.MUSTARD_SEEDS,
        name: 'Mustard Seeds',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.MUSTARD_SEEDS}.jpg`,
        data: {
          title: 'Indian Mustard Seeds Exporters',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.MUSTARD_SEEDS}.jpg`,
          description: [
            'Mustard is a condiment made from the seeds of a mustard plant. The mustard exporter in India exports tonnes of mustard abroad each year. Due to the various uses and benefits of mustard, the mustard export from India has been on a rise. This is a good opportunity for the Indian Mustard exporter to expand his business and enter the international marketplace. The mustard export from India includes the export of various varieties of Mustard.',
          ],
          conclusion: [
            'Tark Internationals is one of the leading Mustard Seeds importer from India. We at Tark Internationals have extensive experience in the field of food export and know the ins and outs of the industry. We help our clients right from finding buyers for their products until the final delivery of the products. We make sure that the clients face no issues with any processes involved in the export of Mustard Seeds. If you are looking for Mustard Seeds export from India, drop a message to Tark Internationals and our executives will be here to help you!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The global demand for Mustard has been increasing over the years. India exports mustard oil to countries like Bangladesh, USA, Malaysia, Japan, Australia, and so on and so forth. The combined export value of Mustard oil in these top 5 countries is around 81.01 USD million. Around 122 countries import Mustard seeds from India.',
            ],
            specification: {
              productName: 'Mustard',
              origin: 'Ancient Egypt',
              family: 'Brassica',
              binomialName: 'Brassica',
            },
            ingredients: {
              nutrients: {
                calories: '66 kcal',
                carbohydrates: 'Total Carbohydrates - 5 g',
                fiber: '3.3 grams',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium', 'Cobalamin'],
              vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin B-6'],
              protein: '0.13 g',
              fats: '0.27 g',
            },
            usesAndBenefits: {
              uses: [
                'Mustard seeds are used as a pickling spice and spice mixtures for meats and seafood.',
                'Mustard seeds are used for common cold, painful joints and muscles, and Arthritis.',
                'Mustard seeds are used ground with other spices for curry powders and pastes.',
                'Mustard seeds are beneficial for aching feet and lower back pain.',
              ],
            },
          },
        },
      },
      {
        slug: Products.BAY_LEAF,
        name: 'Bay-Leaf',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.BAY_LEAF}.jpg`,
        data: {
          title: 'Indian Bay Leaf Exporters',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.BAY_LEAF}.jpg`,
          description: [
            'The Bay leaf is aromatic and has several culinary uses. The Bay Leaf exporter in India exports tonnes of Bay leaves abroad each year. Due to its various uses and benefits, the Bay Leaf export from India has been on a rise over the last few years. This is a good opportunity for the Indian Bay Leaf exporter to expand his business and enter the international marketplace. The Bay Leaf export from India includes the export of various varieties of the product.',
          ],
          conclusion: [
            "Tark Internationals is one of the leading Bay Leaf importers from India. We understand that the export of Bay Leaf may be a complex procedure at times. But don't worry now! We at Tark Internationals are here to help you! Our executives are trained to assist you with every step of the process right from finding buyers for your products until the final delivery. If you are looking for Bay Leaf export from India, Contact Pisum now!",
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global Market Demand for Bay Leaf has been increasing for many years now. This growing popularity of Bay leaves may be due to the various nutritional characteristics of the leaves and its diverse uses. The Bay Leaf exporter in India exports the leaves to various parts of the world. The Bay Leaf import from India has been rising because of the premium quality and varieties of the leaf exported from India.',
            ],
            specification: {
              productName: 'Bay Leaf',
              origin: 'Mediterranean',
              family: 'Lauraceae',
              binomialName: 'Laurus nobilis',
            },
            ingredients: {
              nutrients: {
                calories: '314 kcal',
                carbohydrates: '75 g',
                fiber: '26 g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium', 'Cobalamin'],
              vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin B-6'],
              protein: '8 g',
              fats: '8 g',
            },
            usesAndBenefits: {
              uses: [
                'The bay leaf is said to be useful for diabetes. Research shows that taking ground bay leaf twice a day along with medicine for diabetes may lower pre-meal blood sugar levels.',
                'The bay leaf is also said to be useful for reducing joint and muscle pain. The bay leaves may be ground and applied to the skin.',
                'The bay leaves are said to be a cure for dandruff when applied to the skin.',
                'Bay Leaf tea is also said to be useful for migraines and is a rich source of Vitamin C, Vitamin A, and such other minerals.',
              ],
            },
          },
        },
      },
      {
        slug: Products.CHILI_PEPPER,
        name: 'Chili-Pepper',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CHILI_PEPPER}.jpg`,
        data: {
          title: 'Indian Chilli Pepper Exporters',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.CHILI_PEPPER}.jpg`,
          description: [
            'Chilli Pepper is one of the most important spices in India and all over the world. Indian Chillies are popular across the world. The Chilli Pepper exporter in India exports tonnes of chillies abroad each year. Due to various culinary uses of Chilli pepper, the popularity of this spice is growing. The Chilli Pepper export from India has thus also been on a rise over the years. The Indian Chilli Pepper exporter has a good opportunity to expand his business and enter the international market. The Chilli Pepper export includes the export of various varieties of the product.',
          ],
          conclusion: [
            'Pisum Foods is the best Chilli Pepper importer from India. Having extensive experience in the food export industry, we make sure that the process of export of Chilli Pepper is hassle-free for our clients. We support our clients in every way possible, right from finding buyers for their products until the final delivery of the order. If you are looking for Chilli Pepper export from India, contact Pisum Foods now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Chilli Pepper is grown extensively in India. Red chillies are grown over 792,000 hectares of land in the states of Andhra Pradesh, Karnataka, Madhya Pradesh and Maharashtra. Around 1,376,000 million tons of red chillies are produced in India every year. Of these chillies 70% are consumed domestically, while Chilli Pepper exporter in India exports the left 30%. The Chilli Pepper import from India has been increasing due to the premium quality of chillies exported from India.',
            ],
            specification: {
              productName: 'Chilli Pepper',
              origin: 'Mexico',
              family: 'Solanaceae',
              binomialName: 'Capsicum annuum',
            },
            ingredients: {
              nutrients: {
                calories: '40 kcal',
                carbohydrates: '9 g',
                fiber: '1.5 g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin B-6'],
              protein: '2 g',
              fats: '0.2 g',
            },
            usesAndBenefits: {
              uses: [
                'Chilli Peppers are sometimes prepared and eaten like a vegetable. The pods can also be dried and then crushed or ground into chilli powder that is used as a spice or seasoning for recipes.',
                'Capsaicin is a chemical in chilli peppers that gives them the flavour and makes them hot. This chemical is used as an analgesic in topical ointments, nasal sprays, and dermal patches to relieve pain.',
                'Chillies are used in several cuisines across the world be it the Indian cuisine, the Chinese cuisine or the Italian cuisine.',
              ],
            },
          },
        },
      },
      {
        slug: Products.CORIANDER,
        name: 'Coriander',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CORIANDER}.jpg`,
        data: {
          title: 'Indian Coriander Seeds Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.CORIANDER}.jpg`,
          description: [
            'Coriander seeds are plump and usually brown in colour. They have a hollow cavity which bears essential oils that flavour of the dishes when used in cooking. The Coriander Seeds exporter in India exports huge quantities of the product each year. Coriander Seeds export from India is considered a great business opportunity for our local vendors and farmers to expand their businesses and enter the international market. The Indian Coriander Seeds exporter exports several varieties of these seeds to different parts of the world. The Coriander Seeds export has great demand in the world today.',
          ],
          cardSections: [
            {
              title: 'CORIANDER SEEDS VARIETIES WE EXPORT',
              description:
                'Coriander Seeds import from India includes various varieties of the seeds including Sadhana, Sindhu, Sudha so on and so forth. The Coriander Seeds exporter in India exports premium quality seeds to different parts of the world. The export of Coriander Seeds from India includes the following major varieties.',
              items: [
                {
                  id: 1,
                  title: 'SADHANA (CS-4)',
                  description:
                    'Medium duration variety suitable for grains/leaf. Resistant to aphids and performs well in moisture-retentive black soils. Yield: 1000-1100 kg per hectare.',
                },
                {
                  id: 2,
                  title: 'SINDHU (CS-2)',
                  description:
                    'Medium duration variety (95-100 days) with medium grain size. Yield: around 1950 kg/ha. Suitable for export.',
                },
                {
                  id: 3,
                  title: 'SUDHA (LCC-128)',
                  description:
                    'Medium duration variety (80-98 days) with oblong-shaped, medium grain size. Yield: 750-1200 kg/ha. Essential oil content: 0.36%-0.40%.',
                },
                {
                  id: 4,
                  title: 'SWATHI (CS-6)',
                  description:
                    'Short duration variety (80-85 days) that escapes powdery mildew. Yield: around 200 kg/ha. Good for export.',
                },
                {
                  id: 5,
                  title: 'APHU DHANIA-1 (LCC-170)',
                  description:
                    'Medium duration variety (85-90 days) with bold and oblong-shaped seeds. Yield: 860-1200 kg/ha. Essential oil content: about 0.40%.',
                },
                {
                  id: 6,
                  title: 'SUGUNA (LCC-236)',
                  description:
                    'Medium duration variety (90-95 days) with slender and oval-shaped seeds. Yield: 760-1363 kg/ha. High volatile oil content: about 0.52%.',
                },
                {
                  id: 7,
                  title: 'SURUCHI (LCC-234)',
                  description:
                    'High yielding leaf variety for off-season production. Harvests in 35-55 days. Average yield: 15-18 t/ha (grain in rabi season), 2.05-4.5 t/ha (greens in off-season under 50% shade net).',
                },
                {
                  id: 8,
                  title: 'SUSTHIRA (LCC-219)',
                  description:
                    'High yielding medium duration variety. Stable yield under rainfed areas (12.0-14.3 quintals/hectare) and irrigated conditions (12.0-17.5 quintals/hectare).',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum is one of the leading Coriander Seeds importer from India. We at Pisum Foods aim to spread the Indian culture, food, and such other products to the global market. Coriander Seeds are demanded on a large scale globally. Therefore, this is a good opportunity for the local vendors and farmers to earn some extra revenue too. We at Pisum Foods will help you with every step involved in the export process until the final delivery of the product. If you are looking for exporter of Coriander Seeds from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.SAFFRON,
        name: 'Saffron',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.SAFFRON}.jpg`,
        data: {
          title: 'Indian Saffron Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.SAFFRON}.jpg`,
          description: [
            'Saffron is a spice derived from the flower of Crocus sativus, commonly known as the "saffron crocus". The vivid crimson stigma and styles, called threads, are collected and dried for use mainly as a seasoning and colouring agent in food. Saffron has long been the world\'s most costly spice by weight. Saffron export from India has been growing over the years due to the popularity of this premium spice all over the world. This is a good business opportunity for the Indian Saffron exporter to expand his business and export saffron worldwide.',
          ],
          conclusion: [
            'Pisum Foods is a leading Saffron importer from India. We at Pisum Foods help our clients with each and every step while exporting products from India. Our team has extensive experience in the export industry and we make sure that the process is carried out smoothly with the least confusion and hassle. We strictly adhere to all the health and safety restrictions put in place for the exporter of Saffron and make sure that your products are delivered safely. If you are looking for Saffron export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Saffron exporter in India exports saffron to around 64 countries in the world. The combined export value of the saffron exported from India is around 0.87 USD million. Countries like Oman, Saudi Arabia, Qatar, USA, Australia and so are the major players in the Saffron import from India. The Global Market Demand for saffron has been on a rise due to its use in various cuisines across the world including French bouillabaisse, Spanish paella, Milanese risotto, and many Middle Eastern dishes.',
            ],
            specification: {
              productName: 'Saffron',
              origin: 'Greece',
              family: 'Iridaceae',
              binomialName: 'Crocus sativus',
            },
            ingredients: {
              nutrients: {
                calories: '310 kcal',
                carbohydrates: '65g',
                fiber: '3.9g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin A', 'Vitamin C', 'Vitamin B-6'],
              protein: '11g',
              fats: '6g',
            },
            usesAndBenefits: {
              uses: [
                'Saffron is known to be rich in plant compounds that act as antioxidants. The antioxidants are said to help protect your cells against oxidative stress.',
                'Eating and smelling saffron is said to treat PMS symptoms, such as irritability, headaches, cravings, pain, and anxiety.',
                'Saffron has been shown to reduce snacking and curb your appetite. In turn, these behaviours may help you lose weight.',
                'It is also said that Saffron reduces snacking and curbs your appetite. This might also help you to lose weight.',
              ],
            },
          },
        },
      },
      {
        slug: Products.CAROM_SEEDS,
        name: 'Carom Seeds / Thyme',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.CAROM_SEEDS}.jpg`,
        data: {
          title: 'Indian Carom Seeds Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.CAROM_SEEDS}.jpg`,
          description: [
            'Thyme is a Mediterranean herb with dietary, medicinal, and ornamental uses. The flowers, leaves, and oil of thyme have been used to treat a range of symptoms and complaints. These include diarrhea, stomach ache, arthritis, and sore throat. The Carom Seeds exporter in India exports huge quantities of Carom Seeds (Thyme) each year. Due to the various health and medicinal benefits of Thyme, the Carom Seeds export from India has been on a rise over the years. This is a good opportunity for the Indian Carom Seeds exporter to expand his business and enter the international marketplace. The Carom Seeds export from India includes the export of various varieties of the product.',
          ],
          cardSections: [
            {
              title: 'CAROM SEEDS VARIETIES WE EXPORT',
              description:
                'Carom Seeds import from India includes various varieties of the seeds including Annie Hall Thyme, Lavender Thyme, Pink Chintz Thyme, so on and so forth. The Carom Seeds exporter in India exports premium quality thyme to different parts of the world. The export of Carom Seeds from India includes the following major varieties.',
              items: [
                {
                  id: 1,
                  title: 'ANNIE HALL THYME',
                  description:
                    'Dark green, small-leaved ground cover thyme suitable for paving stones or small lawn areas. Light pink flowers, plant height around 1/4 inch.',
                },
                {
                  id: 2,
                  title: 'LAVENDER THYME',
                  description:
                    'Low-growing variety with sturdy leaves and stems. Strong thyme scent with hint of lavender. Often available in plug trays (128 plants).',
                },
                {
                  id: 3,
                  title: 'PINK CHINTZ THYME',
                  description:
                    'Delicate creeper with small, fuzzy grey-green leaves close together on stem. Suitable for smaller spaces like between stepping stones. Blooms early in spring.',
                },
                {
                  id: 4,
                  title: 'LIME THYME',
                  description:
                    'Great ground cover with bright green, lime-colored, scented leaves. Helps brighten dark garden corners. Blooms in summer, later than most thymes.',
                },
                {
                  id: 5,
                  title: 'WOOLLY THYME',
                  description:
                    'Soft, silvery, tightly knit filler for pavers or borders. Rarely flowers, good for bee allergies. Greyest of all thymes.',
                },
                {
                  id: 6,
                  title: 'MINT THYME',
                  description:
                    'Widely recommended for planting between flagstones. Fairly shallow root systems, requires good watering in summer. Lacks fragrance.',
                },
                {
                  id: 7,
                  title: 'HERETUS THYME',
                  description:
                    'Unusual ground cover thyme with long, narrow, grey-green leaves giving lacy appearance. Tough variety, good choice for any garden.',
                },
                {
                  id: 8,
                  title: 'COCONUT THYME',
                  description:
                    'Blooms well and grows fast. Can be planted in swaths in front of Caraway Thyme. Both are heavy bloomers at different times.',
                },
                {
                  id: 9,
                  title: 'LEMON FROST THYME',
                  description:
                    'Rapid grower with wonderful lemon scent, perfect for covering large ground segments. Cost-effective way to fill space.',
                },
                {
                  id: 10,
                  title: 'SILVER NEEDLE THYME',
                  description:
                    'Unusual ground cover thyme resembling soft juniper twig but soft to walk on. Soft silvery green hue, blooms in early spring with dark lilac flowers.',
                },
                {
                  id: 11,
                  title: 'PINK LEMONADE THYME',
                  description:
                    'Non-variegated, lemon-scented ground cover thyme with profuse pink flowers. Dark green, closely spaced leaves, dense and fast-growing.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is a leading Thyme importer from India. We at Pisum Foods aim to spread the Indian culture, food, flowers, and such other products to the global market. Thyme is demanded on a large scale globally. Therefore, this is a good opportunity for the local vendors and farmers to earn some extra revenue too. We at Pisum Foods will help you with every step involved in the export process until the final delivery of the product. If you are looking for exporter of Thyme from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.MACE,
        name: 'Mace',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.MACE}.jpg`,
        data: {
          title: 'Indian Mace Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.MACE}.jpg`,
          description: [
            'Mace is actually the lacy coating, called the aril, found on a nutmeg seed. This lacy aril is red in colour and can be removed by hand from the outer shell of the nutmeg and then dried. The Mace exporter in India exports tonnes of the product abroad from India. This Mace export from India has been increasing over the years. This may be because of the several health and medicinal benefits of Mace. The Indian Mace exporter, therefore, is earning good revenues from this export. The Mace export includes the export of various varieties of Mace.',
          ],
          conclusion: [
            "Pisum Foods is one of the leading Mace importers from India. We at Pisum Foods have extensive experience in the food export industry and know the rules and regulations for the exporter of Mace well. After understanding the client's requirements, we help the client in every way possible with the export process. Right from finding clients until the final delivery of the products, Pisum will support you with everything. If you are looking for Mace export from India, Contact Pisum now!",
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'India is the second main Mace Producing country in the world. Other mace growing countries include Indonesia, Sri Lanka and a few Caribbean Islands. For the Mace exporter in India, the US is the biggest market today. The US buyers usually prefer the east indian type Orange-Red Mace in its whole form. Due to the various uses and benefits of mace, the Mace import from India has been on a rise over the years.',
            ],
            specification: {
              productName: 'Mace',
              origin: 'Banda, Indonesia',
              family: 'Myristicaceae',
              binomialName: 'Myristica fragrans',
            },
            ingredients: {
              nutrients: {
                calories: '475 kcal',
                carbohydrates: '50.50g',
                fiber: '20.2g',
              },
              minerals: [
                'Folate',
                'Niacin',
                'Pyridoxine',
                'Riboflavin',
                'Thiamin',
              ],
              vitamins: ['Vitamin A', 'Vitamin C'],
              protein: '6.71 g',
              fats: '32.38g',
            },
            usesAndBenefits: {
              uses: [
                'Mace has various health and medicinal uses. It is consumed by mouth for diarrhoea, nausea, vomiting, stomach spasms and pain, and intestinal gas',
                'Mace may also be useful for treating cancer, kidney disease, increasing menstrual flow and so on.',
                'Mace can also be applied to the skin to kill the pain. It is used especially for pain caused by achy joints (rheumatism).',
                'In the food industry, mace is popularly used as a spice and flavouring.',
              ],
            },
          },
        },
      },
      {
        slug: Products.POPPY_SEED,
        name: 'Poppy Seed',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.POPPY_SEED}.jpg`,
        data: {
          title: 'Indian Poppy Seed Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.POPPY_SEED}.jpg`,
          description: [
            'Poppy Seed is the seed from the poppy plant. Poppy Seeds are also known as Khus Khus and are a well-known ingredient in various Indian cuisines. They have a peculiar nutty taste and are highly recommended to add a nice aroma to any cuisine. The Poppy Seed exporter in India exports huge quantities of the product each year. Due to the rising popularity of the seeds, Poppy Seed export from India has been increasing rapidly over the decades. The Indian Poppy Seed exporter, therefore, is exporting more and more products each year. This Poppy Seed export includes the export of various varieties of the product.',
          ],
          conclusion: [
            'Pisum is the leading Poppy Seed importer from India. We at Pisum believe that Indian culture, food, flowers, and such other products should be spread to the entire world. Our executives at Pisum are trained to help and support our clients at each step of the export process. With our expertise and extensive experience in the export field, we make sure that the Poppy Seed export from India is a hassle-free process for our client. If you are looking for an exporter of Poppy Seed, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global Market Demand for Poppy Seeds has been increasing over the years. This may be because of the awareness about its various health benefits and diverse uses. The Poppy Seed exporter in India exports Poppy Seeds from India to different corners of the world. The Poppy Seed import from India has been increasing due to the premium quality and varieties of Poppy Seeds exported from the country.',
            ],
            specification: {
              productName: 'Poppy Seed',
              origin: 'Greece and the Orient',
              family: 'Papaveraceae',
              binomialName: 'L. Papaver somniferum',
            },
            ingredients: {
              nutrients: {
                calories: '525 kcal',
                carbohydrates: '28g',
                fiber: '20g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin B-6', 'Vitamin C'],
              protein: '18 g',
              fats: '42g',
            },
            usesAndBenefits: {
              uses: [
                'Poppy Seed may be useful to treat asthma, constipation, cough, diarrhea caused by infection, difficulty sleeping, and to diagnose a condition called a vesicoenteric fistula.',
                'In the Food Industry, poppy seeds are used to make cakes, pastries, filling, glaze, or porridge.',
                'In the manufacturing industry, the poppy seed oil is used to make soap, paint, and varnish.',
              ],
            },
          },
        },
      },
      {
        slug: Products.GREEN_CARDAMOM,
        name: 'Green Cardamom',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.GREEN_CARDAMOM}.jpg`,
        data: {
          title: 'Indian Green Cardamom Exporters',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.GREEN_CARDAMOM}.jpg`,
          description: [
            'Green Cardamom is a spice with an intense, slightly sweet flavour that can be compared to mint. Even though Green Cardamom originated in India, it is used all over the world today. The Green Cardamom exporter in India exports tonnes of Cardamom abroad. Green Cardamom is used in various sweet and savoury dishes. The Green Cardamom export from India has thus been on a rise for a few years. For an Indian Green Cardamom exporter, this is a good business opportunity. The Green Cardamom export from India includes different varieties being exported.',
          ],
          conclusion: [
            'Pisum Foods is the leading Green Cardamom importer from India. We at Pisum Foods understand that the process of export of Green Cardamom from India can be complicated at times. We are here to make it easy for you! Our trained executives will help you at every step of the process until the final delivery of the products. Being one of the most reliable exporters from India, we make sure that all the health and safety regulations are maintained. Looking for Green Cardamom export from India? Contact Pisum Foods now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Green Cardamom exporter in India exports 500 - 700 Metric Tons of Green Cardamom every year to various countries in the world. Green Cardamom is consumed widely in Bangladesh, Pakistan, Syria, Egypt, Jordan, Turkey, Iran, Sudan, North Africa, Europe so on and so forth. The Green Cardamom import from india has been on a rise due to the premium quality of Cardamom and the various varieties exported.',
            ],
            specification: {
              productName: 'Green Cardamom',
              origin: 'India',
              family: 'Zingiberaceae',
              binomialName: 'Elettaria cardamomum',
            },
            ingredients: {
              nutrients: {
                calories: '311 kcal',
                carbohydrates: '68g',
                fiber: '28g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin B-6', 'Vitamin C'],
              protein: '11g',
              fats: '7g',
            },
            usesAndBenefits: {
              uses: [
                'Cardamom is said to help lower blood pressure levels. This is most probably due to its antioxidant and diuretic properties.',
                'Cardamom also has some antioxidant compounds that may help protect cells from damage and slow down and prevent inflammation in your body.',
                'Cardamom is also used to treat bad breath and is a common component of some chewing gums. This may be because Cardamom kills common mouth bacteria and prevents cavities.',
                'The essential oils and extracts of cardamom are said to be effective against a variety of bacterial strains that contribute to fungal infections, food poisoning and stomach issues. But more research in this field is required.',
              ],
            },
          },
        },
      },
      {
        slug: Products.PEPPERCORNS,
        name: 'Peppercorns',
        img: `/assets/product/${ProductCategory.SPICES}/${Products.PEPPERCORNS}.jpg`,
        data: {
          title: 'Indian Peppercorns Exporters',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.PEPPERCORNS}.jpg`,
          description: [
            "Peppercorns are basically dried berries from the vine Piper nigrum. These berries are ground into Black pepper. Black pepper is one of the most commonly used spices globally. The Peppercorns exporter in India exports tonnes of Peppercorns each year to many countries. Therefore, Peppercorn's export from India has been increasing over time. This is a good opportunity for the Indian Peppercorns exporter to expand his business and enter the international market. The Peppercorns export from India includes the export of many varieties of this product.",
          ],
          conclusion: [
            'Pisum Foods is one of the leading Peppercorn importers from India. We help our clients export various food products including fruits, vegetables, grains, pulses, oilseeds, so on and so forth. We assist our clients with every step on the way right from documentation until the final delivery of the products in the export of Peppercorns. If you are looking for Peppercorns export from India, Contact Pisum Foods now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global market demand for Peppercorns has been increasing worldwide. This may be because of the several health benefits and diverse uses of this spice. Peppercorns add flavour and aroma to your food and are also healthy for your body. The Peppercorns exporter in India. exports more and more quantities of this spice to various parts of the world. The Peppercorns import from India has been increasing due to its good reputation and the great quality of the products exported from India.',
            ],
            specification: {
              productName: 'Peppercorns',
              origin: 'Indian subcontinent and in Southeast Asia',
              family: 'Piperaceae',
              binomialName: 'Piper nigrum',
            },
            ingredients: {
              nutrients: {
                calories: '251 kcal',
                carbohydrates: '64g',
                fiber: '25g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin B-6', 'Vitamin C'],
              protein: '11g',
              fats: '3.3g',
            },
            usesAndBenefits: {
              uses: [
                'Peppercorn is rich in a potent antioxidant called piperine. This antioxidant may help prevent free radical damage to your cells.',
                "Peppercorns contain an active compound that decreases inflammation in animals. But we still don't have if it has the same effect on humans.",
                'Peppercorn has also demonstrated cholesterol-lowering effects in rodent studies. It is believed to boost the absorption of potential cholesterol-lowering supplements.',
                'Peppercorns extract has improved symptoms of degenerative brain diseases in animal studies, but more research on humans in this field has to be conducted.',
              ],
            },
          },
        },
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
        data: {
          title: 'Indian Green Chilli Pepper Exporters',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.GREEN_CHILLI_PEPPER}.jpg`,
          description: [
            'Green Chilli pepper is basically the fruit of plants from the genus Capsicum from the family Solanaceae. Chilli peppers are used in numerous cuisines to add heat to dishes. The Green Chilli Pepper exporter in india exports tonnes of the product each year to many countries. The Green Chilli pepper export from India has been increasing over time due to the growing popularity and the uses of the product. This is a good opportunity for the Indian Green Chilli Pepper exporter to expand his business and enter the international market. The Green Chilli Pepper export from India includes the export of many varieties of this product.',
          ],
          conclusion: [
            'Pisum Foods is one of the leading Green Chilli Pepper importer from India. We help our clients export various food products including fruits, vegetables, grains, pulses, oilseeds, so on and so forth. The export of Green Chilli Pepper may be a complicated process at times. Pisum Foods will help you with every step on the way until the products are delivered to their destination. If you are looking for Green Chilli Pepper export from India, Contact Pisum Foods now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Green Chilli Pepper exporter in India exports chillies to various countries in the world. Chillies are used extensively in various cuisines in the world. Eating chillies also has various health and medicinal benefits. The Green Chilli Pepper import from India has been on a rise due to the great reputation and the premium quality of chillies exported from india. great reputation and the premium quality of chillies exported from India.',
            ],
            specification: {
              productName: 'Green Chilli Pepper',
              origin: 'Mexico',
              family: 'Solanaceae',
              binomialName: 'Capsicum annuum',
            },
            ingredients: {
              nutrients: {
                calories: '40 kcal',
                carbohydrates: '9g',
                fiber: '1.5g',
              },
              minerals: ['Calcium', 'Iron', 'Magnesium'],
              vitamins: ['Vitamin A', 'Vitamin B-6', 'Vitamin C'],
              protein: '2g',
              fats: '0.2g',
            },
            usesAndBenefits: {
              uses: [
                'Green chilli Pepper has absolutely zero calories. Therefore it is a perfect spice ingredient for those focused on a healthy diet.',
                'Green Chilli Pepper is also rich in vitamin C and beta-carotene. Thus, chillies are great for the skin regime and help to keep your skin healthy and glowing.',
                'The Capsaicin in green chillies is known to lower body temperature. It stimulates the cooling centre of the hypothalamus in the brain.',
                'Green chilli Pepper is also useful to balance blood sugar levels. Therefore it is helpful for diabetics diet problems and a more stable lifestyle.',
              ],
            },
          },
        },
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
        data: {
          title: 'Indian Apple Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.APPLE}.jpg`,
          description: [
            'Apples are one of the most pocket-friendly and popular fruits across the world. Indian apple export business is thus growing in the past decade. There many varieties of apples available in the market today. Apple export from India is a good form of revenue for exporters. Quality standards and health measures should also be kept in mind while you export of apple from India.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description: 'Calories: 95\nCarbs: 25gm\nFiber: 4 gm',
                },
                {
                  id: 2,
                  title: 'Minerals',
                  description:
                    'Calcium\nCopper\nIron\nMagnesium\nPhosphorous\nPotassium\nSelenium\nSodium\nZinc',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description:
                    'Vitamin A, Vitamin B1, Vitamin B2, Vitamin B6, Vitamin C, Folate (Folic Acid)',
                },
                {
                  id: 4,
                  title: 'Protein',
                  description: '0.3g/100 gm',
                },
                {
                  id: 5,
                  title: 'Fats',
                  description: '0.2g/gm',
                },
              ],
            },
            {
              title: 'APPLE VARIETIES WE EXPORT',
              description:
                'Apple exporter in India exports various varieties of apples including Green apple, pink lady apple, Fuji apple so on and so forth. Here are some popular varieties of export apple from India',
              items: [
                {
                  id: 1,
                  title: 'GREEN APPLE (GRANNY SMITH)',
                  description:
                    'Granny Smith apples or Green apples have bright green skin often speckled with faint white spots. This variety of apples is medium to large in size and round in shape. They are firm and juicy and generally have thick skin. The flesh is said to be bright white and crisp in texture. The flavour of these apples can be described as tart, acidic, yet subtly sweet.',
                },
                {
                  id: 2,
                  title: 'PINK LADY APPLE',
                  description:
                    'The Pink Lady Apple has high sugars and acids and is known for the crisp bite and effervescent finish. It is more tart than sweet in flavour. It has a beautiful, bright white flesh and is one of the most refreshing fruits. This variety of apple is often used for pre-packaged apple slices. Being extremely versatile, it can be used for baking, snacking, sauces and so on.',
                },
                {
                  id: 3,
                  title: 'FUJI APPLE',
                  description:
                    'Fuji Apple is one of the most popular apple varieties in the world. Fuji apples are generally pink in colour with some yellow-green in the background. These apples are known to be crisp and juicy. They have a dull white flesh. The flavour of these apples is predominantly sweet and very refreshing.',
                },
                {
                  id: 4,
                  title: 'GALA APPLE',
                  description:
                    'This variety of apples is one of the most widely grown apples in the world. One characteristic which makes Gala apple unique is that it can be grown with good quality results in both temperate and warm apple-growing regions. Gala apples are very light coloured Cox, with orange streaks over yellow. The mature ones are darker often a strong red in colour.',
                },
                {
                  id: 5,
                  title: 'HONEY CRISP APPLE',
                  description:
                    'Honey Crisp is a modern variety of apples. This variety of apple is now largely available in the supermarkets. The size of the Honey Crisp apple is said to vary between medium and large. These apples are characterized by a light green or yellow background largely covered with red-orange flush with a hint of pink.',
                },
                {
                  id: 6,
                  title: 'ENVY APPLE',
                  description:
                    'Envy is basically the trademarked brand of the Scilate apple variety. Scilate apple is the variety of apples as a result of a cross between Royal Gala and Braeburn. Developed in New Zealand by Hortiresearch, the variety of apple is mostly red with yellow specks. The peel is fairly thick and tough and the flesh is pale yellow.',
                },
                {
                  id: 7,
                  title: 'RED APPLE',
                  description:
                    'As the name aptly states, Red apples are bright red in colour. This variety of apples is one of the most popular varieties found worldwide. It has a mildly sweet flavour and is juicy. It is lightly crispy and the skin of this apples can be tough. It is a refreshing fruit and can be a nice snack.',
                },
              ],
            },
          ],
          conclusion: [
            'Apple import from India is on the rise for a few years. This is because of the increasing demand for apples and apple products worldwide. Pisum Foods is one of the leading apple importer in India. We export premium quality apples from India. We make sure that the apples meet the health and quality standards of countries across the world. If you want export of apples from India, Pisum Foods is the best for you!',
          ],
        },
      },
      {
        slug: Products.BANANA,
        name: 'Banana',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.BANANA}.jpg`,
        data: {
          title: 'Indian Banana Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.BANANA}.jpg`,
          description: [
            'The export of food products from India is on the rise year after year, Banana export from India is one of the rapidly growing export markets. Being one of the largest banana exporters in the world, Indian banana exporter has successfully entered the global market. For export of banana, health and quality standards have to be maintained.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    'Net Carbs: 24 gm\nFiber: 3.1gm\nCalories: 89g/100gm',
                },
                {
                  id: 2,
                  title: 'Minerals',
                  description:
                    'Potassium\nCalcium\nMagnesium\nManganese\nIron\nFolate\nNiacin\nRiboflavin\nB6',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin B6 and B12',
                },
                {
                  id: 4,
                  title: 'Protein',
                  description: '1.1g/100gm',
                },
                {
                  id: 5,
                  title: 'Fats',
                  description: '0.3g/100gm',
                },
              ],
            },
            {
              title: 'BANANA VARIETIES WE EXPORT',
              description:
                'Being one of the most popular fruits in the world, banana exporter from India exports tonnes of bananas to the world each year. Here are some of the most important varieties of banana',
              items: [
                {
                  id: 1,
                  title: 'DWARF CAVENDISH',
                  description:
                    'Dwarf Cavendish is widely grown and is a commercially important Cavendish cultivar. Young dwarf cavendish plants have maroon or purple blotches on their leaves. This variety of Bananas is grown in parts of Asia for mass cultivation and they are sometimes grown as tall specimen plants in gardens at the back of borders to add a touch of the tropics. These plants need significant winter protection.',
                },
                {
                  id: 2,
                  title: 'BASRAI',
                  description:
                    'Basrai is a leading commercial variety of the Cavendish group of Bananas. It is majorly grown commercially in Maharashtra. The stature of this plant is dwarf making it less prone to wind damage. The bunch size of Basrai, the fruit length and size is pretty good of this variety of Bananas.',
                },
                {
                  id: 3,
                  title: 'ROBUSTA',
                  description:
                    'The Robusta variety of Bananas is generally large in size. These bananas are green colored when unripe and turn to yellow when they ripen. These Robusta Bananas can be eaten raw, used in baking, fruit salads, making desserts, fruit compotes, and to complement other foods.',
                },
                {
                  id: 4,
                  title: 'LAL VELCHI',
                  description:
                    'Red banana, also known as Lal Velchi, is the most relished and highly prized variety of bananas in Kerala and Tamil Nadu. The bananas are sweet, orange-yellow coloured and with a pleasant aroma. The commercial cultivation of Lal Velchi is prominent in Kanyakumari and Tirunelveli districts of Tamil Nadu.',
                },
                {
                  id: 5,
                  title: 'SAFED VELCHI',
                  description:
                    'Safed Velchi variety of bananas is considered a premium quality fruit for table purposes. It is cultivated in the Thane and Nasik districts of Maharashtra. This variety of bananas is generally medium-sized. The duration of this variety of bananas is about 13 months. Safed Velchi has a slender yellowish green pseudostem and can be generally recognised by the reddish petiole margin.',
                },
                {
                  id: 6,
                  title: 'RAJELI NENDRAN',
                  description:
                    'The Rajeli Nendran variety is said to display diversity in plant stature, pseudostem colour, presence or absence of male axis, bunch size, and such other characteristics. These bananas have a distinct neck with thick green skin which turns buff yellow on ripening. This variety of bananas remain starchy even on ripening.',
                },
                {
                  id: 7,
                  title: 'GRAND NAINE',
                  description:
                    'Grand Nain bananas are popular banana cultivars of Musa acuminata. This variety of bananas is the most commonly cultivated bananas. Grand Naine is a member of the commercial Cavendish banana cultivar group.',
                },
                {
                  id: 8,
                  title: 'POOVAN',
                  description:
                    'Poovan is a leading commercial cultivar grown throughout the country. Generally cultivated as a perennial crop, Tamil Nadu is the leading producer of Poovan cultivar. This variety is also commercially cultivated for leaf industry throughout Tamil Nadu and in certain parts of Kerala. The banana is slightly acidic but is firm and has a sour-sweet aroma.',
                },
              ],
            },
          ],
          conclusion: [
            'If you are looking for exporting bananas from India, Pisum Foods is here to help you! Due to the Increasing demand of bananas worldwide, banana exporter from India exports more bananas every year. Being one of the most versatile fruits, bananas are used in several dishes and such other purposes. Several countries do banana import from India. Pisum Foods is the leading banana importer from India and supplies premium quality bananas to every corner of the world. Looking for food exports? Pisum Foods is the best!',
          ],
        },
      },
      {
        slug: Products.MANGO,
        name: 'Mango',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.MANGO}.jpg`,
        data: {
          title: 'Indian Mango Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.MANGO}.jpg`,
          description: [
            'Mango is one of the most famous fruits of India. It is known as "King of fruits". The production of mangoes in India is around 15.03 million tons, contributing to 40.48% of the total world production of mango. Mango export from India has been increased by Rs. 209 crores in 2010-2011 from Rs. 142 crores in 2008-200707. The Indian mango export has thus grown by 47%. Export of mango from India is now a good opportunity for growth in the international market.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    'Calories: 99\nDietary Fiber: 2.6 gm\nCarbs: 24.7 gm',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '1.4 gm',
                },
                {
                  id: 3,
                  title: 'Fat',
                  description: '0.6 gm',
                },
                {
                  id: 4,
                  title: 'Vitamins',
                  description: 'Vitamin A and C',
                },
                {
                  id: 5,
                  title: 'Minerals',
                  description:
                    'Folate, B6, Iron and a little Calcium, Zinc and Vitamin E',
                },
              ],
            },
            {
              title: 'MANGO VARIETIES WE EXPORT',
              description:
                'Mango exporter in India exports many varieties of mangoes abroad. The major 5 countries which so mango import from India are UAE, Bangladesh, UK, Saudi Arabia, and Nepal. Here are some of the most famous varieties of mangoes',
              items: [
                {
                  id: 1,
                  title: 'ALPHONSO',
                  description:
                    'Alphonso is one of the most popular varieties of mangoes worldwide. It is a seasonal fruit available from around mid-April to the end of June. These mangoes have a rich and creamy texture. The pulp is juicy and non-fibrous. A fully ripe Alphonso mango has a bright golden-yellow skin with a tinge of red. The flesh of the fruit is generally saffron-colored.',
                },
                {
                  id: 2,
                  title: 'KESAR',
                  description:
                    "The Kesar mango variety of mangoes also called 'Gir Kesar' is a mango cultivar grown in the foothills of Girnar in Gujarat. This variety of mangoes is known for its bright orange colored pulp. This variety of mango is generally sold to the market in April. The cultivation of this variety begins around October after the monsoon season.",
                },
                {
                  id: 3,
                  title: 'PAIRI',
                  description:
                    'This variety of mangoes is one of the best varieties of mangoes in India. Oval in shape Pairi mangoes generally weighs between 250 to 400 grams. The flesh of this variety is yellowish-orange in orange. The fruits are firm, juicy, fiberless and sweet in taste. It has a pronounced scent and excellent in quality.',
                },
                {
                  id: 4,
                  title: 'TOTAPURI',
                  description:
                    'Totapuri Mango variety is generally found in the states of Andhra Pradesh, Karnataka and Tamil Nadu. This variety of mangoes are usually large in size. Golden yellow in colour, these mangoes are oblong in shape. Totapuri mangoes also have a prominent beak-like pointed end. The skin of these mangoes is generally thick and the colour can vary from green to yellow.',
                },
                {
                  id: 5,
                  title: 'NEELUM',
                  description:
                    'The Neelum variety of Mangoes are especially known for their beautiful shape, unique taste and floral aroma. This variety of mangoes is generally grown in the states of Andhra Pradesh, Karnataka And Tamil Nadu. The Neelum mangoes are large in size and oblong in shape with a pointed base.',
                },
                {
                  id: 6,
                  title: 'LANGRA',
                  description:
                    'This variety of mangoes is also known as Banarasi Langra. Langra is a mango cultivar majorly grown in Varanasi, Banaras, and the Northern part India. This cultivar has a characteristic of retaining a greenish tinge while ripening. This variety of mangoes is generally harvested during the last half of July.',
                },
                {
                  id: 7,
                  title: 'DASHEHARI',
                  description:
                    "Dashehari is one of the most popular varieties of mango in the North of India. It is known for its exquisite taste and a pleasant aroma. It is said that 80% of varieties of mango in North India is covered by 'Dashehari' and can be genetically traced back to this very plant.",
                },
                {
                  id: 8,
                  title: 'RAJAPURI',
                  description:
                    'Rajapuri is the largest varieties of mangoes found in India. It generally has a similar shape to Kesar but a bit more rounded. The skin of this mango is smooth and yellow, orange and red in colour. The size of the fruit varies from 500g to 1kg. The smaller sizes are said to be sweeter.',
                },
                {
                  id: 9,
                  title: 'HIMSAGAR',
                  description:
                    'Originated in the state of West Bengal, the Himsagar mango is a popular mango cultivar. The pulp inside the mango varies from yellow to orange in colour. This variety of mango does not have any fibre. The mango is medium-sized and usually weighs between 250 and 350 grams.',
                },
                {
                  id: 10,
                  title: 'CHAUSA',
                  description:
                    "Chausa mango, also known as the 'Chaunsa', is a mango cultivar said to have originated from Pakistan. Today, Chausa is cultivated in Pakistan and India. This variety of mangoes is generally golden-yellow in color. It is almost fiberless and has an aromatic, pleasant and sweet flavour.",
                },
              ],
            },
          ],
          conclusion: [
            'Mango import from India has risen rapidly over the past. Pisum Foods is one of the leading mango exporter in India. With our extensive experience in the food industry and our expertise in the field, we export food products from India to every corner of the world. If you wish to export mangoes, Pisum Foods is the best place for you!',
          ],
        },
      },
      {
        slug: Products.ORANGE,
        name: 'Orange',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.ORANGE}.jpg`,
        data: {
          title: 'Indian Orange Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.ORANGE}.jpg`,
          description: [
            'Orange is one of the most popular citrus fruits in the world. Orange is consumed in various forms including fresh fruit, juice, jam, jelly, marmalade, and such other forms. Due to the rising demand for oranges worldwide, the orange export from India has been on a rise. India is the third-largest orange producer in the world. Therefore, orange export from India is a good opportunity for growth in the international market.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '80 Calories\n3 grams of Fiber\n12g/100grams Carbohydrates',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '1gm of Protein',
                },
                {
                  id: 3,
                  title: 'Minerals',
                  description: 'Vitamin C, Thiamine, Folate, and Potassium',
                },
                {
                  id: 4,
                  title: 'Vitamins',
                  description: 'Vitamin C',
                },
                {
                  id: 5,
                  title: 'Fats',
                  description: 'No Fat or Sodium',
                },
              ],
            },
            {
              title: 'ORANGE VARIETIES WE EXPORT',
              description:
                'Orange exporter in India exports oranges to many countries including the United States, China, Hong Kong, Australia, Bangladesh, and so on and so forth. Here are some of the most important types of oranges',
              items: [
                {
                  id: 1,
                  title: 'NAGPUR SANTRA',
                  description:
                    "Nagpur Santra is a rustic variety of oranges grown in Nagpur, Maharashtra. This variety of oranges has a pockmarked exterior. The pulp of this variety is sweet and juicy. This variety of oranges is generally harvested in December. Nagpur is popularly known as the 'Orange City'.",
                },
                {
                  id: 2,
                  title: 'COORG SANTRA',
                  description:
                    'Coorg Santra, also known as Coorg mandarin, is a cultivar of mandarin orange grown in Kodagu, Karnataka. This variety of oranges has been accorded the Geographical Indication status. Coorg Santra is a man-made hybrid. This variety of oranges is greenish-yellow in colour and has a tight skin. The taste of this variety is sweet-sour.',
                },
                {
                  id: 3,
                  title: 'DANCY',
                  description:
                    'Dancy oranges are medium-sized oranges. This variety of oranges has a broadly depressed apex. The rind of this variety is thin, leathery, loose, and easily removed. The surface of this variety is smooth and glossy and becomes bumpy with age. This variety matures to a deep orange-red to scarlet colour.',
                },
                {
                  id: 4,
                  title: 'DARJEELING MANDARIN',
                  description:
                    'Darjeeling Mandarin, also known as Citrus reticulate Blanco, is a major cash crop in the Darjeeling Hills. This variety of oranges is grown on approximately 930 hectares of land. The annual production of Darjeeling Mandarin is around 148.224 metric tons.',
                },
                {
                  id: 5,
                  title: 'KINNOW MANDARIN',
                  description:
                    "Kinnow Mandarin, pronounced Kinco or Kinu, is a high-yield mandarin and a hybrid of 'King' and 'Willow Leaf' cultivators. This variety of oranges is juicier than other varieties. Kinnow Mandarin is primarily grown in Punjab, Himachal Pradesh, Jammu & Kashmir, Rajasthan, and Haryana.",
                },
              ],
            },
          ],
          conclusion: [
            'If you are looking for an orange exporter in India, Pisum Foods is the best choice for you! We at Pisum Foods have extensive experience in the food export industry and know the ins and outs of the industry. Our team conducts thorough market analysis and research before exporting products. We also have all the necessary certifications and licenses required for the export of oranges. We make sure that your products reach the destination fresh and safe. We export premium quality oranges and make sure that the export process is carried out smoothly. If you are looking for orange export from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.PINEAPPLE,
        name: 'Pineapple',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.PINEAPPLE}.jpg`,
        data: {
          title: 'Indian Pineapple Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.PINEAPPLE}.jpg`,
          description: [
            "Pineapple is one of the most popular tropical fruits. 7% of the world's pineapple production is done in India. Thus Indian pineapple exporter export pineapple to various countries in the world. Pineapple is cultivated in the states of Kerala, Tripura and West Bengal and then pineapple export from India takes place. Export of pineapple takes place in many countries around the world.",
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '74 Calories\nCarbohydrates 19.5 g\nFibre - 1.4g/100 grams',
                },
                {
                  id: 2,
                  title: 'Minerals',
                  description:
                    'Thiamin\nRiboflavin\nB-6\nFolate\nPantothenic Acid\nMagnesium\nManganese\nPotassium',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin C',
                },
                {
                  id: 4,
                  title: 'Fat',
                  description: '0g',
                },
                {
                  id: 5,
                  title: 'Protein',
                  description: '1g',
                },
              ],
            },
            {
              title: 'PINEAPPLE VARIETIES WE EXPORT',
              description:
                'Pineapple exporter in India exports several varieties of pineapple abroad. The pineapple export includes Giant Kew, Queen, Mauritius and such other popular varieties of pineapple. Being one of the leading pineapple importer from India, Pisum makes sure that all varieties of pineapples are delivered on time and safely to your destination.',
              items: [
                {
                  id: 1,
                  title: 'GIANT KEW',
                  description:
                    'The Giant Kew variety of Pineapple has a big fruit in size. The colour of this variety of Pineapple varies from a deep yellow to coppery yellow and the eyes of the fruit are broad and flat. The flesh is said to vary from a pale yellow to yellow in colour.',
                },
                {
                  id: 2,
                  title: 'QUEEN',
                  description:
                    'The Queen variety of pineapple is spiny and golden yellow in colour. It is known for its pleasant aroma and flavour. The sweetness and the unique aroma of the Queen pineapple differentiate it from pineapples of other states of the Northeast region. This variety received a Geographical Indication tag in 2015.',
                },
                {
                  id: 3,
                  title: 'MAURITIUS',
                  description:
                    'The Mauritius variety is also known as Vazhakulam Kannara variety of pineapples. The fruit weighs anywhere from 1.3 to 1.6 kg. The Mauritius variety is generally conical in shape and golden in colour with an amazing aroma and delicious in taste. The juice of the Mauritius variety is sweeter and has a lower acidity of 0.5 to 0.7%.',
                },
                {
                  id: 4,
                  title: 'CHARLOTTE ROTHSCHILD',
                  description:
                    'Charlotte Rothschild is another variety of Pineapples that are exported from India. This pineapple variety has characteristics similar to Kew and Queen. It also tastes similar to the Kew and Queen. This variety is partly under cultivation in Kerala and Goa.',
                },
                {
                  id: 5,
                  title: 'JALDHUP AND LAKHAT',
                  description:
                    'Jaldhup and Lakhat are 2 indigenous types of pineapples grown in Assam. Both these varieties have been named after the place of their production. Both are under Queen group with fruits that are smaller than the Queen. Lakhat is generally sour in taste, while Jaldhup is sweet well- blended with acidity.',
                },
              ],
            },
          ],
          conclusion: [
            'If you want to pineapple export from India, Pisum Foods is the most reliable exporters. We make sure that the fruits reach the destination fresh and safe. We help our clients right from finding buyers, to conducting an in-depth analysis of the international market, the documentation procedure and so on. We are the first option for many who pineapple import from India. Once you are with Pisum Foods, consider the job done!',
          ],
        },
      },
      {
        slug: Products.POMEGRANATE,
        name: 'Pomegranate',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.POMEGRANATE}.jpg`,
        data: {
          title: 'Indian Pomegranate Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.POMEGRANATE}.jpg`,
          description: [
            'Pomegranates are one of the most loved fruits globally. They are generally sweet in taste with a bit of acidic nature. The Indian pomegranate exporter exports tonnes of pomegranates every year to many countries in the world. The global demand for pomegranates has seen a rise which has in turn increased the pomegranate export from India.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '83 calories\nFiber: 7g\nTotal Carbohydrate: 19 g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '1.7g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin A\nVitamin C\nVitamin D\nVitamin B-6',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description: 'Calcium\nIron\nCobalamin\nMagnesium',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'POMEGRANATE VARIETIES WE EXPORT',
              description:
                'Pomegranate exporter in India exports various varieties of pomegranates including Alandi, Dholka, Kandhari, Kabul, and so on. The export of pomegranates has become a good business opportunity due to the increasing popularity of its health and medicinal uses. Here are some of the major varieties which pomegranate exporter from India exports',
              items: [
                {
                  id: 1,
                  title: 'ALANDI OR VADKI',
                  description:
                    'Alandi variety of pomegranates is also known as Vadki. The fruit size of this variety is medium. The color of this variety of pomegranate is blood red or deep pink, it tastes sweet with a slightly acidic taste and has hard seeds.',
                },
                {
                  id: 2,
                  title: 'DHOLKA',
                  description:
                    'The Dholka variety of pomegranates is also exported abroad from India. The fruits of this variety are generally large. The rind is yellowish red in color with a pinkish white aril. Dholka is said to be a popular cultivar of Gujarat.',
                },
                {
                  id: 3,
                  title: 'KANDHARI',
                  description:
                    'Kandhari is a variety of pomegranates exported from India to many countries in the world. The fruit of this variety is usually large in size. The rind is deep red in color. The fruit tastes sweet and slightly acidic and has hard seeds.',
                },
                {
                  id: 4,
                  title: 'KABUL',
                  description:
                    'Kabul is another variety of pomegranates which is exported on a large scale. The Kabul variety has large fruit with a deep red rind mixed with pale yellow and a dark red aril. The juice of this variety of pomegranates is said to be slightly bitter in taste.',
                },
                {
                  id: 5,
                  title: 'MUSKAT',
                  description:
                    'The fruits of the Muskat variety of pomegranates have a red rind with pink colored arils. This fruit is said to weigh around 300-350 grams on average. The Muskat variety of pomegranates is also exported from India.',
                },
                {
                  id: 6,
                  title: 'PAPER SHELLED',
                  description:
                    'The size of the Paper Shelled variety of pomegranates is usually medium. These fruits have a pink aril of good quality. The seeds of this variety of pomegranate are generally soft. The Paper Shelled variety of pomegranates is exported from India.',
                },
                {
                  id: 7,
                  title: 'SPANISH RUBY',
                  description:
                    'The Spanish Ruby is a type of variety of pomegranates exported abroad from India. It is generally small or medium in size. The variety is said to have small and soft seeds.',
                },
              ],
            },
          ],
          conclusion: [
            'If you are looking for pomegranate import from India, Pisum Foods is the best place for you! At Pisum Foods, we assist our clients on every step of the way to export their products. We have an excellent global network and in-depth knowledge of all export processes. Our trained executives will help you out from documentation until your products reach the destination. Pisum Foods, being one of the leading pomegranate exporters in India, is here to serve you!',
          ],
        },
      },
      {
        slug: Products.DRAGON_FRUIT,
        name: 'Dragon Fruit',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.DRAGON_FRUIT}.jpg`,
        data: {
          title: 'Indian Dragon Fruits Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.DRAGON_FRUIT}.jpg`,
          description: [
            'Dragon fruits are a very popular fruit among foodies and health enthusiasts. It is basically a tropical fruit known for its vibrant red skin. Dragon fruits exporter in India exports a large number of dragon fruits abroad every year. Due to the increasing popularity of this fruit in the global market, Dragon Fruits export from India has been on the rise for a few years. The Dragon Fruits exporter exports premium quality products to various countries in the world. Dragon fruits export is therefore an emerging business opportunity today.',
          ],
          conclusion: [
            'If you are looking for the best Dragon Fruits importer from India, Pisum Foods is the place! We work in the areas of export of Dragon fruits, vegetables, spices, grains, pulses, so on and so forth. Exporting food products can be a complicated process. But no worries! You can just drop a message to Pisum Foods and we will take care of your Dragon fruits export from India.',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'Due to the popularity of the Dragon fruit worldwide, the Dragon fruits exporter in India is exporting more and more tonnes of products each year. The Dragon food is said to be a powerhouse of nutrients and also may help in fighting chronic diseases. If you are looking for Dragon Fruits import from India, Pisum Foods is here to serve you!',
            ],
            specification: {
              productName: 'Dragon Fruits',
              origin: 'Central America',
              family: 'Cactaceae',
              binomialName: 'Hylocereus undatus',
            },
            ingredients: {
              nutrients: {
                calories: '136',
                carbohydrates: '29 g',
                fiber: '7g',
              },
              minerals: ['Magnesium', 'Phosphorous', 'Potassium', 'Zinc'],
              vitamins: ['Vitamin A', 'Vitamin C'],
              protein: '3g',
              fats: '0g',
            },
            usesAndBenefits: {
              uses: [
                'Research states that a diet rich in antioxidants leads to a lesser risk of chronic diseases. Dragon fruit is rich in antioxidants including vitamin C, beta-carotene, lycopene, and betalain. Thus, this is a good choice to consume.',
                'Fiber is essential for your body to function properly. Dragon fruit offers around 7 grams of fiber per serving. This amount meets your daily fiber needs and makes it a very nutritious fruit to consume.',
                'Building a strong immune system is very essential for your body. Dragon fruit has a large amount of vitamin C and carotenoids that may offer immune-boosting properties.',
                'Besides its extraordinary nutritional qualities, Dragon fruit is also low in calories making it a perfect fruit to eat.',
              ],
            },
          },
        },
      },
      {
        slug: Products.STRAWBERRY,
        name: 'Strawberry',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.STRAWBERRY}.jpg`,
        data: {
          title: 'Indian Strawberry Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.STRAWBERRY}.jpg`,
          description: [
            'Strawberry is a low growing fruit on a flowering plant. The fruits are generally soft, sweet, and red in color. The Indian strawberry exporter exports tonnes of strawberries every year. Being one of the most popular berries, the strawberry export from india has been on the rise for a few years.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description: '53 kcal\nFiber: 3.30 g\nCarbohydrate: 12.75 g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '1.7g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin C, Vitamin B9',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description: 'Manganese, Folate, Potassium',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'STRAWBERRY VARIETIES WE EXPORT',
              description:
                'Strawberry exporter in India exports various varieties of strawberries including Chandler, Tioga, Torrey, and so on. The export of strawberries is also a good business opportunity due to the growing global demand. The strawberry exporter from india exports the following major varieties of strawberries.',
              items: [
                {
                  id: 1,
                  title: 'CHANDLER',
                  description:
                    'Chandler variety of strawberries that are generally large in size. The berries are firm and are produced early-season to mid-season. They vary from being long and wedge-shaped to large and conical. Brilliant red in color and glossy, these strawberries have a delicious flavor.',
                },
                {
                  id: 2,
                  title: 'TIOGA',
                  description:
                    'Strawberry Tioga is a vigorous growing variety of strawberries that produces large and sweet fruits from late Spring through till late Summer. This variety produces firm medium-sized, deep red strawberries. This variety of strawberries can be eaten raw or made into jams, desserts, and so on.',
                },
                {
                  id: 3,
                  title: 'TORREY',
                  description:
                    'The Torrey variety of strawberries is known to be an old Californian variety. It is said to be a vigorous grower with good color. It is one of the most delicious varieties of strawberries. It is also one of the most popular varieties of strawberries.',
                },
                {
                  id: 4,
                  title: 'SELVA',
                  description:
                    'The Selva variety of strawberries has been one of the most remounting varieties in Northern Europe. This variety is also suitable for export. The strawberries of this variety are very firm and transportable. The taste of these strawberries is usually neutral.',
                },
                {
                  id: 5,
                  title: 'FERN',
                  description:
                    'The Fern variety of strawberries is vigorous and everbearing. The strawberries of this variety are good sized, firm, and sweet in taste. This variety provides a great harvest in spring, summer, and fall. These strawberries are perfect for fresh eating, preservation, and freezing.',
                },
              ],
            },
          ],
          conclusion: [
            'If you are looking for strawberry import from India, Pisum Foods is here to help you! We at Pisum Foods export various food products from India to different countries in the world. We assist our clients with every process related to the export right from documentation to the final delivery of the products. Being one of the leading Strawberry exporters in India, Pisum Foods is the best choice for you!',
          ],
        },
      },
      {
        slug: Products.GRAPES,
        name: 'Grapes',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.GRAPES}.jpg`,
        data: {
          title: 'Indian Grapes Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.GRAPES}.jpg`,
          description: [
            'Grapes are fruits that grow in clusters of 15 to 300. They can be green, black, pink and of such other colors. The Indian grapes exporter exports tonnes of grapes to various countries today. The global demand for grapes has been on the rise since a few years considering its uses in different cuisines and its nutritional benefits. The grapes export from India has thus significantly grown.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '104 calories\nFiber: 1.4 g\nCarbohydrate: 27.3 g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '1.1 g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin K',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description:
                    'Calcium\nMagnesium\nPotassium\nPhosphorus\nManganese',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'GRAPES VARIETIES WE EXPORT',
              description:
                'Grapes exporter in India export numerous varieties of grapes including Thompson seedless, Perlette, Anab-e-Shahi so on and so forth. Grapes exporter export premium quality grapes from India. The export of grapes from India include the following varieties',
              items: [
                {
                  id: 1,
                  title: 'THOMPSON SEEDLESS',
                  description:
                    'Thompson Seedless is a vigorous deciduous variety of grapes. This variety of grapes grows in large bunches. The grapes are small in size and sweet and mild-flavored. Thompson Seedless grapes are green in color.',
                },
                {
                  id: 2,
                  title: 'PERLETTE',
                  description:
                    'Perlette variety of grapes has white, thin skin. The flesh of this variety of grapes is firm, crisp and usually juicy. This variety of grapes is similar to Thompson Seedless but has a wider climate range.',
                },
                {
                  id: 3,
                  title: 'ANAB-E-SHAHI',
                  description:
                    'Anab-e-Shahi variety of grapes is generally grown in Andhra Pradesh, Punjab, Haryana and Karnataka. This variety of grapes is adaptable to different agro-climatic conditions. It is late maturing, heavy yielding, elongated, medium-large and seeded.',
                },
                {
                  id: 4,
                  title: 'BLACK HAMBURG',
                  description:
                    'Black Hamburg variety of grapes is considered one of the easiest to grow. This variety of grapes is described as large bunches of sweet-tasting dark red or purple grapes. This variety of grapes is usually seeded.',
                },
                {
                  id: 5,
                  title: 'PUSA SEEDLESS',
                  description:
                    'Pusa Seedless variety of grapes is a selection from Thompson Seedless. This variety of grapes is longer than Thompson seedless. This variety of grapes has been recommended for commercial cultivation since 1976. It is suitable for table purpose and raisin making.',
                },
                {
                  id: 6,
                  title: 'GULABI',
                  description:
                    'Gulabi variety of grapes is grown in Tamil Nadu. This variety of grapes is small in size, deep purple, spherical and generally seeded. This variety of grapes has good keeping quality. It is used for table purposes and has an average yield of 10-12 t/ha.',
                },
              ],
            },
          ],
          conclusion: [
            'If you are looking for the best grapes exporter in India, Pisum Foods is your choice! We at Pisum Foods make sure that your products reach the destination in a timely manner. We make sure that all the health and safety measures are maintained while packaging and transporting the products. Pisum Foods is thus one of the best and one of the most reliable for grapes import from India.',
          ],
        },
      },
      {
        slug: Products.GUAVA,
        name: 'Guava',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.GUAVA}.jpg`,
        data: {
          title: 'Indian Guava Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.GUAVA}.jpg`,
          description: [
            'Guava is an evergreen shrub which is grown for its delicious edible fruits. Guavas can be eaten in several ways and have various health benefits. The Indian guava exporter exports tonnes of guavas to different parts of the world each year. The guava export from India has been rapidly growing due to the growing demand of the fruit worldwide. The export of guava from India is a good business opportunity for many local farmers and vendors today.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    'Calories - 68 calories\nDietary Fiber - 5g\nTotal Carbohydrate - 14 g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '2.6g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin A, Vitamin C, Vitamin B-6',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description: 'Calcium, Iron, Magnesium',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'GUAVA VARIETIES WE EXPORT',
              description:
                'Guava exporter from India exports premium quality guava to various countries in the world. The export from India has been growing over the years due to the high-quality fruits exported abroad. The guava export from India includes the following major varieties of guavas.',
              items: [
                {
                  id: 1,
                  title: 'L-49 (LUCKNOW-49)',
                  description:
                    'The L-49 variety of Guava is a prolific bearer. It is greenish-yellow with milky white and sweet pulp. The shell of the L-49 is fairly thick and contains fairly soft seeds in the inner portion of the pulp. The number of seeds is less and this variety is popular in Maharashtra and Andhra Pradesh. This variety yields about 25t/ha.',
                },
                {
                  id: 2,
                  title: 'ALLAHABAD SAFEDA',
                  description:
                    'The Allahabad Safeda is one of the most popular varieties of Guava grown in Uttar Pradesh. It is used for table purposes. The fruits of this variety are generally medium in size and round in shape with a few seeds. The fruit is white-fleshed with good keeping quality.',
                },
                {
                  id: 3,
                  title: 'BANARASI',
                  description:
                    'The Banarasi variety of Guavas generally attains a height of 4.0 to 5.5 m with a broad crown. The fruits of this variety are generally round in shape and light yellow in colour. This variety is mainly cultivated for table purposes.',
                },
                {
                  id: 4,
                  title: 'CHITTIDAR',
                  description:
                    'The Chittidar variety is said to be similar to the Safeda variety of guavas. The only difference between the two is that the Chittidar variety has many pinkish-red dots of the size of a pinhead on the surface of the fruit.',
                },
                {
                  id: 5,
                  title: 'HARIJHA',
                  description:
                    'The Harijha variety of Guavas usually attains a height of about 3.5 to 4.5m. This plant is also said to be sparsely branched. The fruits of this variety are round in shape and greenish-yellow in colour with a sweet taste.',
                },
                {
                  id: 6,
                  title: 'RED FLESHED',
                  description:
                    'The Red Fleshed variety of guavas tree generally attains the height of 3-5m. The branches of this tree are spread with roundish oval fruits. The fruits have a yellowish skin with pink colour flesh inside.',
                },
                {
                  id: 7,
                  title: 'ARKA MRIDULA',
                  description:
                    'The Arka Mridula is a selection of guavas from open-pollinated seedlings of Allahabad Safeda. The plants of this variety are semi-tall in nature and spreading. The fruits of this variety are round in shape and have the skin is smooth and yellow in colour. The flesh inside is white in colour.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the leading Guava exporters from India. We understand that the export process can be somewhat complicated for some of you. Thus, Pisum is here to help! Our executives at Pisum Foods are trained to support you with every step on the way, right from documentation to the final delivery of the products. Our global connections and in-depth knowledge of the market has proved to be beneficial to most of our past clients. If you are looking for Guava import from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.LITCHI,
        name: 'Litchi',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.LITCHI}.jpg`,
        data: {
          title: 'Indian Litchi Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.LITCHI}.jpg`,
          description: [
            'Litchis are small, oval to roundish fruits of a Chinese tree called Litchi chinensis. These fruits have diverse uses and delicious taste. The Indian litchi exporter exports tonnes of Litchis each year. Due to the various uses and benefits of these fruits, the Litchi export from India has been on a rise over the years. The export of Litchi from India is now a good business opportunity for local farmers and vendors to export their products and expand their business.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '66 calories\nDietary Fiber - 1.3g\nTotal Carbohydrate - 17g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '0.8g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin C, Vitamin B-6',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description: 'Calcium, Magnesium',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'LITCHI VARIETIES WE EXPORT',
              description:
                'The Litchi exporter in India exports premium quality of Litchis to different countries in the world. Various varieties of Litchis are exported from India including Shahi, Swarna Roopa, China, Kasba so on and so forth. The Litchi export from India includes the following major varieties.',
              items: [
                {
                  id: 1,
                  title: 'SHAHI',
                  description:
                    'Shahi is a commercial cultivar of Litchi grown in Muzaffarpur, Bihar. This variety of Litchi matures in the third week of May. The fruits of this variety are oval, oblong and conical in shape. This variety is a heavy bearer and produces large fruits. The yield of this variety is 90-100 kg/tree.',
                },
                {
                  id: 2,
                  title: 'SWARNA ROOPA',
                  description:
                    'Swarna Roopa is a selection identified and released by CHES, Ranchi. This variety of Litchi has high T.S.S. and is resistant to fruit cracking. This variety is the first litchi variety developed in India.',
                },
                {
                  id: 3,
                  title: 'CHINA',
                  description:
                    'China is a commercial cultivar of Litchi grown for table purpose in Muzaffarpur, Bihar. This variety of Litchi is semi-dwarf. The fruits of this variety ripen in the third week of May. The yield of this variety is 80-100 kg/tree. The fruits are medium-large in size.',
                },
                {
                  id: 4,
                  title: 'KASBA',
                  description:
                    'Kasba variety of Litchi is mostly grown in western Bihar. The fruits of this variety are medium-large and heart-shaped. The fruits of this variety ripen in the first week of June. The yield of this variety is 80-100 kg/tree.',
                },
                {
                  id: 5,
                  title: 'ELACHI',
                  description:
                    'Elachi variety of Litchi has moderately vigorous trees. The trees attain a height of 5-6m and spread of 6-7m. The fruits of this variety are conical and orange-red in colour. This variety is cultivated for table purpose. The yield of this variety is 50-60 kg/tree.',
                },
                {
                  id: 6,
                  title: 'PURBI',
                  description:
                    'Purbi variety of Litchi is mostly grown for table purpose in eastern Bihar. The fruits of this variety are medium-large and oblong-conical in shape. The fruits of this variety ripen at the end of May or in the first week of June. The yield of this variety is 90-100 kg/tree.',
                },
                {
                  id: 7,
                  title: 'EARLY SEEDLESS',
                  description:
                    'Early Seedless variety of Litchi is the earliest variety. This variety is grown for table purpose and processing in Uttar Pradesh and Punjab. This variety is medium to poor-yielding but is a regular bearer. The yield of this variety is 70-80 kg/tree.',
                },
                {
                  id: 8,
                  title: 'ROSE SCENTED',
                  description:
                    'Rose Scented variety of Litchi is a commercial cultivar grown for table purpose in Muzaffarpur, Bihar. This variety is famous for its distinct rose aroma. This variety is a mid-season variety and ripens in the first week of June. The yield of this variety is 80-90 kg/tree.',
                },
                {
                  id: 9,
                  title: 'BOMBAI',
                  description:
                    'Bombai variety of Litchi is an important commercial variety cultivated for table purpose in West Bengal. This variety has vigorous trees. The trees attain a height of 6-7m and spread of 7-8m. The yield of this variety is 40-80 kg/tree. The fruits are large and often obliquely heart-shaped.',
                },
                {
                  id: 10,
                  title: 'CALCUTTA',
                  description:
                    'Calcutta variety of Litchi is considered the best for table purpose in northern India. The yield of this variety is 80-100 kg/tree. This variety is a late-season variety and ripens in the last week of June. The fruits are large and oblong in shape with tyrion rose colour and dark tubercles at maturity.',
                },
                {
                  id: 11,
                  title: 'LATE SEEDLESS',
                  description:
                    'Late Seedless variety of Litchi can be cultivated in hotter areas with protection from hot winds and irrigation. This variety has very vigorous trees. The trees attain a height of 6-8m and spread of 7-8m. The yield of this variety is 80-100 kg/tree.',
                },
                {
                  id: 12,
                  title: 'DEHRA DUN',
                  description:
                    'Dehra Dun variety of Litchi is mainly grown for table purpose in Uttar Pradesh and Punjab. This variety is a late-season variety and the fruits ripen in the third week of June. The yield of this variety is 70-90 kg/tree. The fruits are medium-sized and obliquely heart-shaped to conical with bright rose-pink colour at maturity.',
                },
                {
                  id: 13,
                  title: 'GULABI',
                  description:
                    'Gulabi variety of Litchi is an important variety for table purposes in North India. This variety is a late-season variety and the fruit ripens in the fourth week of June. This variety bears profusely and regularly. The yield of this variety is 90-100 kg fruits/tree. The trees attain a height of 6.0m and spread of 7.0m. The fruits are medium-sized.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the leading Litchi exporters from India. We at Pisum Foods help our clients with each and every step involved in the export process. We hold extensive experience in the food export industry and have numerous global connections. We assist our clients right from finding buyers for their products until the final delivery of the products. If you are looking for Litchi import from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.PAPAYA,
        name: 'Papaya',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.PAPAYA}.jpg`,
        data: {
          title: 'Indian Papaya Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.PAPAYA}.jpg`,
          description: [
            'Papaya is a tropical fruit generally eaten for its orange, sweet and juicy pulp. The Indian papaya exporter exports tonnes of papayas abroad each year. The papaya export from India has been increasing over the years due to the growing popularity of the fruit worldwide. The export of Papaya is a good opportunity for local farmers and vendors to expand their business and enter the international marketplace.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '68 calories\nFiber: 3g\nTotal Carbohydrate: 15 g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '1g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin A, Vitamin C',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description: 'Folate, Potassium',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'PAPAYA VARIETIES WE EXPORT',
              description:
                'The Papaya exporter in India exports various varieties of Papayas including Coorg Honey Dew, Pusa dwarf, Pusa Giant, Pusa Majesty so on and so forth. India exports premium quality of papayas abroad. The Papaya export from India includes the following major varieties of Papayas.',
              items: [
                {
                  id: 1,
                  title: 'COORG HONEY DEW',
                  description:
                    'The Coorg Honey Dew variety is cultivated for the table as well as processing purposes. This variety of Papaya bears greenish-yellow oblong-shaped fruits with orange thick flesh and good flavor. Due to the excellent quality of the fruits of this variety, it fetches good market value.',
                },
                {
                  id: 2,
                  title: 'PUSA DWARF',
                  description:
                    'The Pusa Dwarf variety is a dioecious variety of papayas with dwarf plants and medium-sized oval fruits. The plant of this variety starts bearing from 25 to 30 cm above ground level and is comparatively drought hardy. Pusa Dwarf variety is very suitable for high-density planting.',
                },
                {
                  id: 3,
                  title: 'PUSA GIANT',
                  description:
                    'The plants of the Pusa Giant are vigorous, sturdy and generally tolerant to strong wind. This variety of Papayas is a dioecious cultivar with big-sized fruits. This variety is said to be suitable for the canning industry.',
                },
                {
                  id: 4,
                  title: 'PUSA MAJESTY',
                  description:
                    'The Pusa Majesty variety of papayas is tolerant to viral diseases and root-knot nematodes. The fruits of this variety are medium-sized, round in shape and have better keeping quality. Pusa Majesty generally starts fruiting 140 days from the time of transplanting.',
                },
                {
                  id: 5,
                  title: 'PUSA DELICIOUS',
                  description:
                    'Pusa Delicious is a gynodioecious line with medium-tall plants. It generally starts yielding 8 months after planting and yields good quality fruits. The fruits of this variety are medium-sized with deep orange flesh having excellent flavor. It is usually grown as a table purpose variety.',
                },
                {
                  id: 6,
                  title: 'CO.1',
                  description:
                    'The CO.1 is a selection from cultivar Ranchi done by TNAU, Coimbatore. The fruit of this variety is medium-sized, spherical and has smooth greenish-yellow skin. The flesh of this fruit is orange-yellow in colour, soft and firm. The fruit is moderately juicy with good keeping-quality.',
                },
                {
                  id: 7,
                  title: 'WASHINGTON',
                  description:
                    'The Washington variety is a table purpose variety of papayas. The fruits are round in shape, medium-large in size with few seeds. When ripe, the skin of this variety generally attains a bright yellow colour. The average weight of fruit ranges from around 1.5-2 kg. The male and female plants of this variety are separate.',
                },
                {
                  id: 8,
                  title: 'SOLO',
                  description:
                    'The Solo variety of Papayas is a table purpose variety. The fruits of this variety are small and have a deep pink pulp with a sweet taste. The Solo variety of papayas is also said to be excellent for the kitchen garden.',
                },
                {
                  id: 9,
                  title: 'TAIWAN-786',
                  description:
                    'The Taiwan-786 is a gynodioecious variety cultivated for the table as well as processing purposes. The fruits of this variety are oblong with a tasty sweet pulp having few seeds. The plants of this variety start bearing fruits from 100 cm above the ground level. The fruit weighs on average between 1-3 kg and has excellent keeping quality.',
                },
                {
                  id: 10,
                  title: 'IIHR39 AND IIHR54',
                  description:
                    'The IIHR39 and IIHR54 varieties of papayas were developed at IIHR, Bangalore. This variety of papayas bears medium-sized sweet fruit with high TSS (14.5° Brix) and better shelf life.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is the best papaya exporter from India. The process of exporting goods from India may be complicated at times. No worries now, Pisum is here to help you! We at Pisum Foods have great experience in the food export industry and numerous global connections. Our executives will assist you with every process involved, right from documentation and paperwork until the final order is delivered. If you are looking for papaya import from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.SAPOTA,
        name: 'Sapota',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.SAPOTA}.jpg`,
        data: {
          title: 'Indian Sapota Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.SAPOTA}.jpg`,
          description: [
            'Manilkara zapota popularly known as chikoo Sapota is a long-lived, evergreen tree native to southern Mexico, Central America and the Caribbean. The Indian sapota exporter exports tonnes of fruits abroad each year. Due to the various uses and benefits of the fruits, the Sapota export from India has been increasing over the years. The export of Sapota from India is now a good business opportunity for local farmers and vendors to expand their business and enter the international market.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '83 calories\nDietary Fiber - 5 g\nTotal Carbohydrate - 20 g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '0.4g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin A, Vitamin C',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description: 'Calcium, Iron, Magnesium',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'SAPOTA VARIETIES WE EXPORT',
              description:
                'The Sapota exporter in India exports various varieties of Sapota like Kalipatti, Cricket Ball, CO.1, CO.2 so on and so forth. The products exported from India should be of premium quality and meet the health and safety standards. The Sapota export from India includes the following major varieties.',
              items: [
                {
                  id: 1,
                  title: 'KALIPATTI',
                  description:
                    'The Kalipatti variety of Sapota is generally cultivated in Maharashtra, Gujarat and North Karnataka. The plant of this variety has broad, thick leaves and oblong fruits. The average yield of this variety is around 350-400 fruits per tree.',
                },
                {
                  id: 2,
                  title: 'CRICKET BALL',
                  description:
                    'The Cricket Ball variety of Sapota is usually grown in the states of Tamil Nadu, Karnataka, Maharashtra, West Bengal and Andhra Pradesh. The fruits of this variety are large in size, round and sweet with granular pulp.',
                },
                {
                  id: 3,
                  title: 'CO.1',
                  description:
                    'This variety of Sapota is grown in Tamil Nadu. CO.1 is a hybrid variety grown out of the cricket ball variety and the oval variety. The variety starts bearing in around 4 years. The fruits of this variety are large, oblong, sweet and fleshy.',
                },
                {
                  id: 4,
                  title: 'CO.2',
                  description:
                    'This variety of Sapota is grown in Tamil Nadu. The tree of this variety is usually medium-sized with oblong fruits. The average weight of the CO.2 fruits is 125-150 g and TSS is 23%.',
                },
                {
                  id: 5,
                  title: 'PKM.1',
                  description:
                    'The PKM.1 variety of Sapota is famous in Tamil Nadu. The fruits of this variety are used for table purposes. The fruits of this variety are medium-sized and rich in sugars. The average weight of PKM.1 is 80 g and TSS is 23%.',
                },
                {
                  id: 6,
                  title: 'PILIPATTI',
                  description:
                    'The Pilipatti variety of sapota is grown in Maharashtra and Gujarat. This variety is one of the varieties of sapota which is exported to many countries. The weight of the fruit of this variety is 400-500 g.',
                },
                {
                  id: 7,
                  title: 'PALA',
                  description:
                    'The Pala variety of Sapota is generally found in Andhra Pradesh and Tamil Nadu. It is a high yielding variety of Sapota. The fruits of this variety are oval or egg-shaped with thin skin and rich flavor.',
                },
                {
                  id: 8,
                  title: 'CO.3',
                  description:
                    'The CO.3 variety is from Tamil Nadu. It is primarily a Crossbreed of the cricket ball and the Vavivalasa. This variety bears fruits from 4th year onwards. The fruits of this variety are usually light brown in color, oblong in shape, and sweet to taste. The average yield of fruits per tree is around 157 kg annually.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the leading sapota exporters from India. We at Pisum Foods have extensive experience in the food export industry and know the industry inside out. We assist our clients with every process including finding buyers, conducting in-depth research of the market, quality checks so on, and so forth. If you looking for Sapota import from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.JACKFRUIT,
        name: 'Jackfruit',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.JACKFRUIT}.jpg`,
        data: {
          title: 'Indian Jackfruit Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.JACKFRUIT}.jpg`,
          description: [
            'Jackfruit is a fruit from the family of Moraceae. It may be green or yellow in color with yellow bulbs on the inside. The Indian Jackfruit exporter exports tonnes of jackfruits each year to several countries in the world. Jackfruit has many uses and benefits and is therefore in great demand worldwide. Therefore, the Jackfruit export from India has also been increasing over the years. The export of Jackfruit is also a good business opportunity for local vendors and farmers to expand their business and enter the international marketplace.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '155 calories\nDietary Fiber - 3 g\nTotal Carbohydrate - 40 g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '3g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin C',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description:
                    'Folate, Niacin, Riboflavin, Potassium, Magnesium',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'JACKFRUIT VARIETIES WE EXPORT',
              description:
                'The Jackfruit exporter in India exports various varieties of jackfruits like Black Gold, Cochin, Red Barlett so on, and so forth. The jackfruit exported from India should be of good quality and should also meet all the health and safety requirements of the country. Here are some major varieties included in the Jackfruit export from India.',
              items: [
                {
                  id: 1,
                  title: 'BLACK GOLD',
                  description:
                    'The Black Gold variety of Jackfruit is an energetic jackfruit, with a dense and highly manageable awning. The fruits are generally medium in size, averaging around 6.7 kg, with an edible flesh percentage of 35% for each. The exterior of the fruit is dark green in color and it has a sharp fleshy spine.',
                },
                {
                  id: 2,
                  title: 'COCHIN',
                  description:
                    'The Cochin variety of jackfruits is small and smooth in nature. The fruits of this variety are small and smooth in nature as compared with other cultivars. This is because the spines squash and fruit opens when matured.',
                },
                {
                  id: 3,
                  title: 'RED BARLETT',
                  description:
                    'The Red Barlett variety of jackfruits is an exotic fruit medium in size and oval shape. The tree of this variety should be pruned annually to maintain height and spread of around 3 to 3.5 m. The fruits of this variety are bright green to pale yellow in color and uniform in shape.',
                },
                {
                  id: 4,
                  title: 'GOLDEN NUGGET',
                  description:
                    'The tree of the Golden Nugget variety has a fast-growing nature and dark green, rounded leaves. The fruits of this variety are small, green and rounded with fleshy spines on the skin. The spines of this variety flatten to a smooth, golden yellow upon maturity. The Golden Nugget fruit weighs around 3.2 kg.',
                },
                {
                  id: 5,
                  title: 'GOLDEN PILLOW',
                  description:
                    "Golden Pillow' also known as 'Mong Tong', was introduced in the 1980s from Thailand. The tree of this variety is always managed with a height and spread of 3 m and is small. The weight of the average fruit of this variety is around 3.5 to 5.5 kg with 35 to 40% edible flesh.",
                },
                {
                  id: 6,
                  title: 'KOOZHA CHAKKA',
                  description:
                    'Koozha chakka is a variety of jackfruits from South India. The fruits of this variety have small, fibrous, soft, mushy, but very sweet carpels. This is one of the varieties of jackfruits exported from India.',
                },
                {
                  id: 7,
                  title: 'KOOZHA PAZHAM',
                  description:
                    'The Koozha Pazham variety of jackfruits is a variety from South India. This variety is more important commercially. The Koozha Pazham variety has crisp carpels of high quality known as Varika.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is the leading Jackfruit exporter from India. We at Pisum Foods have extensive experience in the food export industry and know the ins and outs of the industry well. Our executives are trained to assist you with every step of the process of food export. Right from finding buyers for your products until the final delivery, its all taken care of by Pisum. If you are looking for Jackfruit import from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.WATERMELON,
        name: 'Watermelon',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.WATERMELON}.jpg`,
        data: {
          title: 'Indian Watermelon Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.WATERMELON}.jpg`,
          description: [
            'Watermelon is a popular large spherical fruit, it is dark green in color and has a smooth rind, it has a sweet, juicy, refreshing flesh of reddish colour. The Indian watermelon exporter exports watermelon from India which is worth 8.35 USD million. Due to the growing popularity of Watermelons. Watermelon export from india has been increasing over time. This is a good opportunity for local farmers and vendors to expand their business and enter the international market. The export of watermelon includes the export of many varieties of this product.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '30 kcal\nTotal Carbohydrate 8 g\nDietary Fiber 0.4g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '0.8g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin A, Vitamin C',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description: 'Iron, Magnesium',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'WATERMELON VARIETIES WE EXPORT',
              description:
                'The Watermelon exporter from India exports various varieties of watermelons including Arka Jyoti, Arka Manik, Durgapura Kesar, and so on. The export of Watermelon from india includes the following kay varieties of watermelons.',
              items: [
                {
                  id: 1,
                  title: 'ARKA JYOTI',
                  description:
                    'The Arka Jyoti is suitable for both north and south India. The plants of this variety bear fruits that weigh around 6-8kgs. The fruits of this variety have flesh that is red in colour and sweet to taste.',
                },
                {
                  id: 2,
                  title: 'ARKA MANIK',
                  description:
                    'Arka Manik variety of watermelons has fruits that are oval, with dull green stripes. The flesh of this variety of watermelons is very sweet and deep red in colour. Each fruit of this variety weighs around 6 kgs.',
                },
                {
                  id: 3,
                  title: 'DURGAPURA KESAR',
                  description:
                    'The Durgapura Kesar variety of watermelons is a striped variety. Each fruit of this variety weighs almost 4-6 kgs. Unlike other varieties, these fruits have yellow pulp, which is not very sweet in taste.',
                },
                {
                  id: 4,
                  title: 'BLACK DIAMOND WATERMELON',
                  description:
                    'The Black Diamond variety of Watermelons has grey seeds. This variety of watermelons is Oblong shaped and is approximately 30 to 50 pounds in weight. The flesh of this variety is crispy and flavorful. The flesh is bright red in colour.',
                },
                {
                  id: 5,
                  title: 'CRIMSON SWEET WATERMELONS',
                  description:
                    'The Crimson Sweet Watermelons have small black seeds. The watermelon is oblong shaped and weighs approximately 20 to 25 pounds. The flesh is sweet flesh with high sugar content. This variety is one of the most popular within the species.',
                },
                {
                  id: 6,
                  title: 'SUGAR BABY WATERMELONS (GARDEN BABY)',
                  description:
                    'The Sugar Baby Watermelons are seeded and round in shape. These fruits weigh 7 to 10 pounds and have firm and fine-grained flesh. It is very sweet in flavour. The flesh is bright red in colour with a solid dark green coloured skin.',
                },
                {
                  id: 7,
                  title: 'SWEET POLLY WATERMELON',
                  description:
                    'The Sweet Polly is a seedless variety of Watermelons. These fruits are oval in shape and weigh 13 to 17 pounds. This variety is sweet in flavour similar to the Crimson Sweet watermelon variety. The flesh is dark red in colour with deep green skin and Crimson stripping.',
                },
                {
                  id: 8,
                  title: 'FASCINATION WATERMELONS',
                  description:
                    'The Fascination variety of Watermelons is seedless and oblong-shaped. It weighs around 18 to 20 pounds. The flesh is firm and has a sweet flavour. The flesh is deep red in colour and has a glossy green skin with crimson stripes.',
                },
                {
                  id: 9,
                  title: 'CAPTIVATION WATERMELONS',
                  description:
                    'The Captivation variety is a seedless variety of watermelons. It is oblong-shaped and uniform. These fruits weigh around 14 to 17 pounds. The flesh of this variety is firm flesh and sweet and tasty. The flesh is bright red in colour with a deep green rind.',
                },
                {
                  id: 10,
                  title: 'KINGMAN WATERMELONS',
                  description:
                    'This variety of Watermelons is seedless. The fruits are round and oval in shape and weigh around 18 to 22 pounds in weight. The watermelons have firm and crisp flesh that is sweet in flavour. The flesh is bright red in colour and light green skin with medium green stripes.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is a leading Watermelon exporter from India. We at Pisum Foods help our clients with each and every step while exporting products from India. Our team has extensive experience in the export of industry and we make sure that the process is carried out smoothly with the least confusion and hassle. We strictly adhere to all the health and safety restrictions and make sure that your products are delivered safely. If you are looking for Watermelon import from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.PEARS,
        name: 'Pears',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.PEARS}.jpg`,
        data: {
          title: 'Indian Pears Exporters',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.PEARS}.jpg`,
          description: [
            'Pears are sweet, bell-shaped fruits that have been enjoyed for thousands of years. The Indian pears exporter exports tonnes of pears abroad each year. Due to the various uses and benefits of pears, the pears export from India has been increasing over the years. The export of pears from India is now a good business opportunity for local farmers and vendors to expand their business and enter the international market.',
          ],
          cardSections: [
            {
              title: 'INGREDIENTS',
              description: '',
              items: [
                {
                  id: 1,
                  title: 'Nutrients',
                  description:
                    '57 calories\nDietary Fiber - 3.1g\nTotal Carbohydrate - 15 g',
                },
                {
                  id: 2,
                  title: 'Protein',
                  description: '0.4g',
                },
                {
                  id: 3,
                  title: 'Vitamins',
                  description: 'Vitamin C, Vitamin K',
                },
                {
                  id: 4,
                  title: 'Minerals',
                  description: 'Potassium, Copper',
                },
                {
                  id: 5,
                  title: 'Fat',
                  description: '',
                },
              ],
            },
            {
              title: 'PEARS VARIETIES WE EXPORT',
              description:
                'The Pears exporter in India exports various varieties of pears including Bartlett, Anjou, Bosc so on and so forth. The export of pears from India includes the following major varieties of pears.',
              items: [
                {
                  id: 1,
                  title: 'BARTLETT',
                  description:
                    'Bartlett pears are the most popular variety of pears. They are bell-shaped with a smooth, yellow-green skin that turns golden yellow when ripe. The flesh is white, juicy, and sweet with a buttery texture.',
                },
                {
                  id: 2,
                  title: 'ANJOU',
                  description:
                    "Anjou pears are round to oval in shape with a short neck. They have a smooth, green skin that doesn't change color when ripe. The flesh is white, crisp, and sweet with a mild flavor.",
                },
                {
                  id: 3,
                  title: 'BOSC',
                  description:
                    'Bosc pears are elongated with a long, tapering neck. They have a rough, brown skin and white flesh that is crisp and sweet. Bosc pears are excellent for cooking and baking.',
                },
                {
                  id: 4,
                  title: 'COMICE',
                  description:
                    'Comice pears are round and squat with a short neck. They have a smooth, green skin that turns yellow when ripe. The flesh is white, juicy, and very sweet with a floral aroma.',
                },
                {
                  id: 5,
                  title: 'CONFERENCE',
                  description:
                    'Conference pears are long and narrow with a tapering neck. They have a smooth, green skin that turns yellow when ripe. The flesh is white, crisp, and sweet with a mild flavor.',
                },
                {
                  id: 6,
                  title: 'FOREST BEAUTY',
                  description:
                    'Forest Beauty pears are medium-sized with a round shape. They have a smooth, yellow skin with red blush. The flesh is white, juicy, and sweet with a pleasant aroma.',
                },
                {
                  id: 7,
                  title: 'WILLIAMS',
                  description:
                    'Williams pears are bell-shaped with a smooth, yellow-green skin. They have white, juicy flesh that is sweet and aromatic. Williams pears are excellent for eating fresh and for making preserves.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the leading Pears exporters from India. We at Pisum Foods have extensive experience in the food export industry and know the industry inside out. We assist our clients with every process including finding buyers, conducting in-depth research of the market, quality checks so on, and so forth. If you looking for Pears import from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.COCONUT,
        name: 'Coconut',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.COCONUT}.jpg`,
        data: {
          title: 'Indian Coconut Exporter',
          layoutType: 'cards',
          headerImage: `/assets/banners/${Products.COCONUT}.jpg`,
          description: [
            'Coconut is very popular in India. India is known to be one of the world leaders in coconut production. India annually produces around 21,500 million tons of coconut. The export of coconut from India is huge. The states of Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh are major coconut exporters. The coconut export from India has increased due to the worldwide demand for coconuts.',
          ],
          cardSections: [
            {
              title: 'COCONUT VARIETIES WE EXPORT',
              description:
                'There are several varieties of coconuts available in the market including West Coast Tall, East Coast Tall, Chandrakalpa, VPM-3, Aliyar Nagar, and so on. Coconut exporters in India export numerous varieties of coconuts to countries around the world.',
              items: [
                {
                  id: 1,
                  title: 'WEST COAST TALL',
                  description:
                    'West Coast Tall also is known as ordinary or common tall variety is recommended for large scale cultivation. This type yields good quality coconut juice which can be fermented too. The quantity of coconut juice produced is also good as compared to other varieties. It can be used for edible purposes and soap manufacturing.',
                },
                {
                  id: 2,
                  title: 'EAST COAST TALL',
                  description:
                    'East Coast Tall takes around 6 to 8 years to bear coconuts. The coconuts are smaller in size as compared to the West Coast Tall type. This variety is also recommended for large scale production along the coastal lines. You can find this variety of coconut in Andhra Pradesh, Tamil Nadu, Bihar, Pondicherry, and so on.',
                },
                {
                  id: 3,
                  title: 'CHANDRAKALPA OR LAKSHADWEEP ORDINARY (LCT)',
                  description:
                    'Chandrakalpa variety grows well in all types of soil and can withstand the stress of moisture. The Chandrakalpa type can be found in Kerala, Tamil Nadu, Karnataka, and such other states in India.',
                },
                {
                  id: 4,
                  title: 'PHILIPPINES ORDINARY (KERACHANDRA)',
                  description:
                    "The Philippine's ordinary variety is known to grow in all types of soil. The time taken for bearing for this type of coconut is around 5 years. The average yield per year, per palm, is approximately 110 nuts. The oil content in this variety is around 66%.",
                },
                {
                  id: 5,
                  title: 'VPM - 3 (ANDAMAN ORDINARY)',
                  description:
                    'The specialty of the VPM-3 variety is that it is drought tolerant and also suitable for rainfed and irrigated conditions. It has high copra content and 70% oil content. This variety is found in states like Orissa, Tamil Nadu, Kerala, Andamans, Andhra Pradesh, Bihar, and so on.',
                },
                {
                  id: 6,
                  title: 'ALIYAR NAGAR',
                  description:
                    'The Aliyar Nagar flowers one year early as compared to VPM-3, West Coast Tall, and East Coast Tall. This variety is said to be moderately tolerant to major coconut pests. It has 65.5% oil content and yields on average 126 nuts per palm per year.',
                },
                {
                  id: 7,
                  title: 'TIPTUR TALL',
                  description:
                    'The Tiptur Tall is a popular cultivator from the state of Karnataka. The time taken for bearing for this variety varies from 5 to 7 years. The average yield is around 86 nuts per palm per year. It has approximately 68% oil content.',
                },
                {
                  id: 8,
                  title: 'KERA SAGARA (SEYCHELLES)',
                  description:
                    'Kera Sagara is a popular cultivar of Kerala State. It has around 68% oil content and has an average yield of 99 nuts per palm per year. The time taken for bearing is approximately 6 to 7 years.',
                },
                {
                  id: 9,
                  title: 'BENAVALI GREEN ROUND (PRATAP)',
                  description:
                    'Pratap also known as Benavali Green Round was released by CPCR in the year 1985. This variety yields approximately 110 nuts per year.',
                },
                {
                  id: 10,
                  title: 'PHILIPPINES TALL (CHANDRATHARA)',
                  description:
                    'The Philippines Tall also known as Chandrathara cultivar was released in 1985. The approximate yield per year for this variety is 110.',
                },
                {
                  id: 11,
                  title: 'ASSAM TALL (KAMAROOPA)',
                  description:
                    'Assam Tall or Kamaroopa cultivar was released in 1985. The weight of the copra is around 189. The yield per year for Assam Tall is approximately 110 nuts per year.',
                },
                {
                  id: 12,
                  title: 'KALPADHENU',
                  description:
                    'Kalpadhenu is a variety that grows well in Kerala, Andhra Pradesh, Tamil Nadu, Andaman and Nicobar Islands and such other regions in India. The yield per hectare of Kalpadhenu is approximately 22,794 nuts per hectare.',
                },
                {
                  id: 13,
                  title: 'KALPA PRATIBA',
                  description:
                    'Kalpa Pratiba can be found mostly in the states of Maharashtra, Kerala, and some regions of Andhra Pradesh and Tamil Nadu. The approximate yield per hectare is 23,275 nuts per hectare.',
                },
                {
                  id: 14,
                  title: 'KALPA MITRA',
                  description:
                    'The variety Kalpa Mitra is grown widely in Kerala and West Bengal. The yield of the Kalpa Mitra variety is approximately 89 nuts per year. The tenure required for the flowering of Kalpa Mitra is around 58 months.',
                },
                {
                  id: 15,
                  title: 'KERAKERALAM',
                  description:
                    'This cultivar is of the Kerala state. It has around 68% oil content. Kerakeralam has a time for bearing of 6 to 7 years. The average yield of Kerakeralam is around 99 nuts per palm per year.',
                },
              ],
            },
          ],
          conclusion: [
            'Pisum Foods is one of the leading Coconut exporters from India. We at Pisum Foods have extensive experience in the food export industry and know the industry inside out. We assist our clients with every process including finding buyers, conducting in-depth research of the market, quality checks so on, and so forth. If you looking for Coconut import from India, Contact Pisum now!',
          ],
        },
      },
      {
        slug: Products.BER,
        name: 'Ber',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.BER}.jpg`,
        data: {
          title: 'Indian Ber Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.BER}.jpg`,
          description: [
            'Ber resembles a date in appearance. It is also known as red date, Indian date, Korean date or Chinese date and is mainly cultivated in South Asia. Bers taste slightly tarty and sweet and the colour ranges from brown to purplish-black in colour. The Ber exporter in India exports tonnes of the fruit from India. Due to the various uses and benefits of Ber, the Ber export from India has been on a rise. This is considered as a good opportunity for the Indian Ber exporter to expand his business and enter the international market. The Ber export from India includes various varieties of the fruit.',
          ],
          conclusion: [
            'Pisum Foods is one of the leading Ber importers from India. We at Pisum Foods understand that the process of export of Ber is complicated at times. But no worries! Pisum Foods will help you at each and every step on the way. Our executives will help you right from finding buyers for your products until the final delivery of the order. If you are interested in Ber export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global Market Demand for Ber has been increasing over the years. This may be because of the awareness about its various health benefits and diverse uses. The Ber exporter in India exports the fruit from India to different corners of the world. The Ber import from India has been increasing due to the premium quality and varieties of the fruit exported from the country.',
            ],
            specification: {
              productName: 'Ber',
              origin: 'India and China',
              family: 'Rhamnaceae',
              binomialName: 'Ziziphus mauritiana',
            },
            ingredients: {
              nutrients: {
                calories: '79 kcal',
                carbohydrates: '20 g',
                fiber: '1.6 g',
              },
              minerals: [
                'Calcium',
                'Thiamine',
                'Riboflavin',
                'Phosphorous',
                'Iron',
                'Niacin',
              ],
              vitamins: ['Vitamin B-6', 'Vitamin C'],
              protein: '1.2 g',
              fats: '0.2 g',
            },
            usesAndBenefits: {
              uses: [
                'Bers are known to be traditionally used in Chinese medicine to treat sleep troubles like Insomnia. Both the fruit and the seeds are said to be rich in flavonoids- saponins and polysaccharides.',
                'Bers may also help you get relief from the digestive problems. The high quantum of fibre in Bers helps regulate bowel movements and digestion.',
                'Ber is said to have calming effects on the brain and the nervous system. They help relieve anxiety too.',
                'Ber is rich in essential vitamins and antioxidants, especially vitamin C. Vitamin C helps vitalize skin, fights free radicals and strengthens the Immunity by keeping diseases at bay.',
              ],
            },
          },
        },
      },
      {
        slug: Products.AMLA,
        name: 'Amla',
        img: `/assets/product/${ProductCategory.FRUITS}/${Products.AMLA}.jpg`,
        data: {
          title: 'Indian Amla Exporter',
          layoutType: 'simple-tabs',
          headerImage: `/assets/banners/${Products.AMLA}.jpg`,
          description: [
            "Amla is primarily an Indian gooseberry. It is translucent and green in colour. It derives its name from the Sanskrit word 'Amlaki' which means 'nectar of life'. The Amla exporter in India exports huge quantities of the product each year. Due to its various health and medicinal uses and benefits, Amla export from India has been increasing rapidly over the decades. The Indian Amla exporter, therefore, is exporting more and more products each year. This Amla export includes the export of various varieties of the product.",
          ],
          conclusion: [
            'Pisum is the leading Amla importer from India. We at Pisum believe that Indian culture, food, flowers, and such other products should be spread to the entire world. Our executives at Pisum are trained to help and support our clients at each step of the export process. With our expertise and extensive experience in the export field, we make sure that the export of Amla from India is a hassle-free process for our clients. If you are interested in Amla export from India, Contact Pisum now!',
          ],
          simpleTabContent: {
            globalMarketDemand: [
              'The Global Market Demand for Amla has been on a rise over the years. This may be because of the awareness about its various health benefits and diverse uses. The Amla exporter in India exports its products from India to different corners of the world. The Amla import from India has been increasing due to the premium quality and varieties of the products exported from the country.',
            ],
            specification: {
              productName: 'Amla',
              origin: 'Subtropical regions of India',
              family: 'Phyllanthaceae',
              binomialName: 'Phyllanthus emblica',
            },
            ingredients: {
              nutrients: {
                calories: '58 kcal',
                carbohydrates: '13.7 g',
                fiber: '3.4%',
              },
              minerals: [
                'Calcium',
                'Iron',
                'Carotene',
                'Thiamine',
                'Riboflavin',
                'Nicene',
              ],
              vitamins: [],
              protein: '0.5%',
              fats: '0.1%',
            },
            usesAndBenefits: {
              uses: [
                'Amla is a rich source of Vitamin C. The vitamin C in amla is absorbed more easily by the body compared to store-bought supplements.',
                'Amla is also said to be good for your eye health. Research states that the carotene in amla improves vision.',
                "Amla also builds immunity. Amla's antibacterial and astringent characteristics are useful to boost one's immune system.",
                'Amla is also a great tonic for hair. It slows down greying, prevents dandruff, strengthens hair follicles, and increases blood circulation to the scalp.',
              ],
            },
          },
        },
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
          headerImage: `/assets/banners/${Products.GROUNDNUT}.jpg`,
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

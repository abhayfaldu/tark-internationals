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
  MASOOR_DAL = 'red-lentil',
  GREEN_GRAM = 'green-gram-moog',
  BLACK_GRAM = 'black-gram',
  CHANA_DAL = 'chana-dal',
  BEATEN_RICE = 'beaten-rice',
  FIELD_BEANS = 'field-bean',
  URADDALSPLIT = 'urad-gota',
  TURKISH_GRAM = 'moth-bean',
  WHOLE_MASOOR = 'whole-masoor',
  URADDAL_GOTA = 'white-urad-dal',
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
          headerImage: '/assets/banners/corn.jpg',
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
          headerImage: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.OATS}.jpg`,
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
          headerImage: `/assets/product/${ProductCategory.GRAINS_AND_CEREAL}/${Products.MILLET}.jpg`,
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
      },
      {
        slug: Products.KIDNEY_BEANS,
        name: 'Kidney Beans',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.KIDNEY_BEANS}.jpg`,
      },
      {
        slug: Products.SOYABEAN,
        name: 'Soya Bean',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.SOYABEAN}.jpg`,
      },
      {
        slug: Products.PIGEONPEA,
        name: 'Pigeon Pea/Arhar/Tur',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.PIGEONPEA}.jpg`,
      },
      {
        slug: Products.BLACK_EYED_BEANS,
        name: 'Black-Eyed Beans / Cowpea',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.BLACK_EYED_BEANS}.jpg`,
      },
      {
        slug: Products.HORSE_GRAM,
        name: 'Horse Gram',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.HORSE_GRAM}.jpg`,
      },
      {
        slug: Products.PUFFED_RICE,
        name: 'Puffed Rice',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.PUFFED_RICE}.jpg`,
      },
      {
        slug: Products.MASOOR_DAL,
        name: 'Masoor Dal / Red Lentil',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.MASOOR_DAL}.jpg`,
      },
      {
        slug: Products.GREEN_GRAM,
        name: 'Green Gram / Mung Bean',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.GREEN_GRAM}.jpg`,
      },
      {
        slug: Products.BLACK_GRAM,
        name: 'Black Gram',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.BLACK_GRAM}.jpg`,
      },
      {
        slug: Products.CHANA_DAL,
        name: 'Chana Dal',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.CHANA_DAL}.jpg`,
      },
      {
        slug: Products.BEATEN_RICE,
        name: 'Beaten Rice',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.BEATEN_RICE}.jpg`,
      },
      {
        slug: Products.FIELD_BEANS,
        name: 'Field Beans',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.FIELD_BEANS}.jpg`,
      },
      {
        slug: Products.URADDALSPLIT,
        name: 'Urad Dal Split',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.URADDALSPLIT}.jpg`,
      },
      {
        slug: Products.TURKISH_GRAM,
        name: 'Turkish Gram / Moth Bean',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.TURKISH_GRAM}.jpg`,
      },
      {
        slug: Products.WHOLE_MASOOR,
        name: 'Whole Masoor',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.WHOLE_MASOOR}.jpg`,
      },
      {
        slug: Products.URADDAL_GOTA,
        name: 'Urad Dal Gota',
        img: `/assets/product/${ProductCategory.PULSES}/${Products.URADDAL_GOTA}.jpg`,
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

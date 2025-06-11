import { productCategoriesData, ProductCategory, ProductData } from '@/data/data'

// Type definitions
export const getProductData = (
  category: string,
  product: string
) => {
  // const productData =
  //   productCategoriesData[ProductCategory.Oilseeds].products.find(
  //     (p) => p.name === product
  //   // )?.data || defaultProductData(product)
  // return productData

  // if (category === 'oilseeds' && product === 'groundnut') {
  //   return productData || defaultProductData(product)
  //     (p) => p.name === product
  //   )?.data || defaultProductData(product)
  // }
  // Demo data for rye
  // else if (category === 'grains-and-cereal' && product === 'rye') {
  //   return
  // }
  // Demo data for rice with cards layout
  // else if (category === 'grains-and-cereal' && product === 'rice') {
  //   return {
  //     title: 'Indian Rice Exporters',
  //     headerImage: '/assets/banners/rice.jpg',
  //     description: [
  //       'Rice is one of the most popular and widely consumed staple foods. It is consumed extensively in Asia and Africa and is the agricultural commodity with third highest production in the world. It is generally grown as an annual plant in areas like the tropics. It can evolve as a perennial crop.',
  //     ],
  //     nutritionFacts: null,
  //     varieties: [],
  //     conclusion: [],
  //     layoutType: 'cards',
  //     cardSections: [
  //       {
  //         title: 'BASMATI RICE',
  //         items: [
  //           {
  //             id: 1,
  //             title: '1121 BASMATI RICE - WHITE',
  //             description:
  //               'Pusa Basmati 1121 is a variety having Basmati rice quality traits from the traditional Basmati varieties such as Basmati 370 and Type 3. This type is specially derived from the process of hybridization. Commercial cultivation for 1121 Basmati rice started in 2003. Its characteristics include extra-long, slender milled grains, a pleasant aroma, volume expansion more than four times, appealing taste, good mouthfeel, and easy digestibility.',
  //           },
  //           {
  //             id: 2,
  //             title: 'TRADITIONAL BASMATI RICE',
  //             description:
  //               'There are various types of basmati rice. Traditional types include Taraori 370, Basmati 386, and Basmati Keerbhogphool. Traditional Basmati Rice is available in unboiled and boiled form. It is used in Continental cuisine, Indian Cuisine, Mughal Cuisine & Chinese Cuisine.',
  //           },
  //           {
  //             id: 3,
  //             title: 'GOLDEN SELLA BASMATI RICE',
  //             description:
  //               "Retaining rice's native smell of rice, Golden Sella rice releases less starch and retains more minerals from the original grain. The parboiling guarantees it firm grain upon cooking. Parboiled rice is both cholesterol and gluten free. It is also low in sodium and saturated fat. Rice provides complex carbohydrates used by the body for energy.",
  //           },
  //           {
  //             id: 4,
  //             title: 'SUGANDHA BASMATI RICE',
  //             description:
  //               'Sugandha Basmati Rice is one of the low cost long grain basmati rice in India. It is generally cultivated in Punjab, Haryana, and Uttar Pradesh. Like each other kinds of India, Sugandha Basmati Rice has a great fragrance and is semi-sticky rice. It is visually slightly shorter than both Basmati and 1121 Basmati rice. It may swell up to twice its length if cooked well.',
  //           },
  //           {
  //             id: 5,
  //             title: 'SHARBATI BASMATI RICE',
  //             description:
  //               'Sharbati Basmati Rice is made from the harms of Traditional Basmati Rice and has no specific aroma. The cooking of Sharbati Basmati Rice is similar to basmati Rice. It is quick of shelf-long. It has grain is shaped in 7-8MM in length.',
  //           },
  //         ],
  //       },
  //       {
  //         title: 'NON-BASMATI RICE',
  //         items: [
  //           {
  //             id: 1,
  //             title: 'PARBOILED RICE',
  //             description:
  //               'Parboiled rice is rice that been partially boiled in the husk. It is generally fifty way to cook rice. The process of parboiling includes soaking, steaming and drying. These processes make the rice easier to process by hand, minimize the loss of nutrients that may otherwise occur during the processing, increase its nutritional value, and make it more resistant to weevils.',
  //           },
  //           {
  //             id: 2,
  //             title: 'BROKEN RICE',
  //             description:
  //               'First of all, even though this type is called broken rice, cooking is actually same with is is as nutritious as any other rice. It is basically just fragments or rice grains, broken in the rice milling during transport, or by drying. Standardized appearance size used to separate the broken grains from the whole.',
  //           },
  //           {
  //             id: 3,
  //             title: 'SWARNA RICE',
  //             description:
  //               'Swarna is one of the most healthy rice cultivar. It has a very low risk of diseases (4/10) low glycemic index. Swarna rice is grown extensively in India.',
  //           },
  //           {
  //             id: 4,
  //             title: 'SONA MASOORI RICE',
  //             description:
  //               'Sona masoori variety of rice is a medium-grain rice grown largely in the states of Andhra Pradesh, Telangana, and Karnataka in India. Sona Masoori is popularly known by Golden for Milled. This premium variety of rice is mostly exported to the USA, Canada, Europe, Australia, Singapore, Malaysia, Yemen, and Saudi Arabia. It is the Highest Exported Rice from India.',
  //           },
  //         ],
  //       },
  //     ],
  //   }
  // }

  // Demo data for corn
  // else if (category === 'grains-and-cereal' && product === 'corn') {
  //   return {
  //     title: 'Indian Corn Exporter',
  //     headerImage: '/assets/banners/corn.jpg',
  //     description: [
  //       "Corn is known to be one of the world's most popular cereal grains. It is actually the seed of a plant in the grass family. Corn exporter in India export tonnes of corn each year. Humans and animals consume corn in various forms. Varieties of corn can be used in snacks, vegetables, curries, and so on. Corn export from India has been one of the rapidly growing exports. The Indian corn exporter thus earns great revenues from these exports. Corn export from India comprises of various forms and varieties of export.",
  //     ],
  //     nutritionFacts: null,
  //     varieties: [],
  //     conclusion: [
  //       'If you are looking for Corn importer from India, Pisum Foods is one of the best! Pisum Foods export premium quality corn to numerous countries in the world. With our advanced technology and detailed analysis of the market export of Corn from India has now become easy. Pisum Foods has an established global presence and will help you with more export from India. Want to export corn? Pisum is the place for you!',
  //     ],
  //     layoutType: 'simple-tabs',
  //     simpleTabContent: {
  //       globalMarketDemand: [
  //         'Corn import from India has been increasing for a few years due to the several health and medicinal benefits of corn. Corn is said to reduce the risk of Anemia and is also helpful during pregnancy. Corn exporter in India export premium quality corn to many nations in the world. Export of Corn is thus a good business opportunity for Indian exporters to enter the international market.',
  //       ],
  //       specification: {
  //         productName: 'Corn/Maize',
  //         origin: 'Mexico',
  //         family: 'Poaceae',
  //         binomialName: 'Zea mays',
  //       },
  //       ingredients: {
  //         nutrients: {
  //           calories: '177 Calories',
  //           carbohydrates: '41 grams',
  //           fiber: '4.6 grams',
  //         },
  //         minerals: [
  //           'Magnesium',
  //           'Phosphorus',
  //           'Zinc',
  //           'Copper',
  //           'Iron',
  //           'Thiamin',
  //           'Selenium',
  //           'Niacin',
  //           'Folate',
  //           'Pantothenic Acid',
  //         ],
  //         vitamins: ['Vitamin B6', 'Vitamin E'],
  //         protein: '5.4 g',
  //         fats: '2.1gm',
  //       },
  //       usesAndBenefits: {
  //         uses: [
  //           'Corn is known to be a very effective energy booster. Thus, many experts recommend eating corn after exercising.',
  //           'Corn also helps to gain weight. It is a much better and healthier food option rather than junk food.',
  //           'Corn is also said to be an excellent choice for diabetes and cholesterol patients. This is because sweet corn and corn oil increase the blood flow, lower cholesterol absorption and regulate insulin.',
  //           'Corn is also used to feed livestock.',
  //         ],
  //       },
  //     },
  //   }
  // }

  // Default data for other products
  // return
}

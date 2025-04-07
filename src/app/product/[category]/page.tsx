import ProductSearch from '@/components/ProductSearch'

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params

  const data = {
    'grains-and-cereal': {
      headerImg: '/assets/product/grains-and-cereal/header.jpg',
      headerText: 'Grains and Cereal',
      descTitle: 'Indian Grains & Cereal Exporters',
      descText: [
        'India is one of the most important players in the global market today. Being one of the major agricultural exporters in the world, grain and cereal export from India has been growing rapidly. Tark Internationals is one of the most reliable grains importers from India. We work on the export of grains and cereal, fruits, vegetables, pulses, spices, and such other food products from India. Being one of the leading cereal exporters in India, we have been accredited to TPCI, APEDA, and such other certifications.',
        'Known to be the best grains and cereal exporter in India, we at Tark Internationals make sure that premium quality grains and cereal in India are exported abroad. When we work on the export of Indian grains, we make sure that all the health and safety regulations are followed. With extensive experience in the Food export industry and export of Indian grains, we make sure that we can get the best buyers for grains exporter from India. If you are looking for cereal import from India, Tark Internationals is the best choice for you!',
      ],
      products: [
        {
          name: 'Rye',
          img: '/assets/product/grains-and-cereal/Rye.jpg',
        },
        {
          name: 'Corn / Maize',
          img: '/assets/product/grains-and-cereal/Corn.jpg',
        },
        {
          name: 'Oats',
          img: '/assets/product/grains-and-cereal/Oats.jpg',
        },
        {
          name: 'Millet / Bajra',
          img: '/assets/product/grains-and-cereal/Bajara.jpg',
        },
        {
          name: 'Rice',
          img: '/assets/product/grains-and-cereal/Rice.jpg',
        },
        {
          name: 'Wheat',
          img: '/assets/product/grains-and-cereal/Wheat.jpg',
        },
        {
          name: 'Barley',
          img: '/assets/product/grains-and-cereal/Barley.jpg',
        },
        {
          name: 'Triticale',
          img: '/assets/product/grains-and-cereal/Triticale.jpg',
        },
        {
          name: 'Fonio',
          img: '/assets/product/grains-and-cereal/Fonio.jpg',
        },
        {
          name: 'Sorghum / Jawari',
          img: '/assets/product/grains-and-cereal/Sorghum.jpg',
        },
        {
          name: 'Teff',
          img: '/assets/product/grains-and-cereal/Teff.jpg',
        },
      ],
    },
    pulses: {
      headerImg: '/assets/product/pulses/header.jpg',
      headerText: 'Pulses',
      descTitle: 'Indian Pulses Exporters',
      descText: [
        'India today is a major exporter of various food and agricultural products. Among these, we have seen exponential growth in the pulses export from India in the past few years. The export of Pulses from India was around 2.70 lakh tonnes which are worth Rs. 1679.98 crores in the year 2018-2019. Tark Internationals is one of the most recommended Pulses importers from India. We import various varieties of Pulses including chickpeas, peas, kidney beans, soybeans so on, and so forth.',
        'Being one of the largest Pulses exporters in India, Tark Internationals makes sure that the products reach the destinations fresh and on the promised time. We have connections across the globe and provide hassle-free export of Indian pulses. We are a pulses exporter who believes in transparency of services and is always happy to help with any issues our clients may have. We wish to spread Pulses in India and other Indian products to every corner of the world through our services. If you want to Pulses import from India, Tark Internationals is the place for you!',
      ],
      products: [
        {
          name: 'Chickpeas / Garbanzo Beans',
          img: '/assets/product/pulses/chickpeas.jpg',
        },
        {
          name: 'Peas',
          img: '/assets/product/pulses/peas.jpg',
        },
        {
          name: 'Kidney Beans',
          img: '/assets/product/pulses/kidney-beans.jpg',
        },
        {
          name: 'Soya Bean',
          img: '/assets/product/pulses/soyabean.jpg',
        },
        {
          name: 'Pigeon Pea/Arhar/Tur',
          img: '/assets/product/pulses/tur.jpg',
        },
        {
          name: 'Black-Eyed Beans / Cowpea',
          img: '/assets/product/pulses/black-eyed-beans.jpg',
        },
        {
          name: 'Horse Gram',
          img: '/assets/product/pulses/horse-gram.jpg',
        },
        {
          name: 'Puffed Rice',
          img: '/assets/product/pulses/puffed-rice.jpg',
        },
        {
          name: 'Masoor Dal / Red Lentil',
          img: '/assets/product/pulses/red-lentil.jpg',
        },
        {
          name: 'Green Gram / Mung Bean',
          img: '/assets/product/pulses/green-gram-moog.jpg',
        },
        {
          name: 'Black Gram',
          img: '/assets/product/pulses/black-gram.jpg',
        },
        {
          name: 'Chana Dal',
          img: '/assets/product/pulses/chana-dal.jpg',
        },
        {
          name: 'Beaten Rice',
          img: '/assets/product/pulses/beaten-rice.jpg',
        },
        {
          name: 'Field Beans',
          img: '/assets/product/pulses/field-bean.jpg',
        },
        {
          name: 'Urad Dal Split',
          img: '/assets/product/pulses/urad-gota.jpg',
        },
        {
          name: 'Turkish Gram / Moth Bean',
          img: '/assets/product/pulses/moth-bean.jpg',
        },
        {
          name: 'Whole Masoor',
          img: '/assets/product/pulses/whole-masoor.jpg',
        },
        {
          name: 'Urad Dal Gota',
          img: '/assets/product/pulses/white-urad-dal.jpg',
        },
      ],
    },
    spices: {
      headerImg: '/assets/product/spices/header.jpg',
      headerText: 'Spices',
      descTitle: 'Indian Spices Exporter',
      descText: [
        'Spices are one of the most important ingredients in Indian dishes. Indian Spices have been popular across the world for their unique flavor, aroma, and beautiful texture. Thus, the export of spices from India has increased substantially. We, at Tark Internationals, believe that Indian culture and our unique spices in India have been the best corner of the world. Tark Internationals is one of the leading export companies for the export of Indian spices. We, being whole spice exporters, export numerous spices including turmeric, ginger, star anise, Cinnamon, Asafoetida, Nutmeg, cumin, black pepper, and many more.',
        'Tark Internationals, one of the most recommended spices exporters in India, has a strong experience in the food industry, and we can get the best buyers for your products. Being one of the relevant exporters of Indian spices, we have connections across the globe. Through us, you can export Indian spices to any corner of the world. We believe that good quality products are the key to success in the international market. Our team of experts located in the heart of India, we have trained executives who analyze the market so that we can give you the latest information available. If you are looking for spice exporters in India, we are here to serve you!',
      ],
      products: [
        {
          name: 'Turmeric',
          img: '/assets/product/spices/turmeric.jpg',
        },
        {
          name: 'Ginger',
          img: '/assets/product/spices/ginger.jpg',
        },
        {
          name: 'Star Anise',
          img: '/assets/product/spices/star-anise.jpg',
        },
        {
          name: 'Cinnamon',
          img: '/assets/product/spices/cinnamon.jpg',
        },
        {
          name: 'Asafoetida',
          img: '/assets/product/spices/asafoetida.jpg',
        },
        {
          name: 'Nutmeg',
          img: '/assets/product/spices/nutmeg.jpg',
        },
        {
          name: 'Cumin',
          img: '/assets/product/spices/cumin.jpg',
        },
        {
          name: 'Black Pepper',
          img: '/assets/product/spices/black-pepper.jpg',
        },
        {
          name: 'Garlic',
          img: '/assets/product/spices/garlic.jpg',
        },
        {
          name: 'Clove',
          img: '/assets/product/spices/clove.jpg',
        },
        {
          name: 'Mustard Seeds',
          img: '/assets/product/spices/mustard-seeds.jpg',
        },
        {
          name: 'Bay-Leaf',
          img: '/assets/product/spices/bay-leaf.jpg',
        },
        {
          name: 'Chili-Pepper',
          img: '/assets/product/spices/chili-pepper.jpg',
        },
        {
          name: 'Coriander',
          img: '/assets/product/spices/coriander.jpg',
        },
        {
          name: 'Saffron',
          img: '/assets/product/spices/saffron.jpg',
        },
        {
          name: 'Carom Seeds / Thyme',
          img: '/assets/product/spices/carom-seeds.jpg',
        },
        {
          name: 'Mace',
          img: '/assets/product/spices/mace.jpg',
        },
        {
          name: 'Poppy Seed',
          img: '/assets/product/spices/poppy-seed.jpg',
        },
        {
          name: 'Green Cardamom',
          img: '/assets/product/spices/green-cardamom.jpg',
        },
        {
          name: 'Peppercorns',
          img: '/assets/product/spices/peppercorns.jpg',
        },
        {
          name: 'Brown Cardamom',
          img: '/assets/product/spices/brown-cardamom.jpg',
        },
        {
          name: 'Green Chilli Pepper',
          img: '/assets/product/spices/green-chilli-pepper.png',
        },
      ],
    },
    fruits: {
      headerImg: '/assets/product/fruits/header.jpg',
      headerText: 'Fruits',
      descTitle: 'Indian Fruits Exporters',
      descText: [
        'India is popularly known as "the fruits basket of the world". In India, we have been blessed with favorable climatic and soil conditions which help the growth of not only fruits in India, but also vegetables, grains, pulses, and such other crops. Most of the fruits are grown in India including mangoes, bananas, papayas, oranges, apricots, grapes, strawberries, apples, guavas, litchis, so on, and so forth. Therefore, fruits export from India has been on the rise for a few decades. The export of fruits from India was around 372213.73 Metric tonnes in the year 2018-2019.',
        'There are numerous fruits importer from India including countries like Bangladesh, Nepal, Oman, Saudi Arabia, UAE, and many more. Tark Internationals us one of the leading fruits exporters in India. We conduct export of Indian fruits to various parts of the world. Being one of the most experienced fruits exporters, our motto is to spread the Indian food products and the Indian culture to every corner of the world. We at Tark Internationals make sure that your food products reach the buyer well packaged and on the promised time. If you are looking for fruits import from India, Tark Internationals can help you at every step on the way!',
      ],
      products: [
        {
          name: 'Apple',
          img: '/assets/product/fruits/apple.jpg',
        },
        {
          name: 'Banana',
          img: '/assets/product/fruits/banana.jpg',
        },
        {
          name: 'Mango',
          img: '/assets/product/fruits/mango.jpg',
        },
        {
          name: 'Orange',
          img: '/assets/product/fruits/orange.jpg',
        },
        {
          name: 'Pineapple',
          img: '/assets/product/fruits/pineapple.jpg',
        },
        {
          name: 'Pomegranate',
          img: '/assets/product/fruits/pomegranate.jpg',
        },
        {
          name: 'Dragon Fruit',
          img: '/assets/product/fruits/dragon-fruit.jpg',
        },
        {
          name: 'Strawberry',
          img: '/assets/product/fruits/strawberry.jpg',
        },
        {
          name: 'Grapes',
          img: '/assets/product/fruits/grapes.jpg',
        },
        {
          name: 'Guava',
          img: '/assets/product/fruits/guava.jpg',
        },
        {
          name: 'Litchi',
          img: '/assets/product/fruits/litchi.jpg',
        },
        {
          name: 'Papaya',
          img: '/assets/product/fruits/papaya.jpg',
        },
        {
          name: 'Sapota',
          img: '/assets/product/fruits/sapota.jpg',
        },
        {
          name: 'Jackfruit',
          img: '/assets/product/fruits/jackfruit.jpg',
        },
        {
          name: 'Watermelon',
          img: '/assets/product/fruits/watermelon.jpg',
        },
        {
          name: 'Pears',
          img: '/assets/product/fruits/pears.jpg',
        },
        {
          name: 'Coconut',
          img: '/assets/product/fruits/coconut.jpg',
        },
        {
          name: 'Ber',
          img: '/assets/product/fruits/ber.jpg',
        },
        {
          name: 'Amla',
          img: '/assets/product/fruits/amla.jpg',
        },
      ],
    },
    vegetables: {
      headerImg: '/assets/product/vegetables/header.jpg',
      headerText: 'Vegetables',
      descTitle: 'Indian Vegetables Exporters',
      descText: [
        'Fruits, vegetables, spices, grains, pulses, and such other crops thrive in India. Due to the large amounts of vegetables produced in India, we can vegetable export from India too. Many vegetables are included in the export of vegetables from India like Onion, Broccoli, Brinjal, Spinach, Cabbage, Green chilis so on, and so forth. Tark Internationals is a leading vegetable importer from India today. We work on the export of Indian vegetables.',
        'At Tark Internationals, we believe that the customer is our king. We, therefore, assist our clients in each step on the way while exporting vegetables in India. Being one of the best vegetable exporters in India, we strictly follow all the health and safety measures of the Government of India. Tark Internationals is the largest and most reliable vegetable exporter in India. Our processes are completely transparent and we make sure that the desired products reach their destination safe, fresh, and on time. If you are looking for vegetable import from India, Tark Internationals is the best choice!',
      ],
      products: [
        {
          name: 'Onion',
          img: '/assets/product/vegetables/onion.jpg',
        },
        {
          name: 'Mushroom',
          img: '/assets/product/vegetables/mushroom.jpg',
        },
        {
          name: 'Broccoli',
          img: '/assets/product/vegetables/broccoli.jpg',
        },
        {
          name: 'Potato',
          img: '/assets/product/vegetables/potato.jpg',
        },
        {
          name: 'Spinach / Palak',
          img: '/assets/product/vegetables/spinach.jpg',
        },
        {
          name: 'Cabbage',
          img: '/assets/product/vegetables/cabbage.jpg',
        },
        {
          name: 'Brinjal',
          img: '/assets/product/vegetables/brinjal.jpg',
        },
        {
          name: 'Cauliflower',
          img: '/assets/product/vegetables/cauliflower.jpg',
        },
        {
          name: 'Drum Stick',
          img: '/assets/product/vegetables/drum-stick.jpg',
        },
        {
          name: 'Lady Finger',
          img: '/assets/product/vegetables/lady-finger.jpg',
        },
        {
          name: 'Green Chilli',
          img: '/assets/product/vegetables/green-chilli.jpg',
        },
        {
          name: 'Doodhi / Bottle Gourd / Lauki',
          img: '/assets/product/vegetables/Bottle-gourd.jpg',
        },
        {
          name: 'Bitter Gourd',
          img: '/assets/product/vegetables/bitter-gourd.jpg',
        },
        {
          name: 'Cucumber',
          img: '/assets/product/vegetables/cucumber.jpg',
        },
        {
          name: 'Bell Pepper',
          img: '/assets/product/vegetables/bell-pepper.jpg',
        },
        {
          name: 'Ridge Gourd / Ghosali',
          img: '/assets/product/vegetables/ridge-gourd.jpg',
        },
        {
          name: 'Pumpkin',
          img: '/assets/product/vegetables/pumpkin.jpg',
        },
        {
          name: 'Lemon',
          img: '/assets/product/vegetables/lemon.jpg',
        },
        {
          name: 'Sweet Potato',
          img: '/assets/product/vegetables/sweet-potato.jpg',
        },
        {
          name: 'Jerusalem',
          img: '/assets/product/vegetables/jerusalem.jpg',
        },
        {
          name: 'Radish',
          img: '/assets/product/vegetables/radish.jpg',
        },
        {
          name: 'Beetroot',
          img: '/assets/product/vegetables/beetroot.jpg',
        },
        {
          name: 'Carrots',
          img: '/assets/product/vegetables/carrots.jpg',
        },
        {
          name: 'Taro',
          img: '/assets/product/vegetables/taro.jpg',
        },
        {
          name: 'Curry Leaves',
          img: '/assets/product/vegetables/curry-leaves.jpg',
        },
        {
          name: 'Coriander',
          img: '/assets/product/vegetables/coriander.jpg',
        },
        {
          name: 'Spring Onion',
          img: '/assets/product/vegetables/spring-onion.jpg',
        },
        {
          name: 'Mint',
          img: '/assets/product/vegetables/mint.jpg',
        },
        {
          name: 'Papal / Hyacinth Bean',
          img: '/assets/product/vegetables/papdi.jpg',
        },
        {
          name: 'Methi / Fenugreek',
          img: '/assets/product/vegetables/methi.jpg',
        },
        {
          name: 'Common Purslane / Paruppu Keerai',
          img: '/assets/product/vegetables/purslane.jpg',
        },
        {
          name: 'Elephant Yam / Suran',
          img: '/assets/product/vegetables/yam.jpg',
        },
      ],
    },
    oilseeds: {
      headerImg: '/assets/product/oilseeds/header.jpg',
      headerText: 'Oilseeds',
      descTitle: 'Indian Oilseeds Exporters',
      descText: [
        'Oilseeds are basically crops which are specially grown to extract oil from its seeds. The major oilseeds in India include soybean, sunflower, Brassica, canola, coconut, oil palm, rapeseed, peanuts, rice, and cotton. Oilseeds export from India is one of the major export areas today. India is known to be one of the largest oilseeds exporters with a large share of export of groundnuts and sesame seeds. Tark Internationals is one of the leading oil seeds importers from India. We are known across the world for the export of oilseeds and such other premium quality food products.',
        'Being one of the most experienced oilseeds exporters in India, we help our clients at every step on the way. From getting clients for your products until your products reach the buyer, Tark Internationals will assist you with everything. We make sure that the export of Indian oilseeds is conducted and completed in an organized manner. If you are looking for oil seeds import from India, we at Tark Internationals are here to assist you!',
      ],
      products: [
        {
          name: 'Sunflowers',
          img: '/assets/product/oilseeds/sunflower.jpg',
        },
        {
          name: 'Soybeans',
          img: '/assets/product/oilseeds/soyabean.jpg',
        },
        {
          name: 'Sesame',
          img: '/assets/product/oilseeds/sesame.jpg',
        },
        {
          name: 'Flax',
          img: '/assets/product/oilseeds/flaxseed.jpg',
        },
        {
          name: 'Safflower',
          img: '/assets/product/oilseeds/safflower-seeds.jpg',
        },
        {
          name: 'Groundnut',
          img: '/assets/product/oilseeds/Groundnut.jpg',
        },
        {
          name: 'Meadowfoam',
          img: '/assets/product/oilseeds/Meadowfoam.jpg',
        },
        {
          name: 'Vernonia',
          img: '/assets/product/oilseeds/Vernonia.jpg',
        },
        {
          name: 'Spring Canola',
          img: '/assets/product/oilseeds/Canolaseeds.jpg',
        },
      ],
    },
    floriculture: {
      headerImg: '/assets/product/floriculture/header.jpg',
      headerText: 'Floriculture',
      descTitle: 'Indian Floriculture Exporters',
      descText: [
        'Floriculture in India primarily means the cultivation of flowers or flower farming. Floriculture export from India includes the export of flowers like roses, Gerbera, Tulips, Carnation, Orchid, Jasmine, Marigold, Aster so on, and so forth. Export of floriculture has to be done with the utmost care and in an organized manner as most of these flowers are delicate and have to be handled carefully. Tark Internationals is a leading floriculture importer from India. We export various varieties of flowers to different regions in the world.',
        'Tark Internationals is known for its high-quality products and the health and safety regulations we strictly follow. Known to be one of the most popular floriculture exporters in India, we have been accredited to TPCI, APEDA, and such other certifications. We make sure that the export of Indian Floriculture is done perfectly from the documentation, finding buyers, until the products reach the destination. We at Tark Internationals understand that timely delivery of the products is an important factor for a floriculture exporter. We thus make sure that your delivery reaches in a timely manner. If you are looking for floriculture import from India, Tark Internationals is here to serve you!',
      ],
      products: [
        {
          name: 'Rose',
          img: '/assets/product/floriculture/rose.jpg',
        },
        {
          name: 'Gerbera',
          img: '/assets/product/floriculture/gerbera.jpg',
        },
        {
          name: 'Tulip',
          img: '/assets/product/floriculture/tulip.jpg',
        },
        {
          name: 'Carnation',
          img: '/assets/product/floriculture/carnation.jpg',
        },
        {
          name: 'Chrysanthemum',
          img: '/assets/product/floriculture/chrysanthemum.jpg',
        },
        {
          name: 'Orchid',
          img: '/assets/product/floriculture/orchid2.jpg',
        },
        {
          name: 'Tuberose',
          img: '/assets/product/floriculture/tuberose.jpg',
        },
        {
          name: 'Gladiolus',
          img: '/assets/product/floriculture/gladiolus.jpg',
        },
        {
          name: 'Anthurium',
          img: '/assets/product/floriculture/anthurium.jpg',
        },
        {
          name: 'Hydrangea',
          img: '/assets/product/floriculture/hydrangea.jpg',
        },
        {
          name: 'Jasmine',
          img: '/assets/product/floriculture/jasmine.jpg',
        },
        {
          name: 'Marigold',
          img: '/assets/product/floriculture/marigold.jpg',
        },
        {
          name: 'Aster',
          img: '/assets/product/floriculture/aster.jpg',
        },
        {
          name: 'Lilium',
          img: '/assets/product/floriculture/lilium.jpg',
        },
        {
          name: 'Crossandra',
          img: '/assets/product/floriculture/crossandra.jpg',
        },
      ],
    },
    herbs: {
      headerImg: '/assets/product/herbs/header.jpg',
      headerText: 'Herbs',
      descTitle: 'Indian Herbs Exporters',
      descText: [
        'Herbs are generally plants with savory or aromatic properties that are used for flavoring food, garnishing dishes, or even medicinal purposes. Herbs in India include Neem, Ashwagandha, Sage, Aloe Vera, Fenugreek, Curry leaves, and so on and so forth. These herbs are also included in the export of herbs business. Tark Internationals is one of the leading herbs importers from India. Our aim at Tark Internationals is to spread the Indian food products and the Indian culture across the world.',
        'We have extensive experience in the field of export of Indian herbs, spices, pulses, grains, fruits, vegetables, and such other products. Being one of the most recognized herbs exporters in India, we see to it that our clients face no issues during herbs export from India. We help our clients to find buyers for their products in the international market and conduct an in-depth analysis of the market so that the clients are well informed. Herbs import from India is a rapidly growing sector of the export market today. If you are looking for an herbs exporter in India, Tark Internationals are here to help you!',
      ],
      products: [
        {
          name: 'Neem',
          img: '/assets/product/herbs/neem.jpg',
        },
        {
          name: 'Ashwagandha',
          img: '/assets/product/herbs/ashwagandha.jpg',
        },
        {
          name: 'Aloe Vera',
          img: '/assets/product/herbs/aloe-vera.jpg',
        },
        {
          name: 'Sage',
          img: '/assets/product/herbs/sage.jpg',
        },
        {
          name: 'Fenugreek',
          img: '/assets/product/herbs/fenugreek.jpg',
        },
        {
          name: 'Giloy',
          img: '/assets/product/herbs/giloy.jpg',
        },
        {
          name: 'Curry Leaves',
          img: '/assets/product/herbs/curry-leaves.jpg',
        },
        {
          name: 'Tulasi',
          img: '/assets/product/herbs/tulasi.jpg',
        },
        {
          name: 'Carom',
          img: '/assets/product/herbs/carom.jpg',
        },
        {
          name: 'Spearmint',
          img: '/assets/product/herbs/spearmint.jpg',
        },
        {
          name: 'Khus',
          img: '/assets/product/herbs/khus-vetiver.jpg',
        },
      ],
    },
    'dry-fruits': {
      headerImg: '/assets/product/dry-fruits/header.jpg',
      headerText: 'Dry Fruits',
      descTitle: 'Indian Dry Fruits Exporters',
      descText: [
        'Dry fruits in India are basically fruits whose water content has been removed almost completely either naturally or by processes like sun drying or specialized dehydrators or dryers. Dry fruits can be eaten in various forms and are known to be powerhouses of nutrients. Dry fruits export from India includes the export of dates, raisins, almonds, cashew, apricot, and so on and so forth. Tark Internationals is one of the best dry fruits importers from India. We work on the export of dry fruits from India to many countries in the world.',
        'We at Tark Internationals hold an extensive experience in the export of Indian dry fruits. As one of the leading dry fruits exporter in India, we make sure that our clients face no issues from documentation to the final delivery of the products. By conducting an in-depth analysis of the international market, we keep our clients well informed about the latest developments and how it may affect their exports. Tark Internationals is one of the most reliable dry fruits exporters and also helps you to find buyers for your products globally. If you are looking for dry fruits import from India, Tark Internationals is here to help you at every step!',
      ],
      products: [
        {
          name: 'Cashew',
          img: '/assets/product/dry-fruits/cashew.jpg',
        },
        {
          name: 'Walnut',
          img: '/assets/product/dry-fruits/walnut.jpg',
        },
        {
          name: 'Almonds',
          img: '/assets/product/dry-fruits/almonds.jpg',
        },
        {
          name: 'Apricot',
          img: '/assets/product/dry-fruits/apricot.jpg',
        },
        {
          name: 'Betel-Nut',
          img: '/assets/product/dry-fruits/betel-nut.jpg',
        },
        {
          name: 'Dates',
          img: '/assets/product/dry-fruits/dates.jpg',
        },
        {
          name: 'Dry-Fig',
          img: '/assets/product/dry-fruits/dry-fig.jpg',
        },
        {
          name: 'Hazelnut',
          img: '/assets/product/dry-fruits/hazelnut.jpg',
        },
        {
          name: 'Pistachio',
          img: '/assets/product/dry-fruits/pista.jpg',
        },
        {
          name: 'Raisens',
          img: '/assets/product/dry-fruits/raisens.jpg',
        },
      ],
    },
    beverages: {
      headerImg: '/assets/product/beverages/header.jpg',
      headerText: 'Beverages',
      descTitle: 'Indian Beverages Exporters',
      descText: [
        'India is known for its two most popular beverages across the world, Tea and Coffee. There are also some other beverages in India that are famous worldwide including Lassi, Sholkadi, Buttermilk so on, and so forth. Beverage export from India is now a growing component of the food export industry from India. Tark Internationals is one of the best beverage importers from India. Export of beverages like tea and coffee and their various types can be done through us.',
        'Being a well-experienced beverage exporter in India, Tark Internationals is well equipped to help you at every stage of the process. Export of Beverages includes documentation, finding buyers, quality tests, and such other processes. Our trained executives at Tark Internationals will assist you with each of these processes involved in the export of Indian beverages. Through our high-quality products, high level of hygiene, and safety we meet international food safety and quality standards. Therefore, Tark Internationals is known to be one of the most reliable beverage exporters. If you are in search of beverages import from India, Tark Internationals is here to serve you!',
      ],
      products: [
        {
          name: 'Tea',
          img: '/assets/product/beverages/tea.jpg',
        },
        {
          name: 'Coffee',
          img: '/assets/product/beverages/coffee-beans.jpg',
        },
      ],
    },
    dehydrated: {
      headerImg: '/assets/product/dehydrated/header.jpg',
      headerText: 'Dehydrated Food Products',
      descTitle: 'Dehydrated Food Products Exporters',
      descText: [
        'The dehydrated products market from India has been growing rapidly. Dehydration is basically the removal of water. Thus, dehydrated products are the products from which moisture content has been removed. The dehydrated products exporters from India export huge quantities of these products abroad each year. The export of dehydrated products includes the export of various products. Dehydrated vegetables are an essential component of the dehydrated products exported from India. Along with veggies, dehydrated fruits are also in great demand globally. Dehydrated dry fruits are widely used in desserts, cereal and such other products. The export of such products is a great opportunity for dehydrated food products exporters to earn good revenues.',
      ],
      products: [
        {
          name: 'Dehydrated Fruits',
          img: '/assets/product/dehydrated/dehydrated-fruits.jpg',
        },
        {
          name: 'Dehydrated Vegetables',
          img: '/assets/product/dehydrated/dehydrated-vegetables.jpg',
        },
      ],
    },
  }

  const categoryData = data[category as keyof typeof data]

  if (!categoryData) {
    return <div>Category not found</div>
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="h-[200px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] w-full max-w-[1200px] mx-auto overflow-hidden"
        style={{
          backgroundImage: `url(${categoryData.headerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* Content */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {categoryData.headerText}
          </h1>
          <div className="flex items-center gap-2 text-white/90">
            <a href="/" className="hover:text-white transition-colors">
              HOME
            </a>
            <span>/</span>
            <span className="uppercase">{categoryData.headerText}</span>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {categoryData.descTitle}
          </h2>
          <div className="space-y-4">
            {categoryData.descText.map((text, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Product Search Component */}
      <ProductSearch
        products={categoryData.products}
        categoryName={categoryData.headerText}
        categorySlug={category}
      />
    </main>
  )
}

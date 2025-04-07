import ProductSlider from '@/components/ProductSlider'
import { Carousel } from 'flowbite-react'
import Image from 'next/image'

const whyChooseUs = [
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
      'Understanding and researching the market by yourself can be expensive and time-consuming. But with Pisum, we will do that for you instead.',
  },
]

const productRange = [
  {
    title: 'Grains And Cereal',
    image: '/assets/beach.jpg',
  },
  {
    title: 'Pulses',
    image: '/assets/beach.jpg',
  },
  {
    title: 'Spices',
    image: '/assets/beach.jpg',
  },
  {
    title: 'Fruits',
    image: '/assets/beach.jpg',
  },
  {
    title: 'Vegetables',
    image: '/assets/beach.jpg',
  },
  {
    title: 'Oilseeds',
    image: '/assets/beach.jpg',
  },
  {
    title: 'Floriculture',
    image: '/assets/beach.jpg',
  },
  {
    title: 'Herbs',
    image: '/assets/beach.jpg',
  },
]

// Add this testimonial data
const testimonial = {
  logo: '/assets/girgit.jpg',
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
const indianMarketBenefits = [
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
const clients = [
  {
    name: 'Box8',
    logo: '/assets/mountain.jpg',
  },
  {
    name: 'CII Foundation',
    logo: '/assets/mountain.jpg',
  },
  {
    name: 'CYDA',
    logo: '/assets/sky.jpg',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Carousel section */}
      <div className="h-[40rem]">
        <Carousel>
          <Image
            src="/assets/header-slides/slider-1.jpg"
            alt="Food Import Export Slider"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            quality={100}
            priority
          />
          <Image
            src="/assets/header-slides/slider-2.jpg"
            alt="Food Import Export Slider"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            quality={100}
            priority
          />
          <Image
            src="/assets/header-slides/slider-3.jpg"
            alt="Food Import Export Slider"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            quality={100}
            priority
          />
        </Carousel>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/leaves.png"
            alt="Pisum Foods Icon"
            width={60}
            height={60}
            className="mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pisum - Global Food Importers & Exporters
          </h1>
          <div className="w-[80px] border-b-4 border-primary mb-12"></div>
          <div className="max-w-7xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              {`As the 'land of spices', India exports tons of various kinds of
              food. In fact, food export from India is a major source of
              revenue. To help your products reach to even the farthest corners
              of the world, Pisum Foods offers you various types of food export
              as well as spices export from India. Being among the leading food
              export companies in India, we ensure our services conform to
              international quality standards.`}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8f8f8] px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/assets/leaves.png"
            alt="Popular Products"
            width={60}
            height={60}
            className="mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Products
          </h1>
          <div className="w-[80px] border-b-4 border-primary mb-12"></div>
        </div>

        <ProductSlider />
      </section>

      <section className="relative w-full bg-[#e8f8df] overflow-hidden">
        <div className="absolute top-6 left-16 opacity-[0.3] pointer-events-none transform -translate-x-1/8">
          <h2
            className="text-[80px] font-black text-gray-[#d4d9cc] whitespace-nowrap font-poppins"
            style={{
              letterSpacing: '-2px',
            }}
          >
            WHY CHOOSE US?
          </h2>
        </div>

        <div className="container mx-auto px-4 pb-24 pt-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {whyChooseUs.map((item) => (
              <div key={item.id} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#c5e4a9] flex items-center justify-center">
                    <span className="text-xl font-semibold text-gray-700">
                      {item.id}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/assets/leaves.png"
            alt="Product Range Icon"
            width={60}
            height={60}
            className="mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Product Range
          </h2>
          <div className="w-[80px] border-b-4 border-primary"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productRange.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
            VIEW MORE
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        {/* <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/assets/leaves.png"
            alt="Video Section Icon"
            width={60}
            height={60}
            className="mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <div className="w-[80px] border-b-4 border-primary"></div>
        </div> */}

        <div className="max-w-7xl mx-auto">
          <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Global Quality Food Exporter from India_Pisum Food Services Pvt Ltd"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      <section
        className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/assets/testimonial2.jpg")',
        }}
      >
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <Image
              src="/assets/leaves.png"
              alt="Testimonials Icon"
              width={60}
              height={60}
              className="mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say!
            </h2>
            <div className="w-[80px] border-b-4 border-primary"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-12">
                <Image
                  src={testimonial.logo}
                  alt="CYDA Logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                {testimonial.title}
              </h3>

              <div className="space-y-6 mb-8">
                {testimonial.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 leading-relaxed italic"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="text-gray-500 mb-4">{testimonial.organization}</p>
              <div className="flex justify-center gap-1 mb-12">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">
                    ★
                  </span>
                ))}
              </div>

              <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-2 rounded-md font-medium transition-colors shadow-md">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/assets/leaves.png"
            alt="Indian Market Icon"
            width={60}
            height={60}
            className="mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why the Indian market is Best?
          </h2>
          <div className="w-[80px] border-b-4 border-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {indianMarketBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 bg-[#e8f8df] rounded-lg hover:bg-[#ddf9d6] transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center mb-16">
          <Image
            src="/assets/leaves.png"
            alt="Our Clients Icon"
            width={60}
            height={60}
            className="mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Clients
          </h2>
          <div className="w-[80px] border-b-4 border-primary"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-8"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

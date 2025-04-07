import Image from 'next/image'

export default function AboutPage() {
  // Add this values data at the top with other data
  const values = [
    {
      icon: '/assets/quality.png',
      title: 'Best Quality Services',
      description:
        'When it comes to food, there must be no compromise. This is why we strive to provide you with the best quality services to ensure that the food stays healthy and fresh.',
    },
    {
      icon: '/assets/experience.png',
      title: 'Vast Experience in Food Trading',
      description:
        'Our vast experience in the food industry is what makes us the ideal choice for your food trading needs.',
    },
    {
      icon: '/assets/certified.png',
      title: 'Trusted & Legally Approved Certified Services',
      description:
        'Being a legally certified food export company in India, our services are transparent and trustworthy.',
    },
    {
      icon: '/assets/commitment.png',
      title: 'Commitment & Time Adherence',
      description:
        'Time is a huge factor when it comes to food. This is why, at Tark Internations, we are committed to ensuring that we get the job done on schedule without fail.',
    },
    {
      icon: '/assets/innovation.png',
      title: 'Innovation',
      description:
        'Using innovative methods and equipment, we ensure that the food is packaged and stored to the best.',
    },
  ]

  return (
    <div className="w-full">
      <section className="container-xxl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
        <div className="w-full max-w-[1200px] h-full mx-auto bg-cover bg-center bg-no-repeat bg-[url('/assets/about-banner.jpg')] px-4">
          <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 h-full w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <h3 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              About Us
            </h3>
            <h4 className="text-white font-bold text-base sm:text-lg md:text-xl uppercase">
              Home / About Us
            </h4>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-8 md:my-16">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            <div className="mx-4 md:mx-16">
              <Image
                src="/assets/about-ship.jpg"
                alt="About Us"
                width={500}
                height={500}
                className="w-full h-[300px] md:h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-5 mx-4 md:me-20">
              <h3 className="text-xl md:text-2xl font-bold uppercase text-center md:text-left">Welcome to Tark Internations</h3>
              <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
                Tark Internations Food Services Private Limited incorporated in May 2015.
                Tark Internations Foods is an initiative by the BTW Group (est. 2011),
                focusing on providing food services. With immense experience in
                the food industry, Tark Internations Foods are a leading exporter of all
                kinds of Indian spices, pulses, grains, Fruits, Vegetables, and
                many more, to a number of destinations around the globe. With
                several partnerships with buyers across multiple countries, we
                have grown to be among the go-to companies for food export from
                India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-20">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 md:px-0">
            {/* Mission */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/assets/about-our-mission.png"
                  alt="Mission"
                  width={100}
                  height={100}
                  className="text-primary w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-[22px] font-bold text-gray-800 mb-2 md:mb-3">
                  OUR MISSION
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To cultivate, manufacture, process and serve best in class
                  food retaining freshness and hygiene, fit for daily
                  consumption.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/assets/about-our-vision.png"
                  alt="Vision"
                  width={100}
                  height={100}
                  className="text-primary w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-[22px] font-bold text-gray-800 mb-2 md:mb-3">
                  OUR VISION
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A globally recognized food company nourishing every day
                  routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add this section after the mission and vision section */}
      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)',
        }}
      >
        <div className="container mx-auto flex justify-center">
          {/* Values Header */}
          <div className="max-w-[1100px] flex flex-col items-center text-center">
            <div className="h-[100px] w-[100px] flex items-center justify-center">
              <Image
                src="/assets/leaves.png"
                alt="Values"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Values</h2>
            <div className="w-16 h-0.5 bg-primary mt-2 mb-16"></div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center ${
                    index === 2 ? 'md:col-span-2 mx-auto max-w-xl' : ''
                  }`}
                >
                  <div className="max-h-[100px] max-w-[100px] flex items-center justify-center">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={100}
                      height={100}
                      className="mb-4 object-contain"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
          <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex items-center justify-center">
            <Image
              src="/assets/leaves.png"
              alt="Who We Are"
              width={80}
              height={80}
              className="object-contain w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Who We Are?
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-primary mt-2 mb-6 md:mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-4xl px-4 text-sm md:text-base">
            We are a group of young and enthusiastic individuals who have come
            together for a single goal of being a global leader in food trading.
            We believe that India is known for our spices and food export is key
            to our country&apos;s growth. Prioritizing in exporting Indian
            spices and other food products, we are also analysts and researchers
            who possess an up to date global food market database to help you.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
          <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] flex items-center justify-center">
            <Image
              src="/assets/leaves.png"
              alt="What We Do"
              width={80}
              height={80}
              className="object-contain w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What We Do?
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-primary mt-2 mb-6 md:mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-4xl px-4 text-sm md:text-base">
            We provide customers with the service of spices export from India.
            But we also understand the demand for Indian food, which is why we
            also offer all kinds of food export from India. From helping you
            find the right buyers to packaging your food and sending it off, our
            complete services will ensure that you face absolutely no
            difficulties. Be it Europe, middle-east, the Americas, or wherever
            you want the food to be exported, we make sure that the job is done.
          </p>
        </div>
      </section>
    </div>
  )
}

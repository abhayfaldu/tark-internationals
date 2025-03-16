'use client'
import Image from 'next/image'

const CertificatesPage = () => {
  const certificates = [
    { title: 'APEDA', image: '/assets/certificates/apeda.jpg' },
    { title: 'FIEO', image: '/assets/certificates/fieo.jpg' },
    {
      title: 'Certificate of Incorporation',
      image: '/assets/certificates/incorporation.jpg',
    },
    { title: 'GST', image: '/assets/certificates/gst.jpg' },
    { title: 'MSME', image: '/assets/certificates/msme.jpg' },
    { title: 'IEC', image: '/assets/certificates/iec.jpg' },
    { title: 'IEI', image: '/assets/certificates/iei.jpg' },
    {
      title: 'Tea Board License',
      image: '/assets/certificates/tea-board.jpg',
    },
    {
      title: 'Coconut Development Board',
      image: '/assets/certificates/coconut-board.jpg',
    },
    {
      title: 'Coffee Board',
      image: '/assets/certificates/coffee-board.jpg',
    },
    {
      title: 'TRADEMARK-REGISTRATION-CLASS-29',
      image: '/assets/certificates/trademark-29.jpg',
    },
    {
      title: 'TRADEMARK-REGISTRATION-CLASS-31',
      image: '/assets/certificates/trademark-31.jpg',
    },
    { title: 'ISO 9001:2015', image: '/assets/certificates/iso.jpg' },
    {
      title: 'FSSAI License',
      image: '/assets/certificates/fssai.jpg',
    },
    {
      title: 'EXIM Membership of the India Chamber of Commerce',
      image: '/assets/certificates/exim.jpg',
    },
    {
      title: 'Dun & Bradstreet',
      image: '/assets/certificates/dun.jpg',
    },
    {
      title: 'Spices Board',
      image: '/assets/certificates/spices-board.jpg',
    },
    { title: 'TPCI', image: '/assets/certificates/tpci.jpg' },
  ]

  return (
    <div className="w-full">
      <section className="container-xxl h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]">
        <div className="w-full max-w-[1200px] h-full mx-auto bg-cover bg-center bg-no-repeat bg-[url('/assets/certificate-banner.jpg')]">
          <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 h-full w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 backdrop-brightness-75">
            <h3 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Certificates
            </h3>
            <h4 className="text-white font-bold text-base sm:text-lg md:text-xl uppercase">
              Home / Certificates
            </h4>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <Image
                src="/assets/leaves.png"
                alt="Leaf Icon"
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
            <h2 className="text-[#4A4A4A] text-4xl font-bold mb-8 relative">
              Certifications
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-[#8DC63F]"></div>
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              When it comes to food handling and export, maintaining high levels
              of hygiene, quality and safety are crucial. This is why, at Pisum,
              we meet international food safety and quality standards through
              various quality checks and following strict protocols throughout
              the process. This has allowed us to be accredited to a number of
              quality and food safety certifications.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Being accredited to TPCI, APEDA, and other certifications, we make
              sure the entire process meets the top quality and food safety
              standards. Be it the food handling, packaging, or processing, we
              make sure that everything is done in accordance with the stringent
              protocols. We are an Indian government-certified exporter of food
              products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="p-4 text-center bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-900">
                    {cert.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CertificatesPage

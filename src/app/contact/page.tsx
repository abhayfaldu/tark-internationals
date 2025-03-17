import Image from 'next/image'

type CountryCode = {
  code: string;
  country: string;
};

export default function ContactPage() {
  const countryCodes: CountryCode[] = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA' },
    { code: '+1', country: 'Canada' },
    { code: '+44', country: 'UK' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+61', country: 'Australia' },
    { code: '+7', country: 'Russia' },
    { code: '+39', country: 'Italy' },
    { code: '+34', country: 'Spain' },
    { code: '+82', country: 'South Korea' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'Singapore' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+55', country: 'Brazil' },
    { code: '+52', country: 'Mexico' },
    { code: '+27', country: 'South Africa' },
    { code: '+47', country: 'Norway' },
    { code: '+46', country: 'Sweden' },
    { code: '+31', country: 'Netherlands' },
    { code: '+41', country: 'Switzerland' },
    { code: '+32', country: 'Belgium' },
    { code: '+30', country: 'Greece' },
    { code: '+90', country: 'Turkey' },
    { code: '+48', country: 'Poland' },
    { code: '+420', country: 'Czech Republic' },
    { code: '+43', country: 'Austria' },
    { code: '+351', country: 'Portugal' },
    { code: '+40', country: 'Romania' },
    { code: '+380', country: 'Ukraine' },
    { code: '+62', country: 'Indonesia' },
    { code: '+63', country: 'Philippines' },
    { code: '+64', country: 'New Zealand' },
    { code: '+92', country: 'Pakistan' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+98', country: 'Iran' },
    { code: '+20', country: 'Egypt' },
    { code: '+212', country: 'Morocco' },
    { code: '+216', country: 'Tunisia' },
    { code: '+234', country: 'Nigeria' },
    { code: '+254', country: 'Kenya' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+256', country: 'Uganda' },
    { code: '+233', country: 'Ghana' },
    { code: '+502', country: 'Guatemala' },
    { code: '+503', country: 'El Salvador' },
    { code: '+504', country: 'Honduras' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+507', country: 'Panama' },
    { code: '+509', country: 'Haiti' },
    { code: '+593', country: 'Ecuador' },
    { code: '+595', country: 'Paraguay' },
    { code: '+598', country: 'Uruguay' },
    { code: '+56', country: 'Chile' },
    { code: '+54', country: 'Argentina' },
    { code: '+372', country: 'Estonia' },
    { code: '+371', country: 'Latvia' },
    { code: '+370', country: 'Lithuania' },
    { code: '+386', country: 'Slovenia' },
    { code: '+385', country: 'Croatia' },
    { code: '+381', country: 'Serbia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+383', country: 'Kosovo' },
    { code: '+389', country: 'North Macedonia' },
    { code: '+356', country: 'Malta' },
    { code: '+357', country: 'Cyprus' },
    { code: '+372', country: 'Estonia' },
    { code: '+423', country: 'Liechtenstein' },
    { code: '+674', country: 'Nauru' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+682', country: 'Cook Islands' }
  ];

  const sortCountryCodes = (countries: CountryCode[]): CountryCode[] => {
    return countries.sort((a, b) => a.country.localeCompare(b.country));
  };

  return (
    <div>
      {/* Header Section */}
      <section className="container-xxl h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]">
        <div className="w-full max-w-[1200px] h-full mx-auto bg-cover bg-center bg-no-repeat bg-[url('/assets/contact-banner.jpg')]">
          <div className="flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 h-full w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <h3 className="text-white font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Contact Us
            </h3>
            <h4 className="text-white font-bold text-base sm:text-lg md:text-xl uppercase">
              Home / Contact Us
            </h4>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Registered Address */}
          <div>
            <h2 className="text-2xl font-bold mb-6">REGISTERED ADDRESS:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">📍</div>
                <p>
                  33/15, Prashant Bunglow,
                  <br />
                  Opp: Garware College,
                  <br />
                  Karve Road, Pune 411004 India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div>✉️</div>
                <p>inquiry@pisumfoods.com</p>
              </div>
              <div className="flex items-center gap-3">
                <div>📞</div>
                <p>9765758899 / 72815858</p>
              </div>
            </div>
          </div>

          {/* Connect With Us Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">CONNECT WITH US</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
                    {sortCountryCodes(countryCodes).map((item) => (
                      <option key={item.code}>
                        {item.country} ({item.code})
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message *"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#95C11F] text-white py-3 rounded-md hover:bg-[#86ae1b] transition duration-300"
              >
                SEND ENQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Our Branches Section */}
      <section className="bg-gradient-to-r from-[#F5FCFF] to-[#D7FFFE] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Image
                src="/assets/leaves.png"
                alt="Leaf Icon"
                width={60}
                height={60}
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-3xl font-bold">Our Branches</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pune Branch */}
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4">PUNE</h3>
              <p className="text-gray-600">
                33/15, Prashant Bunglow, Opp:Garware College, Karve Road Pune
                411004 India
              </p>
            </div>

            {/* Mumbai Branch */}
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4">MUMBAI</h3>
              <p className="text-gray-600">
                282, Khandke Building, Office No. 21, 2nd floor, Shahid Bhagat
                Singh Road, Fort Market, Near Sher-e-Punjab Hotel, Mumbai- 400
                001
              </p>
            </div>

            {/* Bangalore Branch */}
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4">BANGALORE</h3>
              <p className="text-gray-600">
                No. 121, First Floor, Brigade Gardens, No. 19, Church Street,
                Brigade Road, Bangalore 560001
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import Image from 'next/image';
import { useState } from 'react';

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
    { code: '+423', country: 'Liechtenstein' },
    { code: '+674', country: 'Nauru' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+682', country: 'Cook Islands' }
  ];

  const sortCountryCodes = (countries: CountryCode[]): CountryCode[] => {
    return countries.sort((a, b) => a.country.localeCompare(b.country));
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    // Extract the code part from the string like "India (+91)"
    const codeMatch = selectedValue.match(/\(([^)]+)\)/);
    const code = codeMatch ? codeMatch[1] : '+91';
    setFormData((prev) => ({ ...prev, countryCode: code }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        company: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#F5FCFF] to-[#D7FFFE] py-16 md:py-24">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Please fill out the form below or
              contact us directly using the information provided.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">📍</div>
                    <p>
                      Shop No. 8/1, Block No. 129,
                      <br />
                      Rajdeep Society, Street No. 2,
                      <br />
                      Rajkot - 360004, India
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>✉️</div>
                    <p>hello@tarkinternations.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div>📞</div>
                    <p>+91 9876543210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect With Us Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">CONNECT WITH US</h2>

              {success ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Thank you for your message! We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      <p>{error}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <select
                          name="countryCode"
                          onChange={handleCountryCodeChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
                        >
                          {sortCountryCodes(countryCodes).map((item) => (
                            <option key={`${item.code}-${item.country}`}>
                              {item.country} ({item.code})
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile Number *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message *"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#95C11F] text-white py-3 rounded-md hover:bg-[#86ae1b] transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? 'SENDING...' : 'SEND ENQUIRY'}
                    </button>
                  </form>
                </>
              )}
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto">
            {/* Rajkot Branch */}
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4">RAJKOT</h3>
              <p className="text-gray-600">
                Shop No. 8/1, Block No. 129, Rajdeep Society, Street No. 2,
                <br />
                Rajkot - 360004, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

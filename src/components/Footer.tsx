'use client'

// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import SubmitRequirements from './SubmitRequirements'

const information = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Certificates', href: '/certificates' },
  { title: 'Products Range', href: '/product' },
  { title: 'Contact Us', href: '/contact' },
]

const productsRange = [
  { title: 'Grains And Cereal', href: '/product/grains_and_cereal' },
  { title: 'Pulses', href: '/product/pulses' },
  { title: 'Spices', href: '/product/spices' },
  { title: 'Fruits', href: '/product/fruits' },
  { title: 'Vegetables', href: '/product/vegetables' },
  { title: 'Oilseeds', href: '/product/oilseeds' },
  { title: 'Floriculture', href: '/product/floriculture' },
  { title: 'Herbs', href: '/product/herbs' },
  { title: 'Dry Fruits', href: '/product/dry-fruits' },
  { title: 'Beverages', href: '/product/beverages' },
  { title: 'Dehydrated Products', href: '/product/dehydrated' },
]

const branches = [
  { title: 'Rajkot' },
]

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-gray-300">
      {/* Submit Requirements Section */}
      <SubmitRequirements />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Information
            </h3>
            <ul className="space-y-2">
              {information.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Products Range
            </h3>
            <ul className="space-y-2">
              {productsRange.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Branches</h3>
            <ul className="space-y-2">
              {branches.map((item) => (
                <li key={item.title}>
                  <div className="hover:text-primary">
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Stay Connected
            </h3>
            <div className="space-y-4">
              <p>
                <strong>Registered address:</strong>
                <br />
                Shop No. 8/1, Block No. 129,
                <br />
                Rajdeep Society, Street No. 2,
                <br />
                Rajkot - 360004, India
              </p>
              <p>
                <strong>Phone Number:</strong>
                <br />
                +91 9974531629 / +91 8849098512
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                hello@tarkinternationals.com
              </p>
            </div>

            {/* <div className="flex gap-4 mt-6">
              <Link href="#" className="text-white hover:text-primary">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Instagram className="w-6 h-6" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>Copyright © 2025 Tark Internations</p>
            <p>Designed by Tark Internations</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

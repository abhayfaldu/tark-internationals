'use client'

import { Dropdown, Navbar } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarComponent = () => {
  const pathname = usePathname()

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/product' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <Navbar fluid className="px-0 py-3 flex-wrap items-center">
          <div className="flex items-center">
            <Navbar.Brand href="/" as={Link} className="mr-0">
              <Image
                src="/assets/logo.jpg"
                className="mr-3 rounded-full object-contain"
                alt="Logo"
                width={50}
                height={50}
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800">
                Tark International
              </span>
            </Navbar.Brand>
          </div>

          <div className="flex md:order-2 ml-auto md:ml-0">
            <Navbar.Toggle />
          </div>

          <Navbar.Collapse className="md:flex md:items-center md:justify-end md:w-auto md:basis-0 md:grow">
            <ul className="flex flex-col mt-4 md:mt-0 md:flex-row md:space-x-2 lg:space-x-6 md:items-center">
              {navLinks.map((link) =>
                link.label === 'Products' ? (
                  <li key={link.href}>
                    <Dropdown
                      arrowIcon={true}
                      inline
                      label={
                        <div
                          className={`text-gray-700 hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md cursor-pointer ${
                            pathname.startsWith('/product')
                              ? 'text-primary font-medium'
                              : ''
                          }`}
                        >
                          {link.label}
                        </div>
                      }
                      className="w-full md:w-auto"
                    >
                      <div className="py-2">
                        <Dropdown.Item
                          href="/product/grains-and-cereal"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Grains and Cereal
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/pulses"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Pulses
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/spices"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Spices
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/fruits"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Fruits
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/vegetables"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Vegetables
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/oilseeds"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Oilseeds
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/floriculture"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Floriculture
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/herbs"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Herbs
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/dry-fruits"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Dry Fruits
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/beverages"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Beverages
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="/product/dehydrated"
                          as={Link}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          Dehydrated Products
                        </Dropdown.Item>
                      </div>
                    </Dropdown>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 rounded-md ${
                        pathname === link.href ? 'text-primary font-medium' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  )
}

export default NavbarComponent

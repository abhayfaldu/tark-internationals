'use client'

import { Dropdown, Navbar } from 'flowbite-react'
import Image from 'next/image'

const NavbarComponent = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Certificates', href: '/certificates' },
    // { label: 'Blogs', href: '/blogs' },
    { label: 'Contact Us', href: '/contact' },
  ]

  return (
    <div className="sticky top-0 z-50">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://tarkinternational.com/">
          <Image
            src="/assets/logo.jpg"
            className="mr-3 rounded-full object-contain"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Tark International
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navLinks.map((link) =>
            link.label === 'Products' ? (
              <Dropdown
                key={link.href}
                arrowIcon={false}
                inline
                label={<div className="text-gray-800">{link.label}</div>}
              >
                <Dropdown.Item href="/product/grains-and-cereal">
                  Grains and Cereal
                </Dropdown.Item>
                <Dropdown.Item href="/product/pulses">Pulses</Dropdown.Item>
                <Dropdown.Item href="/product/spices">Spices</Dropdown.Item>
                <Dropdown.Item href="/product/fruits">Fruits</Dropdown.Item>
                <Dropdown.Item href="/product/vegetables">
                  Vegetables
                </Dropdown.Item>
                <Dropdown.Item href="/product/oilseeds">Oilseeds</Dropdown.Item>
                <Dropdown.Item href="/product/floriculture">
                  Floriculture
                </Dropdown.Item>
                <Dropdown.Item href="/product/herbs">Herbs</Dropdown.Item>
                <Dropdown.Item href="/product/dry-fruits">
                  Dry Fruits
                </Dropdown.Item>
                <Dropdown.Item href="/product/beverages">
                  Beverages
                </Dropdown.Item>
                <Dropdown.Item href="/product/dehydrated">
                  Dehydrated Products
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Navbar.Link
                href={link.href}
                active={window.location.pathname === link.href}
                key={link.href}
              >
                {link.label}
              </Navbar.Link>
            )
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent

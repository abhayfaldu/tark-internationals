'use client'

import { Dropdown, Navbar } from 'flowbite-react'
import Image from 'next/image'

const NavbarComponent = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Blogs', href: '/blogs' },
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
                label={link.label}
              >
                <Dropdown.Item href="/products/grains-and-cereal">
                  Grains and Cereal
                </Dropdown.Item>
                <Dropdown.Item href="/products/pulses">Pulses</Dropdown.Item>
                <Dropdown.Item href="/products/spices">Spices</Dropdown.Item>
                <Dropdown.Item href="/products/fruits">Fruits</Dropdown.Item>
                <Dropdown.Item href="/products/vegetables">
                  Vegetables
                </Dropdown.Item>
                <Dropdown.Item href="/products/oilseeds">Oilseeds</Dropdown.Item>
                <Dropdown.Item href="/products/floriculture">
                  Floriculture
                </Dropdown.Item>
                <Dropdown.Item href="/products/herbs">Herbs</Dropdown.Item>
                <Dropdown.Item href="/products/dry-fruits">
                  Dry Fruits
                </Dropdown.Item>
                <Dropdown.Item href="/products/beverages">
                  Beverages
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

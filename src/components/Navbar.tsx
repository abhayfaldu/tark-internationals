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
              label={
                <Navbar.Link href={''} active={false}>
                  {link.label}
                </Navbar.Link>
              }
            >
              <Dropdown.Item>Grains and Cereal</Dropdown.Item>
              <Dropdown.Item>Pulses</Dropdown.Item>
              <Dropdown.Item>Spices</Dropdown.Item>
              <Dropdown.Item>Fruits</Dropdown.Item>
              <Dropdown.Item>Vegetables</Dropdown.Item>
              <Dropdown.Item>Oilseeds</Dropdown.Item>
              <Dropdown.Item>Floriculture</Dropdown.Item>
              <Dropdown.Item>Herbs</Dropdown.Item>
              <Dropdown.Item>Dry Fruits</Dropdown.Item>
              <Dropdown.Item>Beverages</Dropdown.Item>
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
  )
}

export default NavbarComponent

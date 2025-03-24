import Footer from '@/components/Footer'
import NavbarComponent from '@/components/Navbar'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Flowbite } from 'flowbite-react'
import type { Metadata } from 'next'
import { Manrope, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: 'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
      rounded: {
        on: 'rounded',
        off: '',
      },
      bordered: {
        on: 'border',
        off: '',
      },
      inner: {
        base: 'mx-auto flex flex-wrap items-center justify-between',
        fluid: {
          on: '',
          off: 'container',
        },
      },
    },
    brand: {
      base: 'flex items-center',
    },
    collapse: {
      base: 'w-full md:block md:w-auto',
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-2 lg:space-x-4 md:items-center md:text-sm md:font-medium',
      hidden: {
        on: 'hidden',
        off: '',
      },
    },
    link: {
      base: 'block py-2 pr-4 pl-3 md:p-0',
      active: {
        on: 'bg-primary text-white dark:text-white md:bg-transparent md:text-primary',
        off: 'border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: '',
      },
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
      icon: 'h-6 w-6 shrink-0',
    },
  },
  dropdown: {
    floating: {
      base: 'z-10 w-fit rounded divide-y divide-gray-100 shadow',
      content: 'py-1 text-sm text-gray-700',
      target: 'w-fit transition duration-200',
      item: {
        base: 'block text-sm py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'mr-2 h-4 w-4',
      },
    },
  },
}

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Pisum Foods',
  description: 'Global Food Importers & Exporters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${manrope.variable} antialiased`}
      >
        <Flowbite theme={{ theme: customTheme }}>
          <NavbarComponent />
          {children}
          <Footer />
        </Flowbite>
      </body>
    </html>
  )
}

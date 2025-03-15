import NavbarComponent from '@/components/Navbar'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Flowbite } from 'flowbite-react'
import type { Metadata } from 'next'
import { Manrope, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Footer from '@/components/Footer'

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    link: {
      base: 'block py-2 pl-3 pr-4 md:p-0',
      active: {
        on: 'bg-primary text-white dark:text-white md:bg-transparent md:text-primary',
        off: 'border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: '',
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

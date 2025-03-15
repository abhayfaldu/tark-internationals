import flowbite from 'flowbite-react/tailwind'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#85BD02',
      },
      fontSize: {
        base: '16px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'about-banner': "url('/assets/about-banner.jpg')",
      },
    },
  },
  plugins: [flowbite.plugin()],
}
export default config

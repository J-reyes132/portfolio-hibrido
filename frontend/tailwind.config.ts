import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface': '#fcf9f8',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#434656',
        'surface-container-low': '#f6f3f2',
        'surface-container': '#f0edec',
        'surface-container-high': '#ebe7e7',
        'surface-container-highest': '#e5e2e1',
        'surface-container-lowest': '#ffffff',
        'primary': '#f59e0b',
        'primary-container': '#fbbf24',
        'secondary': '#5d5e64',
        'secondary-container': '#dfdfe6',
        'outline': '#737688',
        'outline-variant': '#c3c5d9',
      },
      fontFamily: {
        'headline': ['Manrope', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
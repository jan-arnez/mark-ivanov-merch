import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'fira-sans': 'var(--fira-sans)',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      aspectRatio: {
        '4/5': '4 / 5',
      },
      container: {
        center: true,
      },

      colors: {
        'brand-blue': 'var(--brand-blue)',
        'brand-red': 'var(--brand-red)',
        'brand-gold': 'var(--brand-gold)',
      },
    },
  },
  plugins: [],
};
export default config;

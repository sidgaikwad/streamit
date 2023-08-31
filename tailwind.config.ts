const plugin = require('tailwindcss/plugin')
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: {
      matchUtilities: MatchUtilities<string>;
      theme: Theme;
    }) {

      interface TextShadow {
        [key: string]: string;
      }

      const textShadows: TextShadow = theme('textShadow');

      matchUtilities(
        {
          'text-shadow': (value: keyof TextShadow) => ({
            textShadow: textShadows[value],  
          }),
        },
        { values: textShadows }
      );
    }
  ],
}
export default config

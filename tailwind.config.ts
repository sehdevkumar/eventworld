import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
     screens: {
      'mobile': 'max(320px,400px)',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'large-screen': '1920px',
      'slide-radius':'1px solid red'
    },
  },
  plugins: [],
} satisfies Config;

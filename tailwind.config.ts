import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'masque': ['Masque', 'sans-serif'],
        'Switzer-Regular': ['Switzer-Regular', 'sans-serif'],
        'Switzer-Medium': ['Switzer-Medium', 'sans-serif'],
        'Switzer-Bold': ['Switzer-Bold', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'Inter-Bold': ['Inter-Bold', 'sans-serif'],
      },
      colors:
          {
            "custom-gray": "#222222",
            "custom-white": "#ece6e6",
            "custom-white2": "#ffffff",
          }
    },
  },
  plugins: [],
};
export default config;

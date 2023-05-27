/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
        sm: "320px",
        mm: "375px",
        ml: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "2560px",
      },
    extend: {
      colors: {
        accent: "var(--accent-color)",
        accentLow: "var(--accent-low-op)",
        navy: "var(--acc-navy)",
        lightNavy: "var(--acc-lightNavy)",
        lightestNavy: "var(--acc-lightestNavy)",
        acSlate: "var(--acc-acSlate)",
        lightSlate: "var(--acc-lightSlate)",
        lightestSlate: "var(--acc-lightestSlate)",
        acWhite: "var(--acc-ac-white)",
        grn: "var(--acc-grn)",
        t2: "#2e2e3f",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gemini-blue': '#4A90E2',
        'gemini-dark-gray': '#212529',
        'gemini-light-gray-bg': '#343A40',
        'gemini-border-gray': '#EAECEF',
        'gemini-inspector-bg': '#F8F9FA',
        'gemini-preview-border': '#DCDFE4',
      },
    },
  },
  plugins: [],
};
export default config;

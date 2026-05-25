/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1E40AF', // A deep blue for primary actions and branding
        'brand-secondary': '#BFDBFE', // A lighter blue for accents or backgrounds
        'exception-danger': '#DC2626', // A clear red for critical exceptions
        'exception-warning': '#F59E0B', // An orange for warning-level exceptions
        'exception-info': '#3B82F6', // A blue for informational exceptions
        'exception-success': '#22C55E', // A green for resolved or good status
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
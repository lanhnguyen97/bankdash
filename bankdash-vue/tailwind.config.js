/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        page: '#f5f7fa',
        ink: {
          DEFAULT: '#343c6a',
          muted: '#718ebf',
          subtle: '#b1b1b1',
        },
        brand: {
          DEFAULT: '#1814f3',
          accent: '#2d60ff',
          teal: '#16dbcc',
        },
        line: '#dfeaf2',
        pie: {
          dark: '#343c6a',
          orange: '#fc7900',
          pink: '#fa00ff',
          blue: '#1814f3',
        },
        tx: {
          deposit: '#fff5d9',
          paypal: '#e7edff',
          wilson: '#dcfaf8',
          plus: '#41d4a8',
          minus: '#ff4b4a',
        },
        cardGradFrom: '#4c49ed',
        cardGradTo: '#0a06f4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        lato: ['Lato', 'system-ui', 'sans-serif'],
        mont: ['Mont', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '12px',
        xs: '13px',
        sm: '14px',
        base: '15px',
        md: '16px',
        lg: '17px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '22px',
        '4xl': '25px',
        '5xl': '28px',
      },
      borderRadius: {
        card: '25px',
        pill: '30px',
        avatar: '50px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', '"Space Grotesk"', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        night: {
          950: '#05070d',
          900: '#0b1020',
          800: '#121a2e',
          700: '#1a233a',
        },
        aurora: {
          400: '#5de6ff',
          500: '#2bd9ff',
          600: '#00c2ff',
        },
        ember: {
          400: '#f2b66f',
          500: '#f59e0b',
        },
        leaf: {
          400: '#6ee7b7',
          500: '#34d399',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(45, 212, 255, 0.2)',
        card: '0 20px 60px rgba(5, 10, 20, 0.45)',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 10% 10%, rgba(93, 230, 255, 0.18), transparent 40%), radial-gradient(circle at 80% 20%, rgba(110, 231, 183, 0.12), transparent 40%), radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.12), transparent 40%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(10%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
        scan: 'scan 10s ease-in-out infinite',
        pulseSoft: 'pulseSoft 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


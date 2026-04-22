/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
        'ink-dark': '#0F0F13',
        'ink-pink': '#FF1493',
        'ink-gold': '#FFD700',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  		},
  		boxShadow: {
  			'neon-pink': '0 0 20px -5px rgba(255, 20, 147, 0.5)',
        'neon-gold': '0 0 25px -5px rgba(255, 215, 0, 0.4)',
  		},
  		keyframes: {
  			'slot-spin': {
  				'0%': { transform: 'translateY(0)' },
  				'100%': { transform: 'translateY(-50%)' }
  			},
        'glow-pulse': {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' }
        }
  		},
  		animation: {
  			'slot-spin': 'slot-spin 0.1s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}
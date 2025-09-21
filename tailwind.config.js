/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'gradient-slide': 'gradient-slide 15s linear infinite',
        'blob': 'blob 6s infinite',
        'border-rotate': 'border-rotate 8s linear infinite',
        'border-pulse': 'border-pulse 4s ease-in-out infinite',
        'circle-1': 'circle-1 25s linear infinite',
        'circle-2': 'circle-2 28s linear infinite',
        'circle-3': 'circle-3 30s linear infinite',
        'circle-4': 'circle-4 27s linear infinite',
        'circle-5': 'circle-5 29s linear infinite',
        'circle-6': 'circle-6 22s linear infinite',
        'circle-7': 'circle-7 24s linear infinite',
        'circle-8': 'circle-8 26s linear infinite',
        'circle-9': 'circle-9 23s linear infinite',
        'circle-10': 'circle-10 25s linear infinite',
        'circle-11': 'circle-11 18s linear infinite',
        'circle-12': 'circle-12 20s linear infinite',
        'circle-13': 'circle-13 19s linear infinite',
        'circle-14': 'circle-14 21s linear infinite',
        'circle-15': 'circle-15 17s linear infinite',
        'circle-16': 'circle-16 15s linear infinite',
        'circle-17': 'circle-17 16s linear infinite',
        'circle-18': 'circle-18 14s linear infinite',
        'circle-19': 'circle-19 18s linear infinite',
        'circle-20': 'circle-20 17s linear infinite',
      },
      keyframes: {
        'gradient-slide': {
          '0%': {
            'background-position': '0% 50%',
          },
          '100%': {
            'background-position': '200% 50%',
          }
        },
        'circle-1': {
          '0%': {
            'transform': 'translate(-50%, -50%) scale(1)',
            'top': '0%',
            'left': '0%',
            'opacity': 0.8,
          },
          '100%': {
            'transform': 'translate(150%, 100%) scale(0.5)',
            'top': '100%',
            'left': '100%',
            'opacity': 0.2,
          }
        },
        'circle-2': {
          '0%': {
            'transform': 'translate(0%, 0%) scale(0.5)',
            'top': '100%',
            'left': '50%',
            'opacity': 0.2,
          },
          '100%': {
            'transform': 'translate(-100%, -150%) scale(1)',
            'top': '0%',
            'left': '0%',
            'opacity': 0.8,
          }
        },
        'circle-3': {
          '0%': {
            'transform': 'translate(0%, 0%) scale(0.8)',
            'top': '50%',
            'left': '100%',
            'opacity': 0.5,
          },
          '100%': {
            'transform': 'translate(-200%, 0%) scale(0.3)',
            'top': '20%',
            'left': '0%',
            'opacity': 0.3,
          }
        },
        'circle-4': {
          '0%': {
            'transform': 'translate(0%, 0%) scale(0.3)',
            'top': '0%',
            'left': '50%',
            'opacity': 0.3,
          },
          '100%': {
            'transform': 'translate(50%, 200%) scale(0.8)',
            'top': '100%',
            'left': '80%',
            'opacity': 0.5,
          }
        },
        'circle-5': {
          '0%': {
            'transform': 'translate(0%, 0%) scale(0.5)',
            'top': '80%',
            'left': '0%',
            'opacity': 0.4,
          },
          '100%': {
            'transform': 'translate(200%, -100%) scale(1)',
            'top': '20%',
            'left': '100%',
            'opacity': 0.6,
          }
        },
        'circle-6': {
          '0%': { 'transform': 'translate(-100%, -100%) scale(0.8)', 'top': '100%', 'left': '100%', 'opacity': 0.3 },
          '100%': { 'transform': 'translate(200%, 200%) scale(0.4)', 'top': '0%', 'left': '0%', 'opacity': 0.7 }
        },
        'circle-7': {
          '0%': { 'transform': 'translate(0%, -200%) scale(0.6)', 'top': '0%', 'left': '30%', 'opacity': 0.4 },
          '100%': { 'transform': 'translate(-100%, 100%) scale(1)', 'top': '100%', 'left': '70%', 'opacity': 0.2 }
        },
        'circle-8': {
          '0%': { 'transform': 'translate(100%, 0%) scale(0.3)', 'top': '50%', 'left': '100%', 'opacity': 0.5 },
          '100%': { 'transform': 'translate(-200%, -50%) scale(0.7)', 'top': '30%', 'left': '0%', 'opacity': 0.3 }
        },
        'circle-9': {
          '0%': { 'transform': 'translate(50%, 100%) scale(0.5)', 'top': '100%', 'left': '40%', 'opacity': 0.6 },
          '100%': { 'transform': 'translate(-150%, -200%) scale(0.9)', 'top': '0%', 'left': '60%', 'opacity': 0.2 }
        },
        'circle-10': {
          '0%': { 'transform': 'translate(-100%, 50%) scale(0.7)', 'top': '20%', 'left': '0%', 'opacity': 0.3 },
          '100%': { 'transform': 'translate(200%, -150%) scale(0.4)', 'top': '80%', 'left': '100%', 'opacity': 0.5 }
        },
        'circle-11': {
          '0%': { 'transform': 'translate(0%, 0%) scale(0.4)', 'top': '0%', 'left': '20%', 'opacity': 0.4 },
          '100%': { 'transform': 'translate(150%, 200%) scale(0.8)', 'top': '100%', 'left': '80%', 'opacity': 0.2 }
        },
        'circle-12': {
          '0%': { 'transform': 'translate(100%, -100%) scale(0.6)', 'top': '100%', 'left': '100%', 'opacity': 0.5 },
          '100%': { 'transform': 'translate(-200%, 100%) scale(0.3)', 'top': '0%', 'left': '0%', 'opacity': 0.3 }
        },
        'circle-13': {
          '0%': { 'transform': 'translate(-50%, 150%) scale(0.5)', 'top': '30%', 'left': '10%', 'opacity': 0.4 },
          '100%': { 'transform': 'translate(150%, -100%) scale(0.7)', 'top': '70%', 'left': '90%', 'opacity': 0.6 }
        },
        'circle-14': {
          '0%': { 'transform': 'translate(200%, 0%) scale(0.3)', 'top': '60%', 'left': '100%', 'opacity': 0.3 },
          '100%': { 'transform': 'translate(-100%, -150%) scale(0.6)', 'top': '40%', 'left': '0%', 'opacity': 0.5 }
        },
        'circle-15': {
          '0%': { 'transform': 'translate(0%, -100%) scale(0.4)', 'top': '100%', 'left': '50%', 'opacity': 0.4 },
          '100%': { 'transform': 'translate(-150%, 200%) scale(0.8)', 'top': '0%', 'left': '30%', 'opacity': 0.2 }
        },
        'circle-16': {
          '0%': { 'transform': 'translate(-200%, -200%) scale(0.7)', 'top': '80%', 'left': '80%', 'opacity': 0.3 },
          '100%': { 'transform': 'translate(150%, 150%) scale(1)', 'top': '20%', 'left': '20%', 'opacity': 0.5 }
        },
        'circle-17': {
          '0%': { 'transform': 'translate(100%, -150%) scale(0.8)', 'top': '70%', 'left': '90%', 'opacity': 0.4 },
          '100%': { 'transform': 'translate(-200%, 100%) scale(0.6)', 'top': '30%', 'left': '10%', 'opacity': 0.3 }
        },
        'circle-18': {
          '0%': { 'transform': 'translate(-150%, 100%) scale(0.5)', 'top': '10%', 'left': '40%', 'opacity': 0.5 },
          '100%': { 'transform': 'translate(200%, -150%) scale(0.9)', 'top': '90%', 'left': '60%', 'opacity': 0.3 }
        },
        'circle-19': {
          '0%': { 'transform': 'translate(150%, -50%) scale(0.6)', 'top': '60%', 'left': '85%', 'opacity': 0.4 },
          '100%': { 'transform': 'translate(-100%, 200%) scale(0.8)', 'top': '40%', 'left': '15%', 'opacity': 0.2 }
        },
        'circle-20': {
          '0%': { 'transform': 'translate(-100%, -200%) scale(0.7)', 'top': '45%', 'left': '25%', 'opacity': 0.3 },
          '100%': { 'transform': 'translate(200%, 150%) scale(0.5)', 'top': '55%', 'left': '75%', 'opacity': 0.4 }
        },
        'border-rotate': {
          '0%': {
            'transform': 'rotate(0deg)',
          },
          '100%': {
            'transform': 'rotate(360deg)',
          },
        },
        'border-pulse': {
          '0%, 100%': {
            'opacity': 1,
            'transform': 'scale(1)',
          },
          '50%': {
            'opacity': 0.5,
            'transform': 'scale(1.02)',
          },
        },
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(25px, -25px) scale(1.1)',
          },
          '50%': {
            transform: 'translate(-25px, -15px) scale(0.9)',
          },
          '75%': {
            transform: 'translate(15px, 25px) scale(0.95)',
          },
        },
      },
    },
    colors: {
      primary: colors.purple,
      secondary: colors.pink,
      // Using new color names
      slate: colors.slate,    // renamed from blueGray
      gray: colors.gray,      // renamed from coolGray
      neutral: colors.neutral, // renamed from trueGray
      stone: colors.stone,    // renamed from warmGray
      sky: colors.sky,        // renamed from lightBlue
    },
  },
  plugins: [],
};

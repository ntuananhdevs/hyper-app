import type { Config } from "tailwindcss"; 

const config: Config = {
    darkMode: "class",
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			success: {
  				DEFAULT: 'hsl(var(--success))',
  				foreground: 'hsl(var(--success-foreground))'
  			},
  			warning: {
  				DEFAULT: 'hsl(var(--warning))',
  				foreground: 'hsl(var(--warning-foreground))'
  			},
  			info: {
  				DEFAULT: 'hsl(var(--info))',
  				foreground: 'hsl(var(--info-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: ['var(--font-sans)', 'sans-serif'],
  			mono: ['var(--font-mono)', 'monospace']
  		},
  		fontSize: {
  			xs: ['var(--font-size-xs)', { lineHeight: 'var(--line-height-tight)' }],
  			sm: ['var(--font-size-sm)', { lineHeight: 'var(--line-height-normal)' }],
  			base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
  			lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-relaxed)' }],
  			xl: ['var(--font-size-xl)', { lineHeight: 'var(--line-height-relaxed)' }],
  			'2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-snug)' }],
  			'3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-snug)' }],
  			'4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-tight)' }],
  			'5xl': ['var(--font-size-5xl)', { lineHeight: 'var(--line-height-tight)' }],
  			'6xl': ['var(--font-size-6xl)', { lineHeight: 'var(--line-height-tight)' }]
  		},
  		fontWeight: {
  			normal: 'var(--font-weight-normal)',
  			medium: 'var(--font-weight-medium)',
  			semibold: 'var(--font-weight-semibold)',
  			bold: 'var(--font-weight-bold)'
  		},
  		boxShadow: {
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)',
  			inner: 'var(--shadow-inner)',
  			none: 'var(--shadow-none)'
  		},
  		transitionDuration: {
  			fast: 'var(--duration-fast)',
  			base: 'var(--duration-base)',
  			slow: 'var(--duration-slow)',
  			slower: 'var(--duration-slower)'
  		},
  		transitionTimingFunction: {
  			linear: 'var(--easing-linear)',
  			in: 'var(--easing-in)',
  			out: 'var(--easing-out)',
  			'in-out': 'var(--easing-in-out)',
  			bounce: 'var(--easing-bounce)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
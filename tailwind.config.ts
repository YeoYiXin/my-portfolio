import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      stoneWhite: '#fafafa',
      black: '#262626',
      redPink: '#f87171',
      redderPink: '#ef4444',
      redder: '#dc2626',
      lightGrey: '#d1d5db',
      lightFuchsia: '#a21caf',
      lightPurple: '#f3e8ff',
      green: '#16a34a',
      lighterGreyBlue: '#94a3b8', //slate-400
      greyBlue: '#475569', //slate-600
      darkerGreyBlue: '#334155', //slate-700
      darkGrey: '#0f172a', //slate-900
      indigo: '#4f46e5', //indigo-600
      purple: '#7e22ce', //purple-700
      blackPurple: '#701a75', //purple-900
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

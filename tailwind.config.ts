import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 여기에 프로젝트의 디자인 시스템을 정의합니다.
      colors: {
        'p100': '#D6EEFE',
        'p200': '#AEDAFD',
        'p300': '#85C1F9',
        'p400': '#65A9F3',
        'p500': '#3584EB',
        'p600': '#2666CA',
        'p700': '#1A4CA9',
        'p800': '#103588',
        'p900': '#0A2470',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      fontSize: {
        'h1/Bold': ['2.5rem', { lineHeight: '1.3', fontWeight: '800' }],      // 40px, ExtraBold
        'h2/Bold': ['2.25rem', { lineHeight: '1.3', fontWeight: '800' }],     // 36px, ExtraBold
        'h3/Bold': ['2rem', { lineHeight: '1.3', fontWeight: '800' }],       // 32px, ExtraBold
        'h4/Bold': ['1.75rem', { lineHeight: '1.4', fontWeight: '800' }],     // 28px, ExtraBold
        'h5/Bold': ['1.5rem', { lineHeight: '1.4', fontWeight: '800' }],      // 24px, ExtraBold
        'p1/Bold': ['1.25rem', { lineHeight: '1.5', fontWeight: '700' }],     // 20px, Bold
        'p2/Bold': ['1.125rem', { lineHeight: '1.5', fontWeight: '700' }],    // 18px, Bold
        'p3/Bold': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],       // 16px, SemiBold
        'caption1/Bold': ['0.875rem', { lineHeight: '1.5', fontWeight: '600' }], // 14px, SemiBold
        'caption2/Bold': ['0.75rem', { lineHeight: '1.5', fontWeight: '600' }],  // 12px, SemiBold

        'h1/Normal': ['2.5rem', { lineHeight: '1.3', fontWeight: '500' }],      // 40px, Medium
        'h2/Normal': ['2.25rem', { lineHeight: '1.3', fontWeight: '500' }],     // 36px, Medium
        'h3/Normal': ['2rem', { lineHeight: '1.3', fontWeight: '500' }],       // 32px, Medium
        'h4/Normal': ['1.75rem', { lineHeight: '1.4', fontWeight: '500' }],     // 28px, Medium
        'h5/Normal': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],      // 24px, Medium
        'p1/Normal': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],     // 20px, Medium
        'p2/Normal': ['1.125rem', { lineHeight: '1.5', fontWeight: '500' }],    // 18px, Medium
        'p3/Normal': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],       // 16px, Regular
        'caption1/Normal': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px, Regular
        'caption2/Normal': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],  // 12px, Regular
      },
    },
  },
  plugins: [],
}
export default config

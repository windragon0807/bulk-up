import type { Config } from 'tailwindcss'

type NumberToPixel = { [key: number]: string }
const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) }
const px0_30 = { ...Array.from(Array(31)).map((_, i) => `${i}px`) }
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) }
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) }
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) }

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: px0_10 as NumberToPixel,
      width: px0_500 as NumberToPixel,
      height: px0_500 as NumberToPixel,
      padding: px0_100 as NumberToPixel,
      margin: px0_100 as NumberToPixel,
      spacing: px0_200 as NumberToPixel,
      borderRadius: px0_30 as NumberToPixel,
      colors: ({ colors }) => ({
        inherit: colors.inherit,
        current: colors.current,
        transparent: colors.transparent,

        white: 'var(--white)',
        'white-comportable': 'var(--white-comportable)',
        black: 'var(--black)',
        'black-darken': 'var(--black-darken)',
        'black-darkest': 'var(--black-darkest)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        red: 'var(--red)',
        kakao: 'var(--kakao)',
        naver: 'var(--naver)',
      }),
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      maxWidth: {
        tablet: '768px',
      },
      boxShadow: {
        'subtle-gray': '0px 0px 16px 0px rgba(74, 92, 239, 0.20)',
      },
    },
  },
  plugins: [],
}
export default config

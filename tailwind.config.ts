import { PRIMARY, NEUTRAL, DANGER } from './src/lib/foundations/color';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY,
        neutral: NEUTRAL,
        danger: DANGER,
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
};

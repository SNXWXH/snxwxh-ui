import { PRIMARY, NEUTRAL, DANGER } from './src/lib/foundations/ColorSet';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY,
        neutral: NEUTRAL,
        danger: DANGER,
      },
    },
  },
};

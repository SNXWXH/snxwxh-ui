import type { Meta } from '@storybook/react-vite';

import ColorItem from '../lib/foundations/ColorItem';
import { DANGER, NEUTRAL, PRIMARY } from '../lib/foundations/color';

const meta: Meta = {
  title: 'Design System/Color',
  parameters: {
    docs: {
      description: {
        component: '디자인 시스템 색상들',
      },
    },
  },
};

export default meta;

export const PrimaryColor = () => (
  <>
    <h3 className='text-black font-bold py-3'>PRIMARY</h3>
    <div>
      {Object.entries(PRIMARY).map((color) => (
        <ColorItem key={color[0]} colors={color} />
      ))}
    </div>
  </>
);

export const NeutralColor = () => (
  <>
    <h3 className='text-black font-bold py-3'>NEUTRAL</h3>
    <div>
      {Object.entries(NEUTRAL).map((color) => (
        <ColorItem key={color[0]} colors={color} />
      ))}
    </div>
  </>
);

export const DangerColor = () => (
  <>
    <h3 className='text-black font-bold py-3'>DANGER</h3>
    <div>
      {Object.entries(DANGER).map((color) => (
        <ColorItem key={color[0]} colors={color} />
      ))}
    </div>
  </>
);

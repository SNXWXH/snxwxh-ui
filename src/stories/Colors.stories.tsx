import type { Meta } from '@storybook/react-vite';
import { DANGER, NEUTRAL, PRIMARY } from '../lib/foundations/ColorSet';
import ColorItem from '../lib/foundations/ColorItem';

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
    <h3 style={{ color: 'black' }}>PRIMARY</h3>
    <div>
      {PRIMARY.map((colors) => (
        <ColorItem color={colors} />
      ))}
    </div>
  </>
);

export const NeutralColor = () => (
  <>
    <h3 style={{ color: 'black' }}>NEUTRAL</h3>
    <div>
      {NEUTRAL.map((colors) => (
        <ColorItem color={colors} />
      ))}
    </div>
  </>
);

export const DangerColor = () => (
  <>
    <h3 style={{ color: 'black' }}>DANGER</h3>
    <div>
      {DANGER.map((colors) => (
        <ColorItem color={colors} />
      ))}
    </div>
  </>
);

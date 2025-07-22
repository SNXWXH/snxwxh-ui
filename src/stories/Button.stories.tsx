import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destrctive'],
      description: '버튼의 스타일 변형',
    },
    size: {
      control: { type: 'select' },
      options: ['mini', 'small', 'regular', 'large'],
      description: '버튼의 크기',
    },
    isDisable: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 여부',
    },
    children: {
      control: { type: 'text' },
      description: '버튼 내부 텍스트',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 원래 _ 붙이면 사이드바에서 안보여야하는데 보임
export const _Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'regular',
    isDisable: false,
    children: 'Button',
  },
  parameters: {
    docs: {
      primary: true,
    },
    // 원래 true로 하면 사이드바에서 안보여야하는데 보임
    sidebar: {
      disable: true,
    },
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'regular',
    isDisable: false,
    children: 'primary',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Primary로 고정)',
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'regular',
    isDisable: false,
    children: 'Secondary',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Secondary로 고정)',
    },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'regular',
    isDisable: false,
    children: 'Outline',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Outline으로 고정)',
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'regular',
    isDisable: false,
    children: 'Ghost',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Ghost로 고정)',
    },
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destrctive',
    size: 'regular',
    isDisable: false,
    children: 'Destructive',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Destructive로 고정)',
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/button/Button';
import { Download } from 'lucide-react';

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
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: '버튼의 스타일 변형',
    },
    size: {
      control: { type: 'select' },
      options: ['mini', 'small', 'regular', 'large'],
      description: '버튼의 크기',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 여부',
    },
    icon: {
      control: { type: 'select' },
      description: 'Lucide 아이콘 컴포넌트',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: '아이콘 위치',
    },
    children: {
      control: { type: 'text' },
      description: '버튼 내부 텍스트',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: '로딩 상태 여부',
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
    isDisabled: false,
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
    isDisabled: false,
    children: 'primary',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Primary로 고정)',
    },
    icon: {
      control: false,
    },
    iconPosition: {
      control: false,
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'regular',
    isDisabled: false,
    children: 'Secondary',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Secondary로 고정)',
    },
    icon: {
      control: false,
    },
    iconPosition: {
      control: false,
    },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'regular',
    isDisabled: false,
    children: 'Outline',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Outline으로 고정)',
    },
    icon: {
      control: false,
    },
    iconPosition: {
      control: false,
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'regular',
    isDisabled: false,
    children: 'Ghost',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Ghost로 고정)',
    },
    icon: {
      control: false,
    },
    iconPosition: {
      control: false,
    },
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'regular',
    isDisabled: false,
    children: 'Destructive',
  },
  argTypes: {
    variant: {
      control: false,
      description: '버튼의 스타일 변형 (Destructive로 고정)',
    },
    icon: {
      control: false,
    },
    iconPosition: {
      control: false,
    },
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'regular',
    isDisabled: false,
    icon: <Download />,
    iconPosition: 'left',
    children: '다운로드',
  },
  argTypes: {
    icon: {
      description: 'Lucide 아이콘 모두 가능',
    },
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'regular',
    isDisabled: false,
    icon: <Download />,
  },
  argTypes: {
    children: {
      control: false,
    },
    iconPosition: {
      control: false,
    },
    icon: {
      description: 'Lucide 아이콘 모두 가능',
    },
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'regular',
    isLoading: true,
    children: 'Loading...',
  },
  argTypes: {
    isLoading: {
      control: false,
      description: '로딩 상태 (true로 고정)',
    },
    icon: {
      control: false,
    },
    iconPosition: {
      control: false,
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Radio } from '../components/radio/Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '라디오 버튼 컴포넌트입니다. 개별적으로 동작하며 라벨 유무에 따라 다르게 렌더링됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '라디오 버튼의 라벨 텍스트',
    },
    value: {
      control: { type: 'text' },
      description: '라디오 버튼의 값 (필수)',
    },
    checked: {
      control: { type: 'boolean' },
      description: '선택 여부',
    },
    isDisable: {
      control: { type: 'boolean' },
      description: '비활성화 여부',
    },
    isError: {
      control: { type: 'boolean' },
      description: '에러 상태 여부',
    },
    onChange: {
      action: 'changed',
      description: '값이 변경될 때 호출되는 함수',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// 원래 _ 붙이면 사이드바에서 안보여야하는데 보임
export const _Interactive: Story = {
  args: {
    label: '라디오 버튼',
    value: 'interactive',
    checked: false,
    isDisable: false,
    isError: false,
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

export const Default: Story = {
  args: {
    label: '기본 라디오',
    value: 'default',
    checked: false,
    isDisable: false,
    isError: false,
  },
  argTypes: {
    isDisable: {
      control: false,
      description: '비활성화 여부 (false로 고정)',
    },
    isError: {
      control: false,
      description: '에러 상태 여부 (false로 고정)',
    },
  },
};

export const WithoutLabel: Story = {
  args: {
    value: 'no-label',
    checked: false,
    isDisable: false,
    isError: false,
  },
  argTypes: {
    label: {
      control: false,
      description: '라벨 텍스트 (없음으로 고정)',
    },
    isDisable: {
      control: false,
      description: '비활성화 여부 (false로 고정)',
    },
    isError: {
      control: false,
      description: '에러 상태 여부 (false로 고정)',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화된 라디오',
    value: 'disabled',
    checked: false,
    isDisable: true,
    isError: false,
  },
  argTypes: {
    isDisable: {
      control: false,
      description: '비활성화 여부 (true로 고정)',
    },
    isError: {
      control: false,
      description: '에러 상태 여부 (false로 고정)',
    },
  },
};

export const Error: Story = {
  args: {
    label: '에러 상태 라디오',
    value: 'error',
    checked: false,
    isDisable: false,
    isError: true,
  },
  argTypes: {
    isDisable: {
      control: false,
      description: '비활성화 여부 (false로 고정)',
    },
    isError: {
      control: false,
      description: '에러 상태 여부 (true로 고정)',
    },
  },
};

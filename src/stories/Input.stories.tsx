import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/input/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['mini', 'small', 'regular', 'large'],
      description: '입력 필드의 크기',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: '입력 필드 비활성화 여부',
    },
    isError: {
      control: { type: 'boolean' },
      description: '입력 필드 에러 상태 여부',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'file'],
      description: '입력 필드의 타입',
    },
    accept: {
      control: { type: 'text' },
      description: '파일 입력 시 허용할 파일 타입 (예: image/*, .pdf)',
    },
    fileInputLabel: {
      control: { type: 'text' },
      description: '파일 입력 버튼에 표시될 라벨 텍스트',
    },
    multiple: {
      control: { type: 'boolean' },
      description: '파일 다중 선택 여부',
    },
    id: {
      control: { type: 'text' },
      description: '입력 필드의 id 속성',
    },
    onChange: {
      action: 'changed',
      description: '값 변경 이벤트',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// 원래 _ 붙이면 사이드바에서 안보여야하는데 보임
export const _Interactive: Story = {
  args: {
    size: 'regular',
    isDisabled: false,
    isError: false,
    placeholder: '텍스트를 입력하세요',
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
    size: 'regular',
    isDisabled: false,
    isError: false,
    placeholder: '기본 입력 필드',
  },
  argTypes: {
    isDisabled: {
      control: false,
      description: '입력 필드 비활성화 여부 (false로 고정)',
    },
    isError: {
      control: false,
      description: '입력 필드 에러 상태 여부 (false로 고정)',
    },
  },
};

export const Disabled: Story = {
  args: {
    size: 'regular',
    isDisabled: true,
    isError: false,
    placeholder: '비활성화된 입력 필드',
  },
  argTypes: {
    isDisabled: {
      control: false,
      description: '입력 필드 비활성화 여부 (true로 고정)',
    },
    isError: {
      control: false,
      description: '입력 필드 에러 상태 여부 (false로 고정)',
    },
  },
};

export const Error: Story = {
  args: {
    size: 'regular',
    isDisabled: false,
    isError: true,
    placeholder: '에러 상태 입력 필드',
  },
  argTypes: {
    isDisabled: {
      control: false,
      description: '입력 필드 비활성화 여부 (false로 고정)',
    },
    isError: {
      control: false,
      description: '입력 필드 에러 상태 여부 (true로 고정)',
    },
  },
};

export const FileUpload: Story = {
  args: {
    type: 'file',
    size: 'regular',
    isDisabled: false,
    isError: false,
    accept: 'image/*,.pdf,.doc,.docx',
    fileInputLabel: '파일 선택',
    multiple: false,
  },
  argTypes: {
    type: {
      control: false,
      description: '파일 입력 타입 (file로 고정)',
    },
    placeholder: {
      control: false,
      description: '파일 입력에서는 사용되지 않음',
    },
  },
};

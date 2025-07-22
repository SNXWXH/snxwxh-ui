import type { ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destrctive';
  size?: 'mini' | 'small' | 'regular' | 'large';
  state?: 'default' | 'disabled';
  children?: ReactNode;
};

export const Button = ({
  variant = 'primary',
  size = 'regular',
  state = 'default',
  children,
  ...props
}: ButtonProps) => {
  const variantClass = {
    primary: 'bg-neutral-900 text-white',
    secondary: 'bg-neutral-100  text-black',
    outline: 'bg-neutral-100 border border-neutral-200 shadow-md text-black',
    ghost: 'bg-transparent text-black hover:bg-neutral-100',
    destrctive: 'bg-danger-600 text-white',
  };

  const sizeClass = {
    mini: 'h-6 px-2 py-0.5 text-xs rounded-sm',
    small: 'h-8 px-3 py-1 text-sm rounded-lg',
    regular: 'h-9 px-4 py-1.5 text-base rounded-lg',
    large: 'h-11 px-5 py-2 text-lg rounded-lg',
  };

  const stateClass = {
    default:
      'hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200 cursor-pointer',
    disabled: 'opacity-50 cursor-not-allowed',
  };

  const currentState = state === 'disabled' ? 'disabled' : 'default';

  return (
    <>
      <button
        className={`
        flex items-center justify-center transition-all duration-200 font-medium
        ${variantClass[variant]}
        ${sizeClass[size]}
        ${stateClass[currentState]}
      `}
        disabled={state === 'disabled'}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

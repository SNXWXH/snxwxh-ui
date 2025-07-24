import type { ComponentProps } from 'react';

type InputProps = {
  size?: 'mini' | 'small' | 'regular' | 'large';
  isDisabled: boolean;
  isError: boolean;
  placeholder?: string;
};

export const Input = ({
  size = 'regular',
  isDisabled = false,
  isError = false,
  placeholder = '',
  ...props
}: Omit<ComponentProps<'input'>, 'size'> & InputProps) => {
  const sizeClass = {
    mini: 'h-6 px-1.5 py-1 text-xs rounded-sm',
    small: 'h-8 px-2 py-1.5 text-sm rounded-lg',
    regular: 'h-9 px-3 py-2 text-base rounded-lg',
    large: 'h-10 px-4 py-2.5 text-lg rounded-lg',
  };

  const stateClass = {
    default: 'border border-neutral-300 focus:ring-neutral-300',
    error: 'border border-red-500 focus:ring-red-300',
    disabled: 'border border-neutral-300 opacity-50 cursor-not-allowed',
  };

  let state: 'default' | 'error' | 'disabled' = 'default';

  if (isDisabled) state = 'disabled';
  else if (isError) state = 'error';
  else state = 'default';

  return (
    <>
      <input
        className={`
          w-80 bg-white border text-neutral-900 placeholder:text-neutral-500 placeholder:font-normal focus:ring-2 focus:ring-inset focus:outline-none
          ${sizeClass[size]}
          ${stateClass[state]}
        `}
        placeholder={placeholder}
        disabled={isDisabled}
        {...props}
      />
    </>
  );
};

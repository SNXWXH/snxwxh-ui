import type { ComponentProps } from 'react';

type RadioType = {
  label?: string;
  value: string;
  checked?: boolean;
  isDisable?: boolean;
  isError?: boolean;
};

export const Radio = ({
  label = '',
  value,
  isDisable = false,
  isError = false,
  ...props
}: ComponentProps<'input'> & RadioType) => {
  const stateClass = {
    default:
      'border border-neutral-300 bg-neutral-50 checked:bg-neutral-900 focus:bg-neutral-900 hover:border-neutral-400',
    error:
      'border border-red-500 bg-neutral-50 checked:bg-red-500 focus:bg-red-500',
    disabled:
      'border border-neutral-300 opacity-50 cursor-not-allowed checked:bg-neutral-900',
  };

  let state: 'default' | 'error' | 'disabled' = 'default';

  if (isDisable) state = 'disabled';
  else if (isError) state = 'error';
  else state = 'default';

  const radioElement = (
    <input
      type='radio'
      className={`
        w-4 h-4 rounded-full appearance-none cursor-pointer checked:ring-neutral-50 checked:ring-inset checked:ring-4 focus:ring-inset focus:ring-4 transition-all duration-200
        ${stateClass[state]}
      `}
      value={value}
      disabled={isDisable}
      {...props}
    />
  );

  if (!label) return radioElement;

  return (
    <div className='flex items-center gap-2'>
      {radioElement}
      <label
        className={`text-sm cursor-pointer select-none text-black ${
          isDisable ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

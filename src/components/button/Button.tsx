import { LoaderCircle } from 'lucide-react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';

type IconElement = ReactElement<{ className?: string }>;

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'mini' | 'small' | 'regular' | 'large';
  isDisabled?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: IconElement;
  isLoading?: boolean;
  children?: ReactNode;
};

export const Button = ({
  variant = 'primary',
  size = 'regular',
  isDisabled = false,
  iconPosition = 'left',
  icon,
  isLoading = false,
  children,
  ...props
}: ComponentProps<'button'> & ButtonProps) => {
  const variantClass = {
    primary: 'bg-neutral-900 text-white',
    secondary: 'bg-neutral-100  text-black',
    outline: 'bg-neutral-100 border border-neutral-200 shadow-md text-black',
    ghost: 'bg-transparent text-black hover:bg-neutral-100',
    destructive: 'bg-danger-600 text-white',
  };

  const sizeClass = {
    mini: 'h-6 px-2 py-0.5 text-xs rounded-sm',
    small: 'h-8 px-3 py-1 text-sm rounded-lg',
    regular: 'h-9 px-4 py-1.5 text-base rounded-lg',
    large: 'h-11 px-5 py-2 text-lg rounded-lg',
  };

  const iconOnlySizeClass = {
    mini: 'h-6 w-6 p-2 rounded-sm',
    small: 'h-8 w-8 p-3 rounded-lg',
    regular: 'h-9 w-9 p-4 rounded-lg',
    large: 'h-10 w-10 p-5 rounded-lg',
  };

  const stateClass = {
    default:
      'hover:opacity-90 active:scale-95 focus:outline-none focus:ring-2 focus:ring-neutral-200 cursor-pointer',
    disabled: 'opacity-50 cursor-not-allowed',
  };

  const iconSizeClass = {
    mini: 'w-3.5 h-3.5',
    small: 'w-4 h-4',
    regular: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const state = isDisabled ? 'disabled' : 'default';
  if (isLoading)
    icon = (
      <LoaderCircle
        className={`${iconSizeClass[size]} animate-[spin_2s_linear_infinite]`}
      />
    );

  const renderIcon = () => {
    if (!icon) return null;
    return cloneElement(icon, {
      className: `${icon.props.className || ''} ${iconSizeClass[size]}`.trim(),
    });
  };

  return (
    <>
      <button
        className={`
          flex items-center justify-center transition-all duration-200 font-medium
          ${
            isLoading
              ? `${variantClass.ghost} ${stateClass.disabled} focus:outline-none focus:ring-2 focus:ring-neutral-200`
              : `${variantClass[variant]} ${stateClass[state]}`
          }
          ${children ? sizeClass[size] : iconOnlySizeClass[size]}
        `}
        disabled={isDisabled}
        {...props}
      >
        {icon ? (
          iconPosition === 'left' ? (
            <div className='flex justify-center items-center gap-1.5'>
              {renderIcon()}
              {children}
            </div>
          ) : (
            <div className='flex justify-center items-center gap-1.5'>
              {children}
              {renderIcon()}
            </div>
          )
        ) : (
          <>{children}</>
        )}
      </button>
    </>
  );
};

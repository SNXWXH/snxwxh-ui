import type { ComponentProps } from 'react';
import { useState } from 'react';

type InputProps = {
  size?: 'mini' | 'small' | 'regular' | 'large';
  isDisabled: boolean;
  isError: boolean;
  placeholder?: string;
  accept?: string;
  fileInputLabel?: string;
  multiple?: boolean;
};

export const Input = ({
  size = 'regular',
  isDisabled = false,
  isError = false,
  placeholder = '',
  type,
  accept,
  fileInputLabel = '파일 선택',
  multiple = false,
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

  const isFileType = type === 'file';
  const inputId =
    props.id || `input-${Math.random().toString(36).substring(2, 11)}`;
  const [selectedFileName, setSelectedFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) {
      setSelectedFileName('');
      props.onChange?.(e);
      return;
    }

    if (multiple) {
      const fileNames = Array.from(files).map((file) => file.name);
      const displayName =
        fileNames.length > 1
          ? `${fileNames.length}개 파일 선택됨`
          : fileNames[0] || '';
      setSelectedFileName(displayName);
    } else setSelectedFileName(files[0]?.name || '');

    props.onChange?.(e);
  };

  return (
    <>
      {isFileType ? (
        <>
          <input
            {...props}
            id={inputId}
            type='file'
            accept={accept}
            multiple={multiple}
            className='hidden'
            disabled={isDisabled}
            onChange={handleFileChange}
          />
          <label
            htmlFor={inputId}
            className={`
              flex items-center w-80 bg-white border text-neutral-900 cursor-pointer transition-colors
              ${sizeClass[size]}
              ${stateClass[state]}
              ${isDisabled ? 'cursor-not-allowed' : 'hover:bg-neutral-50'}
            `}
          >
            <span
              className={`truncate ${
                selectedFileName ? 'text-neutral-700' : 'text-neutral-500'
              }`}
              title={selectedFileName || fileInputLabel}
            >
              {selectedFileName || fileInputLabel}
            </span>
          </label>
        </>
      ) : (
        <input
          type={type}
          className={`
            flex items-center w-80 bg-white border text-neutral-900 placeholder:text-neutral-500 placeholder:font-normal focus:ring-2 focus:ring-inset focus:outline-none 
            ${sizeClass[size]}
            ${stateClass[state]}
          `}
          placeholder={placeholder}
          disabled={isDisabled}
          {...props}
        />
      )}
    </>
  );
};

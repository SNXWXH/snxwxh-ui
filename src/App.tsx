import { Input } from './components/input/Input';

export default function App() {
  const states = ['default', 'disabled', 'error'] as const;
  const sizes = ['mini', 'small', 'regular', 'large'] as const;

  const getInputProps = (state: (typeof states)[number]) => {
    return {
      isDisabled: state === 'disabled',
      isError: state === 'error',
    };
  };

  return (
    <div className='w-screen min-h-screen bg-gray-50 p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-800 '>
          Input Design System
        </h1>
        {/* 전체 스타일 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          Empty
        </h2>
        <div className='mb-12'>
          <div className='grid grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-sm border'>
            {sizes.map((size) => (
              <div key={size} className='flex flex-col items-center space-y-3'>
                <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                  {size}
                </div>
                <Input size={size} isDisabled={false} isError={false} />
                <div className='text-xs text-gray-400 text-center'>
                  {size} / default
                </div>
              </div>
            ))}
          </div>
        </div>
        {states.map((state) => (
          <div key={state} className='mb-12'>
            <h2 className='text-2xl font-semibold mb-6 text-gray-700 capitalize border-b pb-2'>
              {state} State
            </h2>
            <div className='bg-white p-6 rounded-lg shadow-sm border'>
              <div className='grid grid-cols-2 gap-6'>
                {sizes.map((size) => (
                  <div
                    key={size}
                    className='flex flex-col items-center space-y-3'
                  >
                    <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                      {size}
                    </div>
                    <Input
                      size={size}
                      {...getInputProps(state)}
                      placeholder={`${size} ${state}`}
                    />
                    <div className='text-xs text-gray-400 text-center'>
                      {size} / {state}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* state 전체 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          한눈에 보기 - Regular Size
        </h2>
        <div className='my-8 bg-white p-8 rounded-lg shadow-sm border'>
          <div className='flex flex-wrap gap-4 justify-center'>
            {states.map((state) => (
              <div key={state} className='flex flex-col items-center space-y-2'>
                <Input
                  size='regular'
                  {...getInputProps(state)}
                  placeholder={`${state} input`}
                />
                <span className='text-xs text-gray-500 capitalize'>
                  {state}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* 사이즈 비교 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          사이즈 비교 - Default State
        </h2>
        <div className='my-8 bg-white p-8 rounded-lg shadow-sm border'>
          <div className='flex flex-wrap items-end gap-6 justify-center'>
            {sizes.map((size) => (
              <div key={size} className='flex flex-col items-center space-y-2'>
                <Input
                  size={size}
                  isDisabled={false}
                  isError={false}
                  placeholder={`${size} input`}
                />
                <span className='text-xs text-gray-500 capitalize'>{size}</span>
              </div>
            ))}
          </div>
        </div>
        {/* 상태 비교 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          상태 비교 - Regular Size
        </h2>
        <div className='my-8 bg-white p-8 rounded-lg shadow-sm border'>
          <div className='flex flex-wrap items-end gap-6 justify-center'>
            {states.map((state) => (
              <div key={state} className='flex flex-col items-center space-y-2'>
                <Input
                  size='regular'
                  {...getInputProps(state)}
                  placeholder={`${state} input`}
                />
                <span className='text-xs text-gray-500 capitalize'>
                  {state}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* 파일 입력 - 기본 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          File Input - 파일 업로드 (Label 방식)
        </h2>
        <div className='my-8 bg-white p-8 rounded-lg shadow-sm border'>
          <div className='flex flex-wrap items-end gap-6 justify-center'>
            {sizes.map((size) => (
              <div key={size} className='flex flex-col items-center space-y-2'>
                <Input
                  size={size}
                  type='file'
                  accept='image/*,.pdf,.doc,.docx'
                  isDisabled={false}
                  isError={false}
                />
                <span className='text-xs text-gray-500 capitalize'>{size}</span>
              </div>
            ))}
          </div>
        </div>
        {/* 파일 입력 - 커스텀 라벨 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          File Input - 커스텀 라벨 & Accept 타입
        </h2>
        <div className='my-8 bg-white p-8 rounded-lg shadow-sm border'>
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                이미지 파일
              </div>
              <Input
                size='regular'
                type='file'
                accept='image/*'
                fileInputLabel='이미지 선택'
                isDisabled={false}
                isError={false}
              />
              <div className='text-xs text-gray-400 text-center'>
                accept: image/*
              </div>
            </div>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                문서 파일
              </div>
              <Input
                size='regular'
                type='file'
                accept='.pdf,.doc,.docx'
                fileInputLabel='문서 업로드'
                isDisabled={false}
                isError={false}
              />
              <div className='text-xs text-gray-400 text-center'>
                accept: .pdf,.doc,.docx
              </div>
            </div>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                모든 파일
              </div>
              <Input
                size='regular'
                type='file'
                fileInputLabel='파일 찾기'
                isDisabled={false}
                isError={false}
              />
              <div className='text-xs text-gray-400 text-center'>
                모든 파일 형식
              </div>
            </div>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                긴 파일명 테스트
              </div>
              <Input
                size='regular'
                type='file'
                fileInputLabel='매우 긴 라벨 텍스트로 말줄임표 테스트해보기'
                isDisabled={false}
                isError={false}
              />
              <div className='text-xs text-gray-400 text-center'>
                긴 파일명 → ... 처리
              </div>
            </div>
          </div>
        </div>
        {/* 파일 입력 - 상태별 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          File Input - 상태별
        </h2>
        <div className='my-8 bg-white p-8 rounded-lg shadow-sm border'>
          <div className='flex flex-wrap items-end gap-6 justify-center'>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                기본 상태
              </div>
              <Input
                size='regular'
                type='file'
                accept='image/*'
                fileInputLabel='파일 선택'
                isDisabled={false}
                isError={false}
              />
              <div className='text-xs text-gray-400 text-center'>default</div>
            </div>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                에러 상태
              </div>
              <Input
                size='regular'
                type='file'
                accept='image/*'
                fileInputLabel='파일 선택'
                isDisabled={false}
                isError={true}
              />
              <div className='text-xs text-gray-400 text-center'>error</div>
            </div>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                비활성화
              </div>
              <Input
                size='regular'
                type='file'
                accept='image/*'
                fileInputLabel='파일 선택'
                isDisabled={true}
                isError={false}
              />
              <div className='text-xs text-gray-400 text-center'>disabled</div>
            </div>
          </div>
        </div>
        {/* 파일 입력 - 단일/다중 선택 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          File Input - 단일/다중 선택
        </h2>
        <div className='my-8 bg-white p-8 rounded-lg shadow-sm border'>
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                단일 파일 선택
              </div>
              <Input
                size='regular'
                type='file'
                accept='image/*,.pdf,.doc,.docx'
                fileInputLabel='파일 선택'
                multiple={false}
                isDisabled={false}
                isError={false}
              />
              <div className='text-xs text-gray-400 text-center'>
                multiple: false
              </div>
            </div>
            <div className='flex flex-col items-center space-y-3'>
              <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                다중 파일 선택
              </div>
              <Input
                size='regular'
                type='file'
                accept='image/*,.pdf,.doc,.docx'
                fileInputLabel='여러 파일 선택'
                multiple={true}
                isDisabled={false}
                isError={false}
              />
              <div className='text-xs text-gray-400 text-center'>
                multiple: true
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

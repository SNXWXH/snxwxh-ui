import { Input } from './components/input/Input';

export default function App() {
  const states = ['default', 'disabled', 'error'] as const;
  const sizes = ['mini', 'small', 'regular', 'large'] as const;

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
                <Input size={size} state='default' />
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
                      state={state}
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
        <div className='mt-16 bg-white p-8 rounded-lg shadow-sm border'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
            한눈에 보기 - Regular Size
          </h2>
          <div className='flex flex-wrap gap-4 justify-center'>
            {states.map((state) => (
              <div key={state} className='flex flex-col items-center space-y-2'>
                <Input
                  size='regular'
                  state={state}
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
        <div className='mt-8 bg-white p-8 rounded-lg shadow-sm border'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
            사이즈 비교 - Default State
          </h2>
          <div className='flex flex-wrap items-end gap-6 justify-center'>
            {sizes.map((size) => (
              <div key={size} className='flex flex-col items-center space-y-2'>
                <Input
                  size={size}
                  state='default'
                  placeholder={`${size} input`}
                />
                <span className='text-xs text-gray-500 capitalize'>{size}</span>
              </div>
            ))}
          </div>
        </div>
        {/* 상태 비교 */}
        <div className='mt-8 bg-white p-8 rounded-lg shadow-sm border'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
            상태 비교 - Regular Size
          </h2>
          <div className='flex flex-wrap items-end gap-6 justify-center'>
            {states.map((state) => (
              <div key={state} className='flex flex-col items-center space-y-2'>
                <Input
                  size='regular'
                  state={state}
                  placeholder={`${state} input`}
                />
                <span className='text-xs text-gray-500 capitalize'>
                  {state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

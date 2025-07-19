import { Button } from './components/button/Button';
import './index.css';

export default function App() {
  const variants = [
    'primary',
    'secondary',
    'outline',
    'ghost',
    'destrctive',
  ] as const;
  const sizes = ['mini', 'small', 'regular', 'large'] as const;
  const states = ['default', 'disabled'] as const;

  return (
    <div className='w-screen min-h-screen bg-gray-50 p-8'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
          Button Design System
        </h1>
        {/* 전체 스타일 */}
        {variants.map((variant) => (
          <div key={variant} className='mb-12'>
            <h2 className='text-2xl font-semibold mb-6 text-gray-700 capitalize border-b pb-2'>
              {variant} Variant
            </h2>
            <div className='grid gap-8'>
              {states.map((state) => (
                <div
                  key={state}
                  className='bg-white p-6 rounded-lg shadow-sm border'
                >
                  <h3 className='text-lg font-medium mb-4 text-gray-600 capitalize'>
                    {state} State
                  </h3>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {sizes.map((size) => (
                      <div
                        key={size}
                        className='flex flex-col items-center space-y-3'
                      >
                        <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                          {size}
                        </div>
                        <Button variant={variant} size={size} state={state}>
                          Label
                        </Button>
                        <div className='text-xs text-gray-400 text-center'>
                          {variant} / {size} / {state}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* variant 전체 */}
        <div className='mt-16 bg-white p-8 rounded-lg shadow-sm border'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
            한눈에 보기 - Regular Size, Default State
          </h2>
          <div className='flex flex-wrap gap-4 justify-center'>
            {variants.map((variant) => (
              <div
                key={variant}
                className='flex flex-col items-center space-y-2'
              >
                <Button variant={variant} size='regular' state='default'>
                  {variant}
                </Button>
                <span className='text-xs text-gray-500 capitalize'>
                  {variant}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* 사이즈 비교 */}
        <div className='mt-8 bg-white p-8 rounded-lg shadow-sm border'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
            사이즈 비교 - Primary Variant, Default State
          </h2>
          <div className='flex flex-wrap items-end gap-6 justify-center'>
            {sizes.map((size) => (
              <div key={size} className='flex flex-col items-center space-y-2'>
                <Button variant='primary' size={size} state='default'>
                  {size}
                </Button>
                <span className='text-xs text-gray-500 capitalize'>{size}</span>
              </div>
            ))}
          </div>
        </div>
        {/* 상태 비교 */}
        <div className='mt-8 bg-white p-8 rounded-lg shadow-sm border'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
            상태 비교 - Primary Variant, Regular Size
          </h2>
          <div className='flex gap-6 justify-center'>
            {states.map((state) => (
              <div key={state} className='flex flex-col items-center space-y-2'>
                <Button variant='primary' size='regular' state={state}>
                  {state}
                </Button>
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

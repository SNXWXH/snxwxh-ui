import { useState } from 'react';
import { Radio } from './components/radio/Radio';

export default function App() {
  const [radioStates, setRadioStates] = useState({
    radio1: false,
    radio2: true,
    radio3: false,
    radio4: false,
    radio5: false,
    radio6: true,
  });

  const handleRadioChange = (radioId: string) => {
    setRadioStates((prev) => ({
      ...prev,
      [radioId]: !prev[radioId as keyof typeof prev],
    }));
  };

  const states = ['default', 'disabled', 'error'] as const;

  return (
    <div className='w-screen min-h-screen bg-gray-50 p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-800'>
          Radio Design System
        </h1>
        {/* 기본 라디오 버튼들 */}
        <div className='mb-12'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
            기본 라디오 버튼 (개별)
          </h2>
          <div className='bg-white p-8 rounded-lg shadow-sm border'>
            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col items-center space-y-3'>
                <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                  라벨 있음
                </div>
                <Radio
                  label='옵션 1'
                  value='option1'
                  checked={radioStates.radio1}
                  onChange={() => handleRadioChange('radio1')}
                />
                <div className='text-xs text-gray-400 text-center'>
                  개별 라디오 / 라벨 있음
                </div>
              </div>
              <div className='flex flex-col items-center space-y-3'>
                <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                  라벨 없음
                </div>
                <Radio
                  value='option2'
                  checked={radioStates.radio2}
                  onChange={() => handleRadioChange('radio2')}
                />
                <div className='text-xs text-gray-400 text-center'>
                  개별 라디오 / 라벨 없음
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 상태별 라디오 */}
        {states.map((state) => (
          <div key={state} className='mb-12'>
            <h2 className='text-2xl font-semibold mb-6 text-gray-700 capitalize border-b pb-2'>
              {state} State
            </h2>
            <div className='bg-white p-6 rounded-lg shadow-sm border'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col items-center space-y-3'>
                  <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                    라벨 있음
                  </div>
                  <Radio
                    label={`${state} radio`}
                    value={`${state}-with-label`}
                    checked={false}
                    isDisable={state === 'disabled'}
                    isError={state === 'error'}
                  />
                  <div className='text-xs text-gray-400 text-center'>
                    {state} / 라벨 있음
                  </div>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                  <div className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                    라벨 없음
                  </div>
                  <Radio
                    value={`${state}-no-label`}
                    checked={true}
                    isDisable={state === 'disabled'}
                    isError={state === 'error'}
                  />
                  <div className='text-xs text-gray-400 text-center'>
                    {state} / 라벨 없음
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* 라벨 없는 라디오 모음 */}
        <h2 className='text-2xl font-semibold mb-6 text-gray-700 border-b pb-2'>
          라벨 없는 라디오 - 다양한 상태
        </h2>
        <div className='flex flex-wrap gap-8 justify-center bg-white  p-6 rounded-lg shadow-sm border'>
          <div className='flex flex-col items-center space-y-2'>
            <Radio value='no-label-default' checked={false} />
            <span className='text-xs text-gray-500'>default</span>
          </div>
          <div className='flex flex-col items-center space-y-2'>
            <Radio value='no-label-checked' checked={true} />
            <span className='text-xs text-gray-500'>checked</span>
          </div>
          <div className='flex flex-col items-center space-y-2'>
            <Radio value='no-label-disabled' checked={false} isDisable={true} />
            <span className='text-xs text-gray-500'>disabled</span>
          </div>
          <div className='flex flex-col items-center space-y-2'>
            <Radio
              value='no-label-disabled-checked'
              checked={true}
              isDisable={true}
            />
            <span className='text-xs text-gray-500'>disabled + checked</span>
          </div>
          <div className='flex flex-col items-center space-y-2'>
            <Radio value='no-label-error' checked={false} isError={true} />
            <span className='text-xs text-gray-500'>error</span>
          </div>
          <div className='flex flex-col items-center space-y-2'>
            <Radio
              value='no-label-error-checked'
              checked={true}
              isError={true}
            />
            <span className='text-xs text-gray-500'>error + checked</span>
          </div>
        </div>
      </div>
    </div>
  );
}

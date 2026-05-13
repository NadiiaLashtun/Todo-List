export function Spinner() {
  const path =
    'M60,32 ' +
    'C74,48 90,46 90,32 ' +
    'C90,18 74,16 60,32 ' +
    'C46,48 30,46 30,32 ' +
    'C30,18 46,16 60,32';

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <svg
        viewBox='0 0 120 64'
        className='w-22 h-12'
        fill='none'
      >
        {/* background */}
        <path
          d={path}
          stroke='var(--color-primary-light)'
          strokeWidth='4'
          strokeLinecap='round'
        />

        {/* animate path */}
        <path
          d={path}
          className='animate-infinity [stroke-dasharray:40_160]'
          stroke='var(--color-brand-secondary)'
          strokeWidth='4'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
}

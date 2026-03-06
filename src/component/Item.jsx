import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const Item = ({ id, text, onCheckChange }) => {
  let [checked, setChecked] = useState(false);

  const onCheckedHandler = () => {
    setChecked(!checked);

    if (!checked) onCheckChange((count) => ++count);
    else onCheckChange((count) => --count);
  };

  return (
    <li className='text-brand-secondary flex w-full items-center gap-6 rounded-4xl bg-white/40 px-4 py-3 text-xl font-semibold'>
      {/*Hidden checkbox*/}
      <input
        type='checkbox'
        checked={checked}
        onChange={onCheckedHandler}
        className='hidden'
        id={id}
      ></input>

      {/*Style checkbox*/}
      <label
        htmlFor={id}
        className='relative flex h-5.5 w-5.5 cursor-pointer items-center justify-center rounded-full bg-white/40'
      >
        {checked && (
          <CheckIcon className='text-brand-secondary absolute -top-2.5 -left-1 size-9 font-bold' />
        )}
      </label>

      <span
        className={`min-w-0 flex-1 break-words ${checked ? 'decoration-brand-secondary font-light text-white/50 line-through' : ''} `}
      >
        {text}
      </span>
    </li>
  );
};
export default Item;

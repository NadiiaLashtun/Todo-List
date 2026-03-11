import { useEffect, useState } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import Button from './Button';
import Item from './Item';

const List = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [quote, setQuote] = useState('Your only limit is your mind');
  const [taskDone, setTaskDone] = useState(0);

  //Input task
  const onChangeHandler = (e) => {
    return setTask(e.target.value);
  };

  //Add task
  const onClickHandler = () => {
    if (!task.trim) return;
    setList([...list, { id: Date.now(), text: task }]);
    setTask('');
  };

  //Delete task
  const onDeleteHandler = (id) => {
    console.log('delete');

    let filteredList = list.filter((task) => {
      console.log(task.id);
      console.log(id);
      return task.id !== id;
    });
    console.log(filteredList);
    setList(filteredList);
  };

  // Get Quote
  const getQuote = async () => {
    try {
      const response = await fetch('https://gary.rest/api');
      const data = await response.json();

      if (response.ok) setQuote(data.quote);
      else setQuote('Your only limit is your mind');
    } catch (error) {
      console.error('Error load quote:', error);
      setQuote('Your only limit is your mind');
    }
  };

  //Update quote by timer
  useEffect(() => {
    const interval = setInterval(() => {
      getQuote();
    }, 100000); // every 100 second

    return () => clearInterval(interval); // clear interval when unmount
  }, []);

  return (
    <div className='mx-auto max-h-[80vh] max-w-6xl rounded-4xl bg-white/10 p-20 text-center'>
      <h1 className='font-[Amsterdam-four] text-brand mb-12 text-5xl font-extrabold underline underline-offset-12'>
        Todo List
      </h1>
      <p className='mb-16 max-w-xl mx-auto'>{quote}</p>

      <div className='flex flex-col items-center gap-4'>
        <div className='mb-4 flex'>
          <input
            type='text'
            value={task}
            className='outline-brand rounded-tl-4xl rounded-bl-4xl bg-white/20 px-5 py-2.5 outline-1'
            onChange={onChangeHandler}
          />
          <input
            type='submit'
            className='bg-brand-secondary cursor-pointer rounded-tr-4xl rounded-br-4xl px-5 py-2.5'
            onClick={onClickHandler}
          />
        </div>

        {list.length > 0 && (
          <div>
            <p>
              Task amount: {list.length} /
              <span className='text-brand font-bold'> Done: {taskDone}</span>
            </p>
          </div>
        )}

        <ul className='max-h-[20vh] w-full space-y-4 overflow-y-auto flex-1'>
          {list.map((task) => {
            return (
              <Item
                key={task.id}
                id={task.id}
                text={task.text}
                onCheckChange={setTaskDone}
              >
                {
                  <Button
                    type='button'
                    text={
                      <XCircleIcon className='text-brand size-9 font-bold' />
                    }
                    onClick={() => onDeleteHandler(task.id)}
                  />
                }
              </Item>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default List;

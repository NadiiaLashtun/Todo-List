import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <section className='flex justify-center items-center text-center h-full'>
      <div className='rounded-4xl bg-mauve-400/10 p-20 md:max-w-2/4 space-y-8'>
        <h1 className='font-[Amsterdam-four] mb-16 text-brand text-5xl font-extrabold underline underline-offset-12'>
          Task Pulse
        </h1>
        <p>Stay Organized. Get Things Done.</p>
        <p>
          Take control of your day with a simple and intuitive to-do list. Plan
          tasks, stay focused, and track your progress effortlessly—one step at
          a time.
        </p>
        <NavLink
          to='/list'
          className='inline-block bg-brand-secondary cursor-pointer rounded-4xl rounded-br-4xl px-5 py-2.5'
        >
          Get started
        </NavLink>
      </div>
    </section>
  );
};
export default Home;

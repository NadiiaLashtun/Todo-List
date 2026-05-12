import { NavLink } from 'react-router-dom';
import Logo from '/src/assets/logo.png';

const Header = () => {
  //Indicate active page
  const getActiveLink = ({ isActive }) =>
    isActive
      ? 'text-brand-secondary underline underline-offset-4 font-bold'
      : '';

  return (
    <header className='flex justify-between items-center py-1 px-20 border-b border-mauve-400/10'>
      <NavLink
        to='/'
        className={getActiveLink}
      >
        <img
          src={Logo}
          alt='Task pulse'
          className='w-16 cursor-pointer'
        />
      </NavLink>

      <ul className='flex gap-6 justify-center'>
        <li>
          <NavLink
            to='/'
            className={getActiveLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/list'
            className={getActiveLink}
          >
            ToDo List
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Header;

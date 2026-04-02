import { NavLink } from 'react-router-dom';

const Header = () => {
  //Indicate active page
  const getActiveLink = ({ isActive }) =>
    isActive
      ? 'text-brand-secondary underline underline-offset-4 font-bold'
      : '';

  return (
    <header>
      <ul className='flex gap-4 justify-center p-5  border-b-1 border-white/10'>
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

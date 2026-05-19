import { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Logo from "/src/assets/logo.png";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuth } = useContext(AuthContext);

  //Indicate active page
  const getActiveLink = ({ isActive }) =>
    isActive
      ? "text-brand-secondary underline underline-offset-4 font-bold"
      : "";

  return (
    <header className="flex items-center justify-between border-b border-mauve-400/10 px-20 py-1">
      <NavLink to="/" className={getActiveLink}>
        <img src={Logo} alt="Task pulse" className="w-16 cursor-pointer" />
      </NavLink>

      <ul className="flex justify-center gap-6">
        <li>
          <NavLink to="/" className={getActiveLink}>
            Home
          </NavLink>
        </li>
        {isAuth && (
          <li>
            <NavLink to="/list" className={getActiveLink}>
              ToDo List
            </NavLink>
          </li>
        )}
      </ul>

      {isAuth ? (
        <NavLink to="/" className="btn bg-brand">
          Log Out
        </NavLink>
      ) : (
        <NavLink to="/login" className="btn">
          Log In
        </NavLink>
      )}
    </header>
  );
};
export default Header;

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <section className="flex h-full items-center justify-center text-center">
      <div className="space-y-8 rounded-4xl bg-mauve-400/10 p-20 lg:max-w-2/4">
        <h1 className="mb-16 font-[Amsterdam-four] text-5xl font-extrabold text-brand underline underline-offset-12">
          Task Pulse
        </h1>
        <p>Stay Organized. Get Things Done.</p>
        <p>
          Take control of your day with a simple and intuitive to-do list. Plan
          tasks, stay focused, and track your progress effortlessly—one step at
          a time.
        </p>

        <NavLink
          to={isAuth ? "/list" : "/login"}
          className="inline-block cursor-pointer rounded-4xl rounded-br-4xl bg-brand-secondary px-5 py-2.5"
        >
          Get started
        </NavLink>
      </div>
    </section>
  );
};
export default Home;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setIsAuth }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const name = event.target.userName.value;
    // const email = event.target.email.value;

    if (formValue.name && formValue.email) {
      setIsAuth(true);
      navigate("/list");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-4xl bg-mauve-400/10 p-20"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValue.name}
          onChange={handleChange}
          className="w-full rounded-4xl border border-primary px-4 py-1"
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
          className="w-full rounded-4xl border border-primary px-4 py-1"
        />
      </div>
      <input type="submit" value="Log in" className="btn" />
    </form>
  );
};
export default LogIn;

import { NavLink } from "react-router-dom";

export default function Nav({ className }) {
  const Button = ({ title, path }) => {
    return (
      <button className="cursor-pointer ">
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive ? "text-Bright_Blue" : "text-Dark_Grayish_Blue"
          }
        >
          {title}
        </NavLink>
      </button>
    );
  };

  return (
    <nav
      id="mobile-nav"
      className={`${className}  h-10 md:h-12 px-16 md:px-2 flex justify-between items-center bg-Very_Light_Gray dark:bg-Very_Dark_DeSaturated_Blue text-Bright_Blue rounded-md shadow-2xl `}
    >
      <Button title="All" path="/" />
      <Button title="active" path="active" />
      <Button title="complete" path="complete" />
    </nav>
  );
}

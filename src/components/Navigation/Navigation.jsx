import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";
import clsx from "clsx";
export const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav>
      <NavLink className={(isActive) => buildLinkClass(isActive)} to="/">
        Home
      </NavLink>
      <NavLink className={(isActive) => buildLinkClass(isActive)} to="/catalog">
        Catalog
      </NavLink>
      <NavLink
        className={(isActive) => buildLinkClass(isActive)}
        to="/favorites"
      >
        Favorites
      </NavLink>
    </nav>
  );
};

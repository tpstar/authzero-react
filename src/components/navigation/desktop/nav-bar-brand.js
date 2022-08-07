import React from "react";
import { NavLink } from "react-router-dom";
import AVAIL_LOGO from "./avail-logo.svg";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/" exact>
        <img
          className="nav-bar__logo"
          src={AVAIL_LOGO}
          alt="Auth0 shield logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};

import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navigation = [
        { path: "/", name: "Home" },
        { path: "/warframefavpage", name: "Favorite page" },
      ];

    return (
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
        {navigation.map((nav) => (
          <NavLink className="link" key={nav.name} to={nav.path}>
            {nav.name}
          </NavLink>
        ))}
      </nav>
    );
}

export default Navbar;

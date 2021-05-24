import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import "../Toolbar/Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <DrawerToggleButton />
      <nav className="DesktopOnly">
        <div className="NavbarItems">
          <h1 className="navbar-logo">
          </h1>
          <ul className="nav-menu">
            {NavigationItem.map((items) => {
              return (
                <li key={items.title}>
                  <NavLink
                    to={items.url}
                    exact
                    activeClassName="ToolbarActive"
                    activeStyle={{
                      color: "orange",
                      textDecoration: "none",
                      padding: "0.5rem 1rem",
                      fontSize: "17px",
                    }}
                    className={items.cName}
                  >
                    {items.title}
                  </NavLink>
                </li>
              );
            })}
          
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;

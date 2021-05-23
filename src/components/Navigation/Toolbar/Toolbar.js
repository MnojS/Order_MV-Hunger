import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import "../Toolbar/Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";

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
                  <Link
                    to={items.url}
                    activeStyle={{
                      color: "aliceblue",
                      textDecoration: "none",
                      padding: "0.5rem 1rem",
                      fontSize: "17px",
                    }}
                  >
                    {items.title}
                  </Link>
                </li>
              );
            })}
            <img  />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;

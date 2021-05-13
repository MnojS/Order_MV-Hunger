import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        hello
      </div>
    );
  }
}

export default Menu;

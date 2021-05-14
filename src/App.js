import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import Menu from "./containers/Menu/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Toolbar />
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/services" component={Menu} />
            <Route path="/blog" component={Menu} />
            <Route path="/about" component={Menu} />
            <Route path="/contact" component={Menu} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

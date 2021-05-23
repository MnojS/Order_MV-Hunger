import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import Menu from "./containers/Menu/Menu";
import Services from "./containers/Services/Services";

class App extends Component {
  render() {
    return (
      <div>
          <Toolbar />
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Menu} />
            <Route path="/about" component={Menu} />
            <Route path="/contact" component={Menu} />
            <Route exact path="/" component={Home} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

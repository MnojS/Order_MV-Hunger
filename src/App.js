import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/Footer";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import Menu from "./containers/Menu/Menu";
import Services from "./containers/Services/Services";
import Contact from "./containers/Contact/Contact";
import MyCart from "./containers/MyCart/MyCart";
import About from './containers/About/About';
import SignUp from "./containers/SignIn/SignUp";
import SignIn from "./containers/SignIn/SignIn";


class App extends Component {
  render() {
    return (
      <div>
          <Toolbar />
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/services" component={Services} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={MyCart}/>
            <Route exact path="/" component={Home} />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

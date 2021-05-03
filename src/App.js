import './App.css';
import Backdrop from './components/hoc/Backdrop/Backdrop';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import React ,{Component} from 'react'
import Home from './components/Home/Home'

class App extends Component {
  state = {
    SideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen : !prevState.SideDrawerOpen}
    })

  }

  backdropClickHandler= () => {
    this.setState({SideDrawerOpen: false})
  }
  render() {
    let sideDrawer;
    let backdrop;
    if(this.state.SideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{height:'100%'}}>
        
        <Toolbar  drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        
        <Home />
        
      </div>
    );
  }

}

export default App;

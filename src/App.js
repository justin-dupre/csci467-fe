import React, { Component } from "react";
import Navbar from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from './components/Admin';
import CreateOrders from './components/CreateOrders';
import InHouse from './components/InHouse';
import QuoteSystem from './components/QuoteSystem';
import Login from './components/Login'
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props.associates);
    
    return (
      <React.Fragment>

 
        <Router>
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/quotesystem'} className="nav-link"> Quote System </Link></li>
            <li><Link to={'/inhouse'} className="nav-link">In House Interface</Link></li>
            <li><Link to={'/admin'} className="nav-link">Admin</Link></li>
            <li><Link to={'/createorders'} className="nav-link">Create Orders</Link></li>
          </ul>
          </nav>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/quotesystem" component={QuoteSystem} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/inhouse" component={InHouse} />
              <Route exact path="/createorders" component={CreateOrders} />
            </Switch>
          </div>
        </Router>

        
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
    quotes: state.quoteReducer.quotes,
    associates: state.associateReducer.associates
  };
}

export default connect(
  mapStateToProps
)(App);

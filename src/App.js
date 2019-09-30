import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from "./components/navBar"
import Customers from "./components/customers"
import MovieForm from "./components/movieForm"
import Rentals from "./components/rentals"
import NotFound from "./components/notFound"
import LoginForm from "./components/loginForm"
import RegisterForm from "./components/registerForm"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <div className="container" style={{ marginLeft: "70px" }}>
          <Switch>
            <Route path="/RegisterForm" component={RegisterForm} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/movieForm" component={MovieForm} />
            <Route path="/rentals" component={Rentals} />
            <Route exact path="/notFound" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/notFound" />

          </Switch>

        </div>


      </div>
    );
  }
}
export default App;

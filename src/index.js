import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import Login from "./login.jsx";
import Register from "./register.jsx";
//import LoginButton from "./Components/login/loginButton";
//import { NavigationBar } from './Components/NavigationBar';
//import { Auth0Provider } from "@auth0/auth0-react";
//import LogoutButton from "./Components/login/logoutButton";
//import Profile from "./Components/login/profile";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Route path = "" exact component = {Login} />
        <Route path = "/login" exact component = {Login} />
    </BrowserRouter>
    <NavBar />
    <Layout>
      <SelectMovie />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
*/

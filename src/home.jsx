import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import SelectMovie from "./Components/selectMovie";
//import { Layout } from "./Components/layout";
//import NavBar from "./Components/navBar";
//import Login from "./login";

const HomePage = () => {
  return (
    <React.Fragment>
        <SelectMovie />
    </React.Fragment>
  );
};

export default HomePage;

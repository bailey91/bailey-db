import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
//import SelectMovie from "./Components/selectMovie";
//import { Layout } from "./Components/layout";
//import NavBar from "./Components/navBar";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/*const formValid = (formErrors) => {
  let valid = true;
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
};*/

class LoginPage extends Component {
  state = {
    username: null,
    password: null,
    formErrors: {
      username: "",
      password: "",
    },
  };

  handleLogin = (event) => {
    event.preventDefault();
    axios
      .get(`/login/${this.state.username}/${this.state.password}`)
      .then((response) => {
        //this.setState({ filmDetails: response.data.results.slice(0, 6) });
        console.log(response.data);
        console.log(this);
        //console.log(response.data === "Login Failed" ? "Zero" : response);
        if (response.data.message === "Login Failed") {
          console.log("f off");
        } else {
          console.log("come in");
        }
      });

    /*if (formValid(this.state.formErrors)) {
      console.log(this.state.username + this.state.password);
    }*/
  };

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "username":
        formErrors.username =
          value.length < 4 && value.length > 0
            ? "minimum 4 charcters required"
            : "";
        break;
      case "password":
        formErrors.password =
          value.length < 4 && value.length > 0
            ? "minimum 4 charcters required"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    //const { formErrors } = this.state;
    return (
      <React.Fragment>
        <div className="formWrapper">
        <Form onSubmit={this.handleLogin} className="formLayout">
          <h1 className = "formHeader">Login</h1>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="Login"
            //onClick={this.handleLogin.bind(this)}
            //onClick={() => this.handleLogin.bind(this)}
          >
            Login
          </Button>
          <Button variant="primary" type="Register">
            <Link to={`/Register`}>Register</Link>
          </Button>
        </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;

/*const LoginPage = () => {
  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="Login" onClick = {this.handleChange.bind(this)}>
          Login
        </Button>
        <Button variant="primary" type="Register">
          <Link to = {`/Register`}>Register</Link>
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default LoginPage;*/

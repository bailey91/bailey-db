import React, { Component } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
//import SelectMovie from "./Components/selectMovie";
//import { Layout } from "./Components/layout";
//import NavBar from "./Components/navBar";
import { Form, Button } from "react-bootstrap";
//import { Link, Redirect } from "react-router-dom";

const formValid = (formErrors, formBlank) => {
  let valid = true;
  console.log(formErrors);
  console.log(formBlank);
  // Errors when form is empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
    console.log(valid);
  });

  Object.values(formBlank).forEach((val) => {
    val === null && (valid = false);
    console.log(valid);
  });

  return valid;
};

class LoginPage extends Component {
  state = {
    username: null,
    password: null,
    formErrors: {
      username: "",
      password: "",
    },
  };

  handleRegister = (event) => {
    event.preventDefault();
    if (
      formValid(this.state.formErrors, [
        this.state.username,
        this.state.password,
      ]) === true
    ) {
      axios
        .get(`/create_user/${this.state.username}/${this.state.password}`)
        .then((response) => {
          //this.setState({ filmDetails: response.data.results.slice(0, 6) });
          console.log(response.data);
          console.log(this);
          //console.log(response.data === "Login Failed" ? "Zero" : response);
          if (response.data.message === "Account Creation Failed") {
            console.log("f off");
          } else {
            console.log("come in");
          }
        });
      console.log("yes");
    } else {
      // put error here
      console.log("no");
    }

    /*if (formValid(this.state.formErrors)) {
      console.log(this.state.username + this.state.password);
    }*/
  };

  handleChange = (event) => {
    event.preventDefault();
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
    console.log(formErrors[name]);
    formErrors[name].length > 0
      ? (event.target.className = "form-control formError")
      : (event.target.className = "form-control formCorrect");
    console.log(event.target.className);
  };

  render() {
    const { formErrors } = this.state;
    return (
      <React.Fragment>
        <div className="formWrapper">
          <Form onSubmit={this.handleLogin} className="formLayout">
            <h1 className="formHeader">Register</h1>
            <Form.Group controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter username"
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </Form.Group>
            <Button
              variant="primary"
              type="Login"
              //onClick={this.handleLogin.bind(this)}
              //onClick={() => this.handleLogin.bind(this)}
            >
              Login
            </Button>
            <Button
              variant="primary"
              type="Register"
              onClick={this.handleRegister}
            >
              Create Account
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

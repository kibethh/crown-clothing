import React from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { startLogin } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={startLogin} isGoogleSignIn>
              Google Sign IN
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

import "./styles.css";

import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <form className="loginform-wrapper">
      <p className="loginform-name">Login form</p>
      <div className="inputs-container">
        <Input
          id="login-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          type="email"
        />
        <Input
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
        />
      </div>
      <Button name="Login" />
    </form>
  );
}

export default LoginForm;

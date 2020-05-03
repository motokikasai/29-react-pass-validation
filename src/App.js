import React from "react";
import "./App.css";
import eyeIcon from "./eye-icon.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      nameForDisplay: "",
      inputUsername: "",
      inputPassword: "",
      reveal: false,
      errNoUsername: "",
      errNoAtSign: "",
      errNoPassword: "",
      errNoCapLetter: "",
      errNoSpecChar: "",
      errNoNum: "",
      errNoEightChars: "",
      errContainsUsername: "",
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.ClickHandler = this.ClickHandler.bind(this);
    this.revealHandler = this.revealHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    // e.target.reset();
  }

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errNoUsername: "",
      errNoAtSign: "",
      errNoPassword: "",
      errNoCapLetter: "",
      errNoSpecChar: "",
      errNoNum: "",
      errNoEightChars: "",
      errContainsUsername: "",
    });
  }

  ClickHandler() {
    switch (true) {
      case !this.state.inputUsername:
        this.setState({
          errNoUsername: "Username required",
        });
        break;

      case !this.state.inputUsername.includes("@"):
        this.setState({
          errNoAtSign: "Username must include '@'",
        });
        break;

      case !this.state.inputPassword:
        this.setState({
          errNoPassword: "Password required",
        });
        break;

      case !this.state.inputPassword.match(/(?=.*?[A-Z])/):
        this.setState({
          errNoCapLetter: "Password must contain at least 1 capital letter",
        });
        break;

      case !this.state.inputPassword.match(/(?=.*?[#?!@$%^&*-])/):
        this.setState({
          errNoSpecChar: "Password must contain at least 1 special character",
        });
        break;

      case !this.state.inputPassword.match(/(?=.*?[0-9])/):
        this.setState({
          errNoNum: "Password must contain at least 1 number",
        });
        break;

      case !this.state.inputPassword.match(/^(.{8})$/):
        this.setState({
          errNoEightChars: "Password must 8 characters long",
        });
        break;

      case this.state.inputPassword === this.state.nameForDisplay:
        this.setState({
          errContainsUsername: "Password cannot contain the username",
        });
        break;
      // Take username from the email address BEFORE "@"
      case this.state.inputUsername.includes("@"):
        this.setState({
          nameForDisplay: this.state.inputUsername.slice(
            0,
            this.state.inputUsername.indexOf("@")
          ),
        });
      // eslint-disable-next-line
      default:
        this.setState({
          success: true,
        });
        break;
    }
  }

  revealHandler() {
    this.setState({
      reveal: !this.state.reveal,
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.success ? (
          <div className="main">
            <div className="container">
              <h3>Sign up</h3>
              <form onSubmit={this.submitHandler} className="input-fields">
                <label htmlFor="username">Username</label>
                <input
                  onChange={this.inputHandler}
                  type="text"
                  name="inputUsername"
                  id="username"
                />
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.inputHandler}
                  type={this.state.reveal ? "text" : "password"}
                  name="inputPassword"
                  id="password"
                />
                <img
                  onClick={this.revealHandler}
                  src={eyeIcon}
                  alt="eye-icon"
                  className="eye-icon"
                />
                <p>
                  <span className="err">
                    {this.state.errNoUsername}
                    {this.state.errNoAtSign}
                    {this.state.errNoPassword}
                    {this.state.errNoCapLetter}
                    {this.state.errNoSpecChar}
                    {this.state.errNoNum}
                    {this.state.errNoEightChars}
                    {this.state.errContainsUsername}
                  </span>
                </p>
                <button onClick={this.ClickHandler}>Sign up</button>
              </form>
            </div>
          </div>
        ) : (
          <div className="congrats">
            <h1>
              Congrats,{" "}
              <span className="username-display">
                {this.state.nameForDisplay}
              </span>
            </h1>
            <h3>
              Welcome to the club{" "}
              <span role="img" aria-label="dancer">
                💃
              </span>
            </h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;

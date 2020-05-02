import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      nameForDisplay: "",
      inputUsername: "",
      inputPassword: "",
      errNoUsername: "",
      errNoAtSign: "",
      errNoPassword: "",
      errNoCapLetter: "",
      errNoSpecChar: "",
      errNoNum: "",
      errNoEightChars: "",
      errContainsUsername: "",
    };

    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordValidator = this.passwordValidator.bind(this);
    this.ClickHandler = this.ClickHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    e.target.reset();
  }

  usernameHandler(e) {
    this.setState({
      inputUsername: e.target.value,
      errNoUsername: "",
      errNoAtSign: "",
    });
  }

  passwordValidator(e) {
    this.setState({
      inputPassword: e.target.value,
    });
  }

  // clearInput()

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

      case this.state.inputUsername.includes("@"):
        this.setState({
          nameForDisplay: this.state.inputUsername.slice(
            0,
            this.state.inputUsername.indexOf("@")
          ),
        });
        break;

      default:
        break;
    }

    // if (!this.state.inputUsername) {
    //   this.setState({
    //     errNoUsername: "Username required",
    //   });
    // } else if (!this.state.inputUsername.includes("@")) {
    //   this.setState({
    //     errNoAtSign: "Username must include '@'",
    //   });
    // }

    // if (this.state.inputUsername.includes("@")) {
    //   this.setState({
    //     nameForDisplay: this.state.inputUsername.slice(
    //       0,
    //       this.state.inputUsername.indexOf("@")
    //     ),
    //   });
    // }
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
                  onChange={this.usernameHandler}
                  type="text"
                  name="username"
                  id="username"
                />
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.passwordValidator}
                  type="text"
                  name="password"
                  id="password"
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
              ! You made it!!
            </h1>
            <h3>Welcome to the club</h3>
            <p>Enjoy your stay</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

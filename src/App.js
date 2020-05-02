import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      inputUsername: "",
      inputPassword: "",
    };

    this.usernameValidator = this.usernameValidator.bind(this);
    this.passwordValidator = this.passwordValidator.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    e.target.reset();
  }

  usernameValidator(e) {
    this.setState({
      inputUsername: e.target.value,
    });
  }

  passwordValidator(e) {
    this.setState({
      inputPassword: e.target.value,
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
                  onChange={this.usernameValidator}
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
                  <span className="err">Error message here...</span>
                </p>
                <button>Sign up</button>
              </form>
            </div>
          </div>
        ) : (
          <div className="congrats">
            <h1>Congrats! You made it!!</h1>
            <h3>Welcome to the club</h3>
            <p>Enjoy your stay</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;

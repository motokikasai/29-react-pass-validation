import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
    };
  }

  render() {
    return (
      <div className="App">
        {!this.state.success ? (
          <div className="main">
            <div className="container">
              <h3>Sign up</h3>
              <form className="input-fields">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" />
                <p>ERROR MSG</p>
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

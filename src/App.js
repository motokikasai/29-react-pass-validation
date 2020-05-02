import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;

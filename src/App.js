import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login/Login";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Login></Login>
      </>
    );
  }
}

export default App;

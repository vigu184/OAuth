import React from "react";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navigationbar/Navbar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Signup></Signup>
      </>
    );
  }
}

export default App;

//import logo from "./logo.svg";
import React from "react";
//import ReactDOM from "react-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navigationbar/Navbar";
//import IconButton from '@material-ui/core/IconButton';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <> 
        <Navbar></Navbar>
        <Login alignContent="center"></Login>
      </>
    );
  }
}

export default App;

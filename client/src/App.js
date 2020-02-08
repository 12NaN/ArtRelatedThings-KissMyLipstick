import React, { Component } from "react";
import logo from "./logo.svg";
import Home from './components/Home';
import "./App.css";
import Navbar from "./components/Navi";
import Section from "./components/Section";
import dummyText from "./DummyText";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br/>
        <Home/>
        <br/>
        <Section
          title=""
          dark={true}
          id="section1"
        />
        <Section
          title=""
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Gallery"
          subtitle={dummyText}
          dark={true}
          id="section3"
          style={{"color":"white"}}
        />
        <Section
          title=""
          subtitle={dummyText}
          dark={false}
          id="section4"
          className="bg-text"
        />
        <Section
          title="Reservation"
          dark={true}
          id="section5"
        />
        
      </div>
    );
  }
}

export default App;
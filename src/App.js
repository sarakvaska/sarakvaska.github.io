import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import Introduction from './components/introduction';
import Resume from './components/resume';
import Projects from './components/projects';
import Interests from './components/interests';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap" style={{overflow: "hidden"}}>
        <div id="colorlib-main">
          <Home></Home>
          <Introduction></Introduction>
          <Resume></Resume>
          <Projects></Projects>
          <Interests></Interests>
          <Contact></Contact>
          <Footer></Footer>
        </div>
        </div>
      </div>
    );
  }
}

export default App;

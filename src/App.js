import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
// import Header from './components/header'
import Projects from './components/projects'
import About from './components/about'
import Blog from './components/blog'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
          <logo></logo>
          {/* <Header></Header> */}
          <Projects></Projects>
          <About></About>
          <Blog></Blog>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

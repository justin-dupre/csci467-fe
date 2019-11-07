import React, { Component } from 'react'
import Navbar from './components/Nav';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
      </div>
    )
  }
}

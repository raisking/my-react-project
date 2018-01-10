import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <h1>Hi, I am a React App</h1>
        <p>This is really working</p>
        <p>Hello</p>
        <Person/>
        <Person/>
        <Person/>
        <Person/>

      </div>
    );
    // return React.createElement('div',{className: 'App'}, 
    // React.createElement('h1',null,'Do you like React?'));
  }
}

export default App;

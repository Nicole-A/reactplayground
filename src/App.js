import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name = "Max" age = "28"/>
        <Person name = "Jane" age = "30">My Hobbies: Racing</Person>/>
        <Person name = "Joe" age = "42"/>
      </div>
    );
  }
}

export default App;

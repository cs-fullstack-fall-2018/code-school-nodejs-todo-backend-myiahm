import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';


class App extends Component {
  render() {
      let toDoarray = [
      {
          username: 'testuser',
          todo: 'Buy milk',
          isDone: "done"
      },
      {
          username: 'testuser2',
          todo: 'Feed dog',
          isDone: "not done"
      },
      {
          username: 'testuser3',
          todo: 'Learn Node',
          isDone: "not done"
      },
          {
              username: 'kenn',
              todo: 'clean room ',
              isDone: "done"
          }
  ];
      console.log(toDoarray);
    return (
      <div className="App">

          <ToDoList arr={toDoarray}/>
          <p>{toDoarray[2].todo}</p>
      </div>
    );
  }
}

export default App;

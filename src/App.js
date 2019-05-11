import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "M.J", age: 22},
      {name: "Edling", age: 8},
    ],
    showPerson: false,
  }

  switchNameHandler = (newName) => {
    // console.log("clicked")
    this.setState({
      persons:[
        {name: newName, age: 21},
        {name: "Pala", age: 23},
      ]
    });
  }

  nameChangedHanlder = (event) => {
    this.setState({
      persons:[
        {name: "M.J", age: 21},
        {name: event.target.value, age: 23},
      ],
    });
  }
  togglePersonHandler = () =>{
    const value = this.state.showPerson
    this.setState({
      showPerson: !value
    });
  }
  render() {
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // }; ONE LINE STYLE, you use: style={nameConst}

    let persons = null; // declare a new variale where is gonna set the value from jsx
    if (this.state.showPerson) {
      persons = (
        <div >
        {this.state.persons.map(person => {
          return <Person click = {this.switchNameHandler.bind(this,"M.J")} name={person.name} age={person.age}>testing OHH</Person>
        })}
      </div> 
      )
    } // function that check if the value of the variable is true or false, and depending of that load the jsx
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Toogle person</button>
        {persons}
      </div>
    );
  }
}

export default App;

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
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Toogle person</button>
        { this.state.showPerson ?
          <div >
            <Person click = {this.switchNameHandler.bind(this,"M.J")} name={this.state.persons[0].name} age={this.state.persons[0].age}>testing OHH</Person>
            <Person change = {this.nameChangedHanlder} name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          </div> :
          null
          }
      </div>
    );
  }
}

export default App;

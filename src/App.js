import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
class App extends Component {
  state = {
    persons: [
      {id:1, name: "M.J", age: 22},
      {id:2, name: "Edling", age: 8},
    ],
    showPerson: false,
  }
  
  deleteHanlderPerson = (personIndex) =>{
    const persons = this.state.persons.slice()
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangedHanlder = (event, id) => {
    const persons = this.state.persons.slice() // made a copy from array
    persons.map( p => {
      // p.id === id ? p.name = event.target.value
      if (p.userId === id) {
        p.name = event.target.value 
      }
      return p
    }) // finding a person and making the change
    
    this.setState({
      persons: persons // updating nwith new data
    })
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
    let style = ""
    if (this.state.showPerson) {
      style = "red"
      persons = (
        <div >
        {this.state.persons.map((person, index) => {
          return(
          <ErrorBoundary>
          <Person key={person.id} 
                         click={() => this.deleteHanlderPerson(index)}
                         name={person.name}
                         age={person.age}
                         change={(event)=> this.nameChangedHanlder(event, person.id)}
                         />
          </ErrorBoundary>
        )})}
      </div> 
      )
    } // function that check if the value of the variable is true or false, and depending of that load the jsx
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className={style} onClick={this.togglePersonHandler}>Toogle person</button>
        {persons}
      </div>
    );
  }
}

export default App;

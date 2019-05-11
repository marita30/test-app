import React from 'react'
import './Person.css';
const Person = (props) => {
    return(
        <div className="person">
            <p onClick={props.click}>I'm {props.name} with {props.age} Years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.change}/>
        </div>
    );
}

export default Person;
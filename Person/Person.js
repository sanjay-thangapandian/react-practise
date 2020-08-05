import React from 'react';
import './Person.css'

const Person = (props) => {
    return  (
        <div className="person"> 
           <p onClick={props.click}>I'm a {props.name} and my age is {props.age}</p>
           <input type="text" onChange={props.changed} />
        </div>
    )
} 

export default Person;
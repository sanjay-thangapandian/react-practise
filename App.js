import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons:[
      {id:"1", name:"sanjay", age:"24"},
      {id:"2", name:"manish", age:"23"}
    ]
  }
  switchHandler = (newName) => {
    this.setState ({
      persons:[
        {name:newName, age:"24"},
        {name:"manish", age:"23"}
      ],
      showPersons : false
    })
  }
  deletePersonHandler =(personIndex) => {
    // const persons = this.state.persons;
    const persons =  [...this.state.persons];
    persons .splice(personIndex, 1);
    this.setState({persons : persons});
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons : ! doesShow })
  } 
  nameChangeHandler =(event) => {
    this.setState ({
      persons:[
        {name:event.target.value, age:"24"},
        {name:"manisha", age:"23"}
      ]
    })
  }
  render() {
    const buttonStyle  = {
       backgroundColor:'transparent',
       border:'1px solid blue',
       padding:'2px',
       margin:'1%',
       cursor: 'pointer'
    }

    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
             { this.state.persons.map((person, index) => {
                 return <Person 
                 click ={() =>this.deletePersonHandler(index)}
                 key = {person.id}
                 name = {person.name}
                 age = {person.age} />
             })}
            
          </div> 
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm Learning ReactJs</h1>
        <button style ={buttonStyle}
        onClick ={this.togglePersonsHandler}> Switch Names</button>
       
        {person}
      </div>
    );
  }
}

export default App;

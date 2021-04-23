import { render } from '@testing-library/react';
import React from 'react';
import CardList from '../components/CardList'; //.. one folder back
//import { robots } from './robots'; //not default, can export multiple, needs destructuring
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


//The virtual dom is a js obj, that collects this state
//and react uses this state to render and pass em down as props to pure functions
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    console.log('constructor');
  }

  //this is part of react, no need to use arrow func
  componentDidMount() { //make requests here

    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //         return response.json();
    // })
    // .then(users => {
    //     this.setState({ robots: users })
    // })


    //refactoring {} to oneliners //fetch is a method on the window obj
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(e => console.log(e));

    // this.setState({ robots: robots}) //using old robots.js file
    console.log('componentDidMount');
  }

  //in here "this" is not refering to app because 
  //the event happened in searchbox.js's input so this is refr to input
  // onSearchChange(event) { ......... }
  //TO FIX use arrow func
  onSearchChange = (event) => {
    //*To update state, never this.state.searchfield, use setState
    this.setState({ searchfield: event.target.value })
  }

  render() {
    console.log('render');

    const { robots, searchfield } = this.state;
    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobot} />
          </Scroll>

        </div>
      )

  }

}

export default App;
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList'; //.. one folder back
//import { robots } from './robots'; //not default, can export multiple, needs destructuring
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';



//The virtual dom is a js obj, that collects this state
//and react uses this state to render and pass em down as props to pure functions
function App (){
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  //   console.log('constructor');
  // }
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);

  //this is part of react {Component}, no need to use arrow func
  // componentDidMount() { 
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(users => this.setState({ robots: users }))
  //     .catch(e => console.log(e));

  //   // this.setState({ robots: robots}) //using old robots.js file
  //   console.log('componentDidMount');
  // }

  useEffect(() => { //this gets run everytime the func App renders/re-renders
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {setRobots(users)});
    console.log(count)
  }, [count]) //Only run if count changes
  //without this second param [], it renders in an infinite loop r-sc-rr
  //SKIP applying the useEffect if certain values haven't changed btw re-renders
  //leaving it empty is like componentDidMount

  const onSearchChange = (event) => {
    //this.setState({ searchfield: event.target.value })
    setSearchfield(event.target.value)
  }

  // const { robots, searchfield } = this.state;
  const filteredRobot = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Click me!</button>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobot} />
          </ErrorBoundry>
        </Scroll>

      </div>
    )

}

export default App;
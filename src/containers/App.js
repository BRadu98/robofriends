import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList'; //.. one folder back
//import { robots } from './robots'; //not default, can export multiple, needs destructuring
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

//redux actions
import { requestRobots, setSearchField } from '../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { //coming from reducers
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
//dispatch is what triggers(sends) the action into the reducers
const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
}) //()used to return obj, instead of: const mStP=(state)=>{return{players:state}};


//The virtual dom is a js obj, that collects this state
//and react uses this state to render and pass em down as props to pure functions
function App (props){
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  //   console.log('constructor');
  // }

  // const [count, setCount] = useState(0);
  // const [robots, setRobots] = useState([]);
  // const [searchfield, setSearchfield] = useState('');
  
  //using redux:
  const {searchField, onSearchChange, onRequestRobots, robots, isPending} = props


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
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => {setRobots(users)});
    // console.log(count)
    onRequestRobots()
  }, [onRequestRobots]) //Only run if [count or onRequestRobots] change
  //without this second param [], it renders in an infinite loop r-sc-rr
  //SKIP applying the useEffect if certain values haven't changed btw re-renders
  //leaving it empty is like componentDidMount

  // const onSearchChange = (event) => {
  //   //this.setState({ searchfield: event.target.value })
  //   setSearchfield(event.target.value)
  // }

  // const { robots, searchfield } = this.state;
  const filteredRobot = robots.filter(robot => { //without redux: searchfield
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  // return !robots.length ?
  return isPending ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        {/* <button onClick={()=>setCount(count+1)}>Click me!</button> */}
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobot} />
          </ErrorBoundry>
        </Scroll>

      </div>
    )

}

//connect is a higher order func, it returns another function
export default connect(mapStateToProps, mapDispatchToProps)(App);
//connect runs, interested in (thisPartOfState,thoseActions)
//then give those props to the app
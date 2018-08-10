import React, { Component } from 'react';
import Cardlist from './Cardlist';
import './App.css' ;

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => { return users.json()})
    .then(users => {
      this.setState({robots:users})
    })
  };
  render() {
    return (
     <div className='tc'>
       <h1>Robofriends</h1>
       <Cardlist robots={this.state.robots}/>
     </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Cardlist from './Cardlist';
import './App.css' ;
import Searchbox from './Searchbox';
import Scroll from './Scroll'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => { return users.json()})
    .then(users => {
      this.setState({robots:users})
    })
  };

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
       return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     })

    if (!this.state.robots.length) {
        return <h1 className='gold tc'>Loading...</h1>
       } else {
         return (
        <div className='tc'>
       <h1 className='f1 gold grow'>Robofriends</h1>
         <Searchbox searchChange={this.onSearchChange} />
         <Scroll>
          <Cardlist robots={filteredRobots}/> 
        </Scroll>
     </div>
    );
  }
}
}

export default App;

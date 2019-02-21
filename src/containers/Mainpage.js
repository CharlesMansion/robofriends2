import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import './Mainpage.css' ;
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

class Mainpage extends Component {
   
  componentDidMount() {
    this.props.onRequestRobots()
  };

  filteredRobots = (robots) => {
    return robots.filter(robot => {
       return robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase())
     })
     }

  render() {
    const {onSearchChange, robots, isPending } = this.props;
    return ( 
      <div className='tc'>
      <Header/>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
      { isPending ? <h1 className='gold tc'>Loading...</h1> :
          <ErrorBoundary>
            <Cardlist robots={this.filteredRobots(robots)}/> 
          </ErrorBoundary>
        }
        </Scroll>
     </div>
    );

}
}

export default Mainpage;

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

  render() {
    const { searchfield, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
       return robot.name.toLowerCase().includes(searchfield.toLowerCase())
     })

    return ( 
      <div className='tc'>
      <Header/>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
      { isPending ? <h1 className='gold tc'>Loading...</h1> :
          <ErrorBoundary>
            <Cardlist robots={filteredRobots}/> 
          </ErrorBoundary>
        }
        </Scroll>
     </div>
    );

}
}

export default Mainpage;

import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import './App.css' ;
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import { connect } from 'react-redux';
import { setSearchfield, requestRobots } from '../actions';
import ErrorBoundary from '../components/ErrorBoundary'

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots : state.requetRobots.robots,
    isPending : state.requetRobots.isPending,
    error : state.requetRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
   
  componentDidMount() {
    this.props.onRequestRobots()
  };


  render() {
    const { searchfield, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
       return robot.name.toLowerCase().includes(searchfield.toLowerCase())
     })

    return isPending ? 
        <h1 className='gold tc'>Loading...</h1>
      :
         (
        <div className='tc'>
       <Header/>
         <Searchbox searchChange={onSearchChange} />
         <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filteredRobots}/> 
          </ErrorBoundary>
        </Scroll>
     </div>
    );

}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

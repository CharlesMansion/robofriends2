import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchfield, requestRobots } from '../actions';
import Mainpage from './Mainpage';

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

  render() {
    return (
       <Mainpage {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

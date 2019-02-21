import React, {Component} from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button 
        className='ma3 pa2 f4 black bg-navy yellow shadow-5 dib br3'
        id='counter'
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Robot-o-meter : {this.state.count} 
      </button>
    );
  }
}

export default CounterButton
import React, { Component } from 'react'

import UpdatedComp from './HigerOrder';

 class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }
    
    UpdateClick = () => {
        this.setState({count: this.state.count + 1})
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <button onMouseEnter={this.UpdateClick}> {this.props.name} Increment {count} time</button>
      </div>
    )
  }
}

export default UpdatedComp(Counter)
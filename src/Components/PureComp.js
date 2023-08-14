import React, { Component } from 'react'

class PureComp extends Component {
  render() {
    return (
      <div>PureComp{this.props.name}</div>
    )
  }
}

export default PureComp
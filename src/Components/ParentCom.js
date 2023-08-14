import React, { Component } from 'react'

import PureCom from './PureComp'

import RegCom from './RegCom'

 class ParentCom extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:'Shiva'
        }
      }

      componentDidMount(){
        setInterval(() => {
            this.setState({name:'Shiva'})

        },3000)

      }


  render() {
    
    return (
      <div>
        ParentCom
        <RegCom name={this.state.name}/>
        <PureCom name={this.state.name}/>

      </div>

    )
  }
}
export default ParentCom

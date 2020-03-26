import React,{Component} from 'react'

class ConditionalRendering extends Component {
  constructor(props){
    super(props)
    this.state={
      isLogged:false
    }
  }

  render(){
    return this.state.isLogged ? (<div>Welcome Vishwas</div>):(<div>Welcome Prakash</div>)
  }
}
export default ConditionalRendering

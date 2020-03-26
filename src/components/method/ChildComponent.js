import React,{Component} from 'react'

class ChildComponent extends Component {
  render(){
    return(
      <div>
      <button onClick={()=>this.props.greetHandler('Sarvesh Dubey')}>Greet</button>
      </div>
    )
  }
}
export default ChildComponent

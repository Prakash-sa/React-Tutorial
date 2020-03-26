import React,{Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state={
      parentName:'Prakash'
    }
    this.greeting=this.greeting.bind(this)
  }
  greeting(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
  }
  render(){
    return(
      <div>
      <ChildComponent greetHandler={this.greeting}/>
      </div>
    )
  }
}
export default ParentComponent

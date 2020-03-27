import React,{Component} from 'react'

class Lifecycle extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'Prakash'
    }
    console.log('constructor')
  }

  static getDerivedStateFromProps(props,state){
    console.log('wrigetDerivedStateFromProps');
    return null
  }

  componentDidMount(){
    console.log('wricomponentDidMount');
  }

  shouldComponentUpdate(){
    console.log('wriComponentUpdate');
    return null
  }

  getSnapshotBeforeUpdate(){
    console.log('wrigetSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(){
    console.log('wricomponentDidUpdate');
  }

  changeState=()=> {
    this.setState({
      name:'CodeIt'
    })
  }


  render(){
    console.log('wrirender');
    return (
      <div>
        <div>Prakash</div>
        <button onClick={this.changeState}>Change State</button>
        </div>
    )
  }
}
export default Lifecycle

import React,{Component} from 'react'

class ErrorBoundary extends Component {
  constructor(props){
    super(props)
    this.state={
      hasError:false
    }
  }

  componentDidMount(){
    this.inputRef.current.focus()
    console.log(this.inputRef)
  }
  static getDerivedStateFromError(error){
    return {
      hasError:true
    }
  }

  render(){
    if(this.state.hasError)return <h1>Something went wrong</h1>
    else return this.props.children
  }
}
export default ErrorBoundary

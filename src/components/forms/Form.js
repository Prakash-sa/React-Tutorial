import React,{Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      comment:'',
      topic:''
    }
  }
  handleUsernameChanged=event=>{
    this.setState({
      username:event.target.value
    })
  }

  handleTextareaChanged=event=>{
    this.setState({
      comment:event.target.value
    })
  }

    handleSelectChanged=event=>{
      this.setState({
        topic:event.target.value
      })
    }
    handleSubmit = event=>{
      alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
      event.preventDefault()
    }

  render(){
    const {username,comments,topic}=this.state
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={username} onChange={this.handleUsernameChanged}/>
      </div>
      <div>
        <label>Comment</label>
        <textarea value={comments} onChange={this.handleTextareaChanged}/>
      </div>
      <div>
        <label>Topic</label>
        <select value={topic} onChange={this.handleSelectChanged}>
          <option value='react'>React</option>
          <option value='angular'>Angular</option>
          <option value='vue'>Vue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      </form>
    )
  }
}
export default Form

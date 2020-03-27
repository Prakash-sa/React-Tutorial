import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import EventBinding from './components/EventBinding'
import ParentComponent from './components/method/ParentComponent'
import ConditionalRendering from './components/ConditionalRendering'
import NameList from './components/method/NameList'
import Styling from './components/Styling'
import Form from './components/forms/Form'
import Lifecycle from './components/lifecycle/Lifecycle'
import Fragment from './components/fragment/Fragment'

class App extends Component{
  render(){
    return(
      <div className="App">
      <Fragment/>
      {/*<Lifecycle/>
      <Form/>
      <Styling/>
      <FunctionClick/>
      //<Message />
      //<Welcome name="Prakash" heroname="Avengers"/>
      //<Counter/>
      //<EventBinding/>
      //<ParentComponent/>
      <ConditionalRendering/>
      <NameList/>*/}
      </div>
    )
  }
}

export default App;

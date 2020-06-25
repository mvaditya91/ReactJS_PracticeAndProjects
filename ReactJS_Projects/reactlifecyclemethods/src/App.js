import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={count:0};
  }
  componentDidMount() {
    console.log("Component Mounted");
  }
  shouldComponentUpdate(props,newState){
    if(newState.count%3==0) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  handleClick(event) {
    console.log(event.type);
    this.setState({count:this.state.count+1});
  }
  render() {
    return <div className="App">
          <button type="submit" onClick={this.handleClick.bind(this)}>Click</button>
          <br/> {this.state.count}
          </div>
  }
}

export default App;
 
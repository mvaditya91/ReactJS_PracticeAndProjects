import React, { Component } from 'react';
import './App.css';

class App extends Component {
handleClick(event) {
const axios = require('axios');
axios.get('https://restcountries.eu/rest/v2/all').then(res=>{console.log(res.data);}).catch(error=>{console.log('Error',error)})
}
changeToUpperCase(event) {
  const axios = require('axios');
  axios.post('http://test-routes.herokuapp.com/test/uppercase',{message:'Be good'}).then(res=>{console.log(res.data)}).catch(error=>{console.log('Error',error)})
}
render() {
  return (
    <div className="App">
      <button onClick={this.handleClick.bind(this)}>Get Countries</button>
      <button onClick={this.changeToUpperCase.bind(this)}>Change to UpperCase</button>
    </div>
  );
}
}

export default App;



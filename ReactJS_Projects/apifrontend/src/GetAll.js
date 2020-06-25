import React from 'react';

class GetAll extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={products:[]};
  }

  componentDidMount() {
    const axios = require('axios');

    axios.get('http://localhost:8085/api/products/').then(res=>{
      console.log(res.data);
      this.setState({products:res.data});
    }).catch(error=>{
      console.error('Error',error)
    })
  }

  render() {
    return <div>
            Products:
           </div>
  }
}


export default GetAll;

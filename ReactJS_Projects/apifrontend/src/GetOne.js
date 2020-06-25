import React from 'react';

class GetOne extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={product:{}};
  }

  onIdChange = (e)=> {
    this.setState({id:e.target.value});
  }

  getProduct() {
    const axios = require('axios');
    axios.get("http://localhost:8085/api/products/"+this.state.id)
    .then(res=>{
      this.setState({product:res.data[0]});
    })
  }

  render() {
    return <div>
            Enter Product ID: <input type="text" onChange={this.onIdChange}/>
            <button onClick={this.getProduct.bind(this)}>Get Product</button>
            <br/>
            Name: {this.state.product.name}
            <br/>
            Description: {this.state.product.description}
            <br/>
            Price: {this.state.product.price}
           </div>
  }
}


export default GetOne;

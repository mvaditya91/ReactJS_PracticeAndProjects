import React from 'react';

class CreateRecords extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={product:{}};
  }

  onIdChange = (e) => {
    this.setState({id:e.target.value});
  }

  onNameChange = (e)=> {
    this.setState({name:e.target.value});
  }

  onDescriptionChange = (e)=> {
    this.setState({description:e.target.value});
  }

  onPriceChange = (e)=> {
    this.setState({price:e.target.value});
  }

  createProduct(event){
    const axios = require('axios');
    axios.post('http://localhost:8085/api/products/',{
                id:this.state.id,
                name:this.state.name,
                description:this.state.description,
                price:this.state.price})
                .then(res=>{
                  console.log(res.data);
                }).catch(error=>{
                  console.error('Error',error)
                })
  }
  

  render() {
    return <div>
            Enter Product ID: <input type="text" onChange={this.onIdChange}/> <br/>
            Enter Product Name: <input type="text" onChange={this.onNameChange}/> <br/>
            Enter Product Description: <input type="text" onChange={this.onDescriptionChange}/><br/>
            Enter Product price: <input type="text" onChange={this.onPriceChange}/><br/>
            
            <button onClick={this.createProduct.bind(this)}>Create Product</button> <br/>
          
            <h2>New Record Created </h2>
            Name: {this.state.name} <br/>
            Description: {this.state.description} <br/>
            Price: {this.state.price} <br/>         
           </div>
  }
}


export default CreateRecords;

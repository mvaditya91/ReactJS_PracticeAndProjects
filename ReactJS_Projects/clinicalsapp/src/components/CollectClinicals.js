import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';

class CollectClinicals extends React.Component {
    state ={}

    componentDidMount() {
        axios.get("http://localhost:8080/clinicalServices/api/patients/"+
                this.props.match.params.patientId)
                .then(response=>{
                this.setState(response.data);
                }).catch(error=>{
                    console.log('Error',error)
                })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
           patientId: this.props.match.params.patientId,
           componentName:this.componentName,
           componentValue:this.componentValue
        }
        axios.post("http://localhost:8080/clinicalServices/api/clinicals",data)
        .then(response=>{
            toast("Patient Data Saved Successfully!!",{
                autoClose:2000,
                position:toast.POSITION.TOP_LEFT
            })
        })
    }

    render() {
        return (<div>
                <h2>Patient Details</h2>
                First Name: {this.state.firstName} <br/>
                Last Name: {this.state.lastName}   <br/>
                Age: {this.state.age}
                <h2>Clinical Data</h2>
                <form>
                    Clinical Entry Type:
                    <select name="componentName" onChange={(event)=>{this.componentName=event.target.value}} style={{ marginLeft: '.5rem', marginRight:'2rem' }}> 
                    <option>Select One</option>
                        <option value="bp">Blood Pressure(sys/dys)</option>
                        <option value="hw">height/Weight</option>
                        <option value="heartRate">Heart Rate</option>
                    </select> 
                    Enter Value: <input type="text" name="componentValue" onChange={(event)=>{this.componentValue=event.target.value}} style={{ marginLeft: '.5rem' }}/>
                    <button onClick={this.handleSubmit.bind(this)} style={{ marginLeft: '.5rem' }}>Confirm</button>
                </form>
                <br/>
                <Link to="/">Go Back</Link>
                </div>)
    }
}

export default CollectClinicals;
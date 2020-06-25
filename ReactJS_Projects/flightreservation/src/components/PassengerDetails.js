import React from 'react';
import axios from 'axios';

class PassengerDetails extends React.Component {

state = {
    
}

componentDidMount() {
    axios.get("http://localhost:8080/flightServices/flights/"+this.props.match.params.flightId)
    .then(res=>{
        this.setState(res.data);
    }).catch(error=>{
        console.error('Error',error)})
}

handleSubmit(event) {
    event.preventDefault();
    const data = {
        flightId:this.props.match.params.flightId,
        passengerFirstname: this.passengerFirstName,
        passengerLastname: this.passengerLastName,
        passengerMiddleName:this.passengerMiddleName,
        passengerEmail:this.passengerEmail,
        passengerPhone:this.passengerPhone
    }
    axios.post("http://localhost:8080/flightServices/reservations",data)
    .then(res=>{
        this.props.history.push('/confirmReservation/'+res.data.id)
    })
}

render() {
    return <div id="styleid">
        <h2> Confirm Reservation: </h2>
        <h2> Flight Details: </h2>
        Airline: {this.state.operatingAirline} <br/>
        Departure City: {this.state.departureCity} <br/>
        Arrival City: {this.state.arrivalCity} <br/>
        Departure Date and Time: {this.state.estimatedDepartureTime} <br/>
        <form>
            First Name: <input type="text" name="passengerFirstName" onChange={(event)=>{this.passengerFirstName=event.target.value}}/><br/>
            Last Name: <input type="text" name="passengerLastName" onChange={(event)=>{this.passengerLastName=event.target.value}}/> <br/>
            Middle Name: <input type="text" name="passengerMiddleName" onChange={(event)=>{this.passengerMiddleName=event.target.value}}/> <br/>
            Email: <input type="text" name="passengerEmail" onChange={(event)=>{this.passengerEmail=event.target.value}}/> <br/>
            Phone Number: <input type="text" name="passengerPhone" onChange={(event)=>{this.passengerPhone=event.target.value}}/> <br/>
            <h3> Card Details:</h3>
            Card Number: <input type="text" name="cardNumber" onChange={(event)=>{this.cardNumber=event.target.value}}/> <br/>
            Card Expiry Date: <input type="text" name="cardExpiryDate" onChange={(event)=>{this.cardExpiryDate=event.target.value}}/> <br/>
            CVV Number: <input type="text" name="cvvNumber" onChange={(event)=>{this.cvvNumber=event.target.value}}/> <br/><br/>
            <button onClick={this.handleSubmit.bind(this)}>Confirm Reservation</button>
        </form>
    </div>
}
}

export default PassengerDetails;
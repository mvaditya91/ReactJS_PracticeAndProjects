import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DisplayFlights extends React.Component {

state ={
    flightData:[]
}

componentDidMount(){
    axios.get('http://localhost:8080/flightServices/flights?from='+
    this.props.match.params.from+
    '&to='+this.props.match.params.to+
    '&departureDate='+this.props.match.params.departureDate).then(
        res=> {
            const flightData = res.data;
            this.setState({flightData});
            console.log(flightData);
        }
    ).catch(error=>{
        console.error('Error',error)})
}

render() {
    return (<div>
        <h2>Flights:</h2>
        <table>
            <thead>
                <tr>
                    <td>Airline</td>
                    <td>Departure City</td>
                    <td>Arrival City</td>
                    <td>Departure Date and Time</td>
                </tr>
            </thead>
            <tbody>
                
                {this.state.flightData.map(flight=><RowCreator item={flight}/>)}
                
            </tbody>
        </table>
    </div>)
}
}


class RowCreator extends React.Component {
    render() {
        var flight = this.props.item;
        return <tr>
                <td>{flight.operatingAirline}</td>
                <td>{flight.departureCity}</td>
                <td>{flight.arrivalCity}</td>
                <td>{flight.estimatedDepartureTime}</td>
                <td><Link to={'/passengerDetails/'+flight.id}>Select</Link></td>
                </tr>
            
    }
}

export default DisplayFlights;
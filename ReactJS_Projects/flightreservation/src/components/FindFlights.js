import React from 'react';

class FindFlights extends React.Component {

handleSubmit(event){
this.props.history.push('displayFlights/'+this.from+'/'+this.to+'/'+this.departureDate);
}

render() {
    return <div>
        <h2> Find Flights </h2>
        <form>
            From: <input type="text" name="from" onChange={(event)=>{this.from=event.target.value}}/>
            To: <input type="text" name="to" onChange={(event)=>{this.to=event.target.value}}/>
            Departure Date: <input type="text" name="departureDate" onChange={(event)=>{this.departureDate=event.target.value}}/>
            <button onClick={this.handleSubmit.bind(this)}>Search Flights</button>
        </form>
    </div>
}
}

export default FindFlights;
import React from 'react';

class ConfirmReservation extends React.Component {
render() {
    return <div>
                <h2> Flight reservation Complete. </h2><br/><br/>
                <b> Confirmation Code: {this.props.match.params.reservationId}</b>
            </div>
}
}

export default ConfirmReservation;
import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react'
class EventEnd extends React.Component {
    
    getTimeToEndDateString(){        
        const endDate = new Date(Date.UTC(2018,6,21,0,0,0,0));
        var date = Date.now();
        var delta = (endDate - date)/1000;

        if(delta<0){return "0"}
        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        return days + "d " + hours + "h " + minutes + "m"
    }
  render() {
    var imgStyle = {
      "width": "100%"
    };
    const textStyle = {
      "z-index": "90000",
      "color": "white",
      "position": "absolute",
      "top": "38%",
      "left": "46%",
      "transform": "translate(-50%, -50%)",
      "font-size": "10vh"
    }
    return (
      <Card>
      <Card.Content>
        <Card.Header>Event Ends: {this.getTimeToEndDateString()}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div >
          Max Level Achievable: {30}
        </div>
      </Card.Content>
    </Card>
    )
  }
}

// Must export!
export default EventEnd;
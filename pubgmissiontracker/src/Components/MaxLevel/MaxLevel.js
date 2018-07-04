import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react'
class MaxLevel extends React.Component {
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
        <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
  }
}

// Must export!
export default MaxLevel;
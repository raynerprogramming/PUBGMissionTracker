import React from 'react';
import {Card, Image, Button, Input, Grid} from 'semantic-ui-react'
class CurrentLevelCard extends React.Component {
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
        <Card.Header>Event Pass Sanhok</Card.Header>
        <Card.Description>
        <Grid stretched centered>
          <Grid.Row centered>
          Current Level:<Input/>
          </Grid.Row>
          <Grid.Row centered>
          XP to Next Level:<Input/>
          </Grid.Row>
          </Grid>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        
      </Card.Content>
    </Card>
    )
  }
}

// Must export!
export default CurrentLevelCard;
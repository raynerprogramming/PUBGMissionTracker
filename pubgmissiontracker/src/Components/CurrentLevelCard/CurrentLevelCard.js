import React from 'react';
import {Card, Image, Button, Input, Grid} from 'semantic-ui-react'
import {reduce} from 'lodash'
class CurrentLevelCard extends React.Component {
  getDaysRemaining(){        
    const endDate = new Date(Date.UTC(2018,6,21,0,0,0,0));
    var date = Date.now();
    var delta = (endDate - date)/1000;

    if(delta<0){return "0"}
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);

    return days
}
  calculateMaxLevel(list,endDate,currentLevel,currentXP){
    var sum = 0
    var sumXP = 0

    //120 xp from daily mission, 120 xp from daily play time
    var remainingDailyXP = this.getDaysRemaining() * 240
    sumXP += remainingDailyXP

    var missionXP = list.forEach(function(group){
      group.Missions.forEach(function(mission){
        if(mission.completed){
          sum++;
          sumXP += mission.xp
        }
      })      
    })

    //level 1 400xp
    //level 6 200 xp
    //level 12 200 xp
    //level 20 200 xp
    //bluehole fuckup reward 400xp
    return Math.floor(sumXP/400)
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

    var MissionsList = this.props.list
    var endDate = this.props.endDate
    
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
        Max Level Achievable: {this.calculateMaxLevel(MissionsList,endDate,1,1)}
      </Card.Content>
    </Card>
    )
  }
}

// Must export!
export default CurrentLevelCard;
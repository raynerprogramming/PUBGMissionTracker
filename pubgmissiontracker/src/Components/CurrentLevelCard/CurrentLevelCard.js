import React from 'react';
import { Segment, Input, Grid, Icon } from 'semantic-ui-react'
import './CurrentLevelCard.css'

class CurrentLevelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 2,
      currentXP: 0,
      maxLevel: 0,
      previousXP: 0,
      averageDailyXp: 0,
      XPDetail: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    const min = +target.min;
    const max = +target.max;
    if (min && value < min) {
      value = min
    }
    if (max && value > max) {
      value = max
    }
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  getDaysRemaining() {
    const endDate = new Date(Date.UTC(2018, 6, 21, 0, 0, 0, 0));
    var date = Date.now();
    var delta = (endDate - date) / 1000;

    if (delta < 0) { return "0" }
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);

    return days
  }
  validate(evt) {
    var theEvent = evt// || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
      //   key = event.clipboardData.getData('text/plain');
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  getTimeToEndDateString() {
    const endDate = new Date(Date.UTC(2018, 6, 21, 0, 0, 0, 0));
    var date = Date.now();
    var delta = (endDate - date) / 1000;

    if (delta < 0) { return "0" }
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
  shouldUpdate(parent, local) {
    var shouldUpdate = false;
    if (parent.length === 0) {
      return true;
    }
    if (parent.length !== local.length) {
      return true;
    }
    parent.forEach(function (curr, index) {
      var temp = local[index];
      if (temp.XP !== curr.XP || temp.Title !== curr.Title) {
        shouldUpdate = true;
      }
    })
    return shouldUpdate
  }
  calculateMaxLevel(list) {
    var currentXP = +this.state.currentLevel * 400 + +this.state.currentXP

    var xpDetail = []
    var maxXP = 400 * 30
    var missionXP = 0

    //120 xp from daily mission, 120 xp from daily play time
    var remainingDailyXP = this.getDaysRemaining() * 240

    list.forEach(function (group) {
      group.Missions.forEach(function (mission) {
        if (mission.completed) {
          missionXP += mission.xp
        }
      })
    })
    //these should already be included in "currentLevel"
    //level 1 400xp    
    //bluehole fuckup reward 400xp
    var totalXP = missionXP + remainingDailyXP + currentXP

    var max = Math.floor((totalXP) / 400)
    if (max > 6 && this.state.currentLevel < 6) {
      missionXP += 200
      xpDetail.push({ Title: 'Level 6 Reward', XP: 200 })
    }
    max = Math.floor((totalXP) / 400)
    if (max > 12 && this.state.currentLevel < 12) {
      missionXP += 200
      xpDetail.push({ Title: 'Level 12 Reward', XP: 200 })
    }
    max = Math.floor((totalXP) / 400)
    if (max > 20 && this.state.currentLevel < 20) {
      missionXP += 200
      xpDetail.push({ Title: 'Level 20 Reward', XP: 200 })
    }


    var neededDailyXP = maxXP - missionXP - currentXP
    var dailyXP = remainingDailyXP > neededDailyXP ? neededDailyXP : remainingDailyXP

    if (this.state.averageDailyXp !== Math.ceil(dailyXP / this.getDaysRemaining()))
      this.setState({ averageDailyXp: Math.ceil(dailyXP / this.getDaysRemaining()) })

    xpDetail.push({ Title: 'Current Pass XP', XP: currentXP })
    xpDetail.push({ Title: 'DailyXP', XP: dailyXP })
    xpDetail.push({ Title: 'Total XP', XP: totalXP > maxXP ? maxXP : totalXP })
    if (this.shouldUpdate(this.props.detail, xpDetail))
      this.props.SetXPDetail(xpDetail)
    max = Math.floor((totalXP) / 400)
    return max > 30 ? 30 : max
  }
  render() {
    return (

      <Segment id="levelSegment">
        <Grid className="computer only">
          <Grid.Row>
            <Grid.Column width={12}>
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column id="levelText" width={4}> Current Level:</Grid.Column>
                  <Grid.Column width={4}> <Input id="level" type="text" onKeyPress={this.validate} min="1" max="30" name="currentLevel" value={this.state.currentLevel} onChange={this.handleInputChange} />         </Grid.Column>
                  <Grid.Column id="levelText" width={4}> Current XP:</Grid.Column>
                  <Grid.Column width={4}><Input id="xp" type="text" onKeyPress={this.validate} min="0" max="399" name="currentXP" value={this.state.currentXP} onChange={this.handleInputChange} />  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={4}>
              <Grid.Row id='sanhok'>EVENT PASS: SANHOK</Grid.Row>
              <Grid.Row>
                <Icon name="clock outline" /> {this.getTimeToEndDateString()}
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered id="maxAchieve" >
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column id="yellow" width={3}>Max Level Achievable: {this.calculateMaxLevel(this.props.list)}   </Grid.Column>
            <Grid.Column id="yellow" width={3}>Average Daily XP needed: {this.state.averageDailyXp > 0 ? this.state.averageDailyXp : 0}/240</Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid className="tablet mobile only">
          <Grid.Row>
            <Grid.Column id='sanhokMobile' width={7}>EVENT PASS: SANHOK</Grid.Column>
            <Grid.Column width={1} />
            <Grid.Column width={7} id='clockMobile'>
              <Icon name="clock outline" /> {this.getTimeToEndDateString()}
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Grid>
                <Grid.Row>
                  <Grid.Column id="levelTextMobile" width={6}> Current Level:</Grid.Column>
                  <Grid.Column width={9} id="inputAlign"> <Input id="level" type="text" onKeyPress={this.validate} min="1" max="30" name="currentLevel" value={this.state.currentLevel} onChange={this.handleInputChange} /></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column id="levelTextMobile" width={6}> Current XP:</Grid.Column>
                  <Grid.Column width={9} id="inputAlign"><Input id="xp" type="text" onKeyPress={this.validate} min="0" max="399" name="currentXP" value={this.state.currentXP} onChange={this.handleInputChange} />  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="computer only" centered id="maxAchieve" >
            <Grid.Column id="yellow" centered width={7}>Max Level Achievable: {this.calculateMaxLevel(this.props.list)}   </Grid.Column>
            <Grid.Column centered width={1} />
            <Grid.Column id="yellow" centered width={7}>Average Daily XP needed: {this.state.averageDailyXp > 0 ? this.state.averageDailyXp : 0}/240</Grid.Column>
            <Grid.Column centered width={1} />
          </Grid.Row>
          <Grid.Row className="tablet mobile only" centered id="maxAchieve" >
            <Grid.Column id="yellowMobile" centered width={7}>Max Level Achievable: {this.calculateMaxLevel(this.props.list)}   </Grid.Column>
            <Grid.Column centered width={1} />
            <Grid.Column id="yellowMobile" centered width={7}>Average Daily XP needed: {this.state.averageDailyXp > 0 ? this.state.averageDailyXp : 0}/240</Grid.Column>
            <Grid.Column centered width={1} />
          </Grid.Row>

        </Grid>

      </Segment>
    )
  }
}

// Must export!
export default CurrentLevelCard;
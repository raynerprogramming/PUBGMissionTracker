import React, { Component } from 'react';
import './App.css';
import {
  Grid, Image
} from 'semantic-ui-react'
import './semantic/dist/semantic.min.css';
import CurrentLevelCard from './Components/CurrentLevelCard/CurrentLevelCard.js'
import EventEnd from './Components/EventEnd/EventEnd.js'
import XPDetail from './Components/XPDetail/XPDetail.js'
import MissionsList from './Components/MissionsList/MissionsList.js'
import GetDefaultMissions from './MissionList.js'
import logo from './images/logo.png'
import './index.css';

export default class App extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.ToggleMissionComplete = this.ToggleMissionComplete.bind(this)
    this.SetXPDetail = this.SetXPDetail.bind(this)
    this.toggleAll = this.toggleAll.bind(this)
    var missionState = JSON.parse(localStorage.getItem('missionState'))
    missionState = missionState ? missionState : GetDefaultMissions()
    this.state = {
      XPDetail: [],
      MissionsList: missionState
    }
  }
  toggleAll = (e, titleProps) => {
    const { index } = titleProps
    e.stopPropagation();
    var newList = this.state.MissionsList
    newList[index].Missions.forEach(function (mission) {
      mission.completed = !mission.completed;
    })
    
    this.setState({ MissionsList: newList })
  }
  ToggleMissionComplete(index, index2) {
    var newVal = !this.state.MissionsList[index].Missions[index2].completed
    var newList = this.state.MissionsList
    newList[index].Missions[index2].completed = newVal
    localStorage.setItem('missionState', JSON.stringify(newList))
    this.setState({ MissionsList: newList })
  }
  SetXPDetail(detail) {
    this.setState({ XPDetail: detail })
  }

  render() {
    //background: 'linear-gradient(127deg, rgba(16,3,10,.9), rgba(16,3,10,0) 80.71%),      linear-gradient(217deg, rgba(2,0,2,.9), rgba(2,0,2,.1) 80.71%),      linear-gradient(160deg, rgba(55,57,52,.8), rgba(55,57,52,0) 99.71%)',
    const style = {
      background: 'linear-gradient(to bottom right,rgba(2,0,2,.9),rgba(16,3,10,.9))',
      'min-height': '100%',
      'font-family': 'Teko'
    }
    return (
      <div style={style}>
        <Grid stretched centered>
          <Grid.Row centered>
            <Grid.Column width={6}><Image src={logo}></Image></Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column className="App-header-text" width={16}>MISSION TRACKER</Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}><CurrentLevelCard detail={this.state.XPDetail} list={this.state.MissionsList} endDate={Date.now(2018, 6, 21, 0, 0, 0, 0)} SetXPDetail={this.SetXPDetail}></CurrentLevelCard></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}><MissionsList toggleAll={this.toggleAll} list={this.state.MissionsList} detail={this.state.XPDetail} toggleMissionComplete={this.ToggleMissionComplete}></MissionsList></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>

        </Grid>
        <div className="footer">PUBGMissionTracker.com is not associated with PLAYERUNKOWN'S BATTLEGROUNDS, Bluehole inc, Steam or Valve Corp.

        </div>
      </div>
    );
  }
}

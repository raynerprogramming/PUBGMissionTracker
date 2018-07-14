import React, { Component } from 'react';
import './App.css';
import {
  Grid
} from 'semantic-ui-react'
import './semantic/dist/semantic.min.css';
import CurrentLevelCard from './Components/CurrentLevelCard/CurrentLevelCard.js'
import MissionsList from './Components/MissionsList/MissionsList.js'
import GetDefaultMissions from './MissionList.js'
import './index.css';

export default class App extends Component {
  state = {}
  constructor(props) {
    super(props)
    this.ToggleMissionComplete = this.ToggleMissionComplete.bind(this)
    this.SetXPDetail = this.SetXPDetail.bind(this)
    this.toggleAll = this.toggleAll.bind(this)
    var currentVersion = "1.0"
    var localVersion = JSON.parse(localStorage.getItem('missionVersion'))
    var missionState;
    if(localVersion && currentVersion === localVersion.version){
      missionState = JSON.parse(localStorage.getItem('missionState'))
    }
    missionState = missionState ? missionState : GetDefaultMissions()
    this.state = {
      XPDetail: [],
      MissionsList: missionState
    }
  }
  createMarkup(){
    var qs = Math.round(Math.random() * 10000000);
    return {__html: '<iframe src="http://ylx-1.com/bnr_xload.php?section=Side&pub=448495&format=728x90&ga=g&xt=153107011855173&xtt='+qs+'" width="728" height="90" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"></iframe>'}
  }
  createMobileMarkup(){
    var qs = Math.round(Math.random() * 10000000);
    return {__html:'<iframe src="http://ylx-1.com/bnr_xload.php?section=Side&pub=448495&format=300x50&ga=g&xt=153107024954583&xtt='+qs+'" width="300" height="50" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts"></iframe>'}
 
    
  }
  toggleAll = (e, titleProps) => {
    const { index } = titleProps
    e.stopPropagation();
    var newList = this.state.MissionsList
    newList[index].Missions.forEach(function (mission) {
      mission.completed = !mission.completed;
    })

    localStorage.setItem('missionVersion', JSON.stringify({version:"1.0"}))
    this.setState({ MissionsList: newList })
  }
  ToggleMissionComplete(index, index2) {
    var newVal = !this.state.MissionsList[index].Missions[index2].completed
    var newList = this.state.MissionsList
    newList[index].Missions[index2].completed = newVal
    localStorage.setItem('missionState', JSON.stringify(newList))
    localStorage.setItem('missionVersion', JSON.stringify({version:"1.0"}))
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
        <Grid stretched centered style={{ 'margin-right': '0' }}>

          {/* <Grid.Row centered>
            <Grid.Column width={6}><Image src={logo}></Image></Grid.Column>
          </Grid.Row> */}
          <Grid.Row className="computer only" centered>
            <Grid.Column id="App-logo-text" width={12}>PLAYERUNKOWN'S BATTLEGROUNDS</Grid.Column>
          </Grid.Row>
          <Grid.Row className="computer only">
            <Grid.Column className="App-header-text" width={16}>MISSION TRACKER</Grid.Column>
          </Grid.Row>
          <Grid.Row className="tablet mobile only" centered>
            <Grid.Column id="App-logo-text-mobile-first" width={16}>PLAYERUNKOWN'S</Grid.Column>
          </Grid.Row>
          <Grid.Row className="tablet mobile only" centered>
            <Grid.Column id="App-logo-text-mobile" width={16}>BATTLEGROUNDS</Grid.Column>
          </Grid.Row>
          <Grid.Row className="tablet mobile only">
            <Grid.Column className="App-header-text-mobile" width={16}>MISSION TRACKER</Grid.Column>
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
          <Grid.Row className="computer only">
            <div  dangerouslySetInnerHTML={this.createMarkup()} id="ad"></div>
          </Grid.Row>
          <Grid.Row className="tablet mobile only">
            <div  dangerouslySetInnerHTML={this.createMobileMarkup()} id="ad"></div>
          </Grid.Row>
        </Grid>
        <div className="footer">PUBGMissionTracker.com is not associated with PLAYERUNKOWN'S BATTLEGROUNDS, Bluehole inc, Steam or Valve Corp.
        <br/>
        <br/>
        Contact: admin@pubgmissiontracker.com
        </div>
        
      </div>
    );
  }
}

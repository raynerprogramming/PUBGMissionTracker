import React, { Component } from 'react';
import './App.css';
import {
  Menu,
  Container,
  Segment,
  Button,
  Icon,
  Input,
  Grid,
  List,
  Divider,
  Image,
  Card
} from 'semantic-ui-react'
import './semantic/dist/semantic.min.css';
import CurrentLevelCard from './Components/CurrentLevelCard/CurrentLevelCard.js'
import EventEnd from './Components/EventEnd/EventEnd.js'
import MaxLevel from './Components/MaxLevel/MaxLevel.js'
import MissionsList from './Components/MissionsList/MissionsList.js'

class App extends Component {


  render() {
    const style = {
      background: 'linear-gradient(black, grey)',
      'min-height': '100%'
    }
    const headerStyle = {
      'color': '-webkit-linear-gradient(#eee, #333)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      'font-size': '4rem',
      'line-height': '4rem',
      'font-family': 'Roboto,sans-serif',
      'font-style': 'normal',
      'font-weight': 'bold',
      'padding-top': '50px',
      'text-shadow': '5px 5px 10px rgba(0,0,0,0.75)'
    }
    return (
      <div style={style}>
        <Grid stretched centered>
          <Grid.Row centered>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={3}><CurrentLevelCard></CurrentLevelCard></Grid.Column>
            <Grid.Column style={headerStyle} width={8}>PUBG MISSION TRACKER</Grid.Column>
            <Grid.Column width={3}><EventEnd></EventEnd></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}><MaxLevel></MaxLevel></Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}><MissionsList></MissionsList></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

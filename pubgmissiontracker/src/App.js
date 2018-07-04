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
    return (
      <div>
        <Grid stretched centered>
          <Grid.Row centered>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={4}><CurrentLevelCard></CurrentLevelCard></Grid.Column>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={4}><EventEnd></EventEnd></Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
          <Grid.Column width={2}></Grid.Column>          
          <Grid.Column width={12}><MaxLevel></MaxLevel></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
          <Grid.Column width={2}></Grid.Column>          
          <Grid.Column width={12}><MissionsList></MissionsList></Grid.Column>
          <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

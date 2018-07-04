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

export default class App extends Component {
  CreateMission(text, xp) {
    return {
      "text": text,
      "xp": xp,
      "completed": true
    };
  }

  MissionsList = [
    {
      Title: "Normal",
      "Missions": [
        this.CreateMission("[Linked Mission: 1/5] Deal at least 500 Damage and kill at least 1 player in a single game", 160),
        this.CreateMission("[Linked Mission: 2/5] Heal at least 200 HP 5 times in a single game", 160),
        this.CreateMission("[Linked Mission: 3/5] Locked", 160),
        this.CreateMission("[Linked Mission: 4/5] Locked", 160),
        this.CreateMission("[Linked Mission: 5/5] Locked", 320),
        this.CreateMission("Travel a total of 100km or more in vehicles", 400),
        this.CreateMission("Play 30 games on Erangel and Miramar", 400),
        this.CreateMission("Kill 100 players", 400),
        this.CreateMission("Reach the top 10 on Erangel 5 times", 300),
        this.CreateMission("Revive teammates 10 times", 300),
        this.CreateMission("Kill a player who's at least 300m away using an SR", 300),
        this.CreateMission("Play 5 Squad games where you survived for at least 30 minutes and killed at least 1 player", 300)
      ]
    },
    {
      Title: "SanHok",
      "Missions": [
        this.CreateMission("[Linked Mission: 1/2] Play on Sanhok at least 10 times", 40),
        this.CreateMission("[Linked Mission: 2/2] Play on Sanhok at least 5 hours", 60),
        this.CreateMission("[Linked Mission: 1/4] Reach top 10 on Sanhok in Solos", 40),
        this.CreateMission("[Linked Mission: 2/4] Survive for 15 minutes in Solos without taking or dealing any damage on Sanhok", 40),
        this.CreateMission("[Linked Mission: 3/4] Reach top 10 without riding in a vehicle on Sanhok in solos", 40),
        this.CreateMission("[Linked Mission: 4/4] Locked", 60),
        this.CreateMission("[Linked Mission: 1/4] Kill a player with a QBZ", 40),
        this.CreateMission("[Linked Mission: 2/4] Play 3 games on Sanhok where you got a least 1 headshot kill in Solos", 40),
        this.CreateMission("[Linked Mission: 3/4] Locked", 40),
        this.CreateMission("[Linked Mission: 4/4] Locked", 60),
        this.CreateMission("[Linked Mission: 1/5] Kill a player with a punch on Sanhok", 40),
        this.CreateMission("[Linked Mission: 2/5] Locked", 40),
        this.CreateMission("[Linked Mission: 3/5] Locked", 40),
        this.CreateMission("[Linked Mission: 4/5] Locked", 40),
        this.CreateMission("[Linked Mission: 5/5] Locked", 60),
        this.CreateMission("[Linked Mission: 1/1] Revive 10 teammates on Sanhok", 40),
        this.CreateMission("[Linked Mission: 2/2] Locked", 40),
        this.CreateMission("[Linked Mission: 3/3] Locked", 40),
        this.CreateMission("[Linked Mission: 4/4] Locked", 40),
        this.CreateMission("[Linked Mission: 5/5] Locked", 60)
      ]
    },
    {
      Title: "Week 1",
      "Missions": [
        this.CreateMission("Kill 10 players", 100),
        this.CreateMission("Drive 10km in any vehicle in FPP on Miramar", 100),
        this.CreateMission("Kill 3 players using handguns", 100),
        this.CreateMission("Travel 50km by any means", 100),
        this.CreateMission("Reach top 3 and kill less than 3 players in Solos", 100),
        this.CreateMission("Reach top 5 5times", 100),
        this.CreateMission("Various ways to kill", 200),
        this.CreateMission("Get a kill using a melee weapon", 20),
        this.CreateMission("Get a kill with headshot", 20),
        this.CreateMission("Get a kill with a molotov", 20),
        this.CreateMission("Get a kill with a vehicle", 20),
        this.CreateMission("Get a kill with a frag grenade", 20)
      ]
    },
    {
      Title: "Week 2",
      "Missions": [
        this.CreateMission("Play on Miramar for 3 hours or more", 100),
        this.CreateMission("Heal for 300 HP total", 100),
        this.CreateMission("Kill 2 players using a pan", 100),
        this.CreateMission("Kill 3 players with vehicle", 100),
        this.CreateMission("Take at least 500 damage from the bluezone", 100),
        this.CreateMission("Refuel 10 times total", 100),
        this.CreateMission("Destroy helmets, vests, and vehicles 3 times each", 200),
        this.CreateMission("Destroy 3 helmets", 20),
        this.CreateMission("Destroy 3 vests", 20),
        this.CreateMission("Destroy 3 vehicles", 20)
      ]
    },
    {
      Title: "Week 3",
      "Missions": [
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 200),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20)
      ]
    },
    {
      Title: "Week 4",
      "Missions": [
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 100),
        this.CreateMission("Locked", 200),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20),
        this.CreateMission("Locked", 20)
      ]
    }
  ]
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
            <Grid.Column width={3}><CurrentLevelCard list={this.MissionsList} endDate={Date.now(2018,6,21,0,0,0,0)}></CurrentLevelCard></Grid.Column>
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
            <Grid.Column width={14}><MissionsList list={this.MissionsList}></MissionsList></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

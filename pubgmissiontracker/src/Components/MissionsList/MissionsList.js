import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'

import Missions from '../Missions/Missions.js'

export default class TestAccordion extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        function CreateMission(text, xp) {
            return {
                "text": text,
                "xp": xp,
                "completed": true
            };
        }
        const MissionsList = [
            {
                Title: "Normal",
                "Missions": [
                    CreateMission("[Linked Mission: 1/5] Deal at least 500 Damage and kill at least 1 player in a single game", 160),
                    CreateMission("[Linked Mission: 2/5] Heal at least 200 HP 5 times in a single game", 160),
                    CreateMission("[Linked Mission: 3/5] Locked", 160),
                    CreateMission("[Linked Mission: 4/5] Locked", 160),
                    CreateMission("[Linked Mission: 5/5] Locked", 320),
                    CreateMission("Travel a total of 100km or more in vehicles", 400),
                    CreateMission("Play 30 games on Erangel and Miramar", 400),
                    CreateMission("Kill 100 players", 400),
                    CreateMission("Reach the top 10 on Erangel 5 times", 300),
                    CreateMission("Revive teammates 10 times", 300),
                    CreateMission("Kill a player who's at least 300m away using an SR", 300),
                    CreateMission("Play 5 Squad games where you survived for at least 30 minutes and killed at least 1 player", 300)
                ]
            },
            {
                Title: "SanHok",
                "Missions": [
                    CreateMission("[Linked Mission: 1/2] Play on Sanhok at least 10 times", 40),
                    CreateMission("[Linked Mission: 2/2] Play on Sanhok at least 5 hours", 60),
                    CreateMission("[Linked Mission: 1/4] Reach top 10 on Sanhok in Solos", 40),
                    CreateMission("[Linked Mission: 2/4] Survive for 15 minutes in Solos without taking or dealing any damage on Sanhok", 40),
                    CreateMission("[Linked Mission: 3/4] Reach top 10 without riding in a vehicle on Sanhok in solos", 40),
                    CreateMission("[Linked Mission: 4/4] Locked", 60),
                    CreateMission("[Linked Mission: 1/4] Kill a player with a QBZ", 40),
                    CreateMission("[Linked Mission: 2/4] Play 3 games on Sanhok where you got a least 1 headshot kill in Solos", 40),
                    CreateMission("[Linked Mission: 3/4] Locked", 40),
                    CreateMission("[Linked Mission: 4/4] Locked", 60),
                    CreateMission("[Linked Mission: 1/5] Kill a player with a punch on Sanhok", 40),
                    CreateMission("[Linked Mission: 2/5] Locked", 40),
                    CreateMission("[Linked Mission: 3/5] Locked", 40),
                    CreateMission("[Linked Mission: 4/5] Locked", 40),
                    CreateMission("[Linked Mission: 5/5] Locked", 60),
                    CreateMission("[Linked Mission: 1/1] Revive 10 teammates on Sanhok", 40),
                    CreateMission("[Linked Mission: 2/2] Locked", 40),
                    CreateMission("[Linked Mission: 3/3] Locked", 40),
                    CreateMission("[Linked Mission: 4/4] Locked", 40),
                    CreateMission("[Linked Mission: 5/5] Locked", 60)
                ]
            },
            {
                Title: "Week 1",
                "Missions": [
                    CreateMission("Kill 10 players", 100),
                    CreateMission("Drive 10km in any vehicle in FPP on Miramar", 100),
                    CreateMission("Kill 3 players using handguns", 100),
                    CreateMission("Travel 50km by any means", 100),
                    CreateMission("Reach top 3 and kill less than 3 players in Solos", 100),
                    CreateMission("Reach top 5 5times", 100),
                    CreateMission("Various ways to kill", 200),
                    CreateMission("Get a kill using a melee weapon", 20),
                    CreateMission("Get a kill with headshot", 20),
                    CreateMission("Get a kill with a molotov", 20),
                    CreateMission("Get a kill with a vehicle", 20),
                    CreateMission("Get a kill with a frag grenade", 20)
                ]
            },
            {
                Title: "Week 2",
                "Missions": [
                    CreateMission("Play on Miramar for 3 hours or more", 100),
                    CreateMission("Heal for 300 HP total", 100),
                    CreateMission("Kill 2 players using a pan", 100),
                    CreateMission("Kill 3 players with vehicle", 100),
                    CreateMission("Take at least 500 damage from the bluezone", 100),
                    CreateMission("Refuel 10 times total", 100),
                    CreateMission("Destroy helmets, vests, and vehicles 3 times each", 200),
                    CreateMission("Destroy 3 helmets", 20),
                    CreateMission("Destroy 3 vests", 20),
                    CreateMission("Destroy 3 vehicles", 20)
                ]
            },
            {
                Title: "Week 3",
                "Missions": [
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 200),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20)
                ]
            },
            {
                Title: "Week 4",
                "Missions": [
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 100),
                    CreateMission("Locked", 200),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20),
                    CreateMission("Locked", 20)
                ]
            }
        ]
        return (
            <Segment >
                <Accordion >
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        {MissionsList[0].Title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0} content={ <Missions list={MissionsList[0]}></Missions>} />
                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        {MissionsList[1].Title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1} content={ <Missions list={MissionsList[1]}></Missions>} />
                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        {MissionsList[2].Title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2} content={ <Missions list={MissionsList[2]}></Missions>} />
                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        {MissionsList[3].Title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3} content={ <Missions list={MissionsList[3]}></Missions>} />
                    <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        {MissionsList[4].Title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4} content={ <Missions list={MissionsList[4]}></Missions>} />
                    <Accordion.Title active={activeIndex === 5} index={6} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        {MissionsList[5].Title}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5} content={ <Missions list={MissionsList[5]}></Missions>} />
                </Accordion>
            </Segment>
        )
    }
}
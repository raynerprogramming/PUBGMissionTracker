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
                "xp": xp
            };
        }
        const MissionsList = [
            {
                Title: "Normal",
                "Missions": [
                    CreateMission(1, 160),
                    CreateMission(1, 160),
                    CreateMission(1, 160),
                    CreateMission(1, 160),
                    CreateMission(1, 320),
                    CreateMission(1, 400),
                    CreateMission(1, 400),
                    CreateMission(1, 400),
                    CreateMission(1, 300),
                    CreateMission(1, 300),
                    CreateMission(1, 300),
                    CreateMission(1, 300)
                ]
            },
            {
                Title: "SanHok",
                "Missions": [
                    CreateMission(1, 40),
                    CreateMission(1, 60),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 60),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 60),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 60),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 40),
                    CreateMission(1, 60)
                ]
            },
            {
                Title: "Week 1",
                "Missions": [
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 200),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20)
                ]
            },
            {
                Title: "Week 2",
                "Missions": [
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 200),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20)
                ]
            },
            {
                Title: "Week 3",
                "Missions": [
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 200),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20)
                ]
            },
            {
                Title: "Week 4",
                "Missions": [
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 100),
                    CreateMission(1, 200),
                    CreateMission(1, 20),
                    CreateMission(1, 20),
                    CreateMission(1, 20)
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
import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'

import Missions from '../Missions/Missions.js'

export default class MissionsList extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        var MissionsList = this.props.list

        return (
            <Segment >

                <div>Missions completed: {MissionsList[0].Missions.reduce( x => x.completed?x+1:x)}</div>
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
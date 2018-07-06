import React, { Component } from 'react'
import { Accordion, Icon, Segment, Grid } from 'semantic-ui-react'
import Missions from '../Missions/Missions.js'
import './MissionsList.css'

export default class MissionsList extends Component {
    state = { activeIndex: 0 }
    MissionsList = this.props.list

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    getGroupTotalXP(group) {
        var groupXP = 0
        group.Missions.forEach(function (mission) {
            if (mission.completed) {
                groupXP += mission.xp
            }
        })
        return groupXP
    }
    getGroupCompletions(group) {
        var completed = 0
        group.Missions.forEach(function (mission) {
            if (mission.completed) {
                completed++
            }
        })
        return completed + "/" + group.Missions.length
    }
    getTitleText(index) {
        return (
            <Grid>
                <Grid.Row className="hover" centered>
                    <Grid.Column width={1}><div className="titleTextStyle">{this.MissionsList[index].Title}</div></Grid.Column>
                    <Grid.Column width={1}><div className="titleCompletionTextStyle">{this.getGroupCompletions(this.MissionsList[index])}</div></Grid.Column>
                    <Grid.Column width={11}></Grid.Column>
                    <Grid.Column width={2}><div className="xpStyle"> {this.getGroupTotalXP(this.MissionsList[index])} XP</div></Grid.Column>
                    <Grid.Column width={1}><Icon name='dropdown' /></Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Segment className="segmentStyle">
                <Accordion >
                    <Accordion.Title className="titleStyle" active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        {this.getTitleText(0)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0} content={<Missions list={this.MissionsList[0]} index={0} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title className="titleStyle" active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        {this.getTitleText(1)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1} content={<Missions list={this.MissionsList[1]} index={1} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title className="titleStyle" active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        {this.getTitleText(2)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2} content={<Missions list={this.MissionsList[2]} index={2} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title className="titleStyle" active={activeIndex === 3} index={3} onClick={this.handleClick}>
                        {this.getTitleText(3)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3} content={<Missions list={this.MissionsList[3]} index={3} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title className="titleStyle" active={activeIndex === 4} index={4} onClick={this.handleClick}>
                        {this.getTitleText(4)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4} content={<Missions list={this.MissionsList[4]} index={4} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title className="titleStyle" active={activeIndex === 5} index={5} onClick={this.handleClick}>
                        {this.getTitleText(5)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5} content={<Missions list={this.MissionsList[5]} index={5} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />
                </Accordion>
            </Segment>
        )
    }
}
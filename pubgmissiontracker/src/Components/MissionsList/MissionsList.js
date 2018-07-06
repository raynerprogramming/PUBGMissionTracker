import React, { Component } from 'react'
import { Accordion, Icon, Segment,Grid } from 'semantic-ui-react'

import Missions from '../Missions/Missions.js'

export default class MissionsList extends Component {
    state = { activeIndex: 0 }
    MissionsList = this.props.list
    segmentStyle = {
        'background': 'rgba(0,0,0,0)',
        'font-size': '1.5em',
        'font-family': 'Teko',
        'color': 'white',
    }
    titleStyle = {
        'background': 'rgba(0,0,0,0)',
        'font-size': '1.5em',
        'font-family': "Teko, sans-serif",
        'font-weight': 100,
        'color': 'white',
        'border-bottom': 'rgb(58,57,61) solid 3px',
        'margin-bottom': '5px',
        'line-height': '.5em',
        'padding-top': '5px'
    }
    contentStyle = {
        'font-size': '1.25em',
    }
    xpStyle = {
        'float': 'right',
        'padding-top': '15px'
    }
    titleTextStyle ={        
        'padding-top': '15px'
    }
    titleCompletionTextStyle ={        
        'padding-top': '15px',
        'font-size':'.8em'
    }
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
                    <Grid.Row centered>
                        <Grid.Column width={1}><div style={this.titleTextStyle}>{this.MissionsList[index].Title}</div></Grid.Column>
                        <Grid.Column width={1}><div style={this.titleCompletionTextStyle}>{this.getGroupCompletions(this.MissionsList[index])}</div></Grid.Column>
                        <Grid.Column width={11}></Grid.Column>
                        <Grid.Column width={2}><div style={this.xpStyle}> {this.getGroupTotalXP(this.MissionsList[index])} XP</div></Grid.Column>
                        <Grid.Column width={1}><Icon name='dropdown' /></Grid.Column>
                    </Grid.Row>                    
                </Grid>
        )
    }

    render() {
        const { activeIndex } = this.state


        return (
            <Segment style={this.segmentStyle}>
                <Accordion >
                    <Accordion.Title style={this.titleStyle} active={activeIndex === 0} index={0} onClick={this.handleClick}>
                    {this.getTitleText(0)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0} content={ <Missions list={this.MissionsList[0]} index={0} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title  style={this.titleStyle} active={activeIndex === 1} index={1} onClick={this.handleClick}>
                    {this.getTitleText(1)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1} content={ <Missions list={this.MissionsList[1]} index={1} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title  style={this.titleStyle} active={activeIndex === 2} index={2} onClick={this.handleClick}>
                    {this.getTitleText(2)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2} content={ <Missions list={this.MissionsList[2]} index={2} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title  style={this.titleStyle} active={activeIndex === 3} index={3} onClick={this.handleClick}>
                    {this.getTitleText(3)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3} content={ <Missions list={this.MissionsList[3]} index={3} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title  style={this.titleStyle} active={activeIndex === 4} index={4} onClick={this.handleClick}>
                    {this.getTitleText(4)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 4} content={ <Missions list={this.MissionsList[4]} index={4} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />

                    <Accordion.Title  style={this.titleStyle} active={activeIndex === 5} index={6} onClick={this.handleClick}>
                    {this.getTitleText(5)}
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 5} content={ <Missions list={this.MissionsList[5]} index={5} toggleMissionComplete={this.props.toggleMissionComplete}></Missions>} />
                </Accordion>
            </Segment>
        )
    }
}
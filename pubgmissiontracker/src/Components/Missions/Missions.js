import React from 'react';
import { List, Grid } from 'semantic-ui-react'
import './Missions.css'

class Missions extends React.Component {
    getStyle() {
        return {

        }
    }
    getMobileDivStyle(mission) {
        return {
            'background': mission.completed ? 'linear-gradient(to right,rgba(22,38,34,.8), rgba(16,69,53,.8))' : 'linear-gradient(to right, rgb(26,26,30,.8), rgba(34,33,40,.8)',
            'margin-bottom': '5px',
            'line-height': '1.25em',
            'font-size': '1em'
        }
    }
    getDivStyle(mission) {
        return {
            'background': mission.completed ? 'linear-gradient(to right,rgba(22,38,34,.8), rgba(16,69,53,.8))' : 'linear-gradient(to right, rgb(26,26,30,.8), rgba(34,33,40,.8)',
            'margin-bottom': '20px'
        }
    }
    render() {
        const rowStyle = {
            'padding-top': '0px'
        }
        const textStyle = {
            cursor: 'pointer',
            'padding-top': '10px'
        }
        const xpStyle = {
            cursor: 'pointer',
            'padding-top': '10px',
            'text-align': 'center',
            'padding-right':'5px'
        }
        return (
            <List divided relaxed>
                <div>
                    {
                        this.props.list.Missions.map(function (mission, index2) {
                            return <List.Item style={this.getDivStyle(mission)}>
                                <div onClick={() => this.props.toggleMissionComplete(this.props.index, index2)}>
                                    <Grid >
                                        <Grid.Row className="hover" style={rowStyle} >
                                            <Grid.Column width={13} style={textStyle}>{mission.text}</Grid.Column>
                                            <Grid.Column width={3} style={xpStyle}>{mission.xp} XP</Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                            </List.Item>

                        }, this)
                    }
                </div>
                {/* <div className="tablet mobile only">
                    {
                        this.props.list.Missions.map(function (mission, index2) {
                            return <List.Item className="tablet mobile only" style={this.getMobileDivStyle(mission)}>
                                <div onClick={() => this.props.toggleMissionComplete(this.props.index, index2)}>
                                    <Grid>
                                        <Grid.Row className="hover" style={rowStyle}>
                                            <Grid.Column width={13} style={textStyle}>{mission.text}</Grid.Column>
                                            <Grid.Column width={3} style={textStyle}>{mission.xp} XP</Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                            </List.Item>
                        }, this)
                    }
                </div> */}
            </List>
        )
    }
}

// Must export!
export default Missions;
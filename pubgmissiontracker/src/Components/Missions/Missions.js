import React from 'react';
import { List, Grid } from 'semantic-ui-react'
import './Missions.css'

class Missions extends React.Component {
    getStyle(mission) {
        return {
            cursor: 'pointer',
            'background': mission.completed ? 'linear-gradient(to right,rgba(22,38,34,.8), rgba(16,69,53,.8))' :'linear-gradient(to right, rgb(26,26,30,.8), rgba(34,33,40,.8)',
            'padding-top':'10px',            
            'padding-bottom':'10px'
        }
    }
    render() {
        const rowStyle={
            'padding-top':'0'
        }
        return (
            <List divided relaxed>
                {
                    this.props.list.Missions.map(function (mission, index2) {
                        return <List.Item>
                            <div onClick={() => this.props.toggleMissionComplete(this.props.index, index2)}>
                                <Grid stretched centered>
                                    <Grid.Row className="hover" style={rowStyle}centered>
                                        <Grid.Column style={this.getStyle(mission)} width={15}>{mission.text}</Grid.Column>
                                        <Grid.Column width={1}>{mission.xp} XP</Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                        </List.Item>
                    }, this)
                }
            </List>
        )
    }
}

// Must export!
export default Missions;
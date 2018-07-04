import React from 'react';
import { Card, Image, Button, List, Grid } from 'semantic-ui-react'
class Missions extends React.Component {
    state = {
        list: this.props.list
    }
    handleClick = (e, titleProps) => {
        this.setState({ completed: !titleProps.mission.completed })
    }
    toggleMission = (index) =>{
        var newVal = !this.state.list.Missions[index].completed
        var newList = this.state.list
        newList.Missions[index].completed = newVal
        this.setState({list:newList})
    }
    getStyle(mission){
        return {
            cursor: 'pointer',
            'background-color': mission.completed ? 'green' : 'red'
           }
    }
    render() {       
    
        var imgStyle = {
            "width": "100%"
        };
        const textStyle = {
            "z-index": "90000",
            "color": "white",
            "position": "absolute",
            "top": "38%",
            "left": "46%",
            "transform": "translate(-50%, -50%)",
            "font-size": "10vh"
        }        
        return (
            <List divided relaxed>
                {
                    this.state.list.Missions.map(function (mission, index) {
                        return <List.Item>
                            <div style={this.getStyle(mission)} onClick={() => this.toggleMission(index)}>
                                <Grid stretched centered>
                                    <Grid.Row centered>
                                        <Grid.Column width={15}>{mission.text}</Grid.Column>
                                        <Grid.Column width={1}>{mission.xp}</Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                        </List.Item>
                    },this)
                }
            </List>
        )
    }
}

// Must export!
export default Missions;
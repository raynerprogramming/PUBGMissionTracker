import React from 'react';
import { Card, Image, Button, List } from 'semantic-ui-react'
class Missions extends React.Component {
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
        
        var list = this.props.list;
        return (
            <List divided relaxed>
                {
                    list.Missions.map  (function(mission,index){
                        return <List.Item>
                                    <List.Icon name='github' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                        <List.Description as='a'>{mission.xp}</List.Description>
                                    </List.Content>
                                </List.Item>
                    })
                }
            </List>
        )
    }
}

// Must export!
export default Missions;
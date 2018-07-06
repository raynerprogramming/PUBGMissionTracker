import React from 'react';
import { Segment, Grid, List } from 'semantic-ui-react'
export default class XPDetail extends React.Component {
  render() {
    return (
      <Segment>
        <List divided relaxed>
          {
            this.props.detail.map(function (det, index2) {
              return <List.Item>
                <Grid stretched centered>
                  <Grid.Row centered>
                    <Grid.Column width={15}>{det.Title}</Grid.Column>
                    <Grid.Column width={1}>{det.XP} XP</Grid.Column>
                  </Grid.Row>
                </Grid>
              </List.Item>
            }, this)
          }
        </List>
      </Segment>
    )
  }
}
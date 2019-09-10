import React from "react";
import { Popover, Button } from "antd";
import { distance } from "../lib/distance"

const content = (
  <div>
    <p>Distance from you: { distance(this.props.coords.latitude, this.props.coords.longitude, this.props.lat, this.props.long).toFixed(2) } miles</p>
    <p style={{textDecoration: 'underline'}} onClick={() => this.props.openStreetView(this.props.lat, this.props.long)}>Click here to see this in Street View</p>
  </div>
);




export default class StopInfo extends React.Component {
  render() {
    return (<Popover content={content} title={this.props.name} trigger="click">
    <Button>Click me</Button>
  </Popover>);
  }
}

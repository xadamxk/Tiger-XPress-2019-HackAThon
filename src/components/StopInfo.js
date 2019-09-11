import React from "react";
import { Popover, Button, Modal } from "antd";
import { distance } from "../lib/distance"
import { geolocated } from "react-geolocated";


class StopInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.visible
    }
  }
  render() {
    let yourCoords = this.props.coords;
    if (yourCoords) {
      const content = (
        <div>
          <p>Distance from you: {distance(this.props.coords.latitude, this.props.coords.longitude, this.props.lat, this.props.long).toFixed(2)} miles</p>
          <p style={{ textDecoration: 'underline' }} onClick={() => this.props.openStreetView(this.props.lat, this.props.long)}>Click here to see this in Street View</p>
        </div>
      );

      let handleCancel = (e) => {
        this.setState({
          isVisible: false,
        });
        this.props.handler();
      }
      return (
        <Modal
          title={this.props.name}
          visible={this.state.isVisible}
          destroyOnClose={false}
          onCancel={handleCancel}
          footer={null}
        >
          {content}
        </Modal>
      );
    } else {
      return (<span>Loading...</span>);
    }
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(StopInfo);

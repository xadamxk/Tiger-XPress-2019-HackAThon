import React from "react";
import { Popover, Button, Modal } from "antd";
import { distance } from "../lib/distance"
import { geolocated } from "react-geolocated";
import ReactStreetview from 'react-streetview';

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
      const googleMapsApiKey = 'AIzaSyA23OyaGg0FVlayph8YMq6Wc1ShPBj1FFo';
      const streetViewPanoramaOptions = {
        position: { lat: this.props.lat, lng: this.props.long },
        pov: { heading: 100, pitch: 0 },
        zoom: 1
      };
      const content = (
        <div>
          <p><strong>Distance from you:</strong> {distance(this.props.coords.latitude, this.props.coords.longitude, this.props.lat, this.props.long).toFixed(2)} miles</p>
          <p><strong>Route:</strong> 1405</p>
          <p><strong>Bus:</strong> #1</p>
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
          <div style={{
            width: '350px',
            height: '450px'
          }}>
            <ReactStreetview
              apiKey={googleMapsApiKey}
              streetViewPanoramaOptions={streetViewPanoramaOptions}
            />
          </div>
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

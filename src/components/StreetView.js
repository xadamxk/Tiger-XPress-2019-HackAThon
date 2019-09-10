import React from "react";
import ReactStreetview from 'react-streetview';

export default class StreetView extends React.Component {
  render() {
    // see https://developers.google.com/maps/documentation/javascript
    const googleMapsApiKey = 'AIzaSyBsYLN1aEX_ckjAH9VCHdMTi7L099QtVrs';

    // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
    const streetViewPanoramaOptions = {
        position: {lat: this.props.latitude, lng: this.props.longitude},
        pov: {heading: 100, pitch: 0},
        zoom: 1
    };
    if(this.props.visible) {
      return (
        <div style={{
            width: '800px',
            height: '450px',
            backgroundColor: '#eeeeee'
        }}>
          <ReactStreetview
              apiKey={googleMapsApiKey}
              streetViewPanoramaOptions={streetViewPanoramaOptions}
          />
        </div>
      );
    }
    return null;
  }
}

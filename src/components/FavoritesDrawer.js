import React from "react";
import { Drawer, List } from 'antd';
import { geolocated } from "react-geolocated";
import { distance, get3ClosestDetail, getClosestDetail } from "../lib/distance"

class FavoritesDrawer extends React.Component {
  render() {
    var data
    if (this.props.coords) {
      data = get3ClosestDetail(this.props.coords.latitude, this.props.coords.longitude)
      //console.log(data + "test" + this.props.coords.latitude + get3ClosestDetail(this.props.coords.latitude, this.props.coords.longitude))
    }
    return (
      <Drawer visible={this.props.visible} onClose={this.props.onClose}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item key={JSON.stringify(item)}>
              <List.Item.Meta
                title="put address here"
                description= { "Distance: " + distance(this.props.coords.latitude, this.props.coords.longitude, item[1], item[0]).toFixed(2) + " miles" }
              />
              <p onClick={() => {
                this.props.openStreetView(item[1], item[0])
                this.props.onClose()
              }}>Open Street View</p>
            </List.Item>
          )}
        />
      </Drawer>
    );
  }
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(FavoritesDrawer);

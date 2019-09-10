import React from "react";
import { PageHeader, Icon, Row, Col } from 'antd';
import { geolocated } from "react-geolocated";
import { getClosest } from "../lib/distance"

class Header extends React.Component {
  renderSubtitle = () => {
    if (this.props.coords) {
      return (
        <span>
          Closest Bus Stop is { getClosest(this.props.coords.latitude, this.props.coords.longitude).toFixed(1) } miles away.
        </span>
      )
    }
    return (
      <span>Loading...</span>
    );
  }
  render() {
    return (
      <Row>
        <Col span={18}>
          <PageHeader
            title="Bus Routes"
            subTitle={this.renderSubtitle()}
          />
        </Col>
        <Col span={6}>
          <Icon
            type="more"
            onClick={this.props.onMore}
            style={{
              padding: '50%',
              fontSize: '25px'
            }}
          />
        </Col>
      </Row>
    );
  }
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Header);

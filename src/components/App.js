import React from "react";
import Map from "../components/Map";
import Header from "../components/Header";
import Announcements from "../components/Announcements";
import FavoritesDrawer from "./FavoritesDrawer";
import StreetView from "./StreetView";

import {Row} from "antd"

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      drawerOpen: false,
      secondaryView: 'Announcements'
    };
  }

  closeDrawer() {
    this.setState({
      drawerOpen: false
    });
  }

  openDrawer() {
    this.setState({
      drawerOpen: true
    });
  }

  render() {
    return (
      <Row>
        <Header
          onMore={this.openDrawer.bind(this)}
        />
        <Map />
        <Announcements visible={this.state.secondaryView === 'Announcements'}/>
        <StreetView visible={this.state.secondaryView === 'StreetView'}/>
        <FavoritesDrawer
          visible={this.state.drawerOpen}
          onClose={this.closeDrawer.bind(this)}
        />
      </Row>
    );
  }
}

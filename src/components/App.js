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
      firstLoad: true,
      drawerOpen: false,
      secondaryView: 'Announcements',
      streetViewLat: 0.0,
      streetViewLong: 0.0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        firstLoad: false
      })
    }, 2000)
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

  openAnnouncements() {
    this.setState({
      secondaryView: 'Announcements'
    })
  }

  openStreetView(latitude, longitude) {
    this.setState({
      secondaryView: 'StreetView',
      streetViewLat: latitude,
      streetViewLong: longitude
    })
  }

  render() {
    if (this.state.firstLoad) {
      return (
        <div
        style={{verticalAlign: 'middle', backgroundColor: '#f0bb28', height: "850px", paddingTop: "30%"}}>
          <img
            src='https://2019hackathonuabteam1.s3.amazonaws.com/splash_screen.gif'
            alt='splash screen lost in the void'
          />
        </div>
      )
    }
    return (
      <Row>
        <Header
          onMore={this.openDrawer.bind(this)}
        />
        <Map
          openStreetView={this.openStreetView.bind(this)}
        />
        <Announcements
          visible={this.state.secondaryView === 'Announcements'}
        />
        <StreetView
          visible={this.state.secondaryView === 'StreetView'}
          latitude={this.state.streetViewLat}
          longitude={this.state.streetViewLong}
        />
        <FavoritesDrawer
          visible={this.state.drawerOpen}
          onClose={this.closeDrawer.bind(this)}
          openStreetView={this.openStreetView.bind(this)}
        />
      </Row>
    );
  }
}

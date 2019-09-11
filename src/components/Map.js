import React from "react";
import MapGL, { Source, Layer, Marker } from '@urbica/react-map-gl';
import { getMapboxAPIKey, getStops, getRoutes } from "../services/api/Helper";
import { geolocated } from "react-geolocated";
import StopInfo from "./StopInfo";
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            viewport: {
                latitude: 33.472500,
                longitude: -86.920000,
                zoom: 12.25,
            },
            showStopInfo: false,
            stopInfo: {
                lat: "",
                lng: ""
            }
        }
    }

    getStopsData() {
        let busStops = getStops();
        let stopsState = [];
        Object.keys(busStops).forEach(busStop => {
            stopsState.push({ [busStop]: busStops[busStop] });
        });
        return stopsState;
    }

    getRoutesData() {
        let busRoutes = getRoutes();
        let routesState = [];
        Object.keys(busRoutes).forEach(busRoute => {
            routesState.push({ [busRoute]: busRoutes[busRoute] });
        });
        return routesState;
    }

    handler() {
        this.setState({
            showStopInfo: false,
        })
    }

    adjustScreenSize(name) {
        switch (name) {
            case 'route0': {
                this.setState({
                    viewport: {
                        latitude: 33.482500, // up/down
                        longitude: -86.908482, // right/left
                        zoom: 13.0,
                    }
                });
                break;
            }
            case 'route1': {
                this.setState({
                    viewport: {
                        latitude: 33.462000,
                        longitude: -86.930000,
                        zoom: 13.4,
                    }
                });
                break;
            }
            case 'route2': {
                this.setState({
                    viewport: {
                        latitude: 33.472500,
                        longitude: -86.920000,
                        zoom: 12.25,
                    }
                });
                break;
            }
            default: {
                this.setState({
                    viewport: {
                        latitude: 33.472500,
                        longitude: -86.920000,
                        zoom: 12.25,
                    }
                });
                break;
            }
        }
    }

    render() {
        let { stopInfo, showStopInfo } = this.state;
        let yourCoords = this.props.coords;
        let self = this;
        if (yourCoords) {
            const { viewport } = this.state;
            let stopData = this.getStopsData();
            let routeData = this.getRoutesData();
            const onDragEnd = lngLat => {
                this.setState({ longitude: lngLat.lng, latitude: lngLat.lat });
            };

            const style = {
                fontSize: "20px"
            };

            const colors = ["#1EA362", "#DD4B3E", "#4A89F3", "#822F2B"]; // Green, Red, Blue

            return (
                <div>
                    <MapGL
                        style={{ width: '100%', height: '400px' }}
                        mapStyle='mapbox://styles/mapbox/light-v9'
                        accessToken={getMapboxAPIKey()}
                        onViewportChange={(viewport) => this.setState({ viewport })}
                        {...viewport}
                    >
                        {/* Stops */}
                        {stopData.map((answer, i) => {
                            return (
                                <div>
                                    < Source id={"stop" + i} type='geojson' data={Object.values(answer)[0]} />
                                    <Layer
                                        id={"stop" + i}
                                        type='circle'
                                        source={"stop" + i}
                                        paint={{
                                            'circle-color': colors[i],
                                            'circle-opacity': 0.5,
                                            'circle-radius': 5,
                                            'circle-stroke-color': 'white',
                                            'circle-stroke-width': 3,
                                        }}
                                        onClick={(item) => {
                                            self.setState({
                                                stopInfo: {
                                                    lat: item["lngLat"]["lat"],
                                                    lng: item["lngLat"]["lng"]
                                                },
                                                showStopInfo: true
                                            });
                                        }}
                                    />
                                </div>
                            )
                        })}
                        {/* Routes */}
                        {routeData.map((answer, i) => {
                            return (
                                <div>
                                    < Source id={"route" + i} type='geojson' data={Object.values(answer)[0]} />
                                    <Layer
                                        id={"route" + i}
                                        type='line'
                                        source={"route" + i}
                                        layout={{
                                            'line-join': 'round',
                                            'line-cap': 'round'
                                        }}
                                        paint={{
                                            'line-color': colors[i],
                                            'line-width': 3
                                        }}
                                        onClick={(item) => {
                                            self.adjustScreenSize(item["features"][0]["source"]);
                                        }}
                                    />
                                </div>
                            )
                        })}
                        {/* Markers */}
                        <Marker longitude={-86.906867} latitude={33.49065} onDragEnd={onDragEnd}>
                            <div style={style}>🏫</div>
                        </Marker>
                        <Marker longitude={-86.928096} latitude={33.459905} onDragEnd={onDragEnd}>
                            <div style={style}>🏫</div>
                        </Marker>
                        <Marker longitude={yourCoords["longitude"]} latitude={yourCoords["latitude"]} onDragEnd={onDragEnd}>
                            <div style={style}>📍</div>
                        </Marker>
                    </MapGL>
                    {showStopInfo && (
                        <StopInfo
                            lat={stopInfo["lat"]}
                            long={stopInfo["lng"]}
                            visible={showStopInfo}
                            handler={this.handler}
                        />
                    )}

                </div>
            )
        } else {
            return (
                <span>Loading...</span>
            );
        }
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Map);
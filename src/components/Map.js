import React from "react";
import MapGL, { Source, Layer, Marker } from '@urbica/react-map-gl';
import { getMapboxAPIKey, getStops, getRoutes } from "../services/api/Helper";
import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 33.469567,
                longitude: -86.919618,
                zoom: 12.5
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

    render() {
        const { viewport } = this.state;
        let stopData = this.getStopsData();
        let routeData = this.getRoutesData();

        const onDragEnd = lngLat => {
            this.setState({ longitude: lngLat.lng, latitude: lngLat.lat });
        };

        const style = {
            fontSize: "20px"
        };

        const colors = ["green", "orange", "pink", "blue"];

        return (
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
                                paint={{ 'circle-color': colors[i], 'circle-radius': 7 }}
                                onClick={(item => {
                                    // Do work fam
                                })}
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
            </MapGL>
        )
    }
}
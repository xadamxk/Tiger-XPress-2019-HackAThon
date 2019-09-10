import React from "react";
import MapGL, { Source, Layer, Marker } from '@urbica/react-map-gl';
import { getMapboxAPIKey, getStops, getRoutes } from "../services/api/Helper";
import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 33.453664,
                longitude: -86.928136,
                zoom: 14,
                stops: [],
                routes: []
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
                style={{ width: '100%', height: '800px' }}
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
            </MapGL>
        )
    }
}
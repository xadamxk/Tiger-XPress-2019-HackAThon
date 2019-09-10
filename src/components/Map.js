import React from "react";
import MapGL, { Source, Layer, Marker } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.82931081282506,
                longitude: -122.48695850372314,
                zoom: 14
            }
        }
    }

    render() {
        const { viewport } = this.state;
        const data = {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: [
                    [-122.48369693756104, 37.83381888486939],
                    [-122.48348236083984, 37.83317489144141],
                    [-122.48339653015138, 37.83270036637107],
                    [-122.48356819152832, 37.832056363179625],
                    [-122.48404026031496, 37.83114119107971],
                    [-122.48404026031496, 37.83049717427869],
                    [-122.48348236083984, 37.829920943955045],
                    [-122.48356819152832, 37.82954808664175],
                    [-122.48507022857666, 37.82944639795659],
                    [-122.48610019683838, 37.82880236636284],
                    [-122.48695850372314, 37.82931081282506],
                ]
            }
        };

        const data2 = {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: [
                    [-122.48695850372314, 37.82931081282506],
                    [-122.48700141906738, 37.83080223556934],
                    [-122.48751640319824, 37.83168351665737],
                    [-122.48803138732912, 37.832158048267786],
                    [-122.48888969421387, 37.83297152392784],
                    [-122.48987674713133, 37.83263257682617],
                    [-122.49043464660643, 37.832937629287755],
                    [-122.49125003814696, 37.832429207817725],
                    [-122.49163627624512, 37.832564787218985],
                    [-122.49223709106445, 37.83337825839438],
                    [-122.49378204345702, 37.83368330777276]
                ]
            }
        };

        const onDragEnd = lngLat => {
            this.setState({ longitude: lngLat.lng, latitude: lngLat.lat });
        };

        const style = {
            fontSize: "20px"
        };

        return (
            <MapGL
                style={{ width: '100%', height: '400px' }}
                mapStyle='mapbox://styles/mapbox/light-v9'
                accessToken="pk.eyJ1IjoieGFkYW14ayIsImEiOiJjazBja3Rqc3QwNHY5M2xxZGlhY2UxZXYzIn0.E8gfHnXgxZPy1eLQsx0kqg"
                onViewportChange={(viewport) => this.setState({ viewport })}
                {...viewport}
            >
                <Source id='route1' type='geojson' data={data} />
                <Layer
                    id='route1'
                    type='line'
                    source='route1'
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round'
                    }}
                    paint={{
                        'line-color': '#32CD32',
                        'line-width': 8
                    }}
                />
                <Source id='route2' type='geojson' data={data2} />
                <Layer
                    id='route2'
                    type='line'
                    source='route2'
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round'
                    }}
                    paint={{
                        'line-color': '#FF4500',
                        'line-width': 8
                    }}
                />
                <Marker
                    longitude={-122.48695850372314}
                    latitude={37.82931081282506}
                    onDragEnd={onDragEnd}
                >
                    <div style={style}>🏫</div>
                </Marker>
            </MapGL>
        )
    }
}
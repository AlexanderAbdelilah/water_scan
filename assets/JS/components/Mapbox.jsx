import mapboxgl from 'mapbox-gl';
import React from 'react';
import '/Applications/MAMP/htdocs/water_scan/assets/styles/app.css';
import 'mapbox-gl/dist/mapbox-gl.css';

//const Map = ReactMapboxGl({
//    accessToken:
//        'pk.eyJ1IjoibGVvbmRlc2xpbGFzIiwiYSI6ImNrcHFqbDFjNDNqaWwycHJpYW1tcXR3c3gifQ.zD7gLCDVLrYltk-BblPygw'
//    });

mapboxgl.accessToken = 'pk.eyJ1IjoibGVvbmRlc2xpbGFzIiwiYSI6ImNrcHFqbDFjNDNqaWwycHJpYW1tcXR3c3gifQ.zD7gLCDVLrYltk-BblPygw';

export default class Mapbox extends React.Component{

    //constructor() {
    //    super();

    //    this.state = {
    //        p_vittel_OPR0000588819_longitude: [],
    //        p_vittel_OPR0000588819_latitude: [],
    //    }
    //}

    //componentDidMount() {
        
    //    fetch(`http://localhost:8000/api/prelevements`).then(response => response.json()).then(response => {
    //        //to check wether the data is properly fetched :
    //        console.log(response.p_vittel_OPR0000588819_gps[0]);
    //        this.setState({
    //            //p_vittel_OPR0000588819_longitude: response.p_vittel_OPR0000588819_gps[0]['longitude'],
    //            //p_vittel_OPR0000588819_latitude: response.p_vittel_OPR0000588819_gps[0]['latitude'],
    //        })
    //        //console.log(p_vittel_OPR0000588819_longitude);
    //        //console.log(p_vittel_OPR0000588819_latitude);
    //    });
    //    };

    constructor(props) {
        super(props);
        this.state = {
            lng: 5.9599,
            lat: 48.2142,
            zoom: 9.56,
            p_vittel_OPR0000588819_longitude: [],
            p_vittel_OPR0000588819_latitude: [],
        };
        this.mapContainer = React.createRef();
        };

    componentDidMount() {

        fetch(`http://localhost:8000/api/prelevements`).then(response => response.json()).then(response => {
            //to check wether the data is properly fetched :
            console.log(response.p_vittel_OPR0000588819_gps[0]);
            this.setState({
                p_vittel_OPR0000588819_longitude: response.p_vittel_OPR0000588819_gps[0]['longitude'],
                p_vittel_OPR0000588819_latitude: response.p_vittel_OPR0000588819_gps[0]['latitude'],
            })
            //console.log(p_vittel_OPR0000588819_longitude);
            //console.log(p_vittel_OPR0000588819_latitude);
        });
        

        const { lng, lat, zoom } = this.state;
        
        const map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });

        var marker = new mapboxgl.Marker()
            .setLngLat([30.5, 50.5])
            .addTo(map);

        var geojson = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                type: 'Point',
                coordinates: [this.state.p_vittel_OPR0000588819_latitude, this.state.p_vittel_OPR0000588819_longitude]
                },
                properties: {
                title: 'Mapbox',
                description: 'Vittel'
                }
            },
            {
                type: 'Feature',
                geometry: {
                type: 'Point',
                coordinates: [2.415447, 46.752976]
                },
                properties: {
                title: 'Mapbox',
                description: 'San Francisco, California'
                }
            }]
            };

        // add markers to map
        geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
            .addTo(map);

        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
            });

        
        }

    render(){
        const { lng, lat, zoom } = this.state;
        return (
            <div>
                <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        );
    }
}

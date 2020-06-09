import React, {useCallback, useState} from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(({onMarkerChange}) => {
        const [marker, setMarker] = useState(null);

        const handleMapClick = useCallback((e) => {
            const newCoord = {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            };
            setMarker(newCoord);
            onMarkerChange(newCoord);
        }, [setMarker, onMarkerChange]);

        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{lat: 53.893009, lng: 27.567444}}
                onClick={handleMapClick}
            >
                <Marker
                    position={marker}
                />
            </GoogleMap>
        );
    }
));

export default Map;
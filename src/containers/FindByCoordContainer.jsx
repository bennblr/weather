import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {WEATHER_BY_COORD_REQUEST} from '../actions/weather.actions';
import {REQUEST} from '../constants/statuses';
import DayForecast from '../components/DayForecast/DayForecast';
import Map from '../components/Map/Map';
import {googleMapURL} from '../constants/config';
import Loader from '../components/Loader/Loader';

const FindByCoordContainer = () => {
    const dispatch = useDispatch();
    const {status, result} = useSelector(({weather: {weatherByCoordRequest}}) => weatherByCoordRequest);
    const showLoader = status === REQUEST;

    const handleMarkerChange = useCallback(({lat, lng}) => dispatch(WEATHER_BY_COORD_REQUEST({
        lat,
        lon: lng
    })), [dispatch]);

    return (
        <>
            <Loader showLoader={showLoader}/>
            <Map
                googleMapURL={googleMapURL}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
                onMarkerChange={handleMarkerChange}
            />
            {result && <DayForecast data={result}/>}
        </>
    );
};

export default FindByCoordContainer;
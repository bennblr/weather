import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GET_CITY_LIST_FROM_LS, WEATHER_BY_CITY_REQUEST} from '../actions/weather.actions';
import FindByCity from '../components/FindByCity/FindByCity';
import {REQUEST} from '../constants/statuses';
import DayForecast from '../components/DayForecast/DayForecast';

const FindByCityContainer = () => {
    const dispatch = useDispatch();
    const cityList = useSelector(({weather: {cityList}}) => cityList);
    const {status, result, error} = useSelector(({weather: {weatherByCityRequest}}) => weatherByCityRequest);
    const showLoader = status === REQUEST;

    const handleSearchClick = useCallback((value) => {
        dispatch(WEATHER_BY_CITY_REQUEST({q: value}));
    }, [dispatch]);

    useEffect(() => {
        dispatch(GET_CITY_LIST_FROM_LS());
    }, [dispatch]);

    return (
        <>
            <FindByCity onSearchClick={handleSearchClick}
                        cityList={cityList.reverse()}
                        showLoader={showLoader}
                        error={error}
                        result={result}
            />
            {result && <DayForecast data={result}/>}
        </>
    );
};

export default FindByCityContainer;
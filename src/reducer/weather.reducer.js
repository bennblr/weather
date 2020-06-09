import {handleActions} from 'redux-actions';
import {FAILURE, REQUEST, SUCCESS, UNCALLED} from '../constants/statuses';
import {
    GET_CITY_LIST_FROM_LS,
    UPDATE_LS_CITY_LIST,
    WEATHER_BY_CITY_FAILURE,
    WEATHER_BY_CITY_REQUEST,
    WEATHER_BY_CITY_SUCCESS, WEATHER_BY_COORD_FAILURE, WEATHER_BY_COORD_REQUEST, WEATHER_BY_COORD_SUCCESS
} from '../actions/weather.actions';

const defaultState = {
    cityList: [],
    weatherByCityRequest: {
        status: UNCALLED,
        result: null,
        error: null
    },
    weatherByCoordRequest: {
        status: UNCALLED,
        result: null,
        error: null
    }
};

const reduces = handleActions(
    {
        [WEATHER_BY_CITY_REQUEST]: state => ({
            ...state,
            weatherByCityRequest: {
                ...state.weatherByCityRequest,
                status: REQUEST,
                result: null,
                error: null
            }
        }),
        [WEATHER_BY_CITY_SUCCESS]: (state, {payload}) => ({
            ...state,
            weatherByCityRequest: {
                ...state.weatherByCityRequest,
                status: SUCCESS,
                result: payload,
                error: null
            }
        }),
        [WEATHER_BY_CITY_FAILURE]: (state, {payload}) => ({
            ...state,
            weatherByCityRequest: {
                ...state.weatherByCityRequest,
                status: FAILURE,
                error: payload
            }
        }),
        [WEATHER_BY_COORD_REQUEST]: state => ({
            ...state,
            weatherByCoordRequest: {
                ...state.weatherByCoordRequest,
                status: REQUEST,
                result: null,
                error: null
            }
        }),
        [WEATHER_BY_COORD_SUCCESS]: (state, {payload}) => ({
            ...state,
            weatherByCoordRequest: {
                ...state.weatherByCoordRequest,
                status: SUCCESS,
                result: payload,
                error: null
            }
        }),
        [WEATHER_BY_COORD_FAILURE]: (state, {payload}) => ({
            ...state,
            weatherByCoordRequest: {
                ...state.weatherByCoordRequest,
                status: FAILURE,
                error: payload
            }
        }),
        [GET_CITY_LIST_FROM_LS]: state => ({
            ...state,
            cityList: JSON.parse(localStorage.getItem('cityList'))
        }),
        [UPDATE_LS_CITY_LIST]: (state, {payload}) => ({
            ...state,
            cityList: payload
        }),
    },
    defaultState
);

export default reduces;

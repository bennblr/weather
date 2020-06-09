import {createAction} from 'redux-actions';

export const WEATHER_BY_CITY_REQUEST = createAction('WEATHER_BY_CITY_REQUEST');
export const WEATHER_BY_CITY_SUCCESS = createAction('WEATHER_BY_CITY_SUCCESS');
export const WEATHER_BY_CITY_FAILURE = createAction('WEATHER_BY_CITY_FAILURE');
export const UPDATE_LS_CITY_LIST = createAction('UPDATE_LS_BY_CITY');
export const GET_CITY_LIST_FROM_LS = createAction('GET_CITY_LIST_FROM_LS');

export const WEATHER_BY_COORD_REQUEST = createAction('WEATHER_BY_COORD_REQUEST');
export const WEATHER_BY_COORD_SUCCESS = createAction('WEATHER_BY_COORD_SUCCESS');
export const WEATHER_BY_COORD_FAILURE = createAction('WEATHER_BY_COORD_FAILURE');
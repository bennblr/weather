import {takeEvery, put, select, all} from 'redux-saga/effects';
import {getQueryString} from '../constants/config';
import {
    UPDATE_LS_CITY_LIST,
    WEATHER_BY_CITY_FAILURE,
    WEATHER_BY_CITY_SUCCESS, WEATHER_BY_COORD_FAILURE, WEATHER_BY_COORD_SUCCESS
} from '../actions/weather.actions';

function* updateLSCityList(city) {
    const cityList = yield select(({weather: {cityList}}) => cityList);
    let newCityList;

    if (!cityList.includes(city)) {
        newCityList = [...cityList, city];
        localStorage.setItem('cityList', JSON.stringify(newCityList));

        yield put(UPDATE_LS_CITY_LIST(newCityList));
    }
}

function* onWeaterRequestByCity({payload}) {
    try {
        const data = yield fetch(getQueryString({
            ...payload
        }), {
            method: 'GET'
        }).then(async (response) => {
            if (!response.ok) {
                const {message} = await response.json();

                throw Error(message);
            }
            return response;
        }).then(response => response.json());

        yield put(WEATHER_BY_CITY_SUCCESS(data));

        yield updateLSCityList(data.name)
    } catch (e) {
        console.log(e.message);
        yield put(WEATHER_BY_CITY_FAILURE(e.message));
    }
}

function* onWeaterRequestByCoord({payload}) {
    try {
        const data = yield fetch(getQueryString({
            ...payload
        }), {
            method: 'GET'
        }).then(async (response) => {
            if (!response.ok) {
                const {message} = await response.json();

                throw Error(message);
            }
            return response;
        }).then(response => response.json());

        yield put(WEATHER_BY_COORD_SUCCESS(data));

        yield updateLSCityList(data.name)
    } catch (e) {
        console.log(e.message);
        yield put(WEATHER_BY_COORD_FAILURE(e.message));
    }
}

function* weatherSaga() {
    yield all([
        takeEvery('WEATHER_BY_CITY_REQUEST', onWeaterRequestByCity),
        takeEvery('WEATHER_BY_COORD_REQUEST', onWeaterRequestByCoord)
    ]);
}

export default weatherSaga;
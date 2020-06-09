const mapApiKey = 'AIzaSyBsSz81UMNilx0c2WkQu_AgrimQmpCIfzU';

const openWeatherKey = '730d6cb9a5f4e1b0dbf3e6987ffebf43';

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiLang = 'ru';
export const googleMapURL =
    `https://maps.googleapis.com/maps/api/js?key=${mapApiKey}&language=${apiLang}&v=3.exp&libraries=geometry,drawing,places`;

const mapApiParams = (params) => Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');

export const getQueryString = params => `${apiUrl}${mapApiParams(params)}&lang=${apiLang}&appid=${openWeatherKey}`;

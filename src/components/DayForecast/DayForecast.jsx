import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import dayForecastStyles from './DayForecast.styles';
import Typography from '@material-ui/core/Typography';

const DayForecast = ({classes, data}) => {
    const {name, clouds, main: {temp, humidity, pressure}, weather: [{icon, description}], wind: {speed}} = data;
    const tempC = Math.round(temp - 273.15);
    const capitalizeDescription = description.charAt(0).toUpperCase()+ description.slice(1);



    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <Typography variant="h2" className={classes.name}>{name}</Typography>
                <Typography>{capitalizeDescription}</Typography>
                <div className={classes.description}>
                    <img className={classes.img}
                         alt={description}
                         src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    />
                    <Typography variant="h3">{tempC}°C</Typography>
                </div>
            </div>
            <div className={classes.advanced}>
                <Typography>Ветер: {speed} м/с</Typography>
                <Typography>Влажность: {humidity}%</Typography>
                <Typography>Облачность: {clouds && clouds.all}%</Typography>
                <Typography>Давление: {pressure} hPa</Typography>
            </div>
        </div>
    );
};

export default withStyles(dayForecastStyles)(DayForecast);
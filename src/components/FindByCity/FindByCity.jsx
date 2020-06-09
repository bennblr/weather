import React, {useCallback, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import findByCityStyles from './FindByCity.styles';
import Loader from '../Loader/Loader';

const FindByCity = ({classes, onSearchClick, cityList, showLoader, error}) => {
    const [cityValue, setCityValue] = useState('');

    const handleCityChange = useCallback((e, value) => {
        setCityValue(value || '');
    }, []);

    const handleSearchClick = useCallback(() => {
        onSearchClick(cityValue);
    }, [onSearchClick, cityValue]);

    const handleKeyPress = useCallback((e) => {
        if(e.key === 'Enter'){
            onSearchClick(cityValue);
        }
    }, [onSearchClick, cityValue]);

    return (
        <div className={classes.root}>
            <Loader showLoader={showLoader}/>
            <Autocomplete
                freeSolo
                options={cityList}
                getOptionLabel={(option) => option}
                style={{width: 300}}
                inputValue={cityValue}
                onChange={handleCityChange}
                onInputChange={handleCityChange}
                renderInput={(params) =>
                    <TextField {...params}
                               label="Выберите город:"
                               variant="outlined"
                               error={!!error}
                               onKeyPress={handleKeyPress}
                               helperText={error || ''}
                    />
                }
            />
            <Button className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleSearchClick}
                    disabled={!cityValue || !cityValue.length}
            >
                Искать
            </Button>
        </div>
    );
};

export default withStyles(findByCityStyles)(FindByCity);

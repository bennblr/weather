import React, {useCallback, useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import headerStyles from './Header.styles';
import {useLocation} from 'react-router';

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const Header = ({classes, blind, onSetBlind}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const {pathname} = useLocation();
    const blindText = blind ? 'Обычная версия' : 'Версия для слабовидящих';

    const handleBlindChange = useCallback(() => onSetBlind(!blind), [blind, onSetBlind]);

    const handleChange = useCallback((event, newValue) => {
        setSelectedTab(newValue);
    }, [setSelectedTab]);

    useEffect(() => {
        if (pathname === '/map' && selectedTab === 0) {
            setSelectedTab(1);
        }
    }, [pathname, selectedTab, setSelectedTab]);

    return (
        <AppBar position="static" className={classes.tabs}>
            <Tabs value={selectedTab} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="По названию" {...a11yProps(0)} component={Link} to="/"/>
                <Tab label="На карте" {...a11yProps(1)} component={Link} to="/map"/>
            </Tabs>
            <Typography variant="h6" className={classes.blindButton}
                        onClick={handleBlindChange}>{blindText}</Typography>
        </AppBar>
    );
};

export default withStyles(headerStyles)(Header);

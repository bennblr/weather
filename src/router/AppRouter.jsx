import React, {useState} from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import routes from './routes';
import appHistory from './history';
import {ThemeProvider} from '@material-ui/core/styles';
import {blindTheme, theme} from '../theme';
import Header from '../components/Header/Header';

const AppRouter = () => {
    const [blind, setBlind] = useState(false);

    return (
        <>
            <ThemeProvider theme={blind ? blindTheme : theme}>
                <Router history={appHistory}>
                    <Header blind={blind} onSetBlind={setBlind}/>
                    <Switch>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                            />
                        ))}
                        <Route path="*" component={() => (<>Default</>)}/>
                    </Switch>
                </Router>
            </ThemeProvider>
        </>);
};

export default AppRouter;
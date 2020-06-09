import FindByCityContainer from '../containers/FindByCityContainer';
import FindByCoordContainer from '../containers/FindByCoordContainer';

const routes = [
    {
        exact: true,
        path: '/',
        component: FindByCityContainer
    },
    {
        exact: true,
        path: '/map',
        component: FindByCoordContainer
    }
];

export default routes;

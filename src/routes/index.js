/* eslint-disable import/no-cycle */
import PageNotFound from 'component/404';
import Carousel from 'component/card/cardTemplate4';
import Catalogue from 'pages/catalogue';
import DashboardComponent from 'pages/dashboard';
import Homepage from 'pages/homepage';
import Detail from '../pages/detail';
import Cart from '../pages/cart';
import { useRoutes } from 'react-router-dom';

export default function NavigationRoutes() {
    return useRoutes([
        {
            path: '/home',
            element: <DashboardComponent />,
            children: [
                { path: '/', element: <Homepage /> },
                { path: '/books', element: <Catalogue /> },
                { path: '/detail', element: <Detail /> },
                { path: '/cart', element: <Cart /> }
            ]
        },
        {
            path: '/list',
            element: <Catalogue />
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ]);
}

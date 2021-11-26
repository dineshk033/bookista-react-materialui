/* eslint-disable import/no-cycle */
import Catalogue from 'pages/catalogue';
import DashboardComponent from 'pages/dashboard';
import Homepage from 'pages/homepage';
import { useRoutes } from 'react-router-dom';

export default function NavigationRoutes() {
    return useRoutes([
        {
            path: '/',
            element: <DashboardComponent />,
            children: [
                { path: '/', element: <Homepage /> },
                { path: '/Books', element: <Catalogue /> }
            ]
        },
        {
            path: '/list',
            element: <Catalogue />
        }
    ]);
}

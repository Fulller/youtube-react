import Home from '../pages/Home';
import Watch from '../pages/Watch';
import { MainLayout, OnlyHeader } from '../layouts';

let PublicRoute = [
    {
        element: Home,
        path: '/',
        layout: MainLayout,
    },
    {
        element: Home,
        path: '/home',
        layout: MainLayout,
    },
    {
        element: Watch,
        path: '/watch',
        layout: OnlyHeader,
    },
];
let PrivateRoute = [];
export { PublicRoute, PrivateRoute };

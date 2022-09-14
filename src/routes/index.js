import Home from '../pages/Home';
import Watch from '../pages/Watch';
import Explore from '../pages/Explore';
import Shorts from '../pages/Shorts';
import Subscriptions from '../pages/Subscriptions';
import Library from '../pages/Library';
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
    {
        element: Explore,
        path: '/explore',
        layout: MainLayout,
    },
    {
        element: Shorts,
        path: '/shorts',
        layout: MainLayout,
    },
    {
        element: Subscriptions,
        path: '/subscriptions',
        layout: MainLayout,
    },
    {
        element: Library,
        path: '/library',
        layout: MainLayout,
    },
];
let PrivateRoute = [];
export { PublicRoute, PrivateRoute };

import React, { Fragment } from 'react';
import MainRoutes from './main';
import { Redirect } from 'react-router';

const Home = React.lazy(() => import('../pages/home'));
const Login = React.lazy(() => import('../pages/auth'));
const set = {
  exact: true,
  sensitive: true,
  strict: true,
};

export enum LayoutType {
  sidebar = 'sidebar',
  blank = 'blank',
}

export const routeList = [
  {
    ...set,
    key: 'product',
    text: 'shop',
    menu: true,
    path: '/explore',
    layout: LayoutType.sidebar,
    children: <Home />,
    private: true,
  },
  {
    ...set,
    key: 'auth',
    text: 'login',
    menu: false,
    path: '/auth',
    layout: LayoutType.blank,
    children: <Login />,
    private: false,
  },

  {
    ...set,
    key: 'home',
    text: 'home',
    menu: false,
    path: '/',
    layout: LayoutType.blank,
    children: <Redirect to="/auth" />,
    private: false,
  },
];

const Routes = () => <MainRoutes options={routeList} />;

export default Routes;

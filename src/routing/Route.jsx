import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../crudfiles/Home'
import AdminHome from '../crudfiles/AdminHome'
import Assign from '../crudfiles/Assign'
import NotFound from '../crudfiles/NotFound'
import Login from '../authentication/Login'
import PrivateRoute from '../authentication/PrivateRoute'
import Layout from './Layout'
import Borrowed from '../crudfiles/Borrowed'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/adminhome',
                // element: <PrivateRoute><AdminHome/></PrivateRoute>
                element: <AdminHome/>
            },
            {
                path: '/assign',
                // element: <PrivateRoute><Assign/></PrivateRoute>
                element: <Assign/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/borrowed',
                element: <Borrowed/>
            },
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
        ]
    }
])
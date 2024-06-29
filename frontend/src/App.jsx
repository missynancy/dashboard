import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Header from './components/Index.jsx';
import MainLayout from './layout/MainLayout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    </Route>

));
export default function App() {
    return <RouterProvider router={router}/>;
}


// import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx';
import Index from './components/Index.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    </Route>


));
export default function App() {
    return <RouterProvider router={router}/>;
}

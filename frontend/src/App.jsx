import React, { useState } from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import LoginLayout from './layout/LoginLayout.jsx';
import Payroll from './pages/Payroll.jsx';
import Checklist from './pages/Checklist.jsx';
import './index.css';
import EmployeeForm from './pages/EmployForm.jsx';
import Attendance from './pages/Attendance.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LoginLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='/dashboard' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
        <Route path='/employee' element={<EmployeeForm/>}/>
        <Route path='/payroll' element={<Payroll/>}/>
        <Route path='/checklist' element={<Checklist/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
    </Route>

));

export default function App() {
  return <RouterProvider router={router}/>;

}

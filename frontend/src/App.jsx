import React, { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx'
import Employee from './pages/Employee.jsx'
import Payroll  from './pages/Payroll.jsx';
// import PayrollTable from './pages/Payrolltable.jsx';
import EmployeeForm from './pages/Employee.jsx';
import EmployeeTable from './pages/EmployeeTable.jsx';
import ErrorBoundary from './pages/ErrorBoundaries.jsx';

import './index.css'
// import PayrollTable from './pages/Payrolltable.jsx';
const router = createBrowserRouter(
    createRoutesFromElements
    (
      <Route path='/' element={<MainLayout />}>
           <Route index element={<Home />}/> 
           <Route path='/employee' element={<Employee />}/> 
           <Route path='/payroll' element={<Payroll />}/> 
           {/*<Route path='/payrollTable' element={<PayrollTable />}/> */}

      </Route>
    )
) 
const App = () => {


  
    
    return(
        <>
            <RouterProvider router={router} />
            
            
           
           
            
            
        </>
    );
}

export default App;

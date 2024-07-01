import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx'
import Employee from './pages/Employee.jsx'
import Payroll  from './pages/Payrollform.jsx';
import './index.css'
const router = createBrowserRouter(
    createRoutesFromElements
    (
      <Route path='/' element={<MainLayout />}>
           <Route path='/home' element={<Home />}/> 
           <Route path='/employee' element={<Employee />}/> 
           <Route path='/payroll' element={<Payroll />}/> 
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

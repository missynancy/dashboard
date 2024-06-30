import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx'
import './index.css'
const router = createBrowserRouter(
    createRoutesFromElements
    (
      <Route path='/' element={<MainLayout />}>
        {/*   <Route index element={<Home />}/> */}
      </Route>
    )
) 
const App = () => {
    return(

        //<Index />
        <RouterProvider router={router} />
    );
}

export default App;

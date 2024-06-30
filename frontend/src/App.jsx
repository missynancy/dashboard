import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx';
const router = createBrowserRouter(
    createRoutesFromElements
    (
      <Route path='/' element={<MainLayout />}></Route>
    )
) 
const App = () => {
    return(

        //<Index />
        <RouterProvider router={router} />
    );
}

export default App;
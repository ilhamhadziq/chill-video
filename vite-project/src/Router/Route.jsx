import Home from '../Components/Pages/Home';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Register';
import ProtectedRoute from './ProtectedRoute';
const Routes = [
    {
        path:'/',
        element: (
            // <ProtectedRoute>
            //     <Home/>
            // </ProtectedRoute>
            <Home/>
        )
    },
    {
        path:'/login',
        element: (
            // <ProtectedRoute>
            //     <Login/>
            // </ProtectedRoute>
            <Login/>
        )
    },
    {
        path:'/register',
        element: (            
            // <ProtectedRoute>
            //     <Register/>
            // </ProtectedRoute>
            <Register/>
        )
    },
    
]

export default Routes;
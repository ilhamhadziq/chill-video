import Home from '../Components/Pages/Home';
import Login from '../Components/Pages/Login';
import Register from '../Components/Pages/Register';
import ProtectedRoute from './ProtectedRoute';
const Routes = [
    {
        path:'/',
        element: (
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
            
        )
    },
    {
        path:'/login',
        element: (
            <ProtectedRoute>
                <Login/>
            </ProtectedRoute>
        )
    },
    {
        path:'/register',
        element: (            
            <ProtectedRoute>
                <Register/>
            </ProtectedRoute>
        )
    },
    
]

export default Routes;
import Home from '../Components/Pages/Home'
import Login from '../Components/Pages/Login'
import Register from '../Components/Pages/Register'
const Routes = [
    {
        path:'/',
        element: (<Home/>)
    },
    {
        path:'/',
        element: (<Login/>)
    },
    {
        path:'/',
        element: (<Register/>)
    },
    
]

export default Routes;
import './index.css';
// import Router  from './Router';
import Router from './Router/index'
import { RouterProvider } from 'react-router-dom';
function App() {
  return (
      <>
        <RouterProvider router={Router}/>
      </>
    
  )
}

export default App;

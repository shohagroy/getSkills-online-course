import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import EnrollForm from './components/EnrollForm';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Layout from './components/Layout';



const router = createBrowserRouter([
  {
      path: '/', element: <Layout/>,
      errorElement: <ErrorPage/>,
      children:[
        {path: '/', element: <Home/>},
        {path: '/home', element: <Home/>},
        {path: '/enroll', element: <EnrollForm/>}
        
      ]
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

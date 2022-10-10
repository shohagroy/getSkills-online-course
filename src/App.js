import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Layout from './components/Layout';



const router = createBrowserRouter([
  {
      path: '/', element: <Layout/>,
      errorElement: <ErrorPage/>,
      children:[
        {path: '/home', element: <Home/>}
        
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

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import EnrollForm from './components/EnrollForm';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Layout from './components/Layout';
import Question from './components/Question';
import Statistics from './components/Statistics';



const router = createBrowserRouter([
  {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children:[
        {path: '/',
        loader: async () =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Home/>},
        {path: '/enroll', element: <EnrollForm/>},
        {path: '/quiz/:id', 
        loader: async ({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element: <Question/>},
        {path:'statistics',
        loader: async () =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Statistics/>},
        {path: '/blog', element: <Blog/>}
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

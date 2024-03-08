import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/HomePage';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Error from './pages/Error';
import Globe from './pages/Globe';
import About from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      }
      ,
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/Globe',
        element: <Globe />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
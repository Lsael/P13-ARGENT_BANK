import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to='home' />,
      errorElement: <ErrorPage />,
    },
    {
      path: "home",
      element: <Home />,
      errorElement: <ErrorPage />,
      index: true
    }
  ]);
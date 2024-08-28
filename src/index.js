import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Location from './Pages/Location';
const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/careers",
      element: <Careers />
    },
    {
      path: "/location",
      element: <Location />
    },
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);



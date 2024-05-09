import React from 'react';

import './index.css'

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Login/Login/Login.jsx';
import Register from './components/Register/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Register></Register>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  }
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

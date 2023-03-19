import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Browse from './Pages/Browse';
import Streams from './Pages/Streams';
import Profile from './Pages/Profile';
import Details from './Pages/Details'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "browse",
    element: <Browse/>,
  },
  {
    path: "streams",
    element: <Streams/>,
  },
  {
    path: "profile",
    element: <Profile/>,
  },
  {
    path: "details",
    element: <Details/>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


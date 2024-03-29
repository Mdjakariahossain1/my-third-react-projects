import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './component/Home/Home.jsx';
import Listed from './component/Listed/Listed.jsx';

import Rute from './component/Rute/Rute.jsx';
import Listt from './component/listt/Listt.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rute></Rute>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/Listed/:id',
        element:<Listed></Listed>,
        loader:()=>fetch('/Data.json')

      
      
      },
      {
        path:'/List',
        element:<Listt></Listt>
      

      
      
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

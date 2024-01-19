import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main.jsx'; 
import Home from './Component/Home/Home.jsx';
import Contact from './Component/Pages/Contact/Contact.jsx'; 
import Portfolio from './Component/Pages/Portfolio/Portfolio.jsx';
import AboutUs from './Component/Pages/AboutUs/AboutUs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
     {
      path:"/home",
      element:<Home/>
     },
     {
      path:"/contact",
      element:<Contact/>
     },
     {
      path:"/about",
      element:<AboutUs/>
     },
     {
      path:"/portfolio",
      element:<Portfolio/>
     }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container m-auto  bg-white'>
      <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)

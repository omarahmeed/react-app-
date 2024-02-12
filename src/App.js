
import React from 'react';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './components/About/About.jsx';
import Portofolio from './components/Portofolio/Portofolio.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';

export default function App() {

  let routers=createBrowserRouter([

    {path:"" ,element:<Layout/>,children:[

      {index:true ,element: <Home/>},
      {path:'about' ,element:<About/>},
      {path:'home' ,element:<Home/>},
      {path:'portfolio' ,element:<Portofolio/>},
      {path:'contacts' ,element:<Contacts/>},
      

    ]}


  ])
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>

}
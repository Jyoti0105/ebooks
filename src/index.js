import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
// import Contact from './Component/Contact';
import Portfolio from './Component/Portfolio';
import App from './App';
import ProductDetail from './Component/ProductDetail';
import ThemeProvider, { ThemeContext } from './Contexr/ThemeContext.js';

const Contact=React.lazy(()=>import('./Component/Contact.js'))
const router =createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,

    children:[
      {
        index:'home',
        element:<Home/>

      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
        {
        path:'/contact',
        element:<React.Suspense>
          <Contact/>
        </React.Suspense>
      },
        {
        path:'/portfolio',
        element:<Portfolio/>
      },
      {
        path:'/product',
        element:<App/>
      },
      {
        path:'/readme/:id',
        element:<ProductDetail/>
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<ThemeProvider>
  <RouterProvider router={router}></RouterProvider>
</ThemeProvider>

    
 

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

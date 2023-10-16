import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Getstarted from './pages/Getstarted';
import StackI from './pages/DS/StackI';
import StackM from './pages/DS/StackM';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/getstarted',
        element: <Getstarted />,
  
      },
      {
        path: '/stack-intro',
        element: <StackI />
      },
      {
        path: '/stack-methods',
        element: <StackM />
      }
       
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

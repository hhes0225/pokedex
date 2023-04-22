import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ContentHome from './ContentHome'
import PokemonDetail from './PokemonDetail';
import ContentAbout from './ContentAbout'
import UpperBanner from './UpperBanner';

const router=createHashRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {path:"/",
      element:<ContentHome />},

      {path:"about",
      element:<ContentAbout />},

      {path:"pokemon/:name",
      element:<PokemonDetail />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

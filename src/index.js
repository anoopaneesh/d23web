import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import NavProvider from './context/NavContext';
import Events from './pages/Events';
import Workshops from './pages/Workshops';
import Proshows from './pages/Proshows';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path:"/events",
    element:<Events />
  },
  {
    path:"/workshops",
    element: <Workshops />
  },
  {
    path:"/proshows",
    element:<Proshows />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavProvider>
      <Navbar />
      <RouterProvider router={router} />
    </NavProvider>
  </React.StrictMode>
);

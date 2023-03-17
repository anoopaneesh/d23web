import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavProvider from './context/NavContext';
import Events from './pages/Events';
import Workshops from './pages/Workshops';
import Proshows from './pages/Proshows';
import Dept from './pages/Dept';
import FirebaseProvider from './context/FirebaseContext';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/workshops",
    element: <Workshops />
  },
  {
    path: "/proshows",
    element: <Proshows />
  },
  {
    path: "/dept/:id",
    element: <Dept />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <NavProvider>
        <RouterProvider router={router} />
      </NavProvider>
    </FirebaseProvider>
  </React.StrictMode>
);

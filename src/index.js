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
import Dept from './pages/Dept';
import FirebaseProvider from './context/FirebaseContext';
import Error from './Error';
import Proshow from './pages/Proshow';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/events",
    element: <Error />
  },
  {
    path: "/workshops",
    element: <Error />
  },
  {
    path: "/proshows",
    element: <Proshow />
  },
  {
    path: "/dept/:id",
    element: <Error />
  },
  {
    path: "/test/:id",
    element: <Error />
  },
  {
    path: "/error",
    element: <Error />
  },
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

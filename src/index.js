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
    element: <Events />
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
    element: <Dept />
  },
  {
    path: "/test/:id",
    element: <Dept />
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

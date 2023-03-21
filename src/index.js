import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavProvider from './context/NavContext';
import Events from './pages/Event/Events';
import Workshops from './pages/Workshops/Workshops';
import Dept from './pages/Dept/Dept';
import FirebaseProvider from './context/FirebaseContext';
import Error from './pages/Error/Error';
import Proshow from './pages/Proshow/Proshow';
import Loading from './pages/Loading/Loading';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/home",
    element: <App />,

  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/workshops",
    element: <Dept workshop />
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
    path: "/dept-works/:id",
    element: <Dept workshop />
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

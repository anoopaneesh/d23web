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
import Tickets from './pages/Tickets/Tickets';
import Accomodation from './pages/Accomodation/Accomodation';
import Team from './pages/Team/Team';
import E404 from './pages/404/E404'
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
    element: <Workshops />
  },
  {
    path: "/proshows",
    element: <Proshow />
  },
  {
    path: "/tickets",
    element: <Tickets />
  },
  {
    path: "/accomodation",
    element: <Accomodation />
  },
  {
    path: "/teams",
    element: <Team />
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
  {
    path: "/404",
    element: <E404 />
  },
  {
    path: "/rjd23",
    element: window.open("https://rjd23.vercel.app/")
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

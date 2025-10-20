import { createHashRouter } from 'react-router-dom';
import App from './App.tsx';
import Articles from './pages/Articles.tsx';
import Maps from './pages/Maps.tsx';
import Writing from './pages/Writing.tsx';
import Accueil from './pages/Accueil.tsx';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Accueil />,
      },
      {
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/maps',
        element: <Maps />,
      },
      {
        path: '/writing',
        element: <Writing />,
      },
    ],
  },
]);

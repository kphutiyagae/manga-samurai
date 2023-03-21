import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: 'section/:mangaSection',
        element: <div>Manga Section</div>,
        errorElement: <div>Manga Section Error</div>,
      },
      {
        path: 'mangaInfo/:mangaId',
        element: <div>Manga Section</div>,
        errorElement: <div>Manga Info Error</div>,
      },
      {
        path: 'readManga/:mangaId',
        element: <div>Manga Read Page</div>,
        errorElement: <div>Manga Read Error</div>,
      },
      {
        path: 'search/',
        element: <div>Manga Search Page</div>,
        errorElement: <div>Manga Search Error</div>,
      },
    ],
  },
]);

export default appRouter;

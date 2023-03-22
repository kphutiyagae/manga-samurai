import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/Pages/HomePage';
import MangaInfoPage from '../components/Pages/MangaInfoPage';
import MangaSectionPage from '../components/pages/MangaSectionPage';
import ReadMangaPage from '../components/Pages/ReadMangaPage';
import SearchPage from '../components/Pages/SearchPage';
import Root from '../Root';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: 'home',
        element: <HomePage/>,
        errorElement: <div>Manga Section Error</div>,
      },
      {
        path: 'section/:mangaSection',
        element: <MangaSectionPage/>,
        errorElement: <div>Manga Section Error</div>,
      },
      {
        path: 'mangaInfo/:mangaId',
        element: <MangaInfoPage />,
        errorElement: <div>Manga Info Error</div>,
      },
      {
        path: 'readManga/:mangaId',
        element: <ReadMangaPage />,
        errorElement: <div>Manga Read Error</div>,
      },
      {
        path: 'search/',
        element: <SearchPage/>,
        errorElement: <div>Manga Search Error</div>,
      },
    ],
  },
]);

export default appRouter;

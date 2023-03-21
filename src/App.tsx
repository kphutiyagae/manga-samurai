import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/pages/HomePage';
import MangaCategoryPage from './components/pages/MangaCategoryPage';
import MangaInfoPage from './components/pages/MangaInfoPage';
import ReadMangaPage from './components/pages/ReadMangaPage';
import SearchPage from './components/pages/SearchPage';
import appRouter from './routes/AppRouter';

function App() {
  return <RouterProvider router={appRouter}/>;
}
export default App;

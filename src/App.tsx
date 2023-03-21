import './App.css';
import { HomePage } from './components/pages/HomePage';
import MangaCategoryPage from './components/pages/MangaCategoryPage';
import MangaInfoPage from './components/pages/MangaInfoPage';
import ReadMangaPage from './components/pages/ReadMangaPage';
import SearchPage from './components/pages/SearchPage';

function App() {
  return (
    <div className='h-screen'>
      <HomePage />
    </div>
  );
}

export default App;

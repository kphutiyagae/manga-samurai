import './App.css';
import React, { useEffect, useState } from 'react';
import { getManga, getMangaList } from './api/apiService';

function App() {

  getManga('8fa4d0ee-562f-4e6e-af96-a62c99de5478');

  return <div className='App'></div>;
}

export default App;

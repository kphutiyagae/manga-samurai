import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { searchManga } from '../../api/apiService';
import { IManga } from '../../types/types';

function SearchPage() {
  
  const [mangaSearchResultsList, setmangaSearchResultsList] = useState<IManga[]>()
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const { isLoading, isError, data } = useQuery({
    queryKey: ['mangaSearchQuery'],
    queryFn: () => {
      if(searchQuery)
      searchManga(searchQuery)
    },
    onSuccess: (data) => {
        if(data != undefined){
            setmangaSearchResultsList(data)
        }
    }
})

  return (
    <div>Search
    </div>
  );
}

export default SearchPage;

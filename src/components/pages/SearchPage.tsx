/* eslint-disable import/extensions */
import { useQuery } from '@tanstack/react-query';
import { List } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMangaCoverUrl, searchManga } from '../../api/apiService';
import { IManga } from '../../types/types';
import { SearchListCard } from '../UI/atoms/SearchListCard';

function SearchPage() {
  const [mangaSearchResultsList, setmangaSearchResultsList] = useState<IManga[]>();

  const [searchQuery, setSearchQuery] = useState('');

  const [isSearching, setIsSearching] = useState(false);

  const showRecentSearches = false;

  const navigator = useNavigate();

  const {
    isLoading, isError, data, refetch,
  } = useQuery({
    queryKey: ['mangaSearchQuery'],
    queryFn: () => {
      if (searchQuery !== undefined) { searchManga(searchQuery); }
    },
    onSuccess: (searchData) => {
      if (searchData !== undefined) {
        setmangaSearchResultsList(searchData);
      }
    },
  });

  return (
  <div className='h-screen'>
    <div className=' h-1/6 pt-8  px-5'>
      <Search
      placeholder='What are you looking for?'
      size='large'
      allowClear
      onSearch={() => {
        refetch();
      }}
      onChange= {(e) => { setSearchQuery(e.target.value); }}
      />
    </div>
    <div className={'h-5/6 flex flex-col'}>
      <div className={`h-2/5 border-b-2 ${!showRecentSearches ? 'hidden' : ''}`}>
      <p className='font-semibold ml-5 mt-5'>Recent Searches</p>
    </div>
    <div className={`h-full ${!false ? 'h-full' : 'h-3/5'}`}>
    {
      isLoading ? (
        <div>Loading...</div>
      ) : (
        <List
        dataSource={mangaSearchResultsList}
        className='overflow-auto h-full'
        renderItem={ (manga: IManga) => <SearchListCard
          id={manga?.id}
          image={getMangaCoverUrl(manga)}
          contentRating={manga?.attributes?.contentRating as string}
          onClick={ () => { navigator(`../mangaInfo/${manga.id}`); }}
          title={manga?.attributes?.title?.en as string}
          key={manga?.id}
          status={manga?.attributes?.status}
          styles='ml-5'
          />}
        />
      )
    }

    </div>
  </div>
  </div>
  );
}

export default SearchPage;

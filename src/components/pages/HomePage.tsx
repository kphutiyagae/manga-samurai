/* eslint-disable import/extensions */
import { useQuery } from '@tanstack/react-query';
import { List, Skeleton } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMangaCoverUrl, getMangaList } from '../../api/apiService';
import { apiData } from '../../api/mock/apiData';
import { IHomeProps, IManga, IMangaListResponse } from '../../types/types';
import { ListCard } from '../UI/atoms/ListCard';
import HorizontalScrollContainer from '../UI/molecules/HorizontalScrollContainer';
import { ListComponent } from '../UI/molecules/ListComponent';
import { NavigationBar } from '../UI/molecules/NavigationBar';
import PageSection from '../UI/organisms/PageSection';

function HomePage() {
  const [mangaListData, setMangaListData] = useState<IManga[]>([]);

  const isMobile = true;

  const { isLoading, isError, data } = useQuery({
    queryKey: ['mangaList'],
    queryFn: () => getMangaList(),
    onSuccess: (mangaList) => {
      if (mangaList !== undefined) {
        setMangaListData(mangaList);
      }
    },
  });

  if (isLoading) {
    return <span>Loading......</span>;
  }

  if (isError) {
    return <span>Error: {isError}</span>;
  }

  return (
    <>
    <div className='w-full h-full bg-background-color md:grid md:grid-cols-12 md:grid-rows-12'>
        <PageSection
        sectionTitle='Trending'
        styles='h-2/5 md:h-auto mb-4 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-13'
        floatingPill={<div><Link to='/section/trending'></Link></div>}
        data={mangaListData}
        isMobile={isMobile}
        />
        <PageSection
        sectionTitle='New Releases'
        styles='h-2/5 md:h-auto mb-4 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-13'
        floatingPill={<div><Link to='/section/newreleases'></Link></div>}
        data={mangaListData}
        isMobile={isMobile}
        />
        <PageSection
        sectionTitle='Top Rated'
        floatingPill={<div><Link to='/section/toprated'></Link></div>}
        styles='h-2/5 md:h-auto mb-4 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-13'
        data={mangaListData}
        isMobile={isMobile}
        />
    </div>
    </>
  );
}

export default HomePage;

/* eslint-disable import/extensions */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMangaCategoryList, getMangaList } from '../../api/apiService';
import { IManga } from '../../types/types';
import { getMangaCategory } from '../../util/utils';
import ErrorComponent from '../UI/atoms/ErrorComponent';
import PageSection from '../UI/organisms/PageSection';

function HomePage() {
  const [mangaListTrendingData, setMangaListTrendingData] = useState<IManga[]>([]);
  const [mangaListNewReleasesData, setMangaListNewReleasesData] = useState<IManga[]>([]);
  const [mangaListTopRatedData, setMangaListTopRatedData] = useState<IManga[]>([]);

  const isMobile = true;

  const { isLoadingTrending, isErrorTrending } = useQuery({
    queryKey: ['mangaListTrendingData'],
    queryFn: () => getMangaCategoryList(getMangaCategory('trending')),
    onSuccess: (mangaList) => {
      if (mangaList !== undefined) {
        setMangaListTrendingData(mangaList);
      }
    },
  });

  const { isLoadingNewRelease, isErrorNewRelease } = useQuery({
    queryKey: ['mangaListNewReleaseData'],
    queryFn: () => getMangaCategoryList(getMangaCategory('newreleases')),
    onSuccess: (mangaList) => {
      if (mangaList !== undefined) {
        setMangaListNewReleasesData(mangaList);
      }
    },
  });

  const { isLoadingTopRated, isErrorTopRated } = useQuery({
    queryKey: ['mangaListTopRatedData'],
    queryFn: () => getMangaCategoryList(getMangaCategory('toprated')),
    onSuccess: (mangaList) => {
      if (mangaList !== undefined) {
        setMangaListTopRatedData(mangaList);
      }
    },
  });

  const isLoading: boolean = isLoadingNewRelease || isLoadingTopRated || isLoadingTrending;

  const isError: boolean = isErrorNewRelease || isErrorTopRated || isErrorTrending;

  if (isLoading) {
    return <span>Loading......</span>;
  }

  if (isError) {
    return <ErrorComponent/>;
  }

  return (
    <>
    <div className='w-full h-full bg-background-color md:grid md:grid-cols-12 md:grid-rows-12'>
        <PageSection
        sectionTitle='Trending'
        styles='h-2/5 md:h-auto mb-4 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-13'
        floatingPill={<div><Link to='/section/trending'></Link></div>}
        data={mangaListTrendingData}
        isMobile={isMobile}
        />
        <PageSection
        sectionTitle='New Releases'
        styles='h-2/5 md:h-auto mb-4 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-13'
        floatingPill={<div><Link to='/section/newreleases'></Link></div>}
        data={mangaListNewReleasesData}
        isMobile={isMobile}
        />
        <PageSection
        sectionTitle='Top Rated'
        floatingPill={<div><Link to='/section/toprated'></Link></div>}
        styles='h-2/5 md:h-auto mb-4 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-13'
        data={mangaListTopRatedData}
        isMobile={isMobile}
        />
    </div>
    </>
  );
}

export default HomePage;

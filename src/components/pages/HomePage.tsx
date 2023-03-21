import { List, Skeleton } from 'antd';
import React from 'react';
import { useState } from 'react';
import { getMangaCoverUrl } from '../../api/apiService';
import { apiData } from '../../api/mock/apiData';
import { IHomeProps, IManga, IMangaListResponse} from '../../types/types';
import { ListCard } from '../UI/atoms/ListCard';
import HorizontalScrollContainer from '../UI/molecules/HorizontalScrollContainer';
import { ListComponent } from '../UI/molecules/ListComponent';
import { NavigationBar } from '../UI/molecules/NavigationBar';
import { PageSection } from '../UI/organisms/PageSection';

export function HomePage({} : IHomeProps) {

  const [data, setData] = useState<IMangaListResponse>(apiData)
  
  const isMobile = false;

  console.log(data)
  return (
    <div className='w-full h-full bg-background-color md:grid md:grid-cols-12 md:grid-rows-12'>
        <NavigationBar/>
        <PageSection
      sectionTitle='New Releases'
      styles='h-2/5 md:h-auto mb-4 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-13 bg-red-800'
      >
      { isMobile ? (

<List
dataSource={data.data.slice(0,3)}
className='overflow-auto h-2/3'
renderItem={ (manga: IManga) => {
  return <ListCard 
        cardTitle={manga?.attributes?.title?.en as string}
        onClick={ () => console.log(`clicked: ${manga?.attributes?.title?.en}`)}
        cardSubtitle={`Chapters: ${manga?.attributes?.lastChapter}`}
        progressPercentage={40}
        styles='p-1'
        image={getMangaCoverUrl(manga)}
        mangaRating={manga?.attributes?.contentRating as string}
  />
}}
/>
      ) : (
        <HorizontalScrollContainer data={data.data.slice(0,10)}/>
      ) }
      </PageSection>
    </div>
  );
}

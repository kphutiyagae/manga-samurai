import { List, Skeleton } from 'antd';
import React from 'react';
import { useState } from 'react';
import { getMangaCoverUrl } from '../../api/apiService';
import { apiData } from '../../api/mock/apiData';
import { IHomeProps, IManga, IMangaListResponse} from '../../types/types';
import { ListCard } from '../UI/atoms/ListCard';
import { ListComponent } from '../UI/molecules/ListComponent';
import { NavigationBar } from '../UI/molecules/NavigationBar';
import { PageSection } from '../UI/organisms/PageSection';

export function HomePage({} : IHomeProps) {

  const [data, setData] = useState<IMangaListResponse>(apiData)

  console.log(data)
  return (
    <div className='w-full h-full bg-background-color'>
      <NavigationBar />
      <PageSection
      sectionTitle='New Releases'
      styles='h-1/3 mb-4'
      >
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
      </PageSection>
      <PageSection
      sectionTitle='Trending'
      styles='h-1/3 mb-4'
      >
      <ListComponent
      styles=''
      />
      </PageSection>
      <PageSection
      sectionTitle='Continue Reading'
      styles='h-1/3 mb-4'
      >
      <ListComponent
      styles=''
      />
      </PageSection>
      <PageSection
      sectionTitle='Favourites'
      styles='h-1/3 mb-4'
      >
      <ListComponent
      styles=''
      />
      </PageSection>
    </div>
  );
}

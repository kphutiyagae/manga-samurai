import React, { useState } from 'react';
import { Button, List } from 'antd';
import { IoChevronBackOutline } from 'react-icons/io5';
import { IManga, IMangaCategoryPageProps, IMangaListResponse } from '../../types/types';
import { NavigationBar } from '../UI/molecules/NavigationBar';
import { apiData } from '../../api/mock/apiData';
import { ListCard } from '../UI/atoms/ListCard';
import { getMangaCoverUrl } from '../../api/apiService';

function MangaCategoryPage() {
  const [data, setData] = useState<IMangaListResponse>(apiData);

  return (
    <div className='class'>
      <NavigationBar/>
      <div className='h-screen flex flex-col'>
      <div className='flex flex-row border-b-2 sticky top-0 z-30 pl-4'>
      <div className='flex justify-center items-center w-14'>
      <Button className='rounded-full w-12 h-12 flex justify-center items-center'
      onClick={() => console.log('Go Back')}
      >
        <IoChevronBackOutline/>
      </Button>
      </div>
      <h1 className='text-[2rem] pl-2 pt-3 pb-4 font-bold '>{category}</h1>
      </div>
      <List
      className='overflow-auto'
      dataSource={data.data.slice(0, 5)}
      renderItem={ (manga: IManga) => <ListCard
              cardTitle={manga?.attributes?.title?.en as string}
              onClick={ () => console.log(`clicked: ${manga?.attributes?.title?.en}`)}
              cardSubtitle={`Chapters: ${manga?.attributes?.lastChapter}`}
              progressPercentage={40}
              styles='p-1'
              image={getMangaCoverUrl(manga)}
              mangaRating={manga?.attributes?.contentRating as string}
        />}
      />
      </div>
    </div>
  );
}

export default MangaCategoryPage;

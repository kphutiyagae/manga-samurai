import React from 'react';
import { List } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getMangaCoverUrl } from '../../../api/apiService';
import { IManga, IPageSectionProps } from '../../../types/types';
import { ListCard } from '../atoms/ListCard';
import HorizontalScrollContainer from '../molecules/HorizontalScrollContainer';
import { getMangaSectionName } from '../../../util/utils';

function PageSection({
  sectionTitle, data, styles, isMobile,
}: IPageSectionProps) {
  const navigator = useNavigate();

  return (

    <>
    <div className={styles}>
      <div className='h-[4rem] pb-4 '>
        <h2 className='text-3xl pl-5 pt-3 font-semibold'>{sectionTitle}</h2>
      </div>
    <div className='h-[16.4rem]'>
      { isMobile
        ? (
          <List
            dataSource={data}
            className='overflow-auto h-full'

            renderItem={ (manga: IManga) => <ListCard
              cardTitle={manga?.attributes?.title?.en as string}
              onClick={ () => { navigator(`../mangaInfo/${manga.id}`); }}
              cardSubtitle={`Chapters: ${manga?.attributes?.lastChapter}`}
              styles='p-1'
              image={getMangaCoverUrl(manga)}
              key={manga?.id}
              mangaRating={manga?.attributes?.contentRating as string}/>}
          />

        )
        : (
          <div className='bg-blue-800'>
          <HorizontalScrollContainer data={data}/>
          </div>
        )
      }
    </div>
    <div className='flex justify-center w-full p-3 cursor-pointer '>
      <div className='w-20 flex justify-center items-center rounded-full'
      onClick={() => { navigator(`../section/${getMangaSectionName(sectionTitle)}`); }}
      >
        { data ? <p className='text-sm font-medium'>See More</p> : null }
      </div>
    </div>

    </div>

    </>

  );
}

export default PageSection;

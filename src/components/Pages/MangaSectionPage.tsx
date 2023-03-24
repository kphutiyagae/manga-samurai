/* eslint-disable import/extensions */
import { useQuery } from '@tanstack/react-query';
import { List } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMangaCategoryList, getMangaCoverUrl } from '../../api/apiService';
import { IManga } from '../../types/types';
import { getMangaCategory, getMangaCategoryPage } from '../../util/utils';
import { ListCard } from '../UI/atoms/ListCard';

function MangaSectionPage() {
  const { mangaSection } = useParams();

  const mangaCategory = getMangaCategory(mangaSection as string);

  const [mangaCategoryList, setMangaCategoryList] = useState<IManga[]>();

  const navigator = useNavigate();

  const { isLoading, isError } = useQuery({
    queryKey: ['mangaCategory'],
    queryFn: () => getMangaCategoryList(mangaCategory),
    onSuccess: (data) => {
      if (data !== undefined) {
        setMangaCategoryList(data);
      }
    },
  });

  return (
    <div>
      <div>
        <h1 className='text-4xl mt-5 ml-5 mb-10 font-bold'>{getMangaCategoryPage(mangaSection as string)}</h1>
      </div>
    {
            <List
            className='overflow-auto'
            dataSource={mangaCategoryList}
            renderItem={ (manga: IManga) => <ListCard
                    cardTitle={manga?.attributes?.title?.en as string}
                    onClick={ () => { navigator(`../mangaInfo/${manga.id}`); }}
                    cardSubtitle={`Chapters: ${manga?.attributes?.lastChapter}`}
                    styles='p-1'
                    image={getMangaCoverUrl(manga)}
                    mangaRating={manga?.attributes?.contentRating as string}
              />}
            />
    }
    </div>
  );
}

export default MangaSectionPage;

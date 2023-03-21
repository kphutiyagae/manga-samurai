import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMangaCategoryList, } from '../../api/apiService';
import { IManga } from '../../types/types';
import { getMangaCategory } from '../../util/utils';

function MangaSectionPage() {
  
  const {mangaSection} = useParams();
  
  const mangaCategory = getMangaCategory(mangaSection as string);

  const [mangaCategoryList, setMangaCategoryList] = useState<IManga[]>()
    

  const { isLoading, isError, data } = useQuery({
    queryKey: ['mangaCategory'],
    queryFn: () => getMangaCategoryList(mangaCategory),
    onSuccess: (data) => {
        if(data != undefined){
            setMangaCategoryList(data)
        }
    }
})

  return (
    <div>{
      <ul>
        {
          data?.map( (manga) => <li>{manga?.attributes?.title?.en}</li>)
        }
      </ul>
      }</div>
  );
}

export default MangaSectionPage;

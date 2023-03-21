import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getManga } from '../../api/apiService';
import { IManga } from '../../types/types';

function MangaInfoPage() {

  const {mangaId} = useParams();
  
  const [manga, setManga] = useState<IManga>();

  const { isLoading, isError, data } = useQuery({
    queryKey: ['manga'],
    queryFn: () => getManga(mangaId as string),
    onSuccess: (data) => {
        if(data != undefined){
            setManga(data)
        }
    }
})

  return (
    <div>
      <p>{data?.attributes?.title?.en}</p>
      <p>{data?.attributes?.status}</p>
      <p>{data?.attributes?.contentRating}</p>
    </div>
  );
}

export default MangaInfoPage;

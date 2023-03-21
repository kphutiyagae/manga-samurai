import React, { useState } from 'react';
import {useQuery} from '@tanstack/react-query';
import { getMangaList } from '../../api/apiService';
import { IManga } from '../../types/types';



function HomePage(){

    const [mangaListData, setMangaListData ]=  useState<IManga[]>([]);
    
    const { isLoading, isError, data } = useQuery({
        queryKey: ['mangaList'],
        queryFn: () => getMangaList(),
        onSuccess: (data) => {
            if(data != undefined){
                setMangaListData(data)
            }
        }
    })

    if(isLoading) {
        return <span>Loading......</span>
    }
    
    if(isError){
        return <span>Error: {isError}</span>
    }
    
    return(
        <ul>
            {mangaListData.map( (manga) => (
                <li>
                    <p>{manga?.attributes?.title?.en}</p>
                    <p>{manga?.attributes?.status}</p>
                </li>
            ))}
        </ul>
    )
}




export default HomePage;

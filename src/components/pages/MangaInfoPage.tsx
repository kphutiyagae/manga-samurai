import { Button, List, Statistic, Tag } from 'antd';
import React, { useState } from 'react'
import { getMangaCoverUrl, getMangaStatistics } from '../../api/apiService';
import { apiData, MangaFeedList } from '../../api/mock/apiData'
import { IMangaListResponse } from '../../types/types'
import { NavigationBar } from '../UI/molecules/NavigationBar'
import {AiFillHeart} from 'react-icons/ai'
import { ListCard } from '../UI/atoms/ListCard';

function MangaInfoPage() {
    const [manga, setManga] = useState(apiData.data[0]);
    
    const [mangaChapters, setMangaChapters] = useState(MangaFeedList.data);

    const [showEntireDescription, setShowEntireDescription] = useState(false);
    
  return (
    <div className="h-screen">
        <NavigationBar/>
        <div className='h-full'>
            <div className='flex justify-center h-2/5'>
                <img
                src={getMangaCoverUrl(manga)}
                alt={`Manga cover art for ${manga?.attributes?.title}`}
                className="h-auto object-cover w-full"
                />
            </div>
            <div className='h-3/5'>
                <div className='bg-primary-color-hover h-40 p-6'>
                    <div className='flex flex-row justify-between items-center'>
                        <Statistic
                        title='Rating'
                        value={6}
                        suffix='/ 10'
                        className='ml-6'
                        />
                        <Button
                        className='mr-6 rounded-full'
                        >
                            <AiFillHeart
                            width={10}
                            />
                        </Button>
                    </div>
                    <div>
                    <Tag 
                    color='red'
                    className='mt-5 ml-5'
                    >
                        {manga?.attributes?.tags?.[0].attributes?.name?.en}
                    </Tag>
                    <Tag 
                    color='red'
                    className='ml-2'
                    >
                        {manga?.attributes?.tags?.[1].attributes?.name?.en}
                    </Tag>
                    </div>
                </div>
                <div className='bg-background-color h-4/5 p-6 pt-6 flex flex-col'>
                    <h2 className='text-2xl font-bold'>{manga?.attributes?.title?.en}</h2>
                    <h3 className='text-gray-400 font-light pt-2'>Chapters: 21</h3>
                    <p className={`{text-gray-700 font-thin pt-6 lines ${ !showEntireDescription ? 'line-clamp-3' : '' }`}>{manga?.attributes?.description?.en}</p>
                    <div className='w-full flex  justify-center'>
                    <Button
                    className='mt-6 w-1/3 flex justify-center'
                    onClick={() => {setShowEntireDescription(!showEntireDescription)}}
                    >{!showEntireDescription ? 'Read More' : 'Hide Description'}</Button>
                    </div>
                    <div className='mt-6 w-full overflow-scroll h-full bg-green-400'>
                        <List
                        dataSource={mangaChapters}
                        renderItem={ (manga) => {
                           return <List.Item>
                                <List.Item.Meta
                                title={`Volume: ${manga?.attributes?.volume}`}
                                description={`Chapter: ${manga?.attributes?.chapter}`}
                                />
                            </List.Item>
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MangaInfoPage
import { List } from 'antd'
import Search from 'antd/es/input/Search'
import React, { useState } from 'react'
import { getMangaCoverUrl } from '../../api/apiService'
import { apiData } from '../../api/mock/apiData'
import { IManga, IMangaListResponse } from '../../types/types'
import {SearchListCard} from '../UI/atoms/SearchListcard'
import { ListCard } from '../UI/atoms/ListCard'
import { NavigationBar } from '../UI/molecules/NavigationBar'

function SearchPage() {
  const [data, setData] = useState<IMangaListResponse>(apiData)
  
  return (
    <div className='h-screen'>
      <NavigationBar/>
      <div className=' h-1/6 pt-8  px-5'>
        <Search
        placeholder='What are you looking for?'
        size='large'
        allowClear
        />
      </div>
      <div className={`h-5/6 flex flex-col`}>
        <div className={`h-2/5 border-b-2 ${!false ? 'hidden' : ''}`}>
        <p className='font-semibold ml-5 mt-5'>Recent Searches</p>
      </div>
      <div className={`h-full ${!false ? 'h-full' : 'h-3/5'}`}>
      <List
      dataSource={data.data}
      className='overflow-auto h-full'
      renderItem={ (manga: IManga) => {
        return <SearchListCard 
        id={manga?.id}
        image={getMangaCoverUrl(manga)}
        contentRating={manga?.attributes?.contentRating as string}
        onClick={ () => console.log(`clicked: ${manga?.attributes?.title?.en}`)}
        title={manga?.attributes?.title?.en as string}
        key={manga?.id}
        status={manga?.attributes?.status}
        styles='ml-5'
        />
      }}
      />
      </div>
    </div>
    </div>
  )
}

export default SearchPage
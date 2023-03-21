import { Button, List } from 'antd'
import React, { useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { getMangaCoverUrl } from '../../api/apiService'
import { apiData } from '../../api/mock/apiData'
import { IManga, IMangaListResponse } from '../../types/types'
import { NavigationBar } from '../UI/molecules/NavigationBar'

function ReadMangaPage() {

  const [data, setData] = useState<IMangaListResponse>(apiData)
  
  return (
    <div className=' h-screen'>
      <NavigationBar/>
      <div className='h-full grid grid-cols-2 grid-rows-4'>
        <div className=' h-[5rem]  flex flex-row items-center row-start-1 row-end-1 col-start-1 col-end-3 z-30 sticky top-4'>
        <Button className='rounded-full w-12 h-12 flex justify-center items-center ml-6'
      onClick={() => console.log("Go Back")}
      >
        <IoChevronBackOutline/>
      </Button>
        </div>
        <div className='row-start-1 row-end-5 col-start-1 col-end-3'>
          <List
          dataSource={data.data}
          renderItem={ (manga: IManga) => {
            return <img
            src={getMangaCoverUrl(manga)}
            />
              
          }}
          />
        </div>
      </div>
    </div>
  )
}

export default ReadMangaPage
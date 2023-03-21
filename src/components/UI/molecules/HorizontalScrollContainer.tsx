import React from 'react'
import { getMangaCoverUrl } from '../../../api/apiService'
import { IHorizontalScrollContainerProps, IManga } from '../../../types/types'
import { GridCard } from '../atoms/GridCard'


const HorizontalScrollContainer = ({data}: IHorizontalScrollContainerProps) => {
  return (
    <div className={`bg-red-400 h-full w-full grid gap-3 grid-rows-1 grid-cols-10 overflow-hidden `}>
        {
            data?.map( (value) => <GridCard 
            id={value?.id}
            title={value?.attributes?.title?.en as string}
            contentRating={value?.attributes?.contentRating}
            status={value?.attributes?.status}
            styles='bg-blue-300'
            image={getMangaCoverUrl(value)}
            /> )
        }
    </div>
  )
}

export default HorizontalScrollContainer
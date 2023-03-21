import React from 'react'
import { ISearchListCardProps } from '../../../types/types'
import MangaRatingPill from './MangaRatingPill'

export const SearchListCard = ({
    id,
    image,
    title,
    status,
    contentRating,
    styles
}: ISearchListCardProps) => (
    <div className={`${styles} border-b-2 flex flex-row mb-3 h-28`}>
    <img
    src={image}
    className={`w-28 mr-2`}
    width={60}
    height={60}
    alt={`Manga cover art for ${title}`} 
    />
    <div className='w-full flex flex-col justify-center'>
    <h3 className='line-clamp-1 text-md font-semibold ml-3'>{title}</h3>
    {status ? <p className='text-sm font-light ml-3 mb-2'>{status}</p> : ''}
    {contentRating ? <MangaRatingPill rating={contentRating} styles='ml-3 mt-2'/> : ''}
    </div>
    </div>
  );

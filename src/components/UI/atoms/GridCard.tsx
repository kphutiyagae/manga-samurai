import React from 'react'
import { IGridCardProps } from '../../../types/types'

export const GridCard = ({
    id,
    title,
    contentRating,
    image,
    status,
    styles
}: IGridCardProps) => {
  return (
    <div className='bg-yellow-200 h-full'>
        <>
        <img
        src={image}
        alt={`Cover art for ${title}`}
        className='line-clamp-2'
        />
        <div>
            <h3>{title}</h3>
        </div>
        </>
    </div>
  )
}
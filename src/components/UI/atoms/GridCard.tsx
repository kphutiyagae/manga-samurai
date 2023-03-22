import React from 'react';
import { IGridCardProps } from '../../../types/types';

export const GridCard = ({
  id,
  title,
  contentRating,
  image,
  status,
  styles,
}: IGridCardProps) => (
    <div className='bg-yellow-200 h-full w-96 p-5'>
        <>
        <img
        src={image}
        alt={`Cover art for ${title}`}
        className='line-clamp-2'
        width={40}
        />
        <div>
            <h3>{title}</h3>
        </div>
        </>
    </div>
);

export default GridCard;

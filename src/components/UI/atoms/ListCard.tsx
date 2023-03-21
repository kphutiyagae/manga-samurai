import React from 'react';
import { Progress } from 'antd';
import { AiOutlineRight } from 'react-icons/ai';
import { IListCardProps } from '../../../types/types';
import MangaRatingPill from './MangaRatingPill';

export const ListCard = ({
  styles,
  cardTitle,
  cardSubtitle,
  progressPercentage,
  onClick,
  mangaRating,
  image
}: IListCardProps) => (
    <div
    onClick={onClick}
    className={styles.concat('  w-full flex flex-row p-4 justify-between hover:bg-primary-color-hover active:bg-primary-color-highlight transition duration-100 ease-in-out cursor-pointer ')}>
    <img
    src={image}
    className='w-28 mr-1'
    width={80}
    height={80}
    alt={`Manga cover art for ${cardTitle}`}
    />
    <div className='w-56 p-3'>
    <h3>{cardTitle}</h3>
    <p>{cardSubtitle}</p>

    {progressPercentage ? <Progress percent={progressPercentage}></Progress> : null }
    <MangaRatingPill
    rating={mangaRating}
    />
    </div>
    <div className='w-16 p-3 flex place-items-center justify-center'>
        <AiOutlineRight
        size={30}
        />
    </div>
    </div>
);

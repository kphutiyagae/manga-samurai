import React from 'react'
import { IListCardProps } from '../../../types/types'
import {Progress} from 'antd';
import {AiOutlineRight} from 'react-icons/ai'

export const ListCard = ({
    image,
    styles,
    cardTitle,
    cardSubtitle,
    progressPercentage,
    onClick
}: IListCardProps) => {

  return (
    <div 
    onClick={onClick}
    className={styles.concat(" w-full flex flex-row p-4 justify-between hover:bg-primary-color-hover active:bg-primary-color-highlight transition duration-100 ease-in-out")}>
    <img
    src={"placeholder"}
    className='w-28 mr-1'
    width={80}
    height={80}
    />
    <div className='w-56 p-3'>
    <h3>{cardTitle}</h3>
    <p>{cardSubtitle}</p>
    <Progress percent={progressPercentage}></Progress>
    </div>
    <div className='w-16 p-3 flex place-items-center justify-center'>
        <AiOutlineRight
        size={30}
        />
    </div>
    </div>
  )
}

import React from 'react';
import { IPageSectionProps } from '../../../types/types';

export const PageSection = ({ sectionTitle, children, styles }: IPageSectionProps) => (
  <div className={styles}>
    <div className='h-1/4 pb-4'>
      <h2 className='text-3xl pl-5 pt-3 font-semibold'>{sectionTitle}</h2>
    </div>
    <div className='h-2/4'>{children}</div>
    <div className='flex justify-center w-full p-3 cursor-pointer'>
      <div className='w-20 flex justify-center items-center rounded-full'>
        { children ? <p className='text-sm font-medium'>See More</p> : null }
      </div>
    </div>
  </div>
);

import React from 'react'
import { IPageSectionProps } from '../../../types/types'


export const PageSection = ({
    sectionTitle,
    floatingPill,
    children,
    styles
}: IPageSectionProps) => {
    return (
    <div className={styles}>
        <div className='bg-red-500'>
        <h2 className='text-3xl pl-5 pt-3 h-1/3 font-semibold'>{sectionTitle}</h2>
        </div>
        <div className='bg-green-400 h-full'>
            {children}
        </div>
    </div>)
}
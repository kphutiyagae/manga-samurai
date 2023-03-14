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
        <div className='h-1/4 pb-4'>
        <h2 className='text-3xl pl-5 pt-3 font-semibold'>{sectionTitle}</h2>
        </div>
        <div className='h-3/4'>
            {children}
        </div>
    </div>)
}
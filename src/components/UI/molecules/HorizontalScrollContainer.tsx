import React from 'react';
import { getMangaCoverUrl } from '../../../api/apiService';
import { IHorizontalScrollContainerProps, IManga } from '../../../types/types';
import { GridCard } from '../atoms/GridCard';

const HorizontalScrollContainer = ({ data }: IHorizontalScrollContainerProps) => (
    <div className={' h-full w-full overflow-x-scroll flex flex-row'}>
        {
            data?.map((value) => <GridCard
            id={value?.id}
            key={value?.id}
            title={value?.attributes?.title?.en as string}
            contentRating={value?.attributes?.contentRating}
            status={value?.attributes?.status}
            styles='bg-blue-300'
            image={getMangaCoverUrl(value)}
            />)
        }

    </div>
);

export default HorizontalScrollContainer;

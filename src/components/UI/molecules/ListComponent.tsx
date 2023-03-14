import React from 'react'
import { IListComponent } from '../../../types/types'
import { ListCard } from '../atoms/ListCard';
import {List} from 'antd'

export const ListComponent = ({
    children,
    skeletonLoader,
    styles
}: IListComponent) => {
    return (
        <List className={`${styles} h-full overflow-auto`}>
        </List>
    );
}
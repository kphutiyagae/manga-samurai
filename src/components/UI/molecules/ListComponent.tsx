import React from 'react';
import { List } from 'antd';
import { IListComponent } from '../../../types/types';

export const ListComponent = ({
  styles,
}: IListComponent) => (
        <List className={`${styles} h-full overflow-auto`}>
        </List>
);

import React from 'react';
import { List } from 'antd';
import { IListComponent, IManga } from '../../../types/types';

export const ListComponent = ({
  styles,
  listData,
}: IListComponent) => (
        <List dataSource={listData} className={`${styles} h-full overflow-auto`}

        >

        </List>
);

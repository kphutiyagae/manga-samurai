import React from 'react';
import { Button } from 'antd';
import { ICustomButtonProps } from '../../../types/types';

// Code referenced from MyCoolButton.tsx by Tim Headley (react-but-better: https://github.com/theadley/graduate-programme-23/blob/main/react-but-better/src/components/MyCoolButton.tsx)
export const CustomButton = ({
  children,
  classStyles = '',
  type,
}: ICustomButtonProps) => (
        <Button
        type={type}
        className={classStyles}
        >
        {children}
        </Button>
);

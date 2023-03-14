import React from 'react'
import { ICustomButtonProps } from '../../../types/types'
import {Button} from 'antd';

//Code referenced from MyCoolButton.tsx by Tim Headley (react-but-better: https://github.com/theadley/graduate-programme-23/blob/main/react-but-better/src/components/MyCoolButton.tsx)
export const CustomButton = ({
    themeColor = 'light',
    children,
    classStyles = '',
    onClick,
    type
}: ICustomButtonProps) => {
    return (
        <Button
        type={type}
        className={classStyles}
        >
        {children}
        </Button>
    )
}
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { INavigationBarProps } from '../../../types/types';
import { CustomButton } from '../atoms/CustomButton';

export function NavigationBar(props: INavigationBarProps) {
  return (
    <div className='py-8 flex flex-row flex-shrink-0  bg-primary-color sticky top-0 z-50 md:row-start-1 md:row-end-1 md:col-start-1 md:col-end-13'>
        <CustomButton
        type='primary'
        classStyles='ml-7 h-11 w-11 flex justify-center align-center place-items-center rounded-full'
        >
        <GiHamburgerMenu
        color='black'
        />
        </CustomButton>
        <CustomButton
        type='primary'
        classStyles='ml-28 md:ml-[18rem]'
        >
            Logo
        </CustomButton>
    </div>
  );
}

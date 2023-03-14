import React from 'react'
import { INavigationBarProps } from '../../../types/types'
import { CustomButton } from '../atoms/CustomButton'
import {GiHamburgerMenu} from 'react-icons/gi';

export function NavigationBar(props: INavigationBarProps) {
  return (
    <div className='py-8 flex flex-row flex-shrink-0 bg-blue-300'>
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
        classStyles='ml-28'        
        >
            Logo
        </CustomButton>
    </div>
  )
}
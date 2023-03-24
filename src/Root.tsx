import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from './components/UI/molecules/NavigationBar';

function Root() {
  return (
   <div className='bg-background-color h-full w-full'>
   <NavigationBar/>
   <Outlet />
   </div>
  );
}

export default Root;

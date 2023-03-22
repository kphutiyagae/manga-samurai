import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from './components/UI/molecules/NavigationBar';

function Root() {
  return (
   <div className='bg-red-400 h-full w-full'>
   <NavigationBar/>
   <Outlet />
   </div>
  );
}

export default Root;

import React from 'react';

function ErrorComponent() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold mb-2'>Oh no!</h1>
        <h2 className='text-xl font-medium mb-4'>It seems like something went wrong.</h2>
        <p className='font-light'>Maybe you should try refreshing.</p>
    </div>
  );
}

export default ErrorComponent;

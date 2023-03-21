import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../dist/stylesheets/main.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>

);

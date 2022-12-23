import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from './router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppContextProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthMiddleware from './middleware/AuthMiddleware';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 1000,
        },
    },
});


function App() {
    const content = useRoutes(routes);
    return (
        <>
            <CssBaseline />
            <ToastContainer />
            {content}
        </>
    );
}


const root = ReactDOM.createRoot(document.querySelector('#app')!);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <AppContextProvider>
                    <AuthMiddleware>
                        <App />
                    </AuthMiddleware>
                </AppContextProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </Router>
        </QueryClientProvider>
    </React.StrictMode>
);
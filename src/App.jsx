import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataProvider } from './context/DataContext';
import { segments } from './api/routes';

import Analyses from './pages/Analyses';
import Article from './pages/Article';
import Charts from './pages/Charts';
import Home from './pages/Home';
import News from './pages/News';

import Layout from './components/structure/Layout';

import './App.scss';

const queryClient = new QueryClient()

function App() {
  return (
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={segments.ROOT} element={ <Layout /> }>
              <Route index element={ <Home /> } />
              <Route path={segments.CHARTS} element={ <Charts /> } />
              <Route path={segments.NEWS} element={ <News /> } />
              <Route path={segments.NEWS + '/:slug'} element={ <Article /> } />
              <Route path={segments.ANALYSES} element={ <Analyses /> } />
              <Route path={segments.ANALYSES + '/:slug'} element={ <Article /> } />
              
              { /* fallback */ }
              <Route path='*' element={<Navigate to={segments.ROOT} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DataProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import './index.css';
import AppWrapper from './components/AppWrapper/AppWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const CalculatorApp = React.lazy(() => import('./apps/calculator/'));
const TicTacToeApp = React.lazy(() => import('./apps/tictactoe'));
const GreensightApp = React.lazy(() => import('./apps/greensight'));
const TodoApp = React.lazy(() => import('./apps/todo'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tic-tac-toe" element={
          <React.Suspense fallback={<LoadingPage appname='Tic Tac Toe' />}>
            <AppWrapper>
              <TicTacToeApp />
            </AppWrapper>
          </React.Suspense>
        } />
        <Route path="/greensight" element={
          <React.Suspense fallback={<LoadingPage appname='Greensight Test Tast' />}>
            <AppWrapper>
              <GreensightApp />
            </AppWrapper>
          </React.Suspense>
        } />
        <Route path="/todo" element={
          <React.Suspense fallback={<LoadingPage appname='Todo App' />}>
            <AppWrapper>
              <TodoApp />
            </AppWrapper>
          </React.Suspense>
        } />
        <Route path="/calculator" element={
          <React.Suspense fallback={<LoadingPage appname='Calculator' />}>
            <AppWrapper>
              <CalculatorApp />
            </AppWrapper>
          </React.Suspense>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

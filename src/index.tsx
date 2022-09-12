import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import './index.css';

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
          <React.Suspense fallback={<>...</>}>
            <TicTacToeApp />
          </React.Suspense>
        } />
        <Route path="/greensight" element={
          <React.Suspense fallback={<>...</>}>
            <GreensightApp />
          </React.Suspense>
        } />
        <Route path="/todo" element={
          <React.Suspense fallback={<>...</>}>
            <TodoApp />
          </React.Suspense>
        } />
        <Route path="/calculator" element={
          <React.Suspense fallback={<>...</>}>
            <CalculatorApp />
          </React.Suspense>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import App from './App';
import './index.css';
import { Provider }  from "react-redux"
import store from './store'

const TodoApp = () => <Provider store={store}><App/></Provider>

export default TodoApp;
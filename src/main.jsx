import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './index.css';
import "./assets/font/stylesheet.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />);

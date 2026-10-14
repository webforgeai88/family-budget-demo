import React from 'react';
import { createRoot } from 'react-dom/client';
import BudgetApp from './app/budget-app';
import './app/main.css';
createRoot(document.getElementById('root')!).render(<BudgetApp/>);

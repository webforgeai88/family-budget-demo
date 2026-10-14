import React from 'react';
import { createRoot } from 'react-dom/client';
import BudgetApp from './app/budget-app';
import './app/main.css';
import './app/demo-layout.css';
createRoot(document.getElementById('root')!).render(<BudgetApp/>);

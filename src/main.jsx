/**
 * Created by linhan on 16/7/31.
 */
import './css/main.css';
import React from 'react';
import {render} from 'react-dom';
import ProductsPage from './components/ProductsPage.jsx'
// init shell
initShell();

function initShell() {
    var shell = document.createElement('main');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render(<ProductsPage/>, shell);
}
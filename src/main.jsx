/**
 * Created by linhan on 16/7/31.
 */
import './css/main.css';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { createStore,combineReducers } from 'redux'
import ProductsPage from './components/ProductsPage.jsx'
import {searchName,  isInStocked, products}  from './reducers/tableReducers.jsx';

let initialState = {products:[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
],
    filterProductName:"",
    isOnlyShowStocked:false,

};


let store = createStore(combineReducers({
    filterProductName:searchName,
    isOnlyShowStocked:isInStocked,
    products:products
}),initialState);


// init shell
initShell();

function initShell() {
    var shell = document.createElement('main');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render(
        <Provider store={store}>
            <ProductsPage/>
        </Provider>
        , shell);
}
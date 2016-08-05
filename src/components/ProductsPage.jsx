/**
 * Created by linhan on 16/7/31.
 */
import '../css/main.css';
import React,{Component} from 'react';
import {render} from 'react-dom';
import ProductsFilter from './ProductsFilter.jsx';
import SearchFilter from './SearchFilter.jsx'
export default class ProductsPage extends Component{

render(){
    return (
        <div>
            <SearchFilter/>
            <ProductsFilter/>
        </div>

    );
}

}
/**
 * Created by linhan on 16/7/31.
 */
import '../css/main.css';
import React,{Component} from 'react';
import Update from 'react-addons-update';
import {render} from 'react-dom';
import ProductTable from './ProductTable.jsx';
import SearchBanner from './SearchBanner.jsx'
export default class ProductsPage extends Component{

constructor(){
    super();
    this.state = {products:[
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
    this.onUserSetSearchCondition = this.onUserSetSearchCondition.bind(this)
}

onUserSetSearchCondition(inputText,isChecked){
    this.setState(Update(this.state,{$set:{filterProductName:inputText,isOnlyShowStocked:isChecked}}));
}


render(){

    return (
        <div>
            <SearchBanner inputText = {this.state.filterProductName} isOnlyShowStocked = {this.state.isOnlyShowStocked} onUserSearch = {this.onUserSetSearchCondition}/>
            <ProductTable products={this.state.products} filterText={this.state.filterProductName} isOnlyShowStocked={this.state.isOnlyShowStocked} />
        </div>

    );
}

}
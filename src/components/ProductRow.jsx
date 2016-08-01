import React, {Component} from 'react';
import Update from 'react-addons-update'
export default class ProductRow extends Component{

    constructor(){
        super();
        this.state = {totalPrice:0,amount:0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let res= parseInt(event.target.value) * parseFloat(this.props.price.replace("$", ""));
        this.setState(Update(this.state , {$set:{amount:event.target.value,totalPrice:isNaN(res)? 0 : res.toFixed(2) }}));
    }
    render(){

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td><input type="number" value={this.state.amount} onChange={this.handleChange} min="0"  /></td>
                <td><input type="text"  value={this.state.totalPrice} readOnly /> </td>
            </tr>
        );

    }

}
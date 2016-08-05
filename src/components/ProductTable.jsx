import React, {Component} from 'react';
import ProductRow from './ProductRow.jsx'
import CategoryRow from './CategoryRow.jsx'
export default class ProductTable extends Component{

    constructor(){
        super();
        this.createProductComps = this.createProductComps.bind(this);
    }

    createProductComps(){
        return Object.keys(this.props.productsClassified).reduce((identity,keyName)=>{
            let categoryKey = keyName+"0";
            identity.push(<CategoryRow category={keyName} key={categoryKey}/>);
            return identity.concat(this.props.productsClassified[keyName].map((product,index)=>{
                return <ProductRow key={categoryKey+"_prod_"+index} name={product.name} price={product.price}/>
            }))
        },[]);

    }

    render(){
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>TotalPrice</th>
                </tr>
                </thead>
                <tbody>{this.createProductComps()}</tbody>
            </table>
        )

    }


}
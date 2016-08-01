import React, {Component} from 'react';
import ProductRow from './ProductRow.jsx'
import CategoryRow from './CategoryRow.jsx'
export default class ProductTable extends Component{

    constructor(){
        super();
        this.getProductsByFilterName = this.getProductsByFilterName.bind(this);
    }
    getDefaultProp(){
        return {
            filterText:""
        }
    }
    getProductsByFilterName(products){
        var filter = this.props.filterText;
        if(this.props.filterText == "" || !this.props.filterText){
            return products;
        }
      return products.filter((item)=> {
              if (new String(item.name).includes(filter)) {
                  return true;
              }
              return false;
          }
      )
    }

    getProductsByIsStockedState(products){
        var isOnlyShowInStocked = this.props.isOnlyShowStocked;
        if(!isOnlyShowInStocked){
            return products;
        }else {
            return products.filter((item)=> {
                    return item.stocked
            });
        }
    }

    render(){

        let productsClassifiedByCategory = {};
        this.getProductsByFilterName(this.getProductsByIsStockedState(this.props.products)).map((item,i)=>{
            if(!productsClassifiedByCategory.hasOwnProperty(item.category)){
                productsClassifiedByCategory[item.category] = [<CategoryRow category={item.category} key={item.category+"0"}/> ,<ProductRow key={i} name={item.name} price={item.price}/>];
                return productsClassifiedByCategory;
            }
            productsClassifiedByCategory[item.category].push(<ProductRow key={i} name={item.name} price={item.price}/>);
            return productsClassifiedByCategory;
        });
        console.log(productsClassifiedByCategory)
        let results = [];
        Object.keys(productsClassifiedByCategory).map((key)=>{
             results.push(productsClassifiedByCategory[key]);
         });

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
                <tbody>{results}</tbody>
            </table>
        )

    }


}
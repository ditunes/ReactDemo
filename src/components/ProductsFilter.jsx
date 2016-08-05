import {connect} from 'react-redux'
import ProductTable from './ProductTable.jsx'

    let getProductsByFilterName = (products,filterText)=>{
        if(filterText == "" || !filterText){
            return products;
        }
        return products.filter((item)=> {
                if (new String(item.name).includes(filterText)) {
                    return true;
                }
                return false;
            }
        )
    }

    let getProductsByIsStockedState = (products,isOnlyShowInStocked)=>{
        if(!isOnlyShowInStocked){
            return products;
        }else {
            return products.filter((item)=> {
                return item.stocked
            });
        }
    }

    let groupProductsByCategroy = (products)=>{
       return products.reduce((identity,item)=>{
            if(!identity.hasOwnProperty(item.category)){
                identity[item.category] = [item];
            }
            identity[item.category].push(item);
            return identity;
        },{})
    }


    let mapStateToProps= (state)=>{
        return {
            productsClassified: groupProductsByCategroy(
                getProductsByFilterName(
                    getProductsByIsStockedState(state.products, state.isOnlyShowStocked)
                , state.filterProductName))
        }
    }

const ProductsFilter = connect(mapStateToProps)(ProductTable);
export default ProductsFilter;


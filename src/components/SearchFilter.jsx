import {connect} from 'react-redux'
import SearchBanner from './SearchBanner.jsx'
import {changeFilterValue,setInStockStatus,cancelInStockStatus} from '../actions/actionCreators.jsx';
let mapStateToProps= (state)=>{
    return {
        isOnlyShowStocked: state.isOnlyShowStocked,
        inputText : state.filterProductName
    }
}


let mapDispatchToProps = (dispatcher)=>{
    return {
        onSearchNameChange:(val)=>{
            dispatcher(changeFilterValue(val));
        },
        onIsInStockedChange : (val)=>{
            if(val){
                dispatcher(setInStockStatus());
            }else{
                dispatcher(cancelInStockStatus());
            }
        }
    }
}

const SearchFilter = connect(mapStateToProps, mapDispatchToProps)(SearchBanner);
export default SearchFilter;

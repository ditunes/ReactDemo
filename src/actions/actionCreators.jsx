export const changeFilterValue = (val)=>{
    return {
        type:"CHANGE_VAL",
        newValue:val
    }
}

export const setInStockStatus = ()=>{
    return {
        type:"SELECTED"
    }
}

export const cancelInStockStatus = ()=>{
    return {
        type:"UN_SELECTED"
    }
}


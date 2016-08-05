/**
 * Created by linhan on 16/8/4.
 */
export const searchName = (state = {}, action={})=> {
    switch (action.type) {
        case 'CHANGE_VAL':
            return action.newValue;
        default:
            return state;
    }
}


export const isInStocked = (state={},action={})=>{
    switch (action.type) {
        case 'SELECTED':
            return true;
        case 'UN_SELECTED':
            return false;
        default:
            return state;
    }
}

export const products = (state={},action={})=>{
    return state;
}
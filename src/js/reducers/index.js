import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import filterReducer from './filterReducer';
import wishList from './wishListReducer';
import {counterReducer} from "./counterReducer";

const allReducers = combineReducers({
    dataReducer,
    filterReducer,
    wishList,
    counterReducer,

});

export default allReducers;

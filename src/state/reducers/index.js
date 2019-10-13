import {combineReducers} from 'redux';
import { UserReducer } from './user.reducer';
import { ProductReducer } from './product.reducer';

export default combineReducers({
    user: UserReducer,
    product: ProductReducer
})
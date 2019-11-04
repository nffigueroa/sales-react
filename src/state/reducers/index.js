import {combineReducers} from 'redux';
import { UserReducer } from './user.reducer';
import { ProductReducer } from './product.reducer';
import { ClientReducer } from './client.reducer';
import { OtherReducer } from './other.reducer';

export default combineReducers({
    user: UserReducer,
    product: ProductReducer,
    client: ClientReducer,
    other: OtherReducer
})
import { combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] /* in this way Redux persist knows that the only reducer we want to persist is cart */
  };


const rootReducer = combineReducers( {
    user : userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop:shopReducer
  
})


const persistedReducer = persistReducer(persistConfig, rootReducer);


export default persistedReducer;



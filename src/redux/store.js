import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import persistedReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middlewares = [logger];

export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};

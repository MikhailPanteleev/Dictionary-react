import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import HomePageReducer from '../pages/HomePage/reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  word: HomePageReducer,
});

export default persistReducer(persistConfig, rootReducer);

import { createStore } from 'retalk';
// import { persistStore, autoRehydrate } from 'redux-persist';
// import { asyncSessionStorage }  from 'redux-persist/storages'

import IndexModel from '../models/index';
import UserModel from '../models/user';


const store = createStore({
	IndexModel,
  UserModel
  // autoRehydrate
})

// persistStore(store, {storage: asyncSessionStorage})

export default store;
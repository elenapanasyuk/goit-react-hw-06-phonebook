// import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';
//import counterReducer from './counter/counter-reducer';
import phonebookReducer from './phonebook/phonebook-reducer';

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           value: state.counter.value + payload,
//         },
//       };
//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// const counterInitialState = {
//   value: 10,
//   step: 5,
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   phonebook: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// const rootReducer = combineReducers({
//   phonebook: persistReducer(persistConfig, phonebookReducer),
// });

//const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const phonebookPersistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };

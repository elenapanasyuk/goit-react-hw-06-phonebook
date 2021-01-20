import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
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

const rootReducer = combineReducers({
  counter: counterReducer,
  phonebook: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

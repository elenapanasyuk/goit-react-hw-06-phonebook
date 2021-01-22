import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook-actions';

const contacts = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case [actions.changeFilter]:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts,
  filter,
});

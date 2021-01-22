// import types from './phonebook-types';
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('phonebook/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

export const deleteContact = createAction('phonebook/delete');

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export const changeFilter = createAction('phonebook/changeFilter');

//export default { addContact, deleteContact, changeFilter };

import types from './phonebook-types';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export default { addContact };

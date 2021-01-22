import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/phonebook/phonebook-actions';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import s from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(name, number));
    // onSubmit(name, number);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTyper = {
  onSubmit: PropTypes.func.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   onSubmit: state => dispatch(phonebookActions.addContact(state)),
// });
// export default connect(null, mapDispatchToProps)(ContactForm);

export default ContactForm;

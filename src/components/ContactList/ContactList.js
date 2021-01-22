import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={s.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });

// const mapStateToProps = state => {
//   const { filter, contacts } = state.phonebook;
//   const visibleContacts = getVisibleContacts(contacts, filter);

//   return {
//     contacts: visibleContacts,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;

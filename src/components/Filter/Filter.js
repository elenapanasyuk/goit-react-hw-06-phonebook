import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
        placeholder="Enter name for search"
        className={s.input}
      />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;

// const mapStateToProps = state => ({
//   value: state.phonebook.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

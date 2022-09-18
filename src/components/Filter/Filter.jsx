import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import css from './Filter.module.css';

export const Filter = ({ handleFilterTextChange }) => {
  const filter = useSelector(state => state.filter);
  return (
    <label>
      Find contacts by name
      <input
        className={css.filter}
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleFilterTextChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterTextChange: PropTypes.func.isRequired,
};

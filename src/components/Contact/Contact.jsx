import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/slice';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const [deleteContact] = useDeleteContactMutation();
  const deleteItem = async id => {
    await deleteContact(id);
  };
  return (
    <li className={css.contact} id={contact.id}>
      {contact.name}: {contact.number}
      <button
        onClick={() => {
          deleteItem(contact.id);
        }}
        className={css.btnDelete}
        type="button"
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

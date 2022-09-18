import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/slice';
export const ContactList = () => {
  const { data = [], isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <ul>
        {data
          .filter(contact =>
            contact.name
              .toLocaleLowerCase()
              .includes(filter.toLocaleLowerCase())
          )
          .map(contact => (
            <Contact contact={contact} key={contact.id} />
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import {
  filterValue,
  useGetContactsQuery,
  useAddContactMutation,
} from './redux/slice';
import css from './App.module.css';

export default function App() {
  const [addContact] = useAddContactMutation();
  const { data = [] } = useGetContactsQuery();
  const dispatch = useDispatch();

  const handleFilterTextChange = filterText => {
    dispatch(filterValue(filterText.target.value));
  };

  const handleSubmit = async (name, number) => {
    if (
      data.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`dssd`);
    }
    await addContact({ id: nanoid(), name: name, number: number });
  };

  return (
    <>
      <div className={css.App}>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter handleFilterTextChange={handleFilterTextChange} />
        <ContactList />
      </div>
    </>
  );
}

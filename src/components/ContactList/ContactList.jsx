import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      {loading && <p>Завантаження контактів...</p>}
      {error && <p className={css.errorMessage}>Помилка: {error}</p>}
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button onClick={() => dispatch(deleteContact(id))}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

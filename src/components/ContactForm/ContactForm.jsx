import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        value={name}
        placeholder="Імʼя"
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className={css.field}
        type="tel"
        value={number}
        placeholder="Номер"
        onChange={e => setNumber(e.target.value)}
        required
      />
      <button className={css.submitBtn} type="submit">Додати контакт</button>
    </form>
  );
}

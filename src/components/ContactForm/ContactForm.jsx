import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Number is required'),
  });

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.some(contact => contact.name && contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formContainer}>
        <Field name="name" placeholder="Name" className={css.field} />
        <ErrorMessage name="name" component="div" className={css.errorMessage} />

        <Field name="number" placeholder="Number" className={css.field} />
        <ErrorMessage name="number" component="div" className={css.errorMessage} />

        <button type="submit" className={css.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

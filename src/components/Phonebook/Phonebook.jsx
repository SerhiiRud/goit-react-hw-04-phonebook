import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';
import {
  FormField,
  Form,
  Field,
  ErrorMessage,
  FormButton,
} from './Phonebook.styled';

const userSchema = object().shape({
  name: string()
    .min(3)
    .max(24)
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('This field is required!'),
  number: string()
    .min(5)
    .max(15)
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This field is required!'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, actions) => {
          onAddContact({ ...values, id: nanoid() });
          actions.resetForm();
        }}
        validationSchema={userSchema}
      >
        <Form>
          <FormField htmlFor="name">Name</FormField>
          <ErrorMessage name="name" component="span" />
          <Field type="text" name="name" />

          <FormField htmlFor="number">Number</FormField>
          <ErrorMessage name="number" component="span" />
          <Field type="tel" name="number" />

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

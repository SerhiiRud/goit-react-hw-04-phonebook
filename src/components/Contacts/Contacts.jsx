import PropTypes from 'prop-types';
import { Contacts, ContactItem, FormButton } from './Contacts.styled';

export const ContactList = ({ contactsList, onDelete }) => {
  return (
    <Contacts>
      {contactsList.map(contact => (
        <ContactItem key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <FormButton type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </FormButton>
        </ContactItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

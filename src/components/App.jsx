import { useState, useEffect } from "react";
import initialContacts from '../contacts.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './Phonebook/Phonebook';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    } else {
      this.setState({ contacts: initialContacts });
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  const addContact = newContact => {
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    setContacts(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  const onInput = event => {
    setFilter(event.target.value);
  };

  const onSearchList = () =>
    [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter onSearch={onInput} />
      <ContactList contactsList={onSearchList()} onDelete={onDelete} />
      <GlobalStyle />
    </Layout>
  );
};

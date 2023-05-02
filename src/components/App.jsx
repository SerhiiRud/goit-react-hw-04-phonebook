import initialContacts from '../contacts.json';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Layout } from './Layout/Layout';
import { ContactForm } from './Phonebook/Phonebook';
import { ContactList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    } else {
      this.setState({ contacts: initialContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onInput = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  onSearchList = () =>
    [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  onDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onSearch={this.onInput} />
        <ContactList
          contactsList={this.onSearchList()}
          onDelete={this.onDelete}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}

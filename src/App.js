import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Counter from './components/Counter';

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
  //     { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
  //     { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert('Contact is already exist');
    } else if (!name || !number) {
      alert('Some field is empty');
    } else
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
  };

  // handleDeleteContact = id =>
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter(contact => contact.id !== id),
  //   }));

  // handleChangeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };
  render() {
    // const visibleContacts = this.getVisibleContacts();
    // const { filter } = this.state;
    return (
      <div>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.handleAddContact} />
        </Container>
        {/* <Container title="Contacts">
          <Filter filter={filter} onChange={this.handleChangeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Container> */}
        <Container>
          <Counter />
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'


import './App.css';
import Forms from './Components/Forms/Forms';
import ContactList from './Components/ContactsList/ContactList';
import Filter from './Components/Filter/Filter';


class App extends React.Component {
  state = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  
  formSubmitHendler = data => {
    const { contacts } = this.state;
    console.log(data);

    let exsistName = contacts.find(contact => contact.name === data.name);
    let exsistNumber = contacts.find(contact => contact.number === data.number);
    let exsistContact = (exsistName && 'name') || (exsistNumber && 'number');

    exsistName || exsistNumber
      ? alert(`The ${exsistContact} is already in contacts`)
      : this.setState(prevState => ({
        contacts: [data, ...prevState.contacts]
      }));

  };

  // addFilterValue = e => {
  //   const {filter} = this.state 
  //   console.log(filter);
  //   e.preventDefault();
  //   this.setState({filter : e.target.value})
  // };

  changeFilter = e => {
    const { filter } = this.state;
    // console.log(e.target.value);
    e.preventDefault();
    this.setState({ filter: e.target.value });
    // console.log(filter);

  };


getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    // console.log(filter);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };  
  handleDelete = (id) => {
const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
const visibleContacts = this.getVisibleContacts();
    return (
      <div >
        <h2>Phonebook</h2>
        <Forms onSubmit={this.formSubmitHendler} />

        <h2>Contacts</h2>
        <Filter
          value={filter}
          changeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.handleDelete}
          // contacts={this.getVisibleContacts}
          // cont={contacts}
          // handleDelete={this.handleDelete} 
        />
      </div>);
  };
  
  };

export default App;
import React, { Component } from 'react';
import ContactItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import lc from './ContactsLIst.module.css';


class ContactList extends React.Component{
    render(){
        const {  contacts, handleDelete } = this.props;
        return (
            <ul
                className={lc.list }>{contacts.length > 0 ?
                (<ContactItem contacts={contacts}
                    handleDelete={handleDelete}
                />
                ) :
                (<p> You have no contacts </p>)
            }</ul>
        );
    };
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default ContactList;
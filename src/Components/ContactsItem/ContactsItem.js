import React from 'react';
import list from './ContactsItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, handleDelete }) => {
    return contacts.map((contact) => {
        // const{ hendleDelete } = this.props;
        const { name, number, id } = contact;
        return (
            <div>
           
                <ul className={list.lis}>
                    <li key={id}
                        className={list.item}>
                        <p>{name}</p>
                        <p>{number}</p>
                    </li>
                    <button type='button'
                        className={list.btn_delete}
                    onClick={() => handleDelete(id)}
                    >
                        Delete
                    </button>

                </ul>
            </div>
        );
   
    } );
};

ContactItem.propTypes = {
    cont: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}


export default ContactItem;
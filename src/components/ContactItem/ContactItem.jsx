

import React from 'react';

import { ContactName, ContactNumber, DeleteBtn } from './ContactItem.styles';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/thunk';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <li style={{ marginBottom: 20 }}>
      <ContactName>{contact .contactName}</ContactName>
      <ContactNumber>{contact .number}</ContactNumber>
      <DeleteBtn type="button" onClick={() => handleDelete(contact .id)}>
        ✖ Delete
      </DeleteBtn>
    </li>
  );
};

export default ContactItem;

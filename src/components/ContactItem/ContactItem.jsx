import React from 'react';
import {ContactItemContainer, ContactInfo, ContactName, DeleteBtn, ContactNumber} from './ContactItem.styles';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'store/thunk';
// import { deleteContact } from 'store/contactsSlice';

const ContactItem = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
  dispatch(deleteContacts(contact.id));
};

  return (
    <ContactItemContainer>
      <ContactInfo>
        <ContactName>Name: {contact.name}</ContactName>
        <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
      </ContactInfo>
      <ContactNumber>Phone: {contact.phone}</ContactNumber>
    </ContactItemContainer>
  );
};

export default ContactItem;
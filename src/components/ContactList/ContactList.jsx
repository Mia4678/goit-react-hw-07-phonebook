

import React, { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
// import {useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactListContainer } from './ContactList.styles';
// import { fetchContacts } from 'redux/thunk';


  const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ContactListContainer>
      {filteredContacts &&
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} name={name} phone={phone} id={id} />
        ))}
    </ContactListContainer>
  );
};

//   return (
//     <ContactListContainer>
//       {newContArr.map(contact => (
//         <List key={contact.id}>
//           {contact.contactName}: {contact.number}
//           <DeleteBtn
//             className="DeleteBtn"
//             onClick={() => handleDeleteContact(contact.id)}
//           >
//             Delete
//           </DeleteBtn>
//         </List>
//       ))}
//     </ContactListContainer>
//   );
// };

export default ContactList;

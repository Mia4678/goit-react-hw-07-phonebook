import { createSelector } from '@reduxjs/toolkit';

// export const getContacts = (state) => state.contacts;
// export const getFilter = (state) => state.filter;

// export const getIsLoading = state => state.contacts.isLoading;
// export const getError = state => state.contacts.error;


// export const getContacts = state => {
//   return state.contactsHandler.contacts.items;
// };

// export const selectorFilter = state => {
//   return state.filterHandler;
// };

// export const selectorVisible = createSelector(
//   [getContacts, selectorFilter],
//   (contacts, filter) => {
//     if (filter) {
//       return contacts.filter(one =>
//         one.contactName.toLowerCase().includes(filter.toLowerCase())
//       );
//     } else return contacts;
//   }
// );

export const selectContacts = state => state.contacts.contacts || [];
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }
);
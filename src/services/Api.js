import axios from "axios";

axios.defaults.baseURL = "https://6540f91945bedb25bfc2f6dc.mockapi.io";

export const fetchAll = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async (name, phone) => {
  const { data } = await axios.post(`/contacts`, { name, phone });
  return data;
};

export const deleteContact = async (contactId) => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice";

export const rootReducer = {
    contactsHandler: contactsReducer,
    filterHandler: filterReducer,
}
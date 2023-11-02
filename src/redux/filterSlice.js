import { createSlice } from "@reduxjs/toolkit";

 const INITAL = {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ""
  }

export const filterSlice = createSlice({
    name: 'filter',
    initialState: INITAL.filter, 
    reducers: {
      filterContact: (state, { payload }) => {
        //console.log('payload', payload)
        if (payload.length) {
        //console.log(state)
         return state = payload
          
        } else
         return  state = '' },
    },
  });

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
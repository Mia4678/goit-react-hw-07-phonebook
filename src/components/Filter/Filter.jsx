
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Input, InputLabelWrapper } from './Filter.styles';


const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
    //console.log('filter', value);
    const valueToDispatch = value.trim().toLowerCase();
    dispatch(setFilter(valueToDispatch));
    //console.log('valueToDispatch', valueToDispatch);
  };

  return (
    <InputLabelWrapper>
      <label htmlFor="filterInput">Find contact by name</label>
      <Input
        name="name"
        type="text"
        onChange={handleChangeFilter}
        id="filterInput"
      />
    </InputLabelWrapper>
  );
}

export default Filter
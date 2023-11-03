import styled from 'styled-components';

const aditionalColor = '#fcb577 ';
const shadowColor = 'rgba(165, 140, 100, 0.25)';

export const ContactItemContainer = styled.div`
  border: 1px solid #000000;
  padding: 10px;
  margin: 10px 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactName = styled('p')({
  margin: '0 0 4px',
  fontWeight: 600,
});

export const ContactNumber = styled('p')({
  margin: '0 0 4px',
});

export const DeleteBtn = styled('button')({
  width: 90,
  height: 30,
  transition: 'boxShadow, easy, 300ms; backgroundColor, easy, 300ms',
  cursor: 'pointer',
  borderRadius: 10,
  border: `0.5px solid ${aditionalColor}`,
  backgroundColor: aditionalColor,
  padding: '0 15px',
  backgroundColor: '#fa6ee9',
  '&:hover, &:focus': {
    boxShadow: `0px 10px 30px 0px ${shadowColor}`,
    backgroundColor: '#e89e5d',
  },

});

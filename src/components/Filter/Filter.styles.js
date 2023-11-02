import { styled } from 'styled-components';
const aditionalColor = '#fcb577 ';
const shadowColor = 'rgba(165, 140, 100, 0.25)';

export const InputLabelWrapper = styled('div')({
    display: 'flex',
    gap: 4,
    flexDirection: 'column',
    marginBottom: 20,
})

export const Input = styled('input')({
    height: 34,
    border: `0.5px solid ${aditionalColor}`,
    borderRadius: 10,
    padding: 8,
    fontSize: 16,
    transition: 'boxShadow, easy, 300ms',

    '&:hover': {
        boxShadow: `0px 10px 30px 0px ${shadowColor}`,
    }
})
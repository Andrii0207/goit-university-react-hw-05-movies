import styled from 'styled-components';

export const FormStyled = styled.form`
display: flex;
justify-content: center;
gap: 10px;
height: 35px;
background: transparent;
padding-top: 20px;
padding-bottom: 20px;

& svg {
fill: whitesmoke;
width: 20px;
height: 20px;
}
`

export const Input = styled.input`
border-radius: 10px;
border-style: none;
border-color: whitesmoke;
border: 2px solid whitesmoke;
width: 250px;
background-color: transparent;
padding-left: 7px;
color: whitesmoke;
font-size: 20px;
`

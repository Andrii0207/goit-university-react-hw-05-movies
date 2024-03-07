import styled from 'styled-components';

export const FormStyled = styled.form`
display: flex;
justify-content: center;
gap: 10px;
height: 35px;
background: transparent;
padding-top: 23px;
padding-bottom: 23px;

& svg {
fill: whitesmoke;
width: 20px;
height: 20px;

& :hover + input,
& :focus + input {
border-color: orange;
}
}
`
export const Input = styled.input`
border-radius: 10px;
border-style: none;
outline-color: darkorange;
border: 2px solid whitesmoke;
width: 250px;
background-color: transparent;
padding-left: 12px;
color: whitesmoke;
font-size: 20px;

&:active,
&:focus {
    border-color: darkorange;
}
`

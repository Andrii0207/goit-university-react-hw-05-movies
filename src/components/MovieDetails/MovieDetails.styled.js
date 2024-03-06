import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const CardWrapper = styled.div`
background: #fff;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  position: relative;

  margin: 50px auto 0;
  padding: 30px;
  /* margin-top: 50px;
  margin-left: auto;
  margin-right: auto; */
`

export const StyledLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
width: 100px;
height: 25px;
background-color: transparent;
border-radius: 10px;
color: #375694;
margin-bottom: 30px;

&:hover,
&:focus {
  background-color: orange;
  color: white;
  border-color: orange;
}
`


export const Img = styled.img`
width: 100%;
border-radius: 10px;
margin-bottom: 15px;
`
export const Wrapper = styled.div`
margin-bottom: 30px;
list-style: none;
display: flex;
flex-direction: column;
gap: 8px;
`

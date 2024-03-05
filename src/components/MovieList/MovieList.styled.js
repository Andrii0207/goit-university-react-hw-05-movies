import styled from 'styled-components';


export const MovieListWrapper = styled.li`

background: #fff;
  max-width: 600px;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  position: relative;
  margin: auto;
   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
    &:focus {
    transform: scale(1.05);
}
`

export const WrapperCard = styled.div`
overflow: hidden;
padding: 10px;
cursor: pointer;

`

export const Img = styled.img`
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 25px;
`

export const MovieName = styled.p`
font-size: 20px;
font-weight: 600;
`
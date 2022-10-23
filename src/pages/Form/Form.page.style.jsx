import styled from "styled-components";

export const ContainerRegister = styled.div`
background-color: var(--grey-2);
padding: 4vh;
border-radius: var(--border-radius);
width: 30vh;
min-height: 60vh;
@media (min-width: 425px) {
min-height: 80vh;
@media (min-width: 425px) {
min-height: 60vh;
}
}
`

export const HeaderRegister = styled.div`
display: flex;
flex-direction: row;
width: 30vh;
justify-content: center;
align-items: center;
margin-bottom: 2vh;
`

export const RegisterTitle = styled.div`
font-family: var(--font);
font-size: var(--title);
color: var(--grey-0);
margin-bottom: 2.5vh;
display: flex;
align-items: center;
justify-content: center;
`

export const RegisterSubTitle = styled.span`
display: flex;
justify-content: center;
margin-top: 4vh;
margin-bottom: 3vh;
color: var(--grey-1);
font-family: var(--font);
font-size: var(--headline);
`

export const FormFields = styled.div`
display: flex;
flex-direction: column;
`

export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
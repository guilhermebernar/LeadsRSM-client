import styled from "styled-components";

export const MainLogin = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--grey-3);
height: 100vh;
width: 100%;
`

export const MainRegister = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--grey-3);
height: 100vh;
width: 100%;
`

export const MainDashboard = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--grey-3);
min-height: 100vh;
padding: 0 5vh 5vh 5vh;
@media (min-width:425px){padding: 1vh 6vh 0 6vh;}
@media (min-width:700px){padding: 2vh 15vh 0 15vh;}
`

export const ButtonPink = styled.button`
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--color-primary);
border-color: var(--color-primary);
border: 1px;
border-radius: var(--border-radius);
padding: 1vh 0 1vh 0;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline);
width: 100%;
transition: 0.3s;
&:hover{
  background-color: var(--color-primary-negative)
}
`
export const ButtonLightGray= styled.div`
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--grey-3);
border-color: var(--grey-3);
border: 1px;
border-radius: var(--border-radius);
padding: 1.2vh 0 1.2vh 0;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline);
width: 100%;
transition: 0.3s;
&:hover{
  background-color: var(--grey-2)
}
`
export const ButtonDarkGray= styled.div`
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--grey-2);
border-color: var(--grey-2);
border: 1px;
border-radius: var(--border-radius);
padding: 1vh;
color: var(--grey-0);
font-family: var(--font);
font-size: var(--headline);
width: 100%;
transition: 0.3s;
&:hover{
  background-color: var(--grey-1);
  }
`
export const Icon = styled.img`
display: flex;
align-items: center;
justify-content: center;
height: 3vh;
`

export const FormDefaut = styled.form`
display:flex;
flex-direction:column;
justify-content: space-between;
align-items: center;

input {
background-color: var(--grey-2);
border: 1px solid var(--grey-0);
border-radius: var(--border-radius);
margin: 0 0 1vh 0;
outline: none;
color: var(--grey-0);
height: 3.5vh;
font-size: var(--headline);
font-family: var(--font);
}
option {
background-color: var(--grey-2);
border: 1px solid var(--grey-0);
border-radius: var(--border-radius);
margin: 0 0 0.5vh 0;
outline: none;
color: var(--grey-0);
height: 3.5vh;
width: 33vh;
font-size: var(--headline);
font-family: var(--font);
}
select {
background-color: var(--grey-2);
border: 1px solid var(--grey-0);
border-radius: var(--border-radius);
margin: 0 0 2vh 0;
outline: none;
color: var(--grey-0);
height: 25px;
width: 100%;
font-size: var(--headline);
font-family: var(--font);
}
label {

font-size: var(--headline);
font-family: var(--font);
color: var(--grey-0);
margin: 0 0 1vh 0;
width: 33vh;
}
textarea {
font-size: var(--headline);
font-family: var(--font);
background-color: var(--grey-0);
margin: 0 0 1vh 0;
max-width: 33vh;
max-height: 30vh;
border: none;
}
p {
font-size: var(--headline);
font-family: var(--font);
color: var(--grey-1);
margin: 0 0 0.5vh 0;
}
`
export const LogoImg = styled.img`
display: flex;
align-items: center;
max-height: 3.5vh;
`
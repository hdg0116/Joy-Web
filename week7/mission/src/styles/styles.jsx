import styled from "styled-components";
import backgroundImg from '../assets/background.jpg';

export const MainWrapper = styled.div`
background-image: url(${backgroundImg});
background-size: cover;
background-position: center;

width: 100vw;
height: 100vh;

font-family: Nanumsquare;
`;

export const Wrapper2 = styled.div`
background-color: rgba(0, 0, 0, 0.7);

width: 100vw;
height: 100vh;

display: flex;
justify-content: center;
align-items: center;
`;

export const Container = styled.form`
display: flex;
align-items: center;
flex-direction: column;

width: 37.5rem;
height: 32rem;

padding: 1.3rem;

background-color: #1B1717;

border-radius: 0.5rem;
`;

export const Title = styled.div`
text-align: center;
font-weight: 1000;
font-size: 1.6rem;
color: white;

padding-bottom: 1rem;
padding-top: 0.5rem;
`;

export const InputBox = styled.input`
font-size: 0.75rem;
color: white;

background-color: #414141;

border-radius: 1rem;
border: none;

margin: 0.6rem;
padding-left: 0.6rem;
padding-right: 0.6rem;
padding-top: 0.3rem;
padding-bottom: 0.3rem;

width: 22rem;
height: 1.5rem;

&::placeholder {
    color: #E6DEDD;
}
`;

export const ErrorMessage = styled.div`
color: red;
font-size: 0.67rem;

width: 22rem;
height: 0.7rem;
`;

export const SubmitButton = styled.button`
border-radius: 1rem;
border: none;

background-color: #810000;
color: white;
font-size: 1rem;

margin-left: 1rem;
margin-right: 1rem;
margin-top: 0.9rem;

width: 23.1rem;
height: 2.5rem;

&:hover {
    cursor: pointer;
}
`;

export const SubWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;

margin-top: 1.2rem;
`;

export const SubText = styled.div`
font-size: 0.75rem;
color: white;
margin-left: 1rem;
margin-right: 1rem;
`;

export const LoginText = styled.div`
font-size: 0.75rem;
color: white;
font-weight: bold;
cursor: pointer;

margin-left: 1rem;
margin-right: 1rem;
`;
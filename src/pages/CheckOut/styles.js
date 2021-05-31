import styled from 'styled-components';


export const Top = styled.div`
    margin-top: 5rem;
   
`;

export const ButtonMet = styled.button`
    width: 261.5px;
    height: 100px;
    background: white;
    border: solid 1px;
    margin-right: 1rem;
    transition: all .2s linear;
    font-family: Montserrat, sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: #000;


    :hover {
        border: solid 2px #D8BFD8;
    }

    :focus {
        border: solid 3px #D8BFD8;
    }


    @media screen and (max-width: 900px){
        width: 100%;
    }

    a {
        color: #000;
        text-decoration: none;
    }
`;

export const FormTotal = styled.div`
    display: flex;
    margin-top: 3rem;
    margin-left: 20rem;


    @media screen and (max-width: 900px){
        display: inline;
        width: 100%;
    }
`;


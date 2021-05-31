import styled from 'styled-components';


export const FormTotal = styled.form`
    display: flex;
    width: 100%;
    padding: 5rem 20rem 5rem;
    margin-top: 5rem;
    

    label {
        font-family: sans-serif;
    }

    input {
        border: none transparent;
        border-radius: 4px;
        border-color: #fff;
        background: #DCDCDC;
        outline: none;
        transition: all .2s linear;
        
        :hover {
            box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.5);
            outline: none;
        }
    }
    
        
    
    @media screen and (max-width: 80rem) {
        
            display: inline;
            width: 100%;

            button {
                float:center;
            }
        }
    
`;

export const Button = styled.button`
    background: #FFF0F5;
    border: none;
    border-radius: 4px;
    padding: 1rem 2rem 0rem;
    :hover {
        border: 1px solid #D8BFD8;
    }
    @media screen and (max-width: 80rem) {
        
        width:100%;
        text-align: center;
        }
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
`;

export const HeaderR = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
`;

export const FormR = styled.div`
    margin-left: 15rem;


    @media screen and (max-width: 80rem) {
        
        display: inline;
        width: 100%;
    }
   
`;

export const Div = styled.div`
    border-left: 2px solid;
    margin-left: 30%;
`;
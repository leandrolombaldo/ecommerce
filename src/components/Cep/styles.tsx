import styled from 'styled-components';

export const Form = styled.form`
  padding: 0 0 8px;

  input {
    padding: 10px;
    border-radius: 10px;
  }
`;

export const Inputs = styled.div`
  input {
    padding: 10px;
    border-radius: 10px;
    margin: 0 8px 8px 0px;
  }

  button {
    width: 21.5vh;
    padding: 10px;
    border-radius: 10px;
    margin: 0 8px 8px 0px;

    color: #fff;
    background: #00ae7c;
    font-family: "Rubik", sans-serif;

    &:hover{
      background: #088561;
    }

  }
`;

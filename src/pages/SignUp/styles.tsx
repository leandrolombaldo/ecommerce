import styled from "styled-components";

export const LoginTotal = styled.div`
  max-width: 82.5%;
  height: 875px;
  margin: 32px auto;
  display: flex;
  justify-content: center;
  align-items: center; 


  button {
    border: none;
    border-radius: 4px;
    padding: 16px 64px 16px;
    margin: 32px 0 0;

    font-family: "Rubik", sans-serif;
    font-weight: 600;

    background: #00ae7c;
    color: #fff;

    &:hover {
      background: #088561;
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Img = styled.div`
    margin: 32px 64px 16px;

    @media screen and (max-width: 768px) {
    margin: 0 auto;
    display: flex;
    height: 50vh;
  }
`;


export const Form = styled.div`
  text-align: center;
  margin: 0 256px 0;

  h2 {
    font-size: 32px;

    margin-bottom: 32px;
  }
  
  label {
    font-family: "Raleway", sans-serif;
    text-decoration: none;
    font-size: 16px;

    margin: 0 0 8px;
  }

  input {
    display: list-item;

    padding: 8px 64px 8px;
    margin: 0 0 8px;

    border-bottom: 1px solid #000;
    border-radius: 10px;
    background: #d3d3d3;

    outline: none;
    transition: all 0.2s linear;

    :hover {
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.5);
      outline: none;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
  
`;

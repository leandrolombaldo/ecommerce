import styled from "styled-components";

export const FormTotal = styled.div`
  max-width: 45%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(5rem, auto);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
  margin-top: 8rem;


  button {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 3;
    align-self: flex-start;
    justify-self: center;

    border: none;
    border-radius: 4px;
    padding: 16px 64px 16px;

    font-family: "Rubik", sans-serif;
    font-weight: 600;

    background: #00ae7c;
    color: #fff;

    &:hover {
      background: #088561;
    }
  }
`;

export const Header = styled.div`
  grid-column-start: 3;
  grid-column-end: 3;
  text-align: center;
  align-self: flex-end;
  font-size: 2rem;
`;

export const Form = styled.div`
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  list-style: none;
  text-align: center;
  justify-self: center;

  
  label {
    font-family: "Raleway", sans-serif;
    text-decoration: none;
    font-size: 16px;
  }

  input {
    display: list-item;
    border: none transparent;
    padding: 8px 64px 8px;
    border-radius: 4px;
    border-color: #fff;
    background: #dcdcdc;
    outline: none;
    transition: all 0.2s linear;

    :hover {
      box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.5);
      outline: none;
    }
  }
`;

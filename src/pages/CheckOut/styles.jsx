import styled from "styled-components";

export const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(5rem, auto);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
  margin-top: 5rem;

  h2 {
    grid-row-start: 1;
    grid-row-end: 2;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
`;

export const Login = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 10px;

  .login {
    display: block;
    margin-left: -12vw;

    @media screen and (max-width: 768px) {
      margin-left: -30vw;
    }
  }

  span {
    display: flex;
    padding: 0.8rem 2rem 0.8rem;
  }

  p {
    display: flex;
    padding: 0.8rem 0rem 0rem;
    align-self: flex-start;
    font-family: "Raleway", sans-serif;
  }

  button {
    display: flex;
    align-items: center;
    margin: 1.5rem 1.5rem 1rem;
    cursor: pointer;
    background: #f8f8f8;
    border: transparent;
    padding: 0.5rem 1rem 0.5rem;
    font-size: 12px;
  }
`;

export const Address = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;

  .colorNamesMethodPayment {
    text-decoration: none;
    color: #000;
  }  

`;

export const H5 = styled.h5`
  grid-column-start: 1;
  grid-row-start: 4;
  grid-row-end: 4;
  margin-top: 5rem;
`;

export const Payment = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 5;

  .colorNamesMethodPayment {
    text-decoration: none;
    color: #000;
  }

  p {
    margin-top: 16px;
    font-family: "Raleway", sans-serif;
  }
`;

export const YourOrder = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 5;
  grid-column-end: span 2;
  grid-row-end: span 4;
  border: 1px solid #f1f1f1;
  border-radius: 10px;

  p {
    font-size: 16px;
    padding: 16px 16px 8px;
  }
`;

export const ProductList = styled.div`
  display: flex;
  width: 80vw;
  align-items: center;

  img {
    width: 64px;
    border-radius: 10px;
    margin-left: 16px;
  }

  div {
    strong {
      margin-left: 16px;
    }

    h5 {
      margin-left: 16px;
    }

    span {
      margin-left: 8px;
      font-family: "Raleway", sans-serif;
    }
  }

  .details {
    display: flex;

    p {
      font-family: "Raleway", sans-serif;
    }

    span {
      font-weight: 600;
    }
  }
`;

export const DetailsProducts = styled.div`
  span {
    font-family: "Raleway", sans-serif;
  }

  strong {
    margin-right: 32px;
  }

  .delivery {
    display: flex;
    justify-content: space-between;
    padding: 0 16px 32px;
  }

  .discount {
    display: flex;
    justify-content: space-between;
    padding: 0 16px 8px;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f1f1f1;

  border: none;
  border-radius: 10px;

  margin: 8px 8px 8px;
  padding: 32px 16px 32px;

  h5 {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    font-size: 32px;
  }
`;

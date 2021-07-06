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

  .cartEmpty {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 5;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MyCart = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  border-radius: 10px;

  img {
    width: 12vh;
    margin: 16px 16px 16px;

    border-radius: 10px;
  }

  .info {
    strong {
    }

    p {
      margin-top: 32px;
      font-family: "Raleway", sans-serif;
    }
  }

  .quantity {
    display: block;
    justify-content: center;

    button {
      background: transparent;
      border: none;
    }

    p {
      align-items: center;
      margin-top: 12px;
    }
  }

  .value {
    display: flex;
    padding: 0 16px 0;

    p {
      margin: 0 16px 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;

    margin-bottom: 16px;

    .quantity {
      display: flex;
      padding: 8px;

      button {
        margin: 16px;
      }
    }

    .value {
      display: flex;
      align-items: center;
      padding: 0 51px 0;
    }
  }

  .empty {
    
  }
`;


export const CartEmpty = styled.div`
  display: flex;
  
`;

export const YourOrder = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 5;
  grid-column-end: span 2;
  grid-row-end: span 1;
  border: 1px solid #f1f1f1;
  border-radius: 10px;

  p {
    font-size: 32px;
    font-family: "Raleway", sans-serif;

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

  .order {
    display: flex;
    justify-content: space-between;
    padding: 0 16px 32px;
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
  button {
    display: flex;
    width: 100%;
    justify-content: center;

    color: #fff;
    background: #00ae7c;
    font-family: "Raleway", sans-serif;

    border: none;
    border-radius: 0px 0px 10px 10px;

    padding: 32px 16px 32px;

    &:hover{
      background: #088561;
    }

    &:disabled {
      background: #d3d3d3;
    }
  }

  span {
    display: flex;
    margin-left: 8px;
  }
`;

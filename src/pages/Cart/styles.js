import styled from "styled-components";

export const Container = styled.div`
  max-width: 55%;
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
  grid-row-start: 2;
  grid-row-end: 2;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(224, 224, 224);
  
  span {
      display: flex;
      margin-left: 8px;
      margin-top: 8px;
  }

  p {
    display: block;
  }

  button {
      margin-top: 1.6rem;
      margin-right: 16px;
      justify-content: center;
      cursor: pointer;
      background: #f8f8f8;
      border: transparent;
      padding: 0.5rem 1rem 0.5rem;
      font-size: 12px;

      
     

  }
`;

export const Address = styled.div`
  grid-row-start: 3;
  grid-row-end: 3;
`;

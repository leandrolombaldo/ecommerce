import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f1f1;
  padding-top: 3em;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 15px rgba(0, 0, 0, 0.2);
`;

export const Iconcolor = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 0 0 24px;
`;

export const Social = styled.p`
  color: #000;
`;

export const ColumnCenter = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(8rem, auto);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
`;

export const Col = styled.div`
  justify-content: center;
`;

export const H6 = styled.h6`
  font-family: "Rubik", sans-serif;
  font-weight: 600;

  color: #363636;
`;

export const Ul = styled.ul`
  li {
    font-family: "Raleway", sans-serif;
    display: flex;
    color: #000;
  }
`;

export const Button = styled.button`
  width: 27%;
  color: #fff;
  border: none;
  background: #110102;
  /* padding: 0.75rem 2rem; */

  &:hover {
    background: #110102cc;
  }
`;

export const Form = styled.form`
  display: flex;
  height: 50px;

  input {
    padding: 0 0 0 16px;
  }
`;

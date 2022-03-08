import styled from "styled-components";

export const Container = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: minmax(20rem, auto);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
  margin-top: 5rem;
`;

export const Div = styled.div`
  ol {
    display: flex;
  }
  .select {
    display: flex;
    padding: 0.8rem;
    margin: 0.5rem;
    border: 1px solid #000;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    color: #000;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
  p {
    display: block;
    margin-top: 2rem;
    width: 100%;
    font-family: "Raleway", sans-serif;
    color: #919191;
  }
`;

export const ButtonDes = styled.button`
  width: 40%;
  display: inline;
  margin-top: 5rem;
  padding: 0.5rem;
  justify-content: center;
  background: #fff;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px 4px 0px 0px;
  border-bottom: none;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Empty = styled.button`
  display: inline;
  width: 60%;
  border: transparent;
  border-bottom: 0.8px solid rgb(224, 224, 224);
  padding: 0.8rem;
  background: transparent;
  cursor: default;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Top = styled.div`
  width: 380px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

export const Mid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  background-color: #ffa500;
  border: transparent;
  font-family: Lato, sans-serif;
  color: #fff;
  letter-spacing: 1.5px;
  padding: 15px;
  font-size: 14px;
  transition: background-color .3s ease;

  &:hover {
    background-color: #ffa500CC;
  }
`;

export const Button1 = styled.button`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  background-color: #fff;
  font-family: Lato;
  color: #000;
  letter-spacing: 1.5px;
  padding: 15px;
  font-size: 14px;
  border: 1px solid #000;
  transition: background-color .3s ease-in-out;

  span {
    color: red;
  }

  &:hover {
    background-color: rgb(3, 201, 169, 1); 
  }
`;

export const BoxCep = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Obs = styled.p`
  margin-top: 1rem;
  font-family: Lato;
  font-size: 12px;
  text-align: center;
`;

export const Input = styled.input`
  border: 1px solid #000;
  padding: 8px;
  width: 75%;
`;

export const ButtonCep = styled.button`
  font-family: Lato, sans-serif;
  font-size: 14px;
  text-align: center;
  background: #2a2a2a;
  color: #fff;
  padding: 10px 30px 8px;
  margin-left: 10px;
`;

export const PriceShipping = styled.p`
  margin-top: 5px;
  font-size: 13px;
  border-bottom: 1px solid;
  width: fit-content;
  color: #ff4c30;
`;

export const NotCep = styled.div`
  font-family: Lato, sans-serif;
  font-size: 12px;
  justify-content: start;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 1rem;
`;

export const Info = styled.div`
  font-family: Lato, sans-serif;
  font-size: 12px;
  justify-content: start;
  cursor: pointer;
  margin-top: 1rem;
`;

export const ContainerMid = styled.div``;

export const BottomMid = styled.div`
  display: flex;
  font-family: Lato, light;
  font-size: 28px;
  justify-content: center;
  margin-top: 5rem;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;

  .fieldset-border {
    display: flex;
    flex-direction: column;
    width: calc(50% - 16px);
    border: 1px solid rgb(224, 224, 224);
    padding: 40px;
    margin: 0 0 1.5em 0 !important;
    -webkit-box-shadow: 0px 0px 0px 0px #000;
    box-shadow: 0px 0px 0px 0px #000;
  }

  .fieldset-border .legend-border {
    font-size: 1.2em !important;
    text-align: center !important;
    width: auto;
    border-bottom: none;
  }

  table {
    tr {
      display: flex;
      justify-content: space-between;
    }
    tr:first-child td {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 768px) {
    display: grid;
    .fieldset-border {
      width: 100%;
    }
  }
`;

export const Color = styled.p`
  margin-left: 10px;
  width: 25px;
  height: 25px;
  box-shadow: 0 0 0 2px white inset;
  border: 1px solid #000;
  cursor: pointer;
`;

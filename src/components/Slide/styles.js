import styled from 'styled-components';

export const Div = styled.div`
      display: grid;

    img {
      width: 100%;
    }

    .promo {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 5vw 16vw;
      
      position: absolute;
      margin: 20% 20%;

      h4 {        
        grid-row-start: 1;
        grid-row-end: 2;
        font-family: sans-serif;
        font-size: 1.5vw;
      }

      h1 {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        font-size: 5vw;
        margin-top: 3%;
        font-family: 'Roboto', sans-serif;
      }

      button {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
        padding: 2vw;
        background: orange;
        border: 1px solid #ececec;
        color: #fff;
      }

    }
    @media screen and (max-width: 768px) {
      .promo {
        margin-top: -12rem;
        position: static;
        
      }
  
    }
`;


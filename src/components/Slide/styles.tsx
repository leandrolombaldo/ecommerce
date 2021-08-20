import styled from "styled-components";

import Banner from "../../assets/banner.jpg";

export const Container = styled.div`
      width: 100%;
      height: 720px;

      display: flex;
      align-items: center;
      justify-content: flex-end;
         
      background-image: ${`url(${Banner})`};

      section {
        margin-right: 128px;
      }

      h4 {        
     
        font-family: sans-serif;
        font-size: 1.5vw;
      }

      h1 {
       
        font-size: 5vw;
        font-family: 'Raleway', sans-serif;
      }

      button {
        
        padding: 36px 64px 36px;
        background: #ff9000;
        border: 1px solid #ececec;
        color: #fff;
      }

      @media screen and (max-width: 768px) {
          height: 30vh;

          h4 {
            font-size: 16px;
          }

          h1 {
            font-size: 36px;
          }

          button {
            padding: 16px 32px 16px;
          }
      }
  
 
`;

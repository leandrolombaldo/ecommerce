import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
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
    }
    .select:active{
        border: 10px solid #000;
    }
`;
export const Img = styled.div` 

    img {
        width: 80%;
    }
    .nav {
        margin-top: 2rem;
        width: 80%;
    }
    p {
        margin-top: 2rem;
        width: 80%;
        font-family: Lato, sans-serif;
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
`;

export const Empty = styled.button`
    display:inline;
    width: 40%;
    border-bottom: 1px solid rgb(224, 224, 224);
    padding: 0.8rem;
    background: #fff;
`;

export const Top = styled.div` 
    width: 380px;
    display: flex;
    justify-content: space-between;
    
`;

export const Mid = styled.div` 
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button` 
    width: 100%;
    text-align: center;
    background: #00ae7c;
    font-family: Lato, sans-serif;
    color: #fff;
    letter-spacing: 1.5px;
    padding: 15px;
    font-size: 14px;
`;

export const Button1 = styled.button` 
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    background: #fff;
    font-family: Lato;
    color: #000;
    letter-spacing: 1.5px;
    padding: 15px;
    font-size: 14px;
    border: 1px solid #000;

    span {
        color: red;
    }
`;

export const Obs = styled.p` 
    margin-top: 1rem;
    font-family: Lato;
    font-size: 12px;
    text-align: center;
`;

export const Input = styled.input` 
    border-bottom: 1px solid #000; 
    width: 75%;
`;

export const ButtonCep = styled.button` 
    font-family: Lato, sans-serif;
    font-size: 14px;
    text-align: center;
    background: #2a2a2a;
    color: #fff;
    padding: 10px 30px 4px;
    margin-left: 10px;
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

export const ContainerMid = styled.div` 
    

`;

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
          tr{
            display: flex;
            justify-content: space-between;
          }
          tr:first-child td {
            font-weight: 700;
          }
      }
`;

export const Colors = styled.div`
      display: flex;
      
      .pink {
          margin-left: 10px;
          width: 25px;
          height: 25px;
          box-shadow: 0 0 0 2px white inset;
          border: 1px solid #000;          
          cursor: pointer;

      }
      .red {
          background: red;
          margin-left: 10px;
          width: 25px;
          height: 25px;
          box-shadow: 0 0 0 2px white inset;
          border: 1px solid #000;
          cursor: pointer;
      }
`;

export const Pink = styled.p`
    margin-left: 10px;
    width: 25px;
    height: 25px;
    box-shadow: 0 0 0 2px white inset;
    border: 1px solid #000;          
    cursor: pointer;
    background: pink;

`;

export const Purple = styled.p`
    margin-left: 10px;
    width: 25px;
    height: 25px;
    box-shadow: 0 0 0 2px white inset;
    border: 1px solid #000;          
    cursor: pointer;
    background: purple;

`;
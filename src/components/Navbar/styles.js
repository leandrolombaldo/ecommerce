import styled from "styled-components";


export const NavCenter = styled.div`
    box-shadow:  5px 15px rgba(0, 0, 0, 0.2);
    background: #f1f1f1;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

`;

export const NavHeader = styled.div`
    
`;

export const Social = styled.div`
    display: flex;
`;

export const Img = styled.img`
    height: 35px;
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  
  }
`;

export const Li = styled.li`
    padding: 0px 30px;
    
    
    .a {
    font-family: 'Raleway', sans-serif;
    color: #000;
    text-decoration: none;
    
    :hover{
    color: orange;
    text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    color: #fff;
  }
`;





















// ul {
//   list-style-type: none;
// }

// nav {
//   box-shadow:  5px 15px rgba(0, 0, 0, 0.2);
//   background: #f1f1f1;

// }

// .nav-center {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem;
// }

// .nav-toggle {
//   font-size: 1.5rem;
//   color: rgb(221, 53, 165);
//   background: transparent;
//   border-color: transparent;
//   transition: all 0.3s linear;
//   cursor: pointer;
//   display: none;
// }
// .nav-toggle:hover {
//   color: hsl(293, 57%, 49%);
//   transform: rotate(90deg);
// }

// .logo {
//   height: 35px;
// }

// li {
//   font-size: 1.2rem;
//   display: inline;
//   padding: 0 30px;
//   text-decoration: none;
// }

// li .a {
//   font-family: 'Raleway', sans-serif;
//   color: #000;
//   text-decoration: none;
// }

// li .a:hover{
//   color: #F185A8;
//   text-decoration: none;
// }

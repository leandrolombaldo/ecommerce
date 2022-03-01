import styled from "styled-components";

export const NavbarHome = styled.div`
    
  .navbar {
    width: 100%;
    position: absolute;
    background: transparent;

    @media screen and (max-width: 768px) {
      position: relative;
      background: #ac7c83;
    }
  }
`;

export const TextTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;

  color: #110102;

  font-size: 3rem;
`;

export const TextParag = styled.p`
  display: flex;
  justify-content: center;

  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  margin-bottom: 8rem;
`;

export const Container = styled.div`
  width: 55%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-auto-rows: minmax(30rem,auto);
    grid-column-gap: 30px;

  h5 {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    color: #110102;
    position: absolute;
    top: 4rem;
    left: 3rem;
  }

  p {
    font-family: "Raleway", sans-serif;
    position: absolute;
    top: 12rem;
    left: 2rem;
  }

  a {
    display: flex;
    text-decoration: none;
    width: fit-content;
    margin: 16px;
  }
`;

export const ProductBlog = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    object-fit: cover;
    position: relative;
    opacity: 0.5;
  }
`;

export const FinalProduct = styled.div`
  background: #f1f1fe;
  height: 5px;
`;

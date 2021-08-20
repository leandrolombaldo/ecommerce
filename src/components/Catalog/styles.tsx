import styled from "styled-components";

export const Container1 = styled.div`
  max-width: 55%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(20rem, auto);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  justify-content: center;
  margin-top: 8rem;
  grid-template-areas:
    "promo1 promo3"
    "promo2 promo3";

  h3,
  h5 {
    color: #110102;
  }

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "promo1"
      "promo2"
      "promo3";
  }
`;

export const PromoItem = styled.div`
  position: relative;

  &:nth-child(1) {
    grid-area: promo1;
  }

  &:nth-child(2) {
    grid-area: promo2;
  }

  &:nth-child(3) {
    grid-area: promo3;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .profile {
    position: relative;
    padding: 1.5rem;

    h3 {
      font-family: "Rubik", sans-serif;
      font-weight: 600;
    }

    h5 {
      font-family: "Rubik", sans-serif;
      font-weight: 500;
      margin-top: 1.5rem;

      s {
        font-size: 1rem;
      }
    }

    .buy {
      margin-top: 2rem;
      padding: 1rem 2rem;
      background-color: #ff9000;
      color: #fff;
      border: 1px solid #fff;
    }
  }

  @media screen and (max-width: 768px) {
    position: static;

    img {
      position: static;
    }
    .profile {
      margin-top: -20rem;
      position: static;
    }
  }
`;

export const PrimaryCata = styled.div`
  margin: auto;
  max-width: 55%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* grid-template-rows: 60vh 100vh; */
  justify-content: center;
  grid-gap: 50px;
  position: relative;
`;

export const Container = styled.div`
  position: relative;

  img {
    width: 100%;
    position: relative;

  }

  p {
    position: absolute;
    top: 0;
    left: 0;
    background: #110102;
    padding: 0.75rem 2rem;
    color: #fff;
  }

  span {
    position: absolute;
    top: 24px;
    right: 0;
    background: #fff;
    padding: 0.4rem 1rem;
    border-radius: 25px 0 0 25px;
  }

  h5 {
    margin-top: 1rem;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
  }

  h6 {
    color: #e6c619;
    font-size: 1.5rem;

    s {
      font-size: 1rem;
    }
  }
`;

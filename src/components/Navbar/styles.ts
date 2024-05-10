import styled, { css } from "styled-components";
import imgLogo from "../../assets/logo.svg";

interface ContainerProps {
  $home?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  background: #ac7c83;
  padding: 1rem 2rem;

  ${({ $home }) =>
    $home &&
    css`
      position: absolute;
      background: transparent;
    `}

  @media (max-width: 768px) {
    position: relative;
    background: #ac7c83;

    ${({ $home }) =>
      $home &&
      css`
        position: absolute;
        background: transparent;
      `}
  }
`;

export const NavCollapse = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #000;
    font-family: "Raleway";
    font-size: 20px;
    text-decoration: none;
  }
`;

export const Logo = styled.img.attrs({
  src: imgLogo,
  alt: "logo Carolina's store",
})`
  margin-right: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

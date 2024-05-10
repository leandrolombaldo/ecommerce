import { NavLink } from "react-router-dom";

import { FaShoppingBag, FaRegUser } from "react-icons/fa";
import * as S from "./styles";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

type NavbarProps = {
  home?: boolean;
};

export const Navbar = ({ home }: NavbarProps) => {
  const { cart } = useCart();

  return (
    <S.Container $home={home}>
      <Link to="/">
        <S.Logo />
      </Link>
      <S.NavCollapse>
        <S.Nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </S.Nav>
        <S.Nav>
          <Link to="/cart">
            <FaShoppingBag color="#000" />
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </Link>
          <Link to="/signin">
            <FaRegUser color="#000" />
          </Link>
        </S.Nav>
      </S.NavCollapse>
    </S.Container>
  );
};

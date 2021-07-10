import { LoginTotal, Img, Form } from "./styles";

import backLogin from "../../assets/backgroundLogin.svg";

import Navtop from "../../components/Navbar";
import Footer from "../../components/NavFooter";

const Login = () => {

  

  return (
    <>
      <Navtop />
      <LoginTotal>
        <Img>
          <img src={backLogin} alt="img login" />
        </Img>
        <Form>
          <h2>Login</h2>
          <label>Email</label>
          <input type="text" id="email" name="email" />
          <label>Password</label>
          <input type="text" id="password" name="password" />
          <button>Login</button>
        </Form>
      </LoginTotal>
      <Footer />
    </>
  );
};

export default Login;

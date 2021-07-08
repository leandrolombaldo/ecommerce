import { FormTotal, Header, Form } from "./styles";

import Navtop from "../../components/Navbar";
import Footer from "../../components/NavFooter";

const Login = () => {
  return (
    <>
      <Navtop />
      <FormTotal>
        <Header>
          <h2>Login</h2>
        </Header>
      
        <Form>
          <label for="fname">Email</label>
          <input type="text" id="email" name="email" />
          <label for="lname">Password</label>
          <input type="text" id="password" name="password" />
        </Form>
        <button>Login</button>
      </FormTotal>
      <Footer />
    </>
  );
};

export default Login;

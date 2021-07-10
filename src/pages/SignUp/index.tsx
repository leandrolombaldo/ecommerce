import { ChangeEvent, FormEvent, useState } from "react";

import { LoginTotal, Img, Form } from "./styles";

import backLogin from "../../assets/backgroundLogin.svg";

import Navtop from "../../components/Navbar";
import Footer from "../../components/NavFooter";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}


function SignUp() {
  const [signup, setSignup] = useState<SignUpData>({username: '', email: '', password: ''});

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();

    console.log(signup)
    
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event?.target;

    setSignup({...signup, [name]:value})
  };

  return (
    <>
      <Navtop />
      <LoginTotal>
        <Img>
          <img src={backLogin} alt="img login" />
        </Img>
        <Form onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <label>Username</label>
          <input
            type="text"
            required
            name="username"
            value={signup?.username}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            value={signup?.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            type="text"
            name="password"
            value={signup?.password}
            onChange={handleChange}
          />
          <button onClick={handleSignup}>Sign Up</button>
        </Form>
      </LoginTotal>
      <Footer />
    </>
  );
}

export default SignUp;

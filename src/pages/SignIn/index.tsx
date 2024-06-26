import { useCallback, useRef } from "react";

import { Container, Content, Background } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import logoImg from "../../assets/logo.svg";

import { Navbar } from "../../components/Navbar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import getValidationErrors from "../../utils/getValidationErrors";

function SignIn() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required("E-mail obrigatório").email("Digite um e-mail válido"),
        password: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);

      // const errors = getValidationErrors(err);

      // formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <img src={logoImg} alt="Store Carolina's" />

          <form onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="password" icon={FiLock} type="password" placeholder="Password" />

            <Button type="submit">Entrar</Button>

            <a href="#">Esqueci minha senha</a>
          </form>
          <a href="/signUp">
            <FiLogIn />
            Criar conta
          </a>
        </Content>

        <Background />
      </Container>
    </>
  );
}

export default SignIn;

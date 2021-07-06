import { useState, useRef } from "react";

import apiCep from "../../config/apiCep";

import { Form } from "./styles";

function Cep() {
  const [inputValue, setInputValue] = useState("");
  const logradouroRef = useRef(null);

  const [shippingAddress, setShippingAddress] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  });

  function handleChangeInput(event) {
    const value = logradouroRef.current.value
    
    if(value !== ''){
      return
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await apiCep.get(`/${inputValue}/json`);

      const { data } = response;

      setShippingAddress(data);
    } catch (error) {
      alert("Cep não localizado, tente novamente.");
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          onChange={({ target }) => setInputValue(target.value)}
          placeholder="Digite seu Cep"
        />
      </Form>

      <input
        type="text"
        ref={logradouroRef}
        name="logradouro"  
        value={shippingAddress['logradouro']}
        onChange={handleChangeInput}
        maxLength='10'
      /> 
    </>
  );
}

export default Cep;

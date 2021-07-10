import { useState, FormEvent } from "react";

import apiCep from "../../config/apiCep";

import { Form, Inputs } from "./styles";

function Cep() {
  const [inputValue, setInputValue] = useState("");
  const [shippingAddress, setShippingAddress] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    gia: "",
  });

  const handleSaveAddress = () => {
    localStorage.setItem(
      "@shippingAddress",
      JSON.stringify(shippingAddress)
    );
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await apiCep.get(`/${inputValue}/json`);

      const { data } = response;
      console.log(data);

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
      <Inputs>
        <input
          className="logradouro"
          required
          type="text"
          name="logradouro"
          placeholder="Address"
          value={shippingAddress.logradouro}
          onChange={({ target }) => {
            setShippingAddress({
              ...shippingAddress,
              logradouro: target.value
            });
          }}
          maxLength={15}
        />

        <input
          className="numero"
          required
          type="text"
          name="numero"
          placeholder="0000"
          value={shippingAddress.gia}
          onChange={({ target }) => {
            setShippingAddress({ ...shippingAddress, gia: target.value });
          }}
          maxLength={15}
        />

        <input
          className="complemento"
          required
          type="text"
          placeholder="Apto 000"
          name="complemento"
          value={shippingAddress.complemento}
          onChange={({ target }) => {
            setShippingAddress({
              ...shippingAddress,
              complemento: target.value,
            });
          }}
          maxLength={15}
        />

        <input
          className="localidade"
          required
          type="text"
          placeholder="City"
          name="complemento"
          value={shippingAddress.localidade}
          onChange={({ target }) => {
            setShippingAddress({
              ...shippingAddress,
              localidade: target.value,
            });
          }}
          maxLength={15}
        />

        <input
          className="estado"
          required
          type="text"
          placeholder="state"
          name="complemento"
          value={shippingAddress.uf}
          onChange={({ target }) => {
            setShippingAddress({ ...shippingAddress, uf: target.value });
          }}
          maxLength={15}
        />

        <button type="submit" onClick={handleSaveAddress}>
          Apply Address
        </button>
      </Inputs>
    </>
  );
}

export default Cep;

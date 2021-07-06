import { FormEvent, useEffect, useState } from "react";

import apiCep from "../../config/apiCep";

import { Form, Inputs } from "./styles";



interface Address {
  
}

function Cep() {
  const [inputValue, setInputValue] = useState("");

  const [shippingAddress, setShippingAddress] = useState(() => {
    const storagedAddress = localStorage.getItem(
      '@@AddressCarolinaStore:address',
      );

      if (storagedAddress) {
          return JSON.parse(storagedAddress);
      }
      return[];
});

  

  //Salvando no localStorage
  useEffect(() => {
    localStorage.setItem(
      "@AddressCarolinaStore:address",
      JSON.stringify(shippingAddress)
    );
  }, [shippingAddress]);

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
          onChange={(e) => {
            setShippingAddress({
              ...shippingAddress,
              logradouro: e.target.value,
            });
          }}
        />

        <input
          className="numero"
          required
          type="text"
          name="numero"
          placeholder="0000"
          value={shippingAddress.gia}
          onChange={(e) => {
            setShippingAddress({ ...shippingAddress, gia: e.target.value });
          }}
        />

        <input
          className="complemento"
          required
          type="text"
          placeholder="Apto 000"
          name="complemento"
          value={shippingAddress.complemento}
          onChange={(e) => {
            setShippingAddress({
              ...shippingAddress,
              complemento: e.target.value,
            });
          }}
        />

        <input
          className="localidade"
          required
          type="text"
          placeholder="City"
          name="complemento"
          value={shippingAddress.localidade}
          onChange={(e) => {
            setShippingAddress({
              ...shippingAddress,
              localidade: e.target.value,
            });
          }}
        />

        <input
          className="estado"
          required
          type="text"
          placeholder="state"
          name="complemento"
          value={shippingAddress.uf}
          onChange={(e) => {
            setShippingAddress({ ...shippingAddress, uf: e.target.value });
          }}
        />

        <button type="submit">Apply Address</button>
      </Inputs>
    </>
  );
}

export default Cep;

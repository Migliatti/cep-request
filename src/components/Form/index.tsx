import { useState } from "react";
import Button from "../Button";
import styles from "./Form.module.scss";

export default function Form() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");

  function mudarCep(event: React.ChangeEvent<HTMLInputElement>) {
    const newCep = event.target.value.replace(/\D/g, "");
    setCep(newCep);
  }

  async function buscarCep(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.erro) {
      throw new Error("CEP não encontrado! Digite um CEP válido.");
    }
    return data;
  }

  async function gerarCep(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    try {
      const data = await buscarCep(cep);
      setEndereco(data.logradouro);
      setLocalidade(data.localidade);
      setUf(data.uf);
      setBairro(data.bairro);
    } catch (error) {
      alert((error as Error).message);
    }
  }

  return (
    <div className={styles.box}>
      <form className={styles.request__cep}>
        <label htmlFor="cep">Escreva seu CEP:</label>
        <input
          type="text"
          name="cep"
          value={cep}
          minLength={8}
          maxLength={8}
          onChange={(event) => mudarCep(event)}
        />
        <Button cep={cep} gerarCep={gerarCep}>
          Gerar CEP
        </Button>
      </form>
      <div className={styles.cep}>
        {bairro ? (
          <ul>
            <li>
              Bairro: <span>{bairro}</span>
            </li>
            <li>
              Rua: <span>{endereco}</span>
            </li>
            <li>
              Cidade: <span>{localidade}</span>
            </li>
            <li>
              Estado: <span>{uf}</span>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

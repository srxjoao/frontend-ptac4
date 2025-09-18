import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const createUser = async (event) => {
    event.preventDefault();
    try {
      const resposta = await fetch("http://localhost:3000/cadastro/cadastro", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          email,
          senha,
        }),
      });

      if (!resposta.ok) {
        throw new Error('Erro na requisição');
      }

      alert("Produto cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro durante a execução do cadastro, tente novamente mais tarde!");
    }
  };

  return (
    <main>
      <center>
        <h1>Cadastrar Produto</h1>
      </center>

      <form onSubmit={createUser}>
        <center>
          <label>
            <input
              type="text"
              placeholder="Tamanho"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Código"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Imagem"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Cadastrar Produto</button>
        </center>
      </form>
    </main>
  );
}

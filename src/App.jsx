import './App.css'
import { useState, useEffect } from 'react'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Form } from './components/form'
import { View } from './components/view'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  //Objeto usuario
  const usuario = {
    cpf: '',
    nome: '',
    rg: '',
    mae: '',
    date_nascimento: '',
    date_cadastro: ''
  }

  const [usuarios, setUsuarios] = useState([]);
  const [objUsuario, setObjUsuario] = useState(usuario);
  const [cadastro, setCondicao] = useState(false);
  const [update, setUpdate] = useState(false);

  // Listagem
  useEffect(() => {
    listar()
  }, []);

  useEffect(() => {
    cadastrar()
  }, [cadastro]);

  useEffect(() => {
    alterar();
  }, [update]);

  const listar = () => {
    fetch("https://ufc-formulario-backend.herokuapp.com/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setUsuarios(retorno_convertido));
  }

  // Pesquisar por nome
  const pesquisar = (value) => {
    if (value == '') {
      listar();
    } else {
      fetch("https://ufc-formulario-backend.herokuapp.com/buscarPorNome?nome=" + value)
        .then(retorno => retorno.json())
        .then(retorno_convertido => setUsuarios(retorno_convertido));
    }
  }


  // Cadastrar Usuario
  const cadastrar = () => {
    fetch("https://ufc-formulario-backend.herokuapp.com/cadastrar", {
      method: 'post',
      body: JSON.stringify(objUsuario),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_json => {
        if (retorno_json.mensagem === undefined) {
          setUsuarios([...usuarios, retorno_json]);
          let teste = false;
          usuarios.map((obj, i) => {
            if (obj.cpf == retorno_json.cpf) {
              teste = true;
            }
          })
          if (!teste) {
            alert('Usuario cadastrado com sucesso')
          }
        }
      })
  }

  // Cadastrar Usuario
  const alterar = () => {
    fetch("https://ufc-formulario-backend.herokuapp.com/alterar", {
      method: 'put',
      body: JSON.stringify(objUsuario),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_json => {
        if (retorno_json.mensagem !== undefined) {
          if (objUsuario.cpf != '') {
            alert(retorno_json.mensagem)
          }
        } else {
          alert('Usuário alterado com sucesso!');
          listar();
        }
      })
  }

  // Remover Usuario
  const remover = (cpf) => {
    fetch("https://ufc-formulario-backend.herokuapp.com/remover/" + cpf, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_json => {
        alert(retorno_json.mensagem);
        listar();
      })
  }

  const newUser = (nome, cpf, rg, date_nascimento, mae, date_cadastro) => {
    setObjUsuario({ nome, cpf, rg, date_nascimento, mae, date_cadastro })
  }

  return (
    <BrowserRouter>
      <Navbar />
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<View pesquisar={pesquisar} data={usuarios} setUser={newUser} remover={remover} upd={update} setUpd={setUpdate} />} />
          <Route path="/form" element={<Form save={setCondicao} setUser={newUser} cond={cadastro} />} />
        </Routes>
      </ChakraProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

import React, { useState } from 'react';
import { ButtonBack, Mydiv, MyButton } from './login'
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const adminEmail = "lohaynebotelho@icloud.com";
    const adminSenha = "22638530Lo";

    if (email === adminEmail && senha === adminSenha) {
      localStorage.setItem('admin-token', 'admin-token-123');
      navigate('/admin');
    } else {
      setErro('Email ou senha incorretos');
    }
  };

  return (
    <>
      <ButtonBack>
        <Link className='voltar' to="/">Voltar</Link>
      </ButtonBack>

      <Mydiv>

       
          
          <form onSubmit={handleLogin}>
             <h2>Login do Administrador</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            /><br />
            <MyButton type="submit">Entrar</MyButton>
          </form>

        <p style={{ color: 'red' }}>{erro}</p>
      </Mydiv>
    </>
  );
}

export default Login;
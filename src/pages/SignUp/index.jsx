import { useState } from 'react';
import './signup.css';

import logo from '../../assets/log.png';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('')

    return (
        <div className='container-center'>
            <div className='login'>
                <div className="login-area">
                    <img src={logo} alt="logo do site" />
                </div>
                <form>
                    <h1>Crie o seu usuário</h1>
                    <input
                        type="text"
                        placeholder='Digite seu nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder='Digite um e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Digite uma senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='repita sua senha'
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to="/">já possui uma conta? <strong>Faça login</strong> </Link>
            </div>
        </div>
    )
}
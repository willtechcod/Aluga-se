import { useState } from 'react';
import './signin.css';

import logo from '../../assets/log.png';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container-center'>
            <div className='login'>
                <div className="login-area">
                    <img src={logo} alt="logo do site" />
                </div>
                <form>
                    <h1>Bem Vindo(a)</h1>
                    <input
                        type="email"
                        placeholder='Digite seu e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='**********'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Acessar</button>
                </form>
                <Link to="/register">Ainda não possui uma conta? <strong>Cadastre-se</strong> </Link>
            </div>
        </div>
    )
}
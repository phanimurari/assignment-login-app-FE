import React, { useState } from 'react';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';

function App() {
    const [isLogin, setIsLogin] = useState(true);

    const showLogin = () => {
        setIsLogin(true);
    };

    const showRegister = () => {
        setIsLogin(false);
    };

    return (
        <div className="app-container">
            <h1>User Activation</h1>
            <div className="auth-toggle">
                <button onClick={showLogin}>Login</button>
                <button onClick={showRegister}>Register</button>
            </div>
            <div className="auth-component">
                {isLogin ? <Login /> : <Register />}
            </div>
        </div>
    );
}

export default App;
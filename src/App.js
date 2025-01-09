import React, { useState } from 'react';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import "./App.css"

function App() {
    const [isLogin, setIsLogin] = useState(true);
    const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' });

    const showLogin = () => {
        setIsLogin(true);
    };

    const showRegister = (details = {}) => {
        setUserDetails(details);
        setIsLogin(false);
    };

    return (
        <div className="app-container">
            <h1>User Activation</h1>
            <div className="auth-toggle">
                <button onClick={showLogin}>Login</button>
                <button onClick={() => showRegister()}>Register</button>
            </div>
            <div className="auth-component">
                {isLogin ? <Login onLoginSuccess={showRegister} /> : <Register prefillData={userDetails} />}
            </div>
        </div>
    );
}

export default App;
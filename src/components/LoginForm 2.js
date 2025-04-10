import React from 'react';

const LoginForm = ({ onForgotAccount, onCreateAccount }) => {
    return (
        <div>
            <h2 className="page-title">Login</h2>
            <input type="text" placeholder="Username" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
            <button className="button button-primary">Login</button>
            <p className="link" onClick={onForgotAccount}>
                Forgot account?
            </p>
            <div className="divider">
                <hr className="divider-line" />
                <span className="divider-text">or</span>
                <hr className="divider-line" />
            </div>
            <button className="button button-secondary" onClick={onCreateAccount}>
                Create New Account
            </button>
        </div>
    );
};

export default LoginForm;
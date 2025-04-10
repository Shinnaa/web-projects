import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import CreateAccount from './components/CreateAccount';
import ForgotAccount from './components/ForgotAccount';
import './App.css'; // Import global styles

function App() {
    const [currentPage, setCurrentPage] = useState('login');

    const renderPage = () => {
        switch (currentPage) {
            case 'login':
                return (
                    <LoginForm
                        onForgotAccount={() => setCurrentPage('forgot')}
                        onCreateAccount={() => setCurrentPage('create')}
                    />
                );
            case 'create':
                return <CreateAccount onBackToLogin={() => setCurrentPage('login')} />;
            case 'forgot':
                return <ForgotAccount onCancel={() => setCurrentPage('login')} />;
            default:
                return <LoginForm />;
        }
    };

    return <div className="app-container">{renderPage()}</div>;
}

export default App;
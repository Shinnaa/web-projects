import React, { useState } from 'react';

const ForgotAccount = ({ onCancel }) => {
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(false);

    const handleSearch = () => {
        if (!searchValue) {
            setError(true);
        } else {
            setError(false);
            alert('Searching for account...');
        }
    };

    return (
        <div>
            <h2 className="page-title2">Find Your Account</h2>
            <hr className="page-divider" />
            <p className="page-subtitle2">
                Please enter your email or mobile number to search for your account.
            </p>
            
            <input
                type="text"
                placeholder="Email or mobile number"
                className="input-field"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="button button-primary" onClick={handleSearch}>
                Search
            </button>
            <button className="button button-secondary" onClick={onCancel}>
                Cancel
            </button>
            {error && <p style={{ color: 'red' }}>Please enter a valid email or mobile number.</p>}
        </div>
    );
};

export default ForgotAccount;
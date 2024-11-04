import { useNavigate } from 'react-router-dom';
import React from 'react';

function Logout() {
    const navigate = useNavigate();
    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
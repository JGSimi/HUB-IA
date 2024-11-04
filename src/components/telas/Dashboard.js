import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../botoes/logout';
import { animateGradient } from '../func/gradientanim';

function Dashboard() {
    const navigate = useNavigate();
    const gradientRef = useRef(null);

    useEffect(() => {
        const animate = animateGradient(gradientRef);
        animate();
    }, []);

    function verificarLogin() {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }

    return (
        <div ref={gradientRef} className="flex flex-col items-center justify-center h-screen w-screen animate-gradient">
            <h1>Dashboard</h1>
            {/* Aqui você pode adicionar widgets e informações do usuário */}
            <Logout />
        </div>
    );
}

export default Dashboard; 
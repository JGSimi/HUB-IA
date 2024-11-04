import React, { useState, useEffect, useRef } from 'react';
import { animateGradient } from '../func/gradientanim';

function Login() {
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', senha: '' });
    const [registro, setRegistro] = useState({ email: '', senha: '', nome: '' });
    const gradientRef = useRef(null);

    useEffect(() => {
        const animate = animateGradient(gradientRef);
        animate();
        
        return () => {
            // Cleanup animation if needed
        };
    }, []);

    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === 'login') {
            setCredentials(prev => ({ ...prev, [name]: value }));
        } else {
            setRegistro(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Implementar lógica de login
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Implementar lógica de registro
    };

    const toggleRegisterForm = () => {
        setIsRegisterVisible(prev => !prev);
    };

    return (
        <div ref={gradientRef} className="flex flex-col items-center justify-center gap-10 min-h-screen">
            <div className="w-fit max-w-md flex flex-col items-center justify-center px-10 py-5 bg-white bg-opacity-60 rounded-lg shadow-lg">
                <h1 className="text-3xl font-extrabold text-center text-gray-800">IA.HUB</h1>
            </div>
            {!isRegisterVisible && (
                <div className="w-full max-w-md p-8 bg-white bg-opacity-60 rounded-lg shadow-lg">
                    <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-800">Bem-vindo</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={(e) => handleChange(e, 'login')}
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <input
                            type="password"
                            name="senha"
                            value={credentials.senha}
                            onChange={(e) => handleChange(e, 'login')}
                            placeholder="Senha"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="w-1/2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                            >
                                Entrar
                            </button>
                            <button
                                type="button"
                                onClick={toggleRegisterForm}
                                className="w-1/2 px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {isRegisterVisible && (
                <div className="w-full max-w-md p-8 bg-white bg-opacity-60 rounded-lg shadow-lg">
                    <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">Crie sua Conta</h2>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <input
                            type="text"
                            name="nome"
                            value={registro.nome}
                            onChange={(e) => handleChange(e, 'register')}
                            placeholder="Nome"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={registro.email}
                            onChange={(e) => handleChange(e, 'register')}
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        <input
                            type="password"
                            name="senha"
                            value={registro.senha}
                            onChange={(e) => handleChange(e, 'register')}
                            placeholder="Senha"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                        >
                            Registrar
                        </button>
                        <button
                            type="button"
                            onClick={toggleRegisterForm}
                            className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                        >
                            Voltar
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Login;
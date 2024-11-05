import React, { useState, useEffect } from 'react';
import { categoriasPrompt, categoriasCores, promptsIniciais } from '../../data/prompts';

function Prompts() {
    const [categoriaFiltrada, setCategoriaFiltrada] = useState('');
    const [promptsOrdenados, setPromptsOrdenados] = useState(promptsIniciais);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPrompt, setShowPrompt] = useState(null);
    const [votos, setVotos] = useState(() => {
        const votosStorage = localStorage.getItem('votosPrompts');
        return votosStorage ? JSON.parse(votosStorage) : {};
    });

    useEffect(() => {
        localStorage.setItem('votosPrompts', JSON.stringify(votos));
        const ordenadas = [...promptsIniciais].sort((a, b) => {
            const votosA = votos[a.id] || 0;
            const votosB = votos[b.id] || 0;
            return votosB - votosA;
        });
        setPromptsOrdenados(ordenadas);
    }, [votos]);

    function handleVote(id) {
        setVotos(prevVotos => {
            const novoVotos = { ...prevVotos };
            const votosAtuais = novoVotos[id] || 0;
            
            if (votosAtuais < 5) {
                const button = document.querySelector(`#vote-${id}`);
                const text = document.querySelector(`#vote-text-${id}`);
                
                if (button && text) {
                    button.classList.add('animate-vote-up');
                    text.textContent = '+1';
                    text.classList.add('animate-vote-up', 'absolute', 'text-purple-600', 'font-bold');
                    
                    setTimeout(() => {
                        button.classList.remove('animate-vote-up');
                        text.classList.remove('animate-vote-up');
                        text.textContent = '';
                    }, 500);
                }
                novoVotos[id] = (votosAtuais || 0) + 1;
            }
            return novoVotos;
        });
    }

    function handleRemoveVotes(id) {
        setVotos(prev => {
            const text = document.querySelector(`#vote-text-${id}`);
            if (text) {
                text.textContent = `-${prev[id]}`;
                text.classList.add('animate-vote-down', 'absolute', 'text-red-600', 'font-bold');
                setTimeout(() => {
                    text.classList.remove('animate-vote-down');
                    text.textContent = '';
                }, 500);
            }
            const novo = { ...prev };
            delete novo[id];
            return novo;
        });
    }

    const handleCopyPrompt = (prompt) => {
        navigator.clipboard.writeText(prompt);
        // Feedback visual
        const notification = document.getElementById('notification');
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 2000);
    };

    const filteredPrompts = promptsOrdenados.filter(prompt => {
        const matchesCategory = !categoriaFiltrada || prompt.categoria === categoriaFiltrada;
        const matchesSearch = prompt.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            prompt.descricao.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen w-full transition-all duration-300">
            <div className="w-full px-0 py-2 lg:px-16 lg:py-4">
                <div className="max-w-[2000px] mx-auto">
                    <div className="flex flex-col space-y-6">
                        <div className="flex justify-between items-center px-2 py-2 lg:px-16 lg:py-4">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-200">Prompt.HUB</h1>
                                <p className="text-gray-200 font-bold mt-2">Templates prontos para maximizar sua produtividade</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="text"
                                    placeholder="Buscar prompts..."
                                    className="px-4 py-2 bg-white/80 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <select
                                    className="px-4 py-2 bg-white/80 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setCategoriaFiltrada(e.target.value)}
                                    value={categoriaFiltrada}
                                >
                                    <option value="">Todas as Categorias</option>
                                    {categoriasPrompt.map((categoria) => (
                                        <option key={categoria} value={categoria}>
                                            {categoria}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 py-2 lg:px-16 lg:py-4">
                            {filteredPrompts.map((prompt) => (
                                <div 
                                    key={prompt.id}
                                    className="bg-white/60 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                                >
                                    <div className="p-6 flex flex-col justify-between h-full">
                                        <div>
                                            <div className="flex justify-between items-start mb-4">
                                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoriasCores[prompt.categoria]}`}>
                                                    {prompt.categoria}
                                                </span>
                                                <span className="text-sm text-gray-500">v{prompt.versao}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{prompt.titulo}</h3>
                                            <p className="text-gray-600 text-sm mb-4">{prompt.descricao}</p>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <span>por {prompt.autor}</span>
                                                <div className="relative flex items-center gap-2">
                                                    <span 
                                                        id={`vote-count-${prompt.id}`}
                                                        className={`text-sm font-bold ${
                                                            votos[prompt.id] === 5 
                                                                ? 'text-purple-600' 
                                                                : 'text-gray-600'
                                                        }`}
                                                    >
                                                        {votos[prompt.id] || 0}
                                                    </span>
                                                    <div className="flex gap-1">
                                                        <button 
                                                            id={`vote-${prompt.id}`}
                                                            className={`text-2xl font-bold rounded-lg transition-all duration-200 ${
                                                                votos[prompt.id] === 5
                                                                    ? 'text-purple-700 cursor-not-allowed opacity-50'
                                                                    : 'text-blue-500 hover:text-purple-700'
                                                            } hover:text-4xl active:text-5xl`}
                                                            onClick={() => handleVote(prompt.id)}
                                                            title={
                                                                votos[prompt.id] === 5 
                                                                    ? "Máximo de votos atingido" 
                                                                    : `Adicionar voto (${votos[prompt.id] || 0}/5)`
                                                            }
                                                            disabled={votos[prompt.id] === 5}
                                                        >
                                                            ↑
                                                        </button>
                                                        {votos[prompt.id] > 0 && (
                                                            <button 
                                                                id={`remove-vote-${prompt.id}`}
                                                                className="text-2xl font-bold rounded-lg transition-all duration-200 text-red-400 hover:text-red-600 hover:text-4xl active:text-5xl"
                                                                onClick={() => handleRemoveVotes(prompt.id)}
                                                                title="Remover todos os votos"
                                                            >
                                                                ↓
                                                            </button>
                                                        )}
                                                    </div>
                                                    <span 
                                                        id={`vote-text-${prompt.id}`}
                                                        className="absolute top-0 left-1/2 transform -translate-x-1/2"
                                                    ></span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setShowPrompt(prompt)}
                                                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                                                >
                                                    Ver Prompt
                                                </button>
                                                <button
                                                    onClick={() => handleCopyPrompt(prompt.prompt)}
                                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200"
                                                >
                                                    📋
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Visualização do Prompt */}
            {showPrompt && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl p-6 max-w-2xl w-full">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold">{showPrompt.titulo}</h3>
                            <button 
                                onClick={() => setShowPrompt(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>
                        <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap mb-4 overflow-y-auto max-h-[500px]">
                            {showPrompt.prompt}
                        </pre>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => handleCopyPrompt(showPrompt.prompt)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Copiar Prompt
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Notificação de Cópia */}
            <div 
                id="notification"
                className="hidden fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
                Prompt copiado com sucesso!
            </div>
        </div>
    );
}

export default Prompts; 
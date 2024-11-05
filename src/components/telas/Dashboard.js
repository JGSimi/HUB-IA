import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from '../botoes/logout';
import { ferramentas as ferramentasIniciais, categorias, categoriaCores } from '../../data/ferramentas';

function Dashboard() {
    const navigate = useNavigate();
    const [categoriaFiltrada, setCategoriaFiltrada] = useState('');
    const [votos, setVotos] = useState(() => {
        const votosStorage = localStorage.getItem('votos');
        return votosStorage ? JSON.parse(votosStorage) : {};
    });
    const [ferramentasOrdenadas, setFerramentasOrdenadas] = useState(ferramentasIniciais);
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('votos', JSON.stringify(votos));
        const ordenadas = [...ferramentasIniciais].sort((a, b) => {
            const votosA = votos[a.id] || 0;
            const votosB = votos[b.id] || 0;
            return votosB - votosA;
        });
        setFerramentasOrdenadas(ordenadas);
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

    const handleCardClick = (id) => {
        navigate(`/ia/${id}`);
    };

    return (
        <div className="min-h-screen w-full transition-all duration-300">
            <div className="w-full px-0 py-2 lg:px-16 lg:py-4">
                <div className="max-w-[2000px] mx-auto">
                    <div className="flex flex-col space-y-6">
                        <div className="flex justify-between items-center px-2 py-2 lg:px-16 lg:py-4">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-200">IA.HUB</h1>
                                <p className="text-gray-200 font-bold mt-2">Explore as melhores ferramentas de IA</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <select
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onChange={(e) => setCategoriaFiltrada(e.target.value)}
                                    value={categoriaFiltrada}
                                >
                                    <option value="">Todas as Categorias</option>
                                    {categorias.map((categoria) => (
                                        <option key={categoria} value={categoria}>
                                            {categoria}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2 py-2 lg:px-16 lg:py-4">
                            {ferramentasOrdenadas
                                .filter(ferramenta => !categoriaFiltrada ||
                                    (Array.isArray(ferramenta.categoria)
                                        ? ferramenta.categoria.includes(categoriaFiltrada)
                                        : ferramenta.categoria === categoriaFiltrada))
                                .map((ferramenta) => (
                                    <div 
                                        key={ferramenta.id}
                                        className={`bg-white/60 rounded-xl cursor-pointer shadow-sm hover:shadow-md hover:font-bold hover:bg-white/80 transition-all duration-300 overflow-hidden ${
                                            votos[ferramenta.id] ? 'border-4 border-blue-400' : ''
                                        }`}
                                        onClick={(e) => {
                                            // Previne a navegação se o clique for nos botões
                                            if (!e.target.closest('button') && !e.target.closest('a')) {
                                                handleCardClick(ferramenta.id);
                                            }
                                        }}
                                    >
                                        <div className="p-6 flex flex-col justify-between h-full">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {Array.isArray(ferramenta.categoria)
                                                    ? ferramenta.categoria.map(cat => (
                                                        <span
                                                            key={cat}
                                                            className={`px-3 py-1 text-xs font-medium rounded-full ${categoriaCores[cat]}`}
                                                        >
                                                            {cat}
                                                        </span>
                                                    ))
                                                    : <span
                                                        className={`px-3 py-1 text-xs font-medium rounded-full ${categoriaCores[ferramenta.categoria]}`}
                                                    >
                                                        {ferramenta.categoria}
                                                    </span>
                                                }
                                            </div>
                                            <div className="flex flex-col gap-2" onClick={() => handleCardClick(ferramenta.id)}>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{ferramenta.nome}</h3>
                                                <p className="text-gray-600 text-sm mb-6">{ferramenta.descricao}</p>
                                            </div>
                                            <div className="flex justify-between items-center flex-row gap-4">
                                            <a
                                                href={ferramenta.link}
                                                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-700 text-white font-md rounded-lg transition-all duration-200 hover:shadow-lg hover:font-bold"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Acessar Ferramenta
                                            </a>
                                            <div className="relative flex items-center gap-2">
                                                <span 
                                                    id={`vote-count-${ferramenta.id}`}
                                                    className={`text-sm font-bold ${
                                                        votos[ferramenta.id] === 5 
                                                            ? 'text-purple-600' 
                                                            : 'text-gray-600'
                                                    }`}
                                                >
                                                    {votos[ferramenta.id] || 0}
                                                </span>
                                                <div className="flex gap-1">
                                                    <button 
                                                        id={`vote-${ferramenta.id}`}
                                                        className={`text-2xl font-bold rounded-lg transition-all duration-200 ${
                                                            votos[ferramenta.id] === 5
                                                                ? 'text-purple-700 cursor-not-allowed opacity-50'
                                                                : 'text-blue-500 hover:text-purple-700'
                                                        } hover:text-4xl active:text-5xl`}
                                                        onClick={() => handleVote(ferramenta.id)}
                                                        title={
                                                            votos[ferramenta.id] === 5 
                                                                ? "Máximo de votos atingido" 
                                                                : `Adicionar voto (${votos[ferramenta.id] || 0}/5)`
                                                        }
                                                        disabled={votos[ferramenta.id] === 5}
                                                    >
                                                        ↑
                                                    </button>
                                                    {votos[ferramenta.id] > 0 && (
                                                        <button 
                                                            id={`remove-vote-${ferramenta.id}`}
                                                            className="text-2xl font-bold rounded-lg transition-all duration-200 text-red-400 hover:text-red-600 hover:text-4xl active:text-5xl"
                                                            onClick={() => handleRemoveVotes(ferramenta.id)}
                                                            title="Remover todos os votos"
                                                        >
                                                            ↓
                                                        </button>
                                                    )}
                                                </div>
                                                <span 
                                                    id={`vote-text-${ferramenta.id}`}
                                                    className="absolute top-0 left-1/2 transform -translate-x-1/2"
                                                ></span>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard; 
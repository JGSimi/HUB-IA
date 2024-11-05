import { useParams, useNavigate } from 'react-router-dom';
import { ferramentas, categoriaCores } from '../../data/ferramentas';

function IADetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const ferramenta = ferramentas.find(f => f.id === id);

    if (!ferramenta) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl text-gray-600">Ferramenta não encontrada</p>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-10 max-w-7xl mx-auto flex flex-col gap-4 md:gap-8 justify-center items-center">
            <div className="w-full max-w-7xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 md:mb-6 flex items-center gap-2 text-gray-100 hover:text-gray-800 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Voltar</span>
                </button>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 md:p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                            <span className="text-xl md:text-2xl font-bold text-white">
                                {ferramenta.nome.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{ferramenta.nome}</h1>
                            <div className="flex flex-wrap gap-2 mt-2">
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
                            <p className="text-gray-600 mt-2">{ferramenta.descricao}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-lg">
                            <h2 className="text-lg md:text-xl font-semibold mb-3">Recursos</h2>
                            <ul className="space-y-2">
                                {ferramenta.recursos?.map((recurso, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {recurso}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-lg">
                            <h2 className="text-lg md:text-xl font-semibold mb-3">Informações Técnicas</h2>
                            <div className="space-y-3">
                                <p><span className="font-medium">Versão:</span> {ferramenta.versao}</p>
                                <p><span className="font-medium">Status:</span> {ferramenta.status}</p>
                                <p><span className="font-medium">Empresa:</span> {ferramenta.empresa}</p>
                                <p><span className="font-medium">Preço:</span> {ferramenta.preco}</p>
                            </div>
                        </div>

                        <div className="bg-gray-50/80 backdrop-blur-sm p-4 rounded-lg">
                            <h2 className="text-lg md:text-xl font-semibold mb-3">Categorias</h2>
                            <div className="flex flex-col gap-2">
                                {Array.isArray(ferramenta.categoria) &&
                                    ferramenta.categoria.map(cat => (
                                        <span key={cat} className="text-gray-700">
                                            • {cat}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Status:</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${ferramenta.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                {ferramenta.status}
                            </span>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <a
                                href={ferramenta.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto text-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                            >
                                Acessar Ferramenta
                            </a>
                            <button className="w-full md:w-auto text-center px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                Adicionar aos Favoritos
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-4 md:mt-8 bg-gray-50/80 backdrop-blur-sm p-4 md:p-6 rounded-lg w-full mx-auto">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Recursos Principais</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ferramenta.recursos.map((recurso, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-medium">{index + 1}</span>
                                </div>
                                <span className="text-gray-700">{recurso}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-4 md:mt-8 bg-gray-50/80 backdrop-blur-sm p-4 md:p-6 rounded-lg w-full mx-auto">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Informações Adicionais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Empresa Desenvolvedora</h3>
                            <p className="text-gray-700">{ferramenta.empresa}</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Versão Atual</h3>
                            <p className="text-gray-700">{ferramenta.versao}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Modelo de Preço</h3>
                            <p className="text-gray-700">{ferramenta.preco}</p>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Última Atualização</h3>
                            <p className="text-gray-700">Há 7 dias</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 md:mt-8 bg-gray-50/80 backdrop-blur-sm p-4 md:p-6 rounded-lg w-full">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Avaliações da Comunidade</h2>
                <div className="flex flex-col gap-4">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3 gap-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-medium">JD</span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">João Dev</h4>
                                    <p className="text-sm text-gray-500">Há 2 dias</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700">Excelente ferramenta! A integração com outras plataformas é perfeita e a interface é muito intuitiva. Recomendo fortemente para quem trabalha com desenvolvimento.</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3 gap-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                                    <span className="text-blue-600 font-medium">MA</span>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">Maria Analista</h4>
                                    <p className="text-sm text-gray-500">Há 5 dias</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700">Ótima ferramenta para análise de dados. Alguns recursos poderiam ser mais intuitivos, mas no geral atende muito bem às necessidades.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IADetails;
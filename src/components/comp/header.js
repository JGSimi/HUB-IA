import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [menuItems] = useState([
        { id: 'home', label: 'Início', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { id: 'prompts', label: 'Prompts', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
        { id: 'favorites', label: 'Favoritos', icon: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' }
    ]);

    const handleNavigation = (id) => {
        if (id === 'home') {
            navigate('/');
        }
        if (id === 'prompts') {
            navigate('/prompts');
        }
        if (id === 'favorites') {
            navigate('/favorites');
        }
    };

    return (
        <aside className="z-50">
            <div className="lg:block hidden">
                <aside 
                className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-blue-100 to-purple-100 shadow-lg flex flex-col items-center py-4 transition-all duration-300 ${
                    isOpen ? 'w-64' : 'w-20'
                }`}
            >
                <div className="flex items-center justify-center w-full px-2">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-8 h-8 rounded-lg hover:bg-blue-200 flex items-center justify-center transition-all duration-300"
                    >
                        <svg 
                            className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col gap-6 mt-8 w-full px-3">
                    {menuItems.map((item) => (
                        <button 
                            key={item.id}
                            onClick={() => handleNavigation(item.id)}
                            className={`flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-200 transition-all duration-300 ${
                                isOpen ? 'justify-start px-4' : 'justify-center'
                            }`}
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                            {isOpen && (
                                <span className="text-gray-700 font-medium">{item.label}</span>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto w-full px-3">
                    <button 
                        className={`flex items-center gap-3 w-full p-2 rounded-lg hover:bg-blue-200 transition-all duration-300 ${
                            isOpen ? 'justify-start px-4' : 'justify-center'
                        }`}
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {isOpen && (
                            <span className="text-gray-700 font-medium">Configurações</span>
                        )}
                    </button>
                </div>
            </aside>
        </div>

        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg">
            <nav className="flex justify-around items-center p-4">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavigation(item.id)}
                        className="flex flex-col items-center gap-1"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                        <span className="text-xs text-gray-700">{item.label}</span>
                    </button>
                ))}
                <button className="flex flex-col items-center gap-1">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs text-gray-700">Configurações</span>
                </button>
            </nav>
            </div>
        </aside>
    );
}

export default Header;
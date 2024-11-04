export const categorias = [
    "Chatbot",
    "Processamento de Texto", 
    "Análise de Dados",
    "Imagem",
    "Áudio",
    "Vídeo",
    "Desenvolvimento",
    "Marketing",
    "Produtividade",
    "Educação",
    "Assistente de IA",
    "Criação Visual",
    "Texto"
];

export const categoriaCores = {
    "Chatbot": "bg-blue-100 text-blue-800",
    "Processamento de Texto": "bg-green-100 text-green-800", 
    "Análise de Dados": "bg-purple-100 text-purple-800",
    "Imagem": "bg-red-100 text-red-800",
    "Áudio": "bg-yellow-100 text-yellow-800",
    "Vídeo": "bg-pink-100 text-pink-800",
    "Desenvolvimento": "bg-indigo-100 text-indigo-800",
    "Marketing": "bg-orange-100 text-orange-800",
    "Produtividade": "bg-teal-100 text-teal-800",
    "Educação": "bg-cyan-100 text-cyan-800",
    "Assistente de IA": "bg-violet-100 text-violet-800",
    "Criação Visual": "bg-rose-100 text-rose-800",
    "Texto": "bg-emerald-100 text-emerald-800"
};

export const ferramentas = [
    {
        id: 'chatgpt',
        nome: 'ChatGPT',
        descricao: 'Modelo de linguagem avançado da OpenAI',
        categoria: ['Chatbot', 'Processamento de Texto'],
        recursos: [
            'Conversação natural',
            'Geração de texto',
            'Resposta a perguntas',
            'Análise semântica',
            'Tradução multilíngue'
        ],
        versao: '4.0',
        status: 'Ativo',
        link: 'https://chat.openai.com',
        preco: 'Gratuito/Premium',
        empresa: 'OpenAI'
    },
    {
        id: 'claude',
        nome: 'Claude',
        descricao: 'Assistente IA da Anthropic',
        categoria: ['Chatbot', 'Análise de Dados'],
        recursos: [
            'Processamento de documentos',
            'Análise de dados',
            'Respostas detalhadas',
            'Compreensão contextual',
            'Programação assistida'
        ],
        versao: '2.0',
        status: 'Ativo',
        link: 'https://claude.ai',
        preco: 'Premium',
        empresa: 'Anthropic'
    },
    {
        id: 'prompts',
        nome: "Biblioteca de Prompts",
        descricao: "Coleção de prompts otimizados por categoria",
        link: "https://promptbase.com",
        categoria: ["Processamento de Texto", "Produtividade"],
        recursos: [
            'Biblioteca organizada',
            'Templates prontos',
            'Compartilhamento',
            'Categorização inteligente',
            'Sistema de avaliação'
        ],
        versao: '1.0',
        status: 'Ativo',
        preco: 'Gratuito/Premium',
        empresa: 'PromptBase'
    },
    {
        id: 'midjourney',
        nome: "Midjourney",
        descricao: "Gerador de imagens com múltiplos modelos de IA",
        link: "https://www.midjourney.com",
        categoria: ["Imagem", "Criação Visual"],
        recursos: [
            'Geração de imagens',
            'Múltiplos estilos',
            'Alta qualidade',
            'Personalização avançada',
            'Integração Discord'
        ],
        versao: '5.0',
        status: 'Ativo',
        preco: 'Premium',
        empresa: 'Midjourney Inc'
    },
    {
        id: 'elevenlabs',
        nome: "ElevenLabs",
        descricao: "Sintetizador de voz com vozes naturais",
        link: "https://elevenlabs.io",
        categoria: ["Áudio", "Produtividade"],
        recursos: [
            'Sintetização de voz',
            'Vozes naturais',
            'Personalização',
            'Múltiplos idiomas',
            'API disponível'
        ],
        versao: '3.0',
        status: 'Ativo',
        preco: 'Freemium',
        empresa: 'ElevenLabs'
    },
    {
        id: 'github-copilot',
        nome: "GitHub Copilot",
        descricao: "Copiloto inteligente para desenvolvimento",
        link: "https://github.com/features/copilot",
        categoria: ["Desenvolvimento", "Assistente de IA"],
        recursos: [
            'Assistência de código',
            'Integração com GitHub',
            'Personalização',
            'Suporte multilinguagem',
            'Documentação automática'
        ],
        versao: '1.0',
        status: 'Ativo',
        preco: 'Premium',
        empresa: 'GitHub/Microsoft'
    },
    {
        id: 'copy-ai',
        nome: "Copy.ai",
        descricao: "Gerador de conteúdo otimizado para marketing",
        link: "https://www.copy.ai",
        categoria: ["Marketing", "Texto"],
        recursos: [
            'Gerador de conteúdo',
            'Personalização',
            'Ferramentas de marketing',
            'Templates diversos',
            'Análise de tom'
        ],
        versao: '2.0',
        status: 'Ativo',
        preco: 'Premium',
        empresa: 'Copy.ai Inc'
    },
    {
        id: 'datarobot',
        nome: "DataRobot",
        descricao: "Análise de dados com insights automáticos",
        link: "https://www.datarobot.com",
        categoria: ["Análise de Dados", "Desenvolvimento"],
        recursos: [
            'Análise de dados',
            'Insights automáticos',
            'Personalização',
            'Machine Learning',
            'Visualização de dados'
        ],
        versao: '3.0',
        status: 'Ativo',
        preco: 'Enterprise',
        empresa: 'DataRobot'
    },
    {
        id: 'notion-ai',
        nome: "Notion AI",
        descricao: "Assistente inteligente para organização e notas",
        link: "https://www.notion.so",
        categoria: ["Produtividade", "Assistente de IA"],
        recursos: [
            'Organização de notas',
            'Assistência inteligente',
            'Integração com Notion',
            'Colaboração em tempo real',
            'Templates inteligentes'
        ],
        versao: '1.0',
        status: 'Ativo',
        preco: 'Freemium',
        empresa: 'Notion Labs'
    },
    {
        id: 'duolingo-max',
        nome: "Duolingo Max",
        descricao: "Aprendizado de idiomas com IA personalizada",
        link: "https://www.duolingo.com",
        categoria: ["Educação", "Assistente de IA"],
        recursos: [
            'Aprendizado de idiomas',
            'IA personalizada',
            'Gamificação',
            'Feedback em tempo real',
            'Prática conversacional'
        ],
        versao: '2.0',
        status: 'Ativo',
        preco: 'Freemium',
        empresa: 'Duolingo'
    },
    {
        id: 'bard',
        nome: "Bard",
        descricao: "Assistente de IA do Google com integração ao workspace",
        link: "https://bard.google.com",
        categoria: ["Assistente de IA", "Produtividade"],
        recursos: [
            'Assistência de IA',
            'Integração ao workspace',
            'Personalização',
            'Pesquisa avançada',
            'Análise de dados'
        ],
        versao: '1.0',
        status: 'Ativo',
        preco: 'Gratuito',
        empresa: 'Google'
    },
    {
        id: 'stable-diffusion',
        nome: "Stable Diffusion",
        descricao: "Gerador de imagens open source e customizável",
        link: "https://stability.ai",
        categoria: ["Imagem", "Criação Visual"],
        recursos: [
            'Gerador de imagens',
            'Open source',
            'Customização',
            'Modelos treináveis',
            'API disponível'
        ],
        versao: '2.0',
        status: 'Ativo',
        preco: 'Gratuito/API Premium',
        empresa: 'Stability AI'
    },
    {
        id: 'jasper',
        nome: "Jasper",
        descricao: "Plataforma de criação de conteúdo com IA",
        link: "https://www.jasper.ai",
        categoria: ["Marketing", "Produtividade"],
        recursos: [
            'Criação de conteúdo',
            'IA avançada',
            'Personalização',
            'SEO integrado',
            'Templates diversos'
        ],
        versao: '3.0',
        status: 'Ativo',
        preco: 'Premium',
        empresa: 'Jasper.ai'
    },
    {
        id: 'synthesia',
        nome: "Synthesia",
        descricao: "Criador de vídeos com avatares de IA",
        link: "https://www.synthesia.io",
        categoria: ["Vídeo", "Marketing"],
        recursos: [
            'Criação de vídeos',
            'Avatares de IA',
            'Personalização',
            'Múltiplos idiomas',
            'Templates profissionais'
        ],
        versao: '4.0',
        status: 'Ativo',
        preco: 'Enterprise',
        empresa: 'Synthesia'
    },
    {
        id: 'perplexity',
        nome: "Perplexity AI",
        descricao: "Motor de busca com respostas geradas por IA",
        link: "https://www.perplexity.ai",
        categoria: ["Assistente de IA", "Análise de Dados"],
        recursos: [
            'Motor de busca',
            'Respostas geradas por IA',
            'Personalização',
            'Citações de fontes',
            'Interface intuitiva'
        ],
        versao: '1.0',
        status: 'Ativo',
        preco: 'Freemium',
        empresa: 'Perplexity AI'
    },
    {
        id: 'khan-academy',
        nome: "Khan Academy",
        descricao: "Plataforma de educação com IA",
        link: "https://www.khanacademy.org",
        categoria: ["Educação", "Assistente de IA"],
        recursos: [
            'Plataforma de educação',
            'IA personalizada',
            'Exercícios adaptativos',
            'Vídeoaulas',
            'Feedback instantâneo'
        ],
        versao: '2.0',
        status: 'Ativo',
        preco: 'Gratuito',
        empresa: 'Khan Academy'
    },
    {
        id: 'quillbot',
        nome: "QuillBot",
        descricao: "Gerador de texto com IA",
        link: "https://quillbot.com",
        categoria: ["Texto", "Produtividade"],
        recursos: [
            'Gerador de texto',
            'Paráfrase inteligente',
            'Correção gramatical',
            'Múltiplos estilos',
            'Integração com editores'
        ],
        versao: '1.0',
        status: 'Ativo',
        preco: 'Freemium',
        empresa: 'QuillBot'
    },
    {
        id: 'cursor',
        nome: "Cursor",
        descricao: "Editor de código com IA (IDE), carrega varios modelos de IA para ajudar no desenvolvimento de codigo",
        link: "https://www.cursor.com",
        categoria: ["Desenvolvimento", "Assistente de IA"],
        recursos: [
            'Editor de código',
            'Múltiplos modelos de IA',
            'Autocompletar avançado',
            'Debugging assistido',
            'Integração com Git'
        ],
        versao: '1.0',
        status: 'Ativo',
        preco: 'Gratuito',
        empresa: 'Cursor'
    }
];
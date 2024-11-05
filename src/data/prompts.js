export const categoriasPrompt = [
    "Desenvolvimento",
    "Marketing", 
    "Copywriting",
    "Análise de Dados",
    "Design",
    "Educação",
    "Pesquisa",
    "Produtividade", 
    "Criação de Conteúdo",
    "SEO",
    "Redes Sociais",
    "IA Prompting",
    "Negócios",
    "Saúde",
    "Finanças",
    "Legal"
];

export const categoriasCores = {
    "Desenvolvimento": "bg-blue-100 text-blue-800",
    "Marketing": "bg-green-100 text-green-800",
    "Copywriting": "bg-purple-100 text-purple-800", 
    "Análise de Dados": "bg-yellow-100 text-yellow-800",
    "Design": "bg-pink-100 text-pink-800",
    "Educação": "bg-indigo-100 text-indigo-800",
    "Pesquisa": "bg-red-100 text-red-800",
    "Produtividade": "bg-teal-100 text-teal-800",
    "Criação de Conteúdo": "bg-orange-100 text-orange-800",
    "SEO": "bg-cyan-100 text-cyan-800",
    "Redes Sociais": "bg-rose-100 text-rose-800",
    "IA Prompting": "bg-violet-100 text-violet-800",
    "Negócios": "bg-lime-100 text-lime-800",
    "Saúde": "bg-emerald-100 text-emerald-800",
    "Finanças": "bg-amber-100 text-amber-800",
    "Legal": "bg-slate-100 text-slate-800"
};

export const promptsIniciais = [
    {
        id: 1,
        titulo: "Análise Profunda de Código",
        descricao: "Análise detalhada de código com foco em qualidade, segurança e otimização",
        categoria: "Desenvolvimento",
        prompt: `Por favor, realize uma análise abrangente do seguinte código:

[CÓDIGO]

Forneça uma análise detalhada considerando os seguintes aspectos:

1. Qualidade e Boas Práticas:
   - Princípios SOLID
   - Padrões de projeto aplicáveis
   - Clareza e legibilidade
   - Convenções de nomenclatura
   - Modularidade e reusabilidade

2. Performance e Otimização:
   - Complexidade algorítmica (Big O)
   - Uso de memória
   - Gargalos potenciais
   - Oportunidades de caching
   - Sugestões de otimização

3. Segurança:
   - Vulnerabilidades potenciais
   - Validação de entrada
   - Sanitização de dados
   - Práticas de autenticação/autorização
   - Proteção contra ataques comuns

4. Manutenibilidade:
   - Estrutura do código
   - Documentação necessária
   - Cobertura de testes
   - Acoplamento e coesão
   - Escalabilidade

5. Recomendações Específicas:
   - Sugestões de refatoração
   - Melhorias arquiteturais
   - Ferramentas e bibliotecas recomendadas
   - Exemplos práticos de implementação

Por favor, forneça exemplos concretos e explicações detalhadas para cada ponto relevante.`,
        likes: 128,
        autor: "DevMaster",
        versao: "1.2"
    },
    {
        id: 2,
        titulo: "Email Marketing Estratégico",
        descricao: "Sistema completo para criação de campanhas de email marketing de alta conversão",
        categoria: "Marketing",
        prompt: `Desenvolva uma campanha completa de email marketing para [PRODUTO/SERVIÇO] seguindo esta estrutura:

1. Análise Inicial:
   - Definição clara do público-alvo
   - Objetivos específicos da campanha
   - Métricas de sucesso desejadas
   - Análise da concorrência

2. Estrutura do Email:
   - Linha de assunto principal e alternativas (A/B testing)
   - Preview text otimizado
   - Hierarquia de informações
   - Estrutura de parágrafos e seções

3. Conteúdo Persuasivo:
   - Headline principal (fórmula AIDA)
   - Storytelling envolvente
   - Benefícios principais e secundários
   - Prova social e testimonials
   - Elementos de urgência/escassez
   - Garantias e redução de risco

4. Elementos Visuais:
   - Diretrizes para imagens
   - Esquema de cores
   - Hierarquia visual
   - Responsividade

5. Call-to-Action:
   - Botões principais e secundários
   - Copywriting específico para CTAs
   - Posicionamento estratégico
   - Links de fallback

6. Otimização e Testes:
   - Sugestões para A/B testing
   - Segmentação de lista
   - Horários ideais de envio
   - Personalização dinâmica

7. Follow-up:
   - Sequência de emails
   - Estratégia de reengajamento
   - Métricas a monitorar

Por favor, forneça o conteúdo completo formatado e pronto para implementação.`,
        likes: 89,
        autor: "MarketPro",
        versao: "2.0"
    },
    {
        id: 3,
        titulo: "Otimização SEO Avançada",
        descricao: "Sistema completo de análise e otimização SEO para máxima visibilidade",
        categoria: "SEO",
        prompt: `Realize uma análise SEO completa e otimização do seguinte conteúdo:

[CONTEÚDO]

1. Análise de Palavras-chave:
   - Keywords principais e secundárias
   - Intenção de busca
   - Volume de pesquisa
   - Dificuldade de ranking
   - Long-tail keywords relacionadas

2. Otimização On-page:
   - Estrutura de títulos (H1-H6)
   - Meta title (70 caracteres)
   - Meta description (155 caracteres)
   - URLs amigáveis
   - Alt text para imagens
   - Schema markup recomendado

3. Conteúdo:
   - Densidade de palavras-chave
   - Readability score
   - Estrutura de tópicos
   - Internal linking
   - External linking
   - Content gaps

4. Técnico:
   - Mobile-friendliness
   - Velocidade de carregamento
   - Canonical tags
   - Robots.txt
   - Sitemap
   - Estrutura de URLs

5. User Experience:
   - Layout e formatação
   - Navegação
   - CTAs
   - Tempo de permanência
   - Bounce rate

6. Competitividade:
   - Análise da concorrência
   - Backlink opportunities
   - Content gaps
   - Unique selling points

Forneça recomendações específicas e acionáveis para cada aspecto.`,
        likes: 156,
        autor: "SEOmaster",
        versao: "2.1"
    },
    {
        id: 4,
        titulo: "Design System Completo",
        descricao: "Gerador completo de design system com documentação detalhada",
        categoria: "Design",
        prompt: `Crie um design system abrangente para [PROJETO] incluindo:

1. Fundamentos:
   - Propósito e valores da marca
   - Princípios de design
   - Tom de voz e personalidade
   - Diretrizes de acessibilidade

2. Cores:
   - Paleta principal
   - Cores secundárias
   - Gradientes
   - Estados (hover, active, disabled)
   - Significado semântico
   - Contraste e acessibilidade

3. Tipografia:
   - Fontes primárias e secundárias
   - Hierarquia tipográfica
   - Escalas de tamanho
   - Espaçamento entre linhas
   - Pesos e estilos
   - Casos de uso específicos

4. Grid e Layout:
   - Sistema de grid responsivo
   - Breakpoints
   - Margens e paddings
   - Spacing system
   - Containers e limites

5. Componentes:
   - Anatomia dos componentes
   - Estados e variações
   - Comportamentos
   - Documentação de uso
   - Exemplos de implementação
   - Acessibilidade

6. Iconografia:
   - Biblioteca de ícones
   - Estilos e tamanhos
   - Guidelines de uso
   - Exportação e implementação

7. Imagens e Ilustrações:
   - Diretrizes de estilo
   - Proporções
   - Tratamento
   - Uso e contexto

8. Animações:
   - Princípios de movimento
   - Timing e easing
   - Transições
   - Micro-interações

9. Documentação:
   - Guia de implementação
   - Exemplos de código
   - Manutenção e updates
   - Versionamento

Forneça especificações técnicas detalhadas e exemplos visuais para cada seção.`,
        likes: 92,
        autor: "DesignPro",
        versao: "1.5"
    },
    {
        id: 5,
        titulo: "Plano de Aula Personalizado",
        descricao: "Sistema completo para criação de planos de aula efetivos e engajadores",
        categoria: "Educação",
        prompt: `Desenvolva um plano de aula detalhado para [TEMA] seguindo esta estrutura:

1. Visão Geral:
   - Disciplina e nível
   - Público-alvo
   - Duração total
   - Pré-requisitos
   - Materiais necessários

2. Objetivos de Aprendizagem:
   - Objetivos gerais
   - Objetivos específicos
   - Competências desenvolvidas
   - Habilidades práticas
   - Resultados esperados

3. Conteúdo Programático:
   - Tópicos principais
   - Subtópicos
   - Sequência lógica
   - Pontos-chave
   - Material de apoio

4. Metodologia:
   - Estratégias de ensino
   - Abordagens pedagógicas
   - Atividades práticas
   - Recursos didáticos
   - Tecnologias utilizadas

5. Cronograma Detalhado:
   - Introdução (tempo)
   - Desenvolvimento (tempo)
   - Atividades práticas (tempo)
   - Avaliação (tempo)
   - Fechamento (tempo)

6. Avaliação:
   - Critérios de avaliação
   - Instrumentos avaliativos
   - Feedback construtivo
   - Autoavaliação
   - Rubricas

7. Recursos:
   - Material didático
   - Equipamentos
   - Software necessário
   - Bibliografia
   - Links úteis

8. Adaptações:
   - Necessidades especiais
   - Diferentes níveis
   - Plano alternativo
   - Extensões possíveis
   - Suporte adicional

Forneça o plano detalhado com exemplos práticos e materiais de apoio.`,
        likes: 75,
        autor: "EduTech",
        versao: "1.0"
    },
    {
        id: 6,
        titulo: "Análise de Dados Avançada",
        descricao: "Prompt para análise profunda de datasets",
        categoria: "Análise de Dados",
        prompt: `Analise o seguinte dataset:

[DADOS]

1. Análise Exploratória:
   - Estatísticas descritivas
   - Distribuições
   - Outliers
   - Missing values
   - Correlações

2. Visualizações:
   - Gráficos principais
   - Dashboards
   - Mapas de calor
   - Séries temporais
   - Análises comparativas

3. Insights:
   - Padrões identificados
   - Tendências principais
   - Anomalias
   - Oportunidades
   - Riscos

4. Recomendações:
   - Ações imediatas
   - Investigações adicionais
   - Melhorias no processo
   - Otimizações sugeridas
   - KPIs a monitorar

5. Metodologia:
   - Técnicas utilizadas
   - Limitações
   - Validações
   - Próximos passos
   - Documentação

Forneça análise detalhada com visualizações e recomendações práticas.`,
        likes: 143,
        autor: "DataScientist",
        versao: "2.3"
    },
    {
        id: 7,
        titulo: "Gerador de Posts",
        descricao: "Criador de conteúdo para redes sociais",
        categoria: "Redes Sociais",
        prompt: `Crie uma série de posts para [REDE SOCIAL] sobre [TEMA]:

1. Estratégia:
   - Objetivos
   - Público-alvo
   - Tom de voz
   - Frequência
   - Métricas

2. Conteúdo:
   - Headlines
   - Corpo do texto
   - Call-to-action
   - Hashtags
   - Links

3. Visual:
   - Tipo de mídia
   - Estilo
   - Cores
   - Elementos gráficos
   - Formato

4. Timing:
   - Calendário editorial
   - Melhores horários
   - Frequência
   - Sazonalidade
   - Eventos relevantes

5. Engajamento:
   - Perguntas
   - Enquetes
   - Interações
   - Respostas
   - Comunidade

Forneça posts prontos para publicação com todas as especificações.`,
        likes: 167,
        autor: "SocialMedia",
        versao: "3.0"
    },
    {
        id: 8,
        titulo: "Chain-of-Thought Prompting",
        descricao: "Template para prompts com raciocínio passo a passo",
        categoria: "IA Prompting",
        prompt: `Vamos resolver [PROBLEMA] passo a passo:

1. Compreensão:
   - Contexto completo
   - Objetivos principais
   - Restrições
   - Recursos disponíveis
   - Critérios de sucesso

2. Análise:
   - Decomposição do problema
   - Identificação de padrões
   - Relações causais
   - Variáveis críticas
   - Hipóteses iniciais

3. Desenvolvimento:
   - Raciocínio lógico
   - Alternativas consideradas
   - Prós e contras
   - Decisões tomadas
   - Justificativas

4. Solução:
   - Proposta detalhada
   - Implementação
   - Recursos necessários
   - Timeline
   - Riscos

5. Validação:
   - Testes
   - Verificações
   - Ajustes
   - Documentação
   - Feedback

Forneça explicação detalhada do raciocínio em cada etapa.`,
        likes: 201,
        autor: "AImaster",
        versao: "1.8"
    },
    {
        id: 9,
        titulo: "Análise Financeira Estratégica",
        descricao: "Template para análise financeira completa",
        categoria: "Finanças",
        prompt: `Realize uma análise financeira detalhada de [EMPRESA/PROJETO]:

1. Visão Geral Financeira:
   - Demonstrativos financeiros
   - Indicadores chave
   - Tendências históricas
   - Projeções futuras
   - Benchmarks do setor

2. Análise de Rentabilidade:
   - Margens
   - ROI
   - EBITDA
   - Fluxo de caixa
   - Eficiência operacional

3. Riscos e Oportunidades:
   - Análise SWOT
   - Cenários
   - Mitigação de riscos
   - Oportunidades de crescimento
   - Recomendações estratégicas

Forneça relatório detalhado com insights acionáveis.`,
        likes: 145,
        autor: "FinanceGuru",
        versao: "1.3"
    },
    {
        id: 10,
        titulo: "Consultoria Jurídica IA",
        descricao: "Template para análise jurídica inicial",
        categoria: "Legal",
        prompt: `Analise o seguinte caso jurídico [CASO]:

1. Análise Preliminar:
   - Fatos relevantes
   - Legislação aplicável
   - Jurisprudência
   - Doutrinas relevantes
   - Precedentes

2. Estratégia Jurídica:
   - Argumentos principais
   - Contra-argumentos
   - Provas necessárias
   - Prazos
   - Recomendações

Forneça parecer inicial com direcionamentos estratégicos.`,
        likes: 98,
        autor: "LegalTech",
        versao: "1.0"
    }
];
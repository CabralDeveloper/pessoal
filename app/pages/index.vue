<script setup lang="ts">
const tabFases = ref<
  'analise' | 'cerimoniais' | 'controle' | 'discovery' | 'feedback' | 'product'
>('discovery')

const projetos = [
  {
    titulo: 'SGCAD - Sistema de Gerenciamento e Controle da Administração',
    descricao:
    'Plataforma integrada para gestão pública, com controle de entradas e saídas de pessoas e veículos, administração de contratos, gestão de empresas, processos de pagamento, fluxo financeiro e compras nacionais e internacionais.',
    data: 'Agosto/2025',
    participantes: 8,
    tecnologias: ['Nuxt', 'Vue', 'Node.js', 'MongoDB', 'TypeScript', 'Docker'],
    impacto:
    'O sistema trouxe mais transparência e eficiência para os processos da administração, reduziu fraudes em contratos e melhorou o tempo de resposta em auditorias.',
    depoimento:
    '“Com o SGCAD conseguimos centralizar informações críticas, reduzir falhas humanas e agilizar auditorias e processos de compra.” – Gestor Público',

    fases: [
      {
        key: 'discovery',
        nome: 'Discovery & Estratégia',
        duracao: '4 Semanas',
        atividades: [
          'Mapeamento de stakeholders (órgãos públicos, fornecedores, auditores)',
          'Entrevistas com gestores e usuários finais',
          'Análise de processos de contratos, fluxo de pagamentos e controle de acessos',
          'Definição de visão do produto e alinhamento com normas legais',
        ],
        entregaveis: [
          'Mapa de processos no Miro',
          'Documento de requisitos iniciais',
          'Estudo de viabilidade legal e técnica',
          'Roadmap estratégico',
        ],
      },
      {
        key: 'analise',
        nome: 'Análise & Requisitos',
        duracao: '5 Semanas',
        atividades: [
          'Levantamento de requisitos funcionais (controle de entradas/saídas, contratos, pagamentos, compras)',
          'Modelagem de dados para pessoas, empresas, veículos e contratos',
          'Protótipos de dashboards de gestão',
          'Mapeamento de integrações necessárias (pagamentos, auditorias, órgãos reguladores)',
        ],
        entregaveis: [
          'Documento de Especificação Funcional',
          'Modelos de dados',
          'Protótipos de alta fidelidade no Figma',
          'Backlog inicial de funcionalidades',
        ],
      },
      {
        key: 'product',
        nome: 'Product Backlog',
        duracao: 'Contínuo',
        atividades: [
          'Priorização de módulos: Controle de acesso, Gestão de Contratos, Pagamentos, Compras',
          'Refinamento de histórias de usuário',
          'Planejamento de releases estratégicas',
        ],
        entregaveis: [
          'Backlog priorizado no Jira',
          'Planos de release',
          'Critérios de aceitação definidos',
        ],
      },
      {
        key: 'cerimoniais',
        nome: 'Cerimônias Ágeis',
        duracao: 'Contínuo',
        atividades: [
          'Dailies com equipe técnica e analistas de negócio',
          'Revisões de sprint com stakeholders públicos',
          'Retrospectivas para melhoria de processos',
        ],
        entregaveis: [
          'Relatórios de progresso',
          'Registro de melhorias de processo',
        ],
      },
      {
        key: 'controle',
        nome: 'Controle & Qualidade',
        duracao: 'Contínuo',
        atividades: [
          'Testes de segurança (controle de acessos e autenticação)',
          'Validação de integridade em dados de contratos e pagamentos',
          'Auditoria de logs de entrada/saída',
          'Testes de usabilidade com gestores',
        ],
        entregaveis: [
          'Relatórios de QA',
          'Métricas de segurança e integridade',
          'Validações de conformidade legal',
        ],
      },
      {
        key: 'feedback',
        nome: 'Feedback & Evolução',
        duracao: 'Contínuo',
        atividades: [
          'Coleta de feedback de órgãos públicos e empresas contratadas',
          'Análise de métricas de uso (tempo médio de auditoria, tempo de resposta em processos)',
          'Planejamento de melhorias e novos módulos (licitações, relatórios avançados, integrações externas)',
        ],
        entregaveis: [
          'Relatórios de feedback',
          'Roadmap de evolução do produto',
          'Planejamento de novos módulos',
        ],
      },
    ],
  },
  {
    titulo: 'POSGRAD - Sistema de Gestão Acadêmica',
    descricao:
      'Sistema completo para gerenciamento de cursos, alunos e professores, com painéis administrativos, matrícula, presença, avaliações e relatórios.',
    data: 'Março/2024',
    participantes: 6,
    tecnologias: ['Nuxt', 'Vue', 'Node', 'MongoDB', 'TypeScript'],
    impacto:
      'Redução de 40% no tempo de matrícula, melhoria na visibilidade de desempenho acadêmico e aumento da satisfação dos professores.',
    depoimento:
      '“O novo sistema facilitou muito nosso trabalho e reduziu os erros administrativos. Estamos mais produtivos e satisfeitos.” – Coordenadora Acadêmica',

    fases: [
      {
        key: 'discovery',
        nome: 'Discovery & Estratégia',
        duracao: '3 Semanas',
        atividades: [
          'Mapeamento de stakeholder',
          'Análise de concorrência',
          'Entrevistas com usuários',
          'Definição de roadmap do produto',
        ],
        entregaveis: [
          'Figma (Mapeamento de Fluxos)',
          'Miro (Brainstorming)',
          'Documento de Requisitos (PDF)',
          'Apresentação de Estratégia (PPT)',
        ],
      },
      {
        key: 'analise',
        nome: 'Análise & Requisitos',
        duracao: '4 Semanas',
        atividades: [
          'Levantamento de requisitos',
          'Criação de histórias de usuário',
          'Protótipos de alta fidelidade',
        ],
        entregaveis: [
          'Jira (User Stories)',
          'Figma (Protótipos)',
          'Documento de Especificação Funcional (PDF)',
        ],
      },
      {
        key: 'product',
        nome: 'Product Backlog',
        duracao: 'Contínuo',
        atividades: [
          'Priorização de histórias de usuário',
          'Refinamento do backlog',
          'Planejamento de sprints',
        ],
        entregaveis: [
          'Backlog priorizado no Jira',
          'Planos de sprint',
        ],
      },
      {
        key: 'cerimoniais',
        nome: 'Cerimônias Ágeis',
        duracao: 'Contínuo',
        atividades: [
          'Reuniões diárias (Daily Stand-ups)',
          'Revisões de sprint',
          'Retrospectivas',
        ],
        entregaveis: [
          'Relatórios de progresso',
          'Ações de melhoria contínua',
        ],
      },
      {
        key: 'controle',
        nome: 'Controle & Qualidade',
        duracao: 'Contínuo',
        atividades: [
          'Monitoramento de KPIs',
          'Testes de usabilidade',
          'Garantia de qualidade (QA)',
        ],
        entregaveis: [
          'Relatórios de desempenho',
          'Feedbacks de usuários',
        ],
      },
      {
        key: 'feedback',
        nome: 'Feedback & Evolução',
        duracao: 'Contínuo',
        atividades: [
          'Coleta de feedback dos usuários',
          'Análise de métricas de uso',
          'Planejamento de melhorias e novas funcionalidades',
        ],
        entregaveis: [
          'Relatórios de feedback',
          'Roadmap atualizado do produto',
        ],
      },
    ],
  },

  {
    titulo: 'Portal Escola CBPF 2025',
    descricao:
    'Plataforma acadêmica digital desenvolvida para a Escola CBPF, oferecendo recursos para alunos, professores e coordenadores. O portal permite que alunos atualizem seus dados, registrem presença via QR Code, acompanhem suas aulas, interajam com professores e que a gestão escolar acompanhe atividades pedagógicas.',
    data: 'Julho/2025',
    participantes: 6,
    tecnologias: ['Nuxt', 'Vue', 'Node.js', 'MongoDB', 'Tailwind', 'TypeScript'],
    impacto:
    'O portal trouxe modernização para a gestão escolar, reduziu falhas no controle de presença, aproximou a comunicação entre alunos e professores e melhorou a organização acadêmica.',
    depoimento:
    '“O portal facilitou muito nossa rotina, os alunos agora registram presença com praticidade, e os professores têm acesso centralizado às turmas e relatórios.” – Coordenador Acadêmico',

    fases: [
      {
        key: 'discovery',
        nome: 'Discovery & Estratégia',
        duracao: '3 Semanas',
        atividades: [
          'Levantamento de necessidades com alunos, professores e coordenação',
          'Mapeamento do fluxo de presença e atualização cadastral',
          'Definição da visão do portal e das áreas de acesso (aluno, professor, coordenação)',
        ],
        entregaveis: [
          'Mapa de personas (aluno, professor, coordenador)',
          'Documento de requisitos iniciais',
          'Roadmap estratégico da plataforma',
        ],
      },
      {
        key: 'analise',
        nome: 'Análise & Requisitos',
        duracao: '4 Semanas',
        atividades: [
          'Modelagem de dados para perfis de aluno, professor e coordenador',
          'Levantamento de regras para presença via QR Code',
          'Protótipos de dashboards de aluno e professor',
          'Especificação de comunicação interna (mensagens e avisos)',
        ],
        entregaveis: [
          'Documento de especificação funcional',
          'Protótipos no Figma',
          'Modelo de dados acadêmicos',
          'Backlog inicial do portal',
        ],
      },
      {
        key: 'product',
        nome: 'Product Backlog',
        duracao: 'Contínuo',
        atividades: [
          'Priorização de módulos: Presença, Cadastro, Comunicação, Área do Professor',
          'Refinamento de histórias de usuário',
          'Planejamento de entregas por semestre letivo',
        ],
        entregaveis: [
          'Backlog priorizado no Jira',
          'Planos de release',
          'Critérios de aceitação definidos',
        ],
      },
      {
        key: 'cerimoniais',
        nome: 'Cerimônias Ágeis',
        duracao: 'Contínuo',
        atividades: [
          'Reuniões semanais com coordenação acadêmica',
          'Revisões de sprint com representantes de alunos e professores',
          'Retrospectivas para ajustes no fluxo de desenvolvimento',
        ],
        entregaveis: [
          'Relatórios de progresso',
          'Feedback de stakeholders',
        ],
      },
      {
        key: 'controle',
        nome: 'Controle & Qualidade',
        duracao: 'Contínuo',
        atividades: [
          'Testes de leitura de QR Code em dispositivos diferentes',
          'Testes de usabilidade com alunos e professores',
          'Validação de cadastros e permissões de acesso',
          'Testes de carga com múltiplos acessos simultâneos',
        ],
        entregaveis: [
          'Relatórios de QA',
          'Métricas de desempenho',
          'Checklist de usabilidade',
        ],
      },
      {
        key: 'feedback',
        nome: 'Feedback & Evolução',
        duracao: 'Contínuo',
        atividades: [
          'Coleta de feedback de alunos e professores sobre facilidade de uso',
          'Acompanhamento de métricas de presença digital',
          'Planejamento de novas features (como provas online e integração com biblioteca)',
        ],
        entregaveis: [
          'Relatórios de feedback',
          'Roadmap de evolução do portal',
          'Backlog de novas funcionalidades',
        ],
      },
    ],
  },
  {
    titulo: 'Sistema de Relatórios',
    descricao:
    'Plataforma desenvolvida para centralizar e automatizar a entrega de relatórios de tecnologistas, pesquisadores e coordenadores. Antes, os relatórios eram elaborados em documentos Word e enviados manualmente; agora, o sistema permite o preenchimento online, gera relatórios em PDF automaticamente e armazena o histórico no banco de dados para consultas e auditorias.',
    data: 'Agosto/2025',
    participantes: 5,
    tecnologias: ['Nuxt', 'Vue', 'Node', 'MongoDB', 'TypeScript'],
    impacto:
    'O sistema reduziu o tempo gasto na elaboração e envio de relatórios, garantiu padronização no formato, criou um repositório central de informações históricas e aumentou a transparência na comunicação entre os setores.',
    depoimento:
    '“Agora temos muito mais agilidade na entrega e análise de relatórios. Antes era tudo manual e descentralizado; hoje conseguimos acessar o histórico completo em poucos cliques.” – Coordenador de Pesquisa',

    fases: [
      {
        key: 'discovery',
        nome: 'Discovery & Estratégia',
        duracao: '2 Semanas',
        atividades: [
          'Mapeamento do fluxo antigo de relatórios em Word',
          'Entrevistas com tecnologistas, pesquisadores e coordenadores',
          'Definição dos tipos de relatórios e periodicidade',
        ],
        entregaveis: [
          'Fluxo atual vs. fluxo proposto',
          'Documento de requisitos iniciais',
          'Roadmap do sistema',
        ],
      },
      {
        key: 'analise',
        nome: 'Análise & Requisitos',
        duracao: '3 Semanas',
        atividades: [
          'Modelagem de entidades para relatórios e histórico',
          'Especificação da geração automática de PDFs',
          'Protótipo das áreas de preenchimento por perfil (tecnologista, pesquisador, coordenador)',
          'Regras de permissões e acessos',
        ],
        entregaveis: [
          'Modelo de dados do sistema',
          'Protótipos no Figma',
          'Documento de requisitos funcionais',
        ],
      },
      {
        key: 'product',
        nome: 'Product Backlog',
        duracao: 'Contínuo',
        atividades: [
          'Priorização de funcionalidades: preenchimento, geração PDF, histórico, busca',
          'Refinamento de histórias de usuário',
          'Planejamento de releases por etapas (MVP → funcionalidades avançadas)',
        ],
        entregaveis: [
          'Backlog priorizado',
          'Critérios de aceitação',
          'Plano de releases',
        ],
      },
      {
        key: 'cerimoniais',
        nome: 'Cerimônias Ágeis',
        duracao: 'Contínuo',
        atividades: [
          'Dailies com equipe técnica',
          'Revisões quinzenais com coordenadores',
          'Retrospectivas para ajustes no fluxo de desenvolvimento',
        ],
        entregaveis: [
          'Relatórios de progresso',
          'Feedback de stakeholders',
        ],
      },
      {
        key: 'controle',
        nome: 'Controle & Qualidade',
        duracao: 'Contínuo',
        atividades: [
          'Testes de geração de PDFs em diferentes navegadores',
          'Validação de preenchimento por perfis distintos',
          'Testes de segurança para acesso ao histórico',
          'Testes de usabilidade',
        ],
        entregaveis: [
          'Relatórios de QA',
          'Checklist de usabilidade',
          'Métricas de desempenho',
        ],
      },
      {
        key: 'feedback',
        nome: 'Feedback & Evolução',
        duracao: 'Contínuo',
        atividades: [
          'Coleta de sugestões dos usuários sobre layout e filtros de busca',
          'Análise do ganho de tempo com o novo sistema',
          'Planejamento de melhorias futuras (dashboards analíticos, exportação avançada)',
        ],
        entregaveis: [
          'Relatórios de feedback',
          'Roadmap de evolução',
          'Backlog de novas funcionalidades',
        ],
      },
    ],
  },

] as const
</script>

<template>
  <div class="flex min-h-screen flex-col  justify-center bg-amber-950/10  p-10 lg:px-40">
    <div class="flex flex-col gap-6 rounded-xl bg-slate-50 p-10 shadow-2xl shadow-orange-200/50 lg:flex-row">
      <div class="flex items-center justify-center">
        <div class="size-32 overflow-hidden rounded-full  shadow-2xl shadow-orange-300">
          <img src="/perfil4.png" alt="Foto de Perfil" class="size-full object-cover">
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-6">
        <div>
          <h2 class="mb-5 text-3xl font-extrabold text-neutral-900">
            Analista de Requisitos e Negócios | Product Owner | Desenvolvedor Full Stack
          </h2>
          <p class="text-xl text-amber-950/60">
            Especialista em transformar necessidades de negócios em soluções digitais | Transformando ideias em produtos de sucesso
          </p>
          <p class="mt-2 text-base   text-amber-950/60">
            Profissional com foco em gestão de projetos de TI, desenvolvimento web e inovação. Atuo com metodologias ágeis, liderando times e entregando soluções de valor.
          </p>
        </div>

        <div class="flex flex-wrap justify-between gap-4">
          <div class="w-full flex-1 rounded-xl bg-teal-50 p-4 text-center  transition hover:bg-teal-100">
            <div class="mb-1 text-2xl font-bold text-teal-600">
              50+
            </div>
            <div class="text-xs text-neutral-800">
              Projetos
            </div>
          </div>

          <div class="w-full flex-1 rounded-xl bg-orange-50 p-4 text-center  transition hover:bg-orange-100">
            <div class="mb-1 text-2xl font-bold text-orange-600">
              9+
            </div>
            <div class="text-xs text-neutral-800">
              Anos de Experiência
            </div>
          </div>

          <div class="w-full flex-1 rounded-xl bg-gray-100 p-4 text-center  transition hover:bg-gray-200">
            <div class="mb-1 text-2xl font-bold text-amber-900">
              3+
            </div>
            <div class="text-xs text-neutral-800">
              Times Liderados
            </div>
          </div>

          <div class="w-full flex-1 rounded-xl bg-red-50 p-4 text-center  transition hover:bg-red-100">
            <div class="mb-1 text-2xl font-bold text-red-600">
              +20
            </div>
            <div class="text-xs text-neutral-800">
              Certificados
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white ">Nuxt</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Vue.js</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Node.js</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">MongoDB</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">SQL</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Typescript</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">PHP</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Gestão de Backlog</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Descoberta de Produtos</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Kanban</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Scrum</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Power BI</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white  ">Metabase</span>
          <span class="rounded-full bg-teal-500 px-2 py-1 text-sm text-white ">Linux</span>
        </div>

        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/contato" class="rounded-xl bg-teal-500 px-3 py-2 text-white shadow transition hover:bg-orange-600">
            Contato
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/gustavo-costa-cabral/" class="rounded-xl border border-orange-600/60 bg-white px-3 py-2 text-neutral-800 shadow transition hover:bg-orange-600/50">
            LinkedIn
          </NuxtLink>
          <NuxtLink to="/curriculo" class="rounded-xl border border-orange-600/60 bg-white px-3 py-2 text-neutral-800 shadow transition hover:bg-orange-600/50">
            CV/Resumo
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-8 w-full  flex-col text-center">
      <h1 class="mt-8 text-3xl font-bold text-neutral-800">
        Portfólio de Projetos
      </h1>
      <p class="mt-3 text-xl text-amber-950/60">
        Uma jornada através de projetos estratégicos, seguindo metodologias ágeis e focando na entrega de valor mensurável para o negócio.
      </p>
    </div>

    <div class="mt-7 space-y-6">
      <div
        v-for="(projeto, i) in projetos"
        :key="i"
        class="cursor-pointer rounded-2xl bg-slate-50 p-3 shadow-lg transition hover:shadow-xl"
      >
        <details class="group">
          <summary class="flex w-full cursor-pointer items-center justify-between text-xl font-semibold text-neutral-800">
            {{ projeto.titulo }}
            <span class="transition-transform group-open:rotate-180">&#9660;</span>
          </summary>
          <div class="mt-6 flex flex-col gap-6 md:flex-row">
            <div class="flex-1 space-y-3">
              <p class="text-lg text-amber-700">
                {{ projeto.descricao }}
              </p>
              <p class="text-sm text-neutral-500">
                Data: {{ projeto.data }}
              </p>
              <p class="text-sm text-neutral-500">
                Participantes: {{ projeto.participantes }}
              </p>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="tech in projeto.tecnologias" :key="tech" class="rounded-full bg-teal-200 px-3 py-1 text-sm text-neutral-800">{{ tech }}</span>
              </div>
            </div>
            <div class="flex-1 space-y-4 rounded-lg bg-teal-50 p-4">
              <div>
                <h4 class="mb-2 font-semibold text-neutral-800">
                  Impacto Gerado
                </h4>
                <p class="text-neutral-700">
                  {{ projeto.impacto }}
                </p>
              </div>
              <div>
                <h4 class="mb-2 font-semibold text-neutral-800">
                  Depoimento
                </h4>
                <blockquote class="border-l-4 border-orange-400 pl-4 italic text-neutral-700">
                  {{ projeto.depoimento }}
                </blockquote>
              </div>
            </div>
          </div>

          <div class="mt-6 rounded-xl bg-gray-50 p-4">
            <h4 class="mb-3 font-semibold text-neutral-800">
              Fases do Projeto
            </h4>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="fase in projeto.fases"
                :key="fase.key"
                :class="{
                  'bg-teal-500 text-white': tabFases === fase.key,
                  'bg-white text-neutral-800': tabFases !== fase.key
                }"
                class="rounded-xl px-4 py-2 shadow transition hover:bg-teal-300"
                @click="tabFases = fase.key"
              >
                {{ fase.nome }}
              </button>
            </div>
            <div
              v-for="fase in projeto.fases"
              v-show="tabFases === fase.key"
              :key="fase.key + '-conteudo'"
              class="mt-4 rounded-xl border border-neutral-300 bg-white p-4 shadow-inner"
            >
              <div class="mb-2 flex items-start justify-between">
                <h5 class="font-bold text-neutral-800">
                  {{ fase.nome }}
                </h5>
                <span class="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800">{{ fase.duracao }}</span>
              </div>
              <div class="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <div>
                  <h6 class="font-semibold text-neutral-800">
                    Atividades Realizadas
                  </h6>
                  <ul class="mt-1 list-inside list-disc space-y-1 text-neutral-700">
                    <li v-for="a in fase.atividades" :key="a">
                      {{ a }}
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 class="font-semibold text-neutral-800">
                    Ferramentas & Entregáveis
                  </h6>
                  <ul class="mt-1 list-inside list-disc space-y-1 text-neutral-700">
                    <li v-for="e in fase.entregaveis" :key="e">
                      {{ e }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>

    <div class=" mx-auto mt-5 w-full flex-col bg-orange-100 p-20 text-center">
      <div>
        <h1 class="text-2xl font-bold text-neutral-800">
          Vamos Trabalhar Juntos?
        </h1>
        <p class="mt-5 text-base text-neutral-700">
          Sempre aberto para discutir novos projetos desafiadores e oportunidades de criar impacto real. Se você busca um profissional com visão estratégica e foco em resultados, vamos conversar!
        </p>
      </div>
    </div>
  </div>
</template>

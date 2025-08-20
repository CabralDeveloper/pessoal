<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen  bg-indigo-100  items-center justify-center px-40 py-10">
      <div class="p-5 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row gap-6">
        <div class="flex justify-center items-center">
          <div class="size-80 rounded-full overflow-hidden ">
            <img src="/perfil4.png" alt="Foto de Perfil" class="object-cover w-full h-full" />
          </div>
        </div>

        <div class="flex-1 flex flex-col gap-6">
          <div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Analista de Requisitos e Negócios | Product Owner | Desenvolvedor Full Stack</h2>
            <p class="text-gray-600 text-xl">
             Especialista em transformar necessidades de negócios em soluções digitais  | Transformando ideias em em produtos de  sucesso
            </p>
            <p class="text-gray-600 mt-5 text-lg">
              Profissional com foco em gestão de projetos de TI, desenvolvimento web e inovação. Atuo com metodologias ágeis, liderando times e entregando soluções de valor.
            </p>
          </div>

          <div class="flex flex-wrap justify-between gap-4">
            <div class="flex-1 w-full bg-teal-500/10 text-white rounded-xl p-6 text-center shadow hover:bg-teal-300 transition">
              <div class="text-3xl text-teal-500 font-bold mb-1">50+</div>
              <div class="text-sm text-black">Projetos</div>
            </div>
            <div class="flex-1 w-full bg-blue-500/10 text-white rounded-xl p-6 text-center shadow hover:bg-blue-300 transition">
              <div class="text-3xl text-blue-500 font-bold mb-1">9+</div>
              <div class="text-sm text-black ">Anos de Experiência</div>
            </div>
            <div class="flex-1 w-full bg-purple-500/10 text-white rounded-xl p-6 text-center shadow hover:bg-purple-300 transition">
              <div class="text-3xl text-purple-500 font-bold mb-1">3+</div>
              <div class="text-sm text-black ">Times Liderados</div>
            </div>
            <div class="flex-1 w-full  bg-orange-500/10 text-white rounded-xl p-6 text-center shadow hover:bg-orange-300 transition">
              <div class="text-3xl text-orange-500 font-bold mb-1">+20</div>
              <div class="text-sm text-black">Certificados</div>
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-blue-300">Nuxt</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-blue-300">Vue.js</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-blue-300">Node.js</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-blue-300">MongoDB</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-blue-300">SQL</span>          
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-blue-300">Typescript</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-blue-300">PHP</span>

            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-green-300">Gestão de Backlog</span>  
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-green-300">Descoberta de Produtos</span>          

     
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-yellow-300">Kanban</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-yellow-300">Scrum</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-yellow-300">Power BI</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-yellow-300">Metabase</span>
            <span class="bg-white font-bold text-gray-800 text-sm px-3 py-1 rounded-full border-2 border-yellow-300">Linux</span>
            </div>

          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/contato" class="bg-teal-500 text-black px-6 py-2 rounded-xl shadow hover:bg-teal-100 transition">
              Contato
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/in/gustavo-costa-cabral/" class="bg-gray-200 text-black px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
              LinkedIn
            </NuxtLink>
            <NuxtLink to="/curriculo" class="bg-gray-200 text-black px-6 py-2 rounded-xl shadow hover:bg-gray-900 transition">
              CV/Resumo
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex-col w-full max-w-4xl mx-auto text-center mt-8">
        <h1 class="text-3xl font-bold text-gray-800 mt-8">Portifólio de Projetos</h1>
        <p class="text-xl text-gray-600 mt-3">Uma jornada através de projetos estratégicos, seguindo metodologias ágeis e focando na entrega de valor mensurável para o negócio.
        </p>
        </div>
        <div class="mt-7 space-y-6">
        <div class="bg-white rounded-2xl shadow-lg cursor-pointer transition hover:shadow-lg p-3">
        <details class="group">
        <summary class="text-2xl font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
        Sistema de Gestão Acadêmica
        <span class="group-open:rotate-180 transition-transform">&#9660;</span>
        </summary>

      <div class="mt-6 flex flex-col md:flex-row gap-6">
        <div class="flex-1 space-y-3">
          <p class="text-gray-700 text-lg">
            Sistema completo para gerenciamento de cursos, alunos e professores, com painéis administrativos, matrícula, presença, avaliações e relatórios.
          </p>
          <p class="text-sm text-gray-500">Data: Março/2024</p>
          <p class="text-sm text-gray-500">Participantes: 6</p>

          <div class="flex flex-wrap gap-2 mt-2">
            <span class="bg-gray-200 text-sm px-3 py-1 rounded-full">Nuxt</span>
            <span class="bg-gray-200 text-sm px-3 py-1 rounded-full">Vue</span>
            <span class="bg-gray-200 text-sm px-3 py-1 rounded-full">Node</span>
            <span class="bg-gray-200 text-sm px-3 py-1 rounded-full">MongoDB</span>
            <span class="bg-gray-200 text-sm px-3 py-1 rounded-full">TypeScript</span>
          </div>
        </div>

        <div class="flex-1 bg-green-100 rounded-lg p-4 space-y-4">
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">Impacto Gerado</h4>
            <p class="text-gray-700">
              Redução de 40% no tempo de matrícula, melhoria na visibilidade de desempenho acadêmico e aumento da satisfação dos professores.
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-gray-700 mb-2">Depoimento</h4>
            <blockquote class="italic text-gray-600 border-l-4 border-teal-500 pl-4">
              “O novo sistema facilitou muito nosso trabalho e reduziu os erros administrativos. Estamos mais produtivos e satisfeitos.” – Coordenadora Acadêmica
            </blockquote>
          </div>
        </div>
      </div>

      <div class="mt-6 bg-gray-100 rounded-xl p-4">
        <h4 class="text-gray-700 font-semibold mb-3">Fases do Projeto</h4>
        <div class="flex flex-wrap gap-3">
          <button class="bg-white text-gray-800 px-4 py-2 rounded-xl shadow hover:bg-teal-100 transition">Discovery & Estratégia</button>
          <button class="bg-white text-gray-800 px-4 py-2 rounded-xl shadow hover:bg-teal-100 transition">Análise & Requisitos</button>
          <button class="bg-white text-gray-800 px-4 py-2 rounded-xl shadow hover:bg-teal-100 transition">Product Backlog</button>
          <button class="bg-white text-gray-800 px-4 py-2 rounded-xl shadow hover:bg-teal-100 transition">Cerimônias Ágeis</button>
          <button class="bg-white text-gray-800 px-4 py-2 rounded-xl shadow hover:bg-teal-100 transition">Controle & Qualidade</button>
          <button class="bg-white text-gray-800 px-4 py-2 rounded-xl shadow hover:bg-teal-100 transition">Feedback & Evolução</button>
        </div>
      </div>
    </details>
    </div>
    </div>
    </div>
    <div class="flex-col p-20 w-full bg-gray-200 mx-auto text-center">
      <div>
        <h1 class="text-2xl font-bold">Vamos Trabalhar Juntos?
      </h1>
      <p class="text-base mt-5">Sempre aberto para discutir novos projetos desafiadores e oportunidades de criar impacto real. Se você busca um profissional com visão estratégica e foco em resultados, vamos conversar!</p>
      </div>
      
      <div><p></p><p></p></div>

    </div>
  </template>
  
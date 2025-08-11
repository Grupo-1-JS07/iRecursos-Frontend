# 🧑‍💼 iRecursos

**iRecursos** é um sistema web moderno para gestão de Recursos Humanos, desenvolvido em equipe com **React** e **TypeScript**, que prioriza usabilidade, visual limpo e funcionalidades essenciais para empresas de médio e grande porte.

---

## 🚀 Visão Geral

O sistema oferece uma interface intuitiva para administrar funcionários, departamentos, avaliações de desempenho e processos de recrutamento, tudo integrado a um dashboard eficiente e com opções de personalização visual.

---

## ⚙️ Funcionalidades Principais

- **Gestão de Funcionários:** Cadastro, edição, exclusão e visualização em tabela moderna  
- **Gestão de Departamentos:** Controle de departamentos com chefe e contagem de funcionários  
- **Dashboard:** Visão geral com abas para funcionários e departamentos  
- **Performance:** Formulário para avaliação de desempenho  
- **Recrutamento:** Gerenciamento de vagas abertas  
- **Tempo Livre:** Calendário de folgas e ausências  
- **Configurações:** Preferências como dark mode e acesso a login  
- **Login/Cadastro:** Telas ilustrativas para autenticação  

---

## 🛠 Tecnologias

- **React** (v18)  
- **TypeScript**  
- **Tailwind CSS**  
- **Vite**  
- **react-loader-spinner**  
- **react-calendar**  
- **phosphor-icons**  

---

## 📁 Estrutura de Pastas

```plaintext
src/
├── assets/                
├── components/
│   ├── departamento/      
│   ├── funcionario/       
│   ├── usuario/           
│   ├── navbar/            
│   ├── sidebar/           
│   ├── footer/            
│   └── mainlayout/        
├── models/                
├── pages/                 
│   ├── Dashboard.tsx      
│   ├── Configuracoes.tsx  
│   └── ...                
├── services/
│   └── Service.tsx        
├── App.tsx                
├── index.css              
├── App.css                
└── main.tsx
└── ...           
```
---

## ⚙️ Como rodar localmente

### 1. Clone o repositório
```
git clone https://github.com/Grupo-1-JS07/iRecursos-Frontend.git
cd iRecursos-Frontend
```

### 2. Instale as dependências
```
npm install ou yarn
```

### 3. Inicie em modo de desenvolvimento
```
npm run dev ou yarn dev
```

### 4. Abra no navegador acessando: ``` http://localhost:5173 ``` (porta padrão do Vite)

---

## 💡 Decisões Técnicas

- Vite por build ultrarrápido e hot-reload instantâneo.
- Tailwind CSS para estilização ágil e design futurista consistente.
- React Router para SPA com navegação sem recarga.
- Axios para simular chamadas a API de pedidos e cardápio.
- Componentização: UI isolada em components/ para reuso e manutenção.

---

## 📌 Autores

[Brenndha Cabral](https://www.linkedin.com/in/brenndhacabral/) | [Daniel Souza](https://www.linkedin.com/in/daniel-castro-de-souza-602491133/) | [Kannanda Andrade](https://www.linkedin.com/in/nnandak/) | [Monique Ohana](https://www.linkedin.com/in/moniqueohana/) | [Rafael Santanna](https://www.linkedin.com/in/rafael-selles-sant-anna/) | [Sara Silva](https://www.linkedin.com/in/sara-silva-9739b0183/) | [Sâmara Dias](www.linkedin.com/in/sâmara-jeise-dias)

# Guia de Configuração do Projeto (Full-Stack: Fastify + React)

Documentação prática com o passo a passo para inicialização do ambiente e estrutura do projeto.

---

## 📁 Estrutura de Pastas

```text
projeto-raiz/
├── backend/       # API construída com Fastify
│   ├── node_modules/
│   ├── package.json
│   └── server.js
├── frontend/      # Aplicação React criada com Vite
│   ├── node_modules/
│   ├── package.json
│   ├── src/
│   └── index.html
└── Info.md        # Documentação e anotações
```

---

## 🛠️ 1. Configuração do Backend (Fastify)

### Passos no Terminal:
```bash
# 1. Criar e entrar na pasta do backend
mkdir backend
cd backend

# 2. Inicializar o package.json
pnpm init

# 3. Instalar as dependências do servidor e CORS
pnpm add fastify @fastify/cors
```

### Configuração no `backend/package.json`:
Adicionar `"type": "module"` para permitir o uso de `import / export`:
```json
{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "node server.js"
  }
}
```

> **Atenção:** Arquivos `.json` não aceitam comentários (`//`).

foi configurado o server.js para inicializar o servidor e liberar apra o front ende se conectar e fazer suas requisicoes necessarias na api



Entendendo os 4 Pilares do React para consumir APIs
Para fazer o React conversar com a API, usamos 4 conceitos fundamentais:

useState (A Memória):

O React precisa de um lugar para guardar a lista que vai chegar da API.
Exemplo: const [users, setUsers] = useState([]) (começa com uma lista vazia).
fetch (O Carteiro / O Garçom):

É a função nativa do JavaScript que vai até a URL http://localhost:3000/api/users buscar os dados.
useEffect (O Momento Certo):

Diz para o React: "Assim que a página carregar na tela pela primeira vez, execute o fetch para buscar os dados".
.map() (A Apresentação):

Pega o array de dados e transforma cada item em um elemento visual na tela (HTML/JSX).
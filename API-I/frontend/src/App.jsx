import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // 1. ESTADO: Onde guardamos a lista que vem da API
  const [users, setUsers] = useState([])

  // 2. EFEITO: Executado quando o componente "nasce" na tela
  useEffect(() => {
    // Função assíncrona que faz o pedido para a API
    async function fetchUsers() {
      try {
        // O fetch vai até a nossa API Fastify
        const response = await fetch('http://localhost:3000/api/users')
        
        // Converte a resposta em formato JSON (objeto JavaScript)
        const data = await response.json()
        
        // Guarda os dados no nosso estado
        setUsers(data)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    }

    fetchUsers()
  }, []) // O array vazio [] significa: "execute apenas UMA vez quando a página carregar"

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Lista de Usuários da API</h1>

      <ul>
        {/* 3. MAP: Percorre o array e renderiza cada usuário na tela */}
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '1rem' }}>
            <strong>{user.name}</strong> - <span>{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

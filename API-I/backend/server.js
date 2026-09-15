import Fastify from 'fastify'
import cors from '@fastify/cors'

//A instancia do nosso servidor
const fastify = Fastify({logger:true})

//Liberamos o acesso. O CORS e o seguranca da porta
//O origin '*' diz "deixe qualquer front-end fazer pedidos aqui"

fastify.register(cors, {
    origin: '*'
})

//Nossa Primeira Rota da API!
//Quando o React pedir dados nos endereco 'api/users' usando o metodo GET(buscar),
//nos vamos responder com essa lista.

fastify.get('/api/users', async (request, reply) => {

    //Aqui dentro, normalmente iriamos num banco de dados.
    //Mas por enquanto, vamos apenas retornar uma lista fixa.
    return[
        {id: 1, name:"lucas", role:"Junior React Developer"},
        {id: 2, name:"Mestre", role: "Senior Developer"}
    ]
})

//Funcao para ligar o servidor na porta 3000
const start = async () => {
    try{
        await fastify.listen({port: 3000})
        console.log('Garcom pronto para anotar pedidos em http://localhost:3000')
    } catch (err){
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
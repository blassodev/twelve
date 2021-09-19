import { PrismaClient } from '@prisma/client'
import { ApolloServer, gql } from 'apollo-server'

const prisma = new PrismaClient()

const typeDefs = gql`
type User {
    username: String
    email: String
}

type Query {
    users: [User]
}
`;



const main = async () => {
    const resolvers = {
        Query: {
            users: async () => await prisma.users.findMany()
        }
    }
    const server = new ApolloServer({typeDefs, resolvers})
    server.listen().then(({url})=>{
        console.log(`🚀  Server ready at ${url}`);
    })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
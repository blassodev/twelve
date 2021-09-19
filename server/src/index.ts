import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log(await prisma.users.findMany())
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
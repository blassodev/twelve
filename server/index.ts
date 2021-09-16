import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const a = async () => {
    const users = await prisma.users.findMany();
    console.log(users)
}

a();
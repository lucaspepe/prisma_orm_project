import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "9d88a6bf-e846-42b9-b363-f921ce559e24"
        },
        data: {
            duration: 300
        }
    })

    console.log(result)
}

main();
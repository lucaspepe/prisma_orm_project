import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de NodeJS",
            description: "Curso de nodejs e prisma"
        },
    });

    console.log(result)
}

main()
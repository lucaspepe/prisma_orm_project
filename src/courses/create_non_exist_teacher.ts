import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de PHP",
            duration: 200,
            description: "Curso de PHP",
            teacher: {
                create: {
                    name: "Pedro Silva",
                },
            }
        }
    })

    console.log(result)
}

main();
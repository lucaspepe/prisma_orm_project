import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Native",
            description: "Excelente curso de React Native",
            duration: 300,
            teacher: {
                connect: {
                    id: "ed4099f8-50ee-48a0-92b3-12055959ee66"
                }
            }
        }
    })

    console.log(result)
}

main();
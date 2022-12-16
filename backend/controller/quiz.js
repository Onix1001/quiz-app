import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllPertanyaan = async (req, res) => {
    const pertanyaan = await prisma.pertanyaan.findMany()
    res.json(pertanyaan)
}
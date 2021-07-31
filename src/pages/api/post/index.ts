import { getSession } from "next-auth/client";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    const { title, content } = req.body
    const session = await getSession({ req })
    const result = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: { connect: { email: session?.user?.email || undefined } }
        }
    })
    res.json(result)
}
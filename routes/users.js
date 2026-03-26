export default async function (fastify, opts) {
    fastify.get('/users/:id/post/:postId', (req, res) => {
        const id = req.params.id
        const postId = req.params.postId

        res.send(`id ${id}, postId ${postId}`)
    })
}

export default async function (fastify, opts) {
    fastify.get('/hello', (req, res) => {
        const name = req.query.name

        if (!name) {
            res.send('Hello, World!')
        } else {
            res.send(`Hello, ${name}!`)
        }
    })
}

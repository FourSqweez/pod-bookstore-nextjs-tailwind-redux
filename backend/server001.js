const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

server.use(middleware)
server.use(router)

const port = process.PORT || 3001

server.listen(port, () => {
	console.log(`JSON Server is running on port ${port}`)
})

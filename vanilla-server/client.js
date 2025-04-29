const net = require('net')

const host = 'localhost'
const port = 3000

const request = [
  'GET /mirror HTTP/1.1',
  'Host: localhost',
  'Connection: close',
  '', // linea vacia significa que los headers han terminado
  ''
].join('\r\n')


const client = net.createConnection({ host, port }, () => {
  console.log('Conectado al servidor')
  client.write(request)
})

client.on('data', (data) => {
  console.log(data.toString())
})

client.on('end' , () => {
  console.log('conexión concluida')
})

const http = require('node:http');

const server = http.createServer((req, res) => {

  const superHero = {
    "firstname": 'Bruce',
    "lastname": 'Wayne'
  }

  const superHero2 = {
    "firstname": 'Chuse',
    "lastname": 'Wayne'
  }

  res.writeHead(200, { "Content-Type": 'application/json' });
  res.end(JSON.stringify({superHero, superHero2}));
})

server.listen(8000, () => {
  console.log('running...')
})
const http = require('http');

const server = http.createServer((req, res) =>{
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if(req.url==="/produto"){
    res.end(
      JSON.stringify({
        message :'Rota de Produto'
      })
    )
  }
  
  if(req.url==="/usuario"){
     res.end(
    JSON.stringify({
       message: "Rota de usuario",
  })
  );
  }
});

server.listen(4001,() => console.log('servidor ativo'));
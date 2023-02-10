const express = require("express");
const { title } = require("process");

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>lista de tarefa</h1>');
})
app.get('/json', (req,res) => {
  res.json({title:'tarefa x', done:true});
})
app.listen(4002, () => {
  console.log('servidor iniciado')
})

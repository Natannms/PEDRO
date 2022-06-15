const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cores = [
  {
    id: 1,
  }
]
const tamanhoArray = cores.length

app.get('/', (req, res) =>{
    let mensagem = 'Seja Bem Vindo ao meu primeiro servidor!'
    res.send(mensagem)
})
app.get('/cores', (req, res) => {
    res.send(cores)
})

app.get('/cores/:id', (req , res) => {
    if(req.params.id <= tamanhoArray && req.params.id > 0){
        cores.forEach(element => {
            if(element.id == req.params.id){
               res.send(element)
            }
        });
    }
    else{
        res.send('404 NOT FOUDED')
    }
})

app.post('/cores', (req, res) =>{
    cores.push(req.body)
    res.send('Cadastrado com sucesso')
})

app.listen(4000, () => console.log('Server running in http://localhost:4000'))


// [1,2,3,4,5] map (elementos cujo id = body.id) => [3,4,5]
// [1,2,3,4,5] foreach (escreva  o elemento no console ) [1 => escreva no console], [2, escreana no console] ...
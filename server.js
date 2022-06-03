const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 8000

const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },

  'chance the  rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennete',
    'birthLocation': 'Chicago, Illinois'
  },

  'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
  }

}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {

  const rapperName = req.params.name.toLocaleLowerCase()

  if (rappers[rapperName]) {
    res.json(rappers[rapperName])
  }

  // res.json(rappers)
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
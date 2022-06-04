const express = require('express')
const res = require('express/lib/response')
const app = express()
const cors = require('cors')
const PORT = 8000

// cors (download npm install cors --save)
app.use(cors)

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
});

app.get('/api/:name', (req, res) => {

  const rapperName = req.params.name.toLocaleLowerCase()

  if (rappers[rapperName]) {
    res.json(rappers[rapperName])
  } else {
    res.json(rappers['unknown']);
  }

  // res.json(rappers)
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}!`)
})
const express = require('express')
const app = express()
const cors = require('cors')
// const http = require('http')

app.use(cors())

const jobs = {
  'lost job': {
    'date': 29,
    'month': 06,
    'year': 2019,
    'what happened': 'lost job'
  },

  'learning to code': {
    'date': 11,
    'month': 01,
    'year': 2022,
    'what doing': 'still coding'
  },

  'software engineer': {
    'date': 30,
    'month': 07,
    'year': 2022,
    'what doing': 'got the job'
  }
}

const PORT = 8000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:jobs', (req, res) => {
  const jobsName = req.params.jobs.toLocaleLowerCase
  if (jobs[jobsName]) {
    res.json(jobs[jobsName])
  } else {
    res.json(jobs['learning to code'])
  }
  // res.json(jobs)
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`The is running on ${PORT}`)
})

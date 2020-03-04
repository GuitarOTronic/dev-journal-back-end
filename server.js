const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const weekRouter = require('./routes/week.js')
const weekController = require('./controller/WeekController.js')
const app = express()
const PORT = process.env.PORT || 8888



app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

// enables CORs 
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/week', (req, res, next)=>{
  weekRouter(req, res, next).then(res => {
    console.log('her', res)
  })
})

// app.use('/currentWeek', async function(req, res){
//   let week = await weekController.getThisWeek()
//   res.status(200).send(week)
// })

// function (req, res) {
//   res.status(200).send([
//     {
//       id: 2,
//       date: new Date(),
//       notes: " long notes that are being added to this thing i'm building. werrrridd",
//       rating: 2,
//       features: "DPS-1795"
//     },
//     {
//       id: 3,
//       date: new Date(),
//       notes: " long notes that are being added to this thing i'm building. werrrridd",
//       rating: 3,
//       features: "DPS-1795"
//     },
//     {
//       id: 4,
//       date: new Date(),
//       notes: " long notes that are being added to this thing i'm building. werrrridd, long notes that are being added to this thing i'm building. werrrridd",
//       rating: 3,
//       features: "DPS-1795"
//     },
//     {
//       id: 5,
//       date: new Date(),
//       notes: " long notes that are being added to this thing i'm building. werrrridd",
//       rating: 2,
//       features: "DPS-1795"
//     },
//     {
//       id: 6,
//       date: new Date(),
//       notes: " long notes that are being added to this thing i'm building. werrrridd",
//       rating: 2,
//       features: "DPS-1795"
//     }
//   ])
// })



app.use((req, res) => {
  const status = 404
  const message = `${req}`
  res.status(status).json({ status: message })
})

app.use((err, req, res, next) => {
  const status = err.status
  const message = err.message || 'Something went wrong'
  res.status(status).json({ status, message })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})


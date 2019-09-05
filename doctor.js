const express = require("express")
const app = express()

const router = new express.Router()
router.get("/doctor", (req, res, next) => {
  const name = req.query.name || "Who"
  const doctor = `Dr. ${name}`
  res.send(doctor)
})
router.get("/appointment", (req, res, next) => {
  const doctor = req.query.doctor || "Eggman"
  const patient = req.query.patient || "Zero"
  const description = `The appointment is between Dr. ${doctor} and patient ${patient}`
  res.send(description)
})
app.use(router)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on :${port}`))
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Student home page')
})

router.get('/detail', (req, res) => {
  res.send('This From Student Detail')
})

router.get('/university', (req, res) => {
  res.send('This From Student University')
})

router.get('/branch', (req, res) => {
  res.send('This From Student Branch')
})

module.exports = router
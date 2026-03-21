/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const expressLayouts = require("express-ejs-layouts")
const baseController = require("./controllers/baseController")
const inventoryRoute = require("./routes/inventoryRoute")
const utilities = require("./utilities/")
/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

/* ***********************
 * Routes
 *************************/
app.use(static)

/* Error Route 500
*/
app.get("/trigger-error", utilities.handleErrors(async (req, res, next) => {
  throw new Error("Intentional 500 error for testing")
}))

/* File not found 
*/
app.use(async (req, res, next) => {
  next({status: 404, message: 'Sorry, lost that page'})
})

/* Error express
*/
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  let message
  if(err.status == 404) {
    message = err.message
  } else {
    message = "There was crash, try other route"
  }
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message,
    nav
  })
})


//Index route
app.get("/", utilities.handleErrors(baseController.buidlHome))

//Inventory routes
app.use("/inv", inventoryRoute)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})

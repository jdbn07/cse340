const utilities = require("../utilities/")
const baseController = {}



baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

module.exports = baseController
// Compare this snippet from utilities/index.js:
// const pool = require("../database/")
//
// const utilities = {}
//
// utilities.getNav = async function(){
//   return await pool.query("SELECT * FROM public.nav ORDER BY nav_name")
// }
//
// module.exports = utilities
// Compare this snippet from routes/static.js:
// const express = require("express")
// const router = express.Router()
// const baseController = require("../controllers/baseController")
//
// router.get("/", baseController.buildHome)
//
// module.exports = router
// Compare this snippet from views/layouts/layout.ejs:
// <!DOCTYPE html>
// <html lang="en">< /html>
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title><%= title %></title>
//   <link rel="stylesheet" href="/css/styles.css">
// </head>
// Import modules
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const path = __dirname + "/app/views/"
require("dotenv/config")

// Configure app, cors and port
const app = express()
const port = process.env.PORT || 5000

// Relates cors, bodyParser and static files with app 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path))

// Import routes
require("./app/routes/auth.routes")(app)
require("./app/routes/cylinder.routes")(app)
require("./app/routes/user.routes")(app)

// Simple GET route
app.get("/", (request, response) => {
    response.sendFile(path+"/index.html")
})

// Set port (app is listening for requests)
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})
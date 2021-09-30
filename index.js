const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const UserRoute = require("./routes/UserRoute")
const AuthRoute = require("./routes/AuthRoute")

//Environment Configuration
dotenv.config()

//App Initialization
const app = express()
console.log("Server start")

//Middleware to use JSON in app
app.use(express.json())

//Routes
app.use("/api/auth", AuthRoute)
app.use("/api/users", UserRoute)

//Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err))

// Server initialization
app.listen(process.env.PORT || 5000, (error) => {
  if (error) {
    console.log(error)
  }
  console.log("Backend server is running")
})

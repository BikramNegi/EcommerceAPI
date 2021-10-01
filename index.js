const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const AuthRoute = require("./routes/AuthRoute")
const UserRoute = require("./routes/UserRoute")
const ProductRoute = require("./routes/ProductRoute")
const CartRoute = require("./routes/CartRoute")
const OrderRoute = require("./routes/OrderRoute")
const PaymentRoute = require("./routes/PaymentRoute")

//Environment Configuration
dotenv.config()

//App Initialization
const app = express()
console.log("Server start")

//Middleware to use in app
app.use(express.json())
app.use(cors())

//Routes
app.use("/api/auth", AuthRoute)
app.use("/api/users", UserRoute)
app.use("/api/products", ProductRoute)
app.use("/api/carts", CartRoute)
app.use("/api/orders", OrderRoute)
app.use("/api/checkout", PaymentRoute)

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

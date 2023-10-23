const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
// 1. Get all users
app.get("/", (req, res) => {
  res.json([
    {
        "id" : 1,
        "name" : "John Doe",
    },
    {
        "id" : 2,
        "name" : "Alex Row",
    },
    {
        "id" : 3,
        "name" : "Sofia White",
    }
  ])
})
// start the server to listen 
app.listen(5000, () => {
  console.log("Server is listening on port 5000")
})
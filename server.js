require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")

const router = require("./routes/routes")

const app = express()

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB error on connect: " + err))

app.use(cors())
app.use(bodyParser.json());
app.use("/api", router)

if (process.env.NODE_ENV === "production") {

  app.use(express.static(path.resolve(__dirname, 'client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/dist', 'index.html'));
  });
}

app.listen(process.env.PORT || 3000, () => console.log("Server Running!"))
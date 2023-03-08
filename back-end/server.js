// This is the entry point of the application

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
// With the below required we can only use process.env.
require("dotenv").config();
// no need to install with npm, it gives access to the file system
const { readdirSync } = require("fs");

// // import routes
// const authRoutes = require("./routes/auth");
// An alternative to the above is used below to require and use all routes dynamically.


// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware: to prefix /api to all the routes
// app.use("/api", authRoutes);
// An alternative instead of requiring and using each route separately we can loop through the routes folder and require and use them accordingly.
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));


// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

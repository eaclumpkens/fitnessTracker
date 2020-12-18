const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");


const PORT = process.env.PORT || 8000;

// connection
mongoose.connect(process.env.MONDOGDB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// middleware
app.use(express.static("public"));

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes.js"));

// server listener
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...!`);
});
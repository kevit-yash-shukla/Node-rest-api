const express = require('express');
const app = express();
const coursesRouter = require('./routes/courses');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use("/courses", coursesRouter);

mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log("Connected to database .......")
})
app.listen(process.env.PORT, () => {
    console.log("server is running at port 3000 !!!!!");
})
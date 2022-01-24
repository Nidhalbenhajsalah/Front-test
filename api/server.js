const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models");
const taskRoute = require("./routes/task.route.js");




dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("MongoDB Connected...");
    })
    .catch(err => {
        console.log("Cannot connect to the database", err);
        process.exit();
    });



app.use("/", taskRoute);





app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});
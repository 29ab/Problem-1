const express = require("express");

const app = express();
app.use(express.json());
const userController = require("./controllers/userControllers");
const studentController = require("./controllers/studentController");
const submittsController = require("./controllers/submitCollection");
const evaluationController = require("./controllers/evaluationCollection");

app.use("/users",userController);
app.use("/students",studentController);
app.use("/submitts",submittsController);
app.use("/evaluations",evaluationController);

module.exports = app;
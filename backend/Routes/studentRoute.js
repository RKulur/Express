const express = require("express");

// const studentSchema = require("../Models/student");
const {
  InsertStudent,
  GetStudent,
  DeleteStudent,
  UpdateStudent,
} = require("../Controller/studentController");

const route = express.Router();

route.get("/get", GetStudent);

route.post("/insert", InsertStudent);

route.delete("/delete/:id", DeleteStudent);

route.put("/update/:id", UpdateStudent);

module.exports = route;

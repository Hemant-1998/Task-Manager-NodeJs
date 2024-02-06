const express = require("express");
const {
  getAllTasks,
  createTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.js");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;

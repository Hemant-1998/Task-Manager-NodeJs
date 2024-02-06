const Tasks = require("../models/tasks.js");

// all are controller

const getAllTasks = async (req, res) => {
  //quering all tasks form DB.
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
// fetching and sending single task based on Id, geting as route parameter.
const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Tasks.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `no task with ID: ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTasks = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    // console.log(task);
    res.status(201).json(task);
  } catch (error) {
    // console.error(error.message);
    res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const deletedTask = await Tasks.findOneAndDelete({ _id: taskId });
    if (!deletedTask) {
      return res.status(404).json({ msg: `no task with id: ${taskId}` });
    }
    res.status(200).json(deletedTask);
  } catch (error) {
    //this will execute if mongoose throw an array on line 39. if id value length is not as required.
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    // if we not pass the 3rd arguments then we would get old task and the validation happen.
    const updatedTask = await Tasks.findOneAndUpdate(
      { _id: taskId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedTask) {
      return res.status(404).json({ msg: `no task with id: ${taskId}` });
    }
    res.status(200).json({ task: updatedTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTasks, getTask, deleteTask, updateTask };

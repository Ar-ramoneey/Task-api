import { createTask } from "../services/task.service.js";
import { getAllTasks } from "../services/task.service.js";
import { getTaskById } from "../services/task.service.js";
import { updateTask } from "../services/task.service.js";
import { deleteTask } from "../services/task.service.js";


export const createTaskController = async (req, res) => {
  try {
    const taskData = req.body;
    const newTask = await createTask(taskData);
    res.status(201).json({ message: "Task created successfully", newTask });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const getAllTasksController = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json({ message: "Tasks retrieved successfully", tasks });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const getTaskByIdController = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await getTaskById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task retrieved successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const updateTaskController = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updateData = req.body;
    const updatedTask = await updateTask(taskId, updateData);
    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const deleteTaskController = async (req, res) => {
  try {
    const taskId = req.params.id;
    await deleteTask(taskId);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
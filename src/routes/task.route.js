import { createTaskController } from "../controllers/task.controller.js";
import { getAllTasksController } from "../controllers/task.controller.js";
import { getTaskByIdController } from "../controllers/task.controller.js";
import { updateTaskController } from "../controllers/task.controller.js";
import { deleteTaskController } from "../controllers/task.controller.js";
import express from "express";

const router = express.Router();

router.post("/tasks", createTaskController);

router.get("/tasks", getAllTasksController);

router.get("/tasks/:id", getTaskByIdController);

router.put("/tasks/:id", updateTaskController);

router.delete("/tasks/:id", deleteTaskController);

export default router;

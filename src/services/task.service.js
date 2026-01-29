import Task from '../models/task.js';

export const createTask = async (taskData) => {
    const { title, description, status, priority } = taskData;
  const newTask = new Task({
    title,
    description,
    status,
    priority
  });
  return await newTask.save();
};

export const getAllTasks = async () => {
  return await Task.find();
};

export const getTaskById = async (taskId) => {
  return await Task.findById(taskId);
}

export const updateTask = async (taskId, updateData) => {
  return await Task.findByIdAndUpdate(taskId, updateData, { new: true });
};

export const deleteTask = async (taskId) => {
  return await Task.findByIdAndDelete(taskId);
};
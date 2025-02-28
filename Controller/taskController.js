const mongoose = require('mongoose'); 
const Task = require("../Model/taskModel");

const addTask = async (req, res) => {
    try {
        const { title, description, team, status, date } = req.body;

        if (!title || !description) {
            return res.status(400).json({ success: false, message: "Title and description are required" });
        }

        const newTask = new Task({
            title,
            description,
            team, 
            status,
            date
        });

        const savedTask = await newTask.save();
        res.status(201).json({ success: true, message: "Task added successfully", data: savedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

const updateTaskStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ success: false, message: "Status is required" });
        }

        const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
        
        if (!updatedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, message: "Task status updated successfully", data: updatedTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

module.exports = { addTask, getTasks, updateTaskStatus };

// };
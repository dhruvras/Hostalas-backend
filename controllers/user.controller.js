import User from "../models/user.model.js";

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log("User created:", user);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}  
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
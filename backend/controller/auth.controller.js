import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/user.model.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname) return res.status(400).send({ message: "Name is required" });
        if (!email) return res.status(400).send({ message: "Email is required" });
        if (!password) return res.status(400).send({ message: "Password is required" });

        const normalizedEmail = email.toLowerCase();
        const existingUser = await userModel.findOne({ email: normalizedEmail });
        if (existingUser) return res.status(400).send({ success: false, message: "Email already registered" });

        const hashed = await hashPassword(password);
        const user = new userModel({ fullname, email: normalizedEmail, password: hashed });
        await user.save();

        return res.status(201).send({ success: true, message: "User registered successfully" });
    } catch (error) {
        console.log("Registration Error:", error);
        return res.status(500).send({ success: false, message: "Registration error", error: error.message });
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send({ success: false, message: "Invalid credentials" });

        const normalizedEmail = email.toLowerCase();
        const user = await userModel.findOne({ email: normalizedEmail });
        if (!user) return res.status(404).send({ success: false, message: "Email not registered" });

        const match = await comparePassword(password, user.password);
        if (!match) return res.status(400).send({ success: false, message: "Invalid password" });

        const token = JWT.sign({ _id: user._id, role: 'user' }, process.env.JWT_SECRET, { expiresIn: "24h" });

        return res.status(200).send({
            success: true,
            message: "Login successful",
            user: { _id: user._id, fullname: user.fullname, email: user.email },
            token,
        });
    } catch (error) {
        console.log("Login Error:", error);
        return res.status(500).send({ success: false, message: "Login error", error: error.message });
    }
};

export const logoutController = async (req, res) => {
    try {
        return res.status(200).send({ success: true, message: "Logout successful. Remove token on client." });
    } catch (error) {
        console.log("Logout Error:", error);
        return res.status(500).send({ success: false, message: "Logout error", error: error.message });
    }
};

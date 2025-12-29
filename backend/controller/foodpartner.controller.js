import foodPartnerModel from "../models/foodpartner.model.js";
import { hashPassword, comparePassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";

// Register Food Partner
export const registerFoodPartner = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) return res.status(400).send({ message: "Name is required" });
        if (!email) return res.status(400).send({ message: "Email is required" });
        if (!password) return res.status(400).send({ message: "Password is required" });

        const normalizedEmail = email.toLowerCase();
        const existing = await foodPartnerModel.findOne({ email: normalizedEmail });
        if (existing) return res.status(400).send({ success: false, message: "Email already registered" });

        const hashed = await hashPassword(password);
        const partner = new foodPartnerModel({ name, email: normalizedEmail, password: hashed });
        await partner.save();

        return res.status(201).send({ success: true, message: "Food partner registered successfully" });
    } catch (error) {
        console.log("FoodPartner Registration Error:", error);
        return res.status(500).send({ success: false, message: "Registration error", error: error.message });
    }
};

// Login Food Partner
export const loginFoodPartner = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send({ success: false, message: "Invalid credentials" });

        const normalizedEmail = email.toLowerCase();
        const partner = await foodPartnerModel.findOne({ email: normalizedEmail });
        if (!partner) return res.status(404).send({ success: false, message: "Email not registered" });

        const match = await comparePassword(password, partner.password);
        if (!match) return res.status(400).send({ success: false, message: "Invalid password" });

        const token = JWT.sign({ _id: partner._id, role: 'foodpartner' }, process.env.JWT_SECRET, { expiresIn: "24h" });

        return res.status(200).send({
            success: true,
            message: "Login successful",
            partner: { _id: partner._id, name: partner.name, email: partner.email },
            token,
        });
    } catch (error) {
        console.log("FoodPartner Login Error:", error);
        return res.status(500).send({ success: false, message: "Login error", error: error.message });
    }
};

// Logout Food Partner (stateless JWT: instruct client to remove token)
export const logoutFoodPartner = async (req, res) => {
    try {
        return res.status(200).send({ success: true, message: "Logout successful. Remove token on client." });
    } catch (error) {
        console.log("FoodPartner Logout Error:", error);
        return res.status(500).send({ success: false, message: "Logout error", error: error.message });
    }
};

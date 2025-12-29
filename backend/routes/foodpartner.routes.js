import express from "express";
import { registerFoodPartner, loginFoodPartner, logoutFoodPartner } from "../controller/foodpartner.controller.js";

const Router = express.Router();

Router.post("/register", registerFoodPartner);
Router.post("/login", loginFoodPartner);
Router.post("/logout", logoutFoodPartner);

export default Router;

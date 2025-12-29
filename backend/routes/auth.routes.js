import express from "express";
import { registerController, loginController, logoutController } from "../controller/auth.controller.js";

const Router = express.Router();

Router.post('/register', registerController);
Router.post('/login', loginController);
Router.post('/logout', logoutController);

export default Router;
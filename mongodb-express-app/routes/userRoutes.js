import e from "express";
import { Router } from "express";
import { userController } from "../controllers";

const controller = new userController();

const router = Router();

// gets all the users at this endpoint
router.get('/', (req, res) => {
    controller.getUsers(res);
})

// create new user via router.post
router.post('/create', (req, res) => {
    controller.createUser(req.body, res);
})

export default userRoutes;
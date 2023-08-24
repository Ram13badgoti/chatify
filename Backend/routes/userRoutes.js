import express from "express"
import { registerUser } from "../controllers/userControllers.js";

const router = express.Router();
// import { registerUser } from "../controllers/userControllers";


//  router.route("/").get(protect, allUsers);
// router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/").post(registerUser);


export default router;



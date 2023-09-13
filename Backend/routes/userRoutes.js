import express from "express"
import { registerUser,authUser, allUsers } from "../controllers/userControllers.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();



//  router.route("/").get(protect, allUsers);
// router.route("/").post(registerUser);
// router.route("/").get(allUsers);
router.route("/").post(registerUser).get(protect,allUsers);
router.post("/login", authUser);





export default router;




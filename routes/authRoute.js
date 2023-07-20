import express from "express"; // we are creating the routes with the help of express
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// METHOD POST-> means we are taking the data from user
router.post("/register", registerController);

router.post("/login", loginController);

router.post("/forgot-password", forgotPasswordController);

router.get("/test", requireSignIn, isAdmin, testController); // we can add as many middleware after the url and before the controller5

//protected User route auth // we are making this only for security purposes of dashboard
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true }); // if the response is ok then continue
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);


export default router;

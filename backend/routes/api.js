import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middleware/Authenticate.js";
import ProfileController from "../controllers/ProfileController.js";
import { multerUpload } from "../middleware/multer.js";
import ChatController from "../controllers/ChatController.js";

const router = Router();

router.post("/auth/register", multerUpload.single('profile'), AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/send-email", AuthController.sendTestEmail);

// * Profile routes
router.get("/profile", authMiddleware, ProfileController.index); //Private route
router.put("/profile/:id", authMiddleware, ProfileController.update); //Private route


// * Chat Routes
router.post("/chat/new", authMiddleware, ChatController.newGroupChat); //Private route
router.get("/chat/getMyChats", authMiddleware, ChatController.getMyChats);
// router.get("/chat/:id", authMiddleware, ChatController.index); //Private route
// router.put("/chat/:id", authMiddleware, ChatController.update); //Private route
// router.delete("/chat/:id", authMiddleware, ChatController.delete); //Private route

export default router;

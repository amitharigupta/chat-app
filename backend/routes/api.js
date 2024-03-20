import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middleware/Authenticate.js";
import ProfileController from "../controllers/ProfileController.js";
import { multerUpload } from "../middleware/multer.js";
import ChatController from "../controllers/ChatController.js";

const router = Router();

/**
 * @swagger
 * /api/auth/register
 * post:
 * tags:
 * - User
 * summary: Register a new user
 * requestBody:
 * required: true
 * content: 
 * application/json
 * schema:
 *  type: object
 * properties:
 * name: 
 * type: string
 * email: 
 * type: string
 * password: 
 * type: string
 * password_confirmation: 
 * type: string
 * responses:
 * 200:
 * Description: New User created successfully
 */
router.post("/auth/register", multerUpload.single('profile'), AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/user/search", authMiddleware, AuthController.getUserByName); // To get user details by name
router.get("/send-email", AuthController.sendTestEmail);

// * Profile routes
router.get("/profile", authMiddleware, ProfileController.index); //Private route
router.put("/profile/:id", authMiddleware, ProfileController.update); //Private route
router.get("/profile/:id", authMiddleware, ProfileController.getMyProfile); //Private route


// * Chat Routes
router.post("/chat/new", authMiddleware, ChatController.newGroupChat); //Private route
router.get("/chat/getMyChats", authMiddleware, ChatController.getMyChats);
// router.get("/chat/:id", authMiddleware, ChatController.index); //Private route
// router.put("/chat/:id", authMiddleware, ChatController.update); //Private route
// router.delete("/chat/:id", authMiddleware, ChatController.delete); //Private route

export default router;

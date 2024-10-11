import { Router } from "express";
import { BookController } from "../controllers/BookController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

const bookController = new BookController();

router.get('/', /*authenticateToken ,*/ bookController.getAll);
router.post('/', /*authenticateToken ,*/ bookController.create);

export { router as bookRoutes };
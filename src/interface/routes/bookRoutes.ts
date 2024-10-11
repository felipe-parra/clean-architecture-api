import { Router } from "express";
import { BookController } from "../controllers/BookController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

const bookController = new BookController();

router.get('/', authenticateToken, (req, res) => bookController.getAll(req, res));
router.post('/', authenticateToken, (req, res) => bookController.create(req, res));

export { router as bookRoutes };
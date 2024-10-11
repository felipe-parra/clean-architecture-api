import express from "express";
import dotenv from "dotenv";

import { bookRoutes } from './interface/routes/bookRoutes';
import { errorHandler } from "./interface/middleware/errorHandler";
import { logger } from "./infrastructure/logger";

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express()

// Set JSON parser middleware
app.use(express.json());

// Mount the book routes
app.use("/api/books",bookRoutes);

// Set error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  // Log server startup message
  logger.info("Server is running on port 3000");
});
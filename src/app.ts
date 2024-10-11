import express from "express";
import { bookRoutes } from './interface/routes/bookRoutes';
import { errorHandler } from "./interface/middleware/errorHandler";

const app = express()

app.use(express.json());

app.use("/api/books",bookRoutes);

app.use(errorHandler);

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
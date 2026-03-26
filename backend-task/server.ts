import dotenv from "dotenv";
import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import authRoutes from "./src/routes/authRoutes";
import taskRoutes from "./src/routes/taskRoutes";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
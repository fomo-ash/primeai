import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { authMiddleware, AuthRequest } from "../middleware/authMiddleware";

const router = Router();
const prisma = new PrismaClient();

router.post("/", authMiddleware, async (req: AuthRequest, res) => {
  try {
    const task = await prisma.task.create({
      data: {
        title: req.body.title,
        userId: req.user.userId
      }
    });

    res.json(task);
  } catch {
    res.status(500).json({ message: "Error creating task" });
  }
});

router.get("/", authMiddleware, async (req: AuthRequest, res) => {
  try {
    let tasks;

    if (req.user.role === "ADMIN") {
      tasks = await prisma.task.findMany();
    } else {
      tasks = await prisma.task.findMany({
        where: { userId: req.user.userId }
      });
    }

    res.json(tasks);
  } catch {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

router.delete("/:id", authMiddleware, async (req: AuthRequest, res) => {
  try {
    await prisma.task.delete({
      where: { id: req.params.id as string }
    });

    res.json({ message: "Task deleted" });
  } catch {
    res.status(500).json({ message: "Error deleting task" });
  }
});

export default router;
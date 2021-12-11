import * as Prisma from '@prisma/client';
import { Router } from 'express';

type GetUniqueParams = {
  id: string;
};

const userRouter = (prisma: Prisma.PrismaClient) => {
  const router = Router();

  router.get<'/', null, Prisma.Task[]>('/', async (req, res) => {
    res.json(await prisma.task.findMany());
  });

  router.get<'/:id', GetUniqueParams, Prisma.Task>('/:id', async (req, res) => {
    const { id } = req.params;
    const task = await prisma.task.findUnique({ where: { id } });
    res.json(task);
  });

  router.post<'/', null, Prisma.Task, Prisma.Prisma.TaskCreateInput>(
    '/',
    async (req, res) => {
      const task = await prisma.task.create({ data: req.body });
      res.status(201).json(task);
    }
  );

  router.put<
    '/:id',
    GetUniqueParams,
    Prisma.Task,
    Prisma.Prisma.TaskUpdateInput
  >('/:id', async (req, res) => {
    const { id } = req.params;
    const task = await prisma.task.update({ data: req.body, where: { id } });
    res.json(task);
  });

  router.delete<'/:id', GetUniqueParams, Prisma.Task>(
    '/:id',
    async (req, res) => {
      const { id } = req.params;
      const task = await prisma.task.delete({ where: { id } });
      res.json(task);
    }
  );

  return router;
};

export default userRouter;

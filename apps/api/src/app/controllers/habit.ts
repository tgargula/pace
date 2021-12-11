import * as Prisma from '@prisma/client';
import { Router } from 'express';

type GetUniqueParams = {
  id: string;
};

const userRouter = (prisma: Prisma.PrismaClient) => {
  const router = Router();

  router.get<'/', null, Prisma.Habit[]>('/', async (req, res) => {
    res.json(await prisma.habit.findMany());
  });

  router.get<'/:id', GetUniqueParams, Prisma.Habit>('/:id', async (req, res) => {
    const { id } = req.params;
    const habit = await prisma.habit.findUnique({ where: { id } });
    res.json(habit);
  });

  router.post<'/', null, Prisma.Habit, Prisma.Prisma.HabitCreateInput>(
    '/',
    async (req, res) => {
      const habit = await prisma.habit.create({ data: req.body });
      res.status(201).json(habit);
    }
  );

  router.put<
    '/:id',
    GetUniqueParams,
    Prisma.Habit,
    Prisma.Prisma.HabitUpdateInput
  >('/:id', async (req, res) => {
    const { id } = req.params;
    const habit = await prisma.habit.update({ data: req.body, where: { id } });
    res.json(habit);
  });

  router.delete<'/:id', GetUniqueParams, Prisma.Habit>(
    '/:id',
    async (req, res) => {
      const { id } = req.params;
      const habit = await prisma.habit.delete({ where: { id } });
      res.json(habit);
    }
  );

  return router;
};

export default userRouter;

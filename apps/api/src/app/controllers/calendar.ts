import * as Prisma from '@prisma/client';
import { Router } from 'express';

type GetUniqueParams = {
  id: string;
};

const userRouter = (prisma: Prisma.PrismaClient) => {
  const router = Router();

  router.get<'/', null, Prisma.Calendar[]>('/', async (req, res) => {
    res.json(await prisma.calendar.findMany());
  });

  router.get<'/:id', GetUniqueParams, Prisma.Calendar>('/:id', async (req, res) => {
    const { id } = req.params;
    const calendar = await prisma.calendar.findUnique({ where: { id } });
    res.json(calendar);
  });

  router.post<'/', null, Prisma.Calendar, Prisma.Prisma.CalendarCreateInput>(
    '/',
    async (req, res) => {
      const calendar = await prisma.calendar.create({ data: req.body });
      res.status(201).json(calendar);
    }
  );

  router.put<
    '/:id',
    GetUniqueParams,
    Prisma.Calendar,
    Prisma.Prisma.CalendarUpdateInput
  >('/:id', async (req, res) => {
    const { id } = req.params;
    const calendar = await prisma.calendar.update({ data: req.body, where: { id } });
    res.json(calendar);
  });

  router.delete<'/:id', GetUniqueParams, Prisma.Calendar>(
    '/:id',
    async (req, res) => {
      const { id } = req.params;
      const calendar = await prisma.calendar.delete({ where: { id } });
      res.json(calendar);
    }
  );

  return router;
};

export default userRouter;

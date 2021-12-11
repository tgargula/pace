import * as Prisma from '@prisma/client';
import { Router } from 'express';

type GetUniqueParams = {
  id: string;
};

const userRouter = (prisma: Prisma.PrismaClient) => {
  const router = Router();

  router.get<'/', null, Prisma.User[]>('/', async (req, res) => {
    res.json(await prisma.user.findMany());
  })

  router.get<'/:id', GetUniqueParams, Prisma.User, Prisma.User>(
    '/:id',
    async (req, res) => {
      const { id } = req.params;
      const user = await prisma.user.findUnique({ where: { id } });
      res.json(user);
    }
  );

  router.post<'/', null, Prisma.User, Prisma.Prisma.UserCreateInput>(
    '/',
    async (req, res) => {
      console.log(req.body);
      const user = await prisma.user.create({ data: req.body });
      res.json(user);
    }
  );

  return router;
};

export default userRouter;

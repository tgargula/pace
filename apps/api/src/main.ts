import * as express from 'express';
import { PrismaClient } from '@prisma/client';
import * as cors from 'cors';
import {
  userRouter,
  calendarRouter,
  habitRouter,
  taskRouter,
  authRouter,
} from './app/controllers';

const prisma = new PrismaClient();
const prefix = '/api';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(`${prefix}/user`, userRouter(prisma));
app.use(`${prefix}/calendar`, calendarRouter(prisma));
app.use(`${prefix}/habit`, habitRouter(prisma));
app.use(`${prefix}/task`, taskRouter(prisma));
app.use(`${prefix}/auth`, authRouter);

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

server.on('error', console.error);

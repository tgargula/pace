import * as express from 'express';
import { PrismaClient } from '@prisma/client';
import {
  userRouter,
  calendarRouter,
  habitRouter,
  taskRouter,
} from './app/controllers';

const prisma = new PrismaClient();
const prefix = '/api';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(`${prefix}/user`, userRouter(prisma));
app.use(`${prefix}/calendar`, calendarRouter(prisma));
app.use(`${prefix}/habit`, habitRouter(prisma));
app.use(`${prefix}/task`, taskRouter(prisma));

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});

server.on('error', console.error);

import 'reflect-metadata';
import express from 'express';
import { createConnections } from 'typeorm';
import connectionOptions from './ormconfig';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', async (req, res) => {
  console.log('aaa');
  console.log('aaa');
  res.send({ message: 'Hello API' });
});

createConnections(connectionOptions).then(() => {
  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
});

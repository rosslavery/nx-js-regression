import { ConnectionOptions } from 'typeorm';
import mysql2 from 'mysql2';

import { ExampleEntity } from './entity/example.entity';

const connectionOptions: ConnectionOptions[] = [
  {
    name: 'default',
    type: 'mysql',
    driver: mysql2,
    host: process.env.MYSQL_HOST,
    extra: {
      socketPath: process.env.MYSQL_SOCKET_PATH,
    },
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    charset: 'utf8mb4_unicode_ci',
    synchronize:
      process.env.NODE_ENV === 'development' &&
      process.env.MYSQL_HOST === 'localhost',
    entities: [ExampleEntity],
  },
];

export default connectionOptions;

import { resolve } from 'path';
import knex from 'knex';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'database.sqlite'),
  },
});

export default connection;

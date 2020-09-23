import { resolve } from 'path';
import knex from 'knex';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

export default connection;

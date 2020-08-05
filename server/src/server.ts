import express from 'express';
import cors from 'cors';
import routes from './routes';
const log = require('debug')('api:server')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  log('Server start on port 3333');
})
import express from 'express';
import { createServer } from 'http';
import { join } from 'path';

import router from './routes/router';

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.use(router);

const port = process.env.PORT || 3000;
createServer(app).listen(port, () => console.info(`Now listening on ${port}`));

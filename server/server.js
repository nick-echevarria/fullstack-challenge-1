import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

import applicationRouter from './routers/applicationRouter.js';

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());

//Route handlers
app.use('/api', applicationRouter);

//GET 'third party site'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//Handle unknown routes
app.use((req, res) => res.sendStatus(404));

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express' global error handler has triggered",
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, {
    message: { err: err.message },
  });
  const errorStatus = err.status || 500;
  console.log('The global error is being invoked');
  return res.status(errorStatus).send(errorObj.message);
});

app.listen(port, () => {
  console.log(`Fullstack Challenge App listening on port ${port}`);
});

export default app;

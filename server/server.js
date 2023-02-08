import express from 'express';
const app = express();
const port = 3000;

import apiRouter from './routers/applicationRouter';

 app.use(express.json());

//GET base app
app.get('/', (req, res) => {
  return res.send(
    "This is the third party site you're starting your application on!"
  );
});

//Route Handlers
app.use('/application', applicationRouter);
app.use('/validate', validationRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

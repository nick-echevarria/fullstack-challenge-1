import express from 'express';

const router = express.Router();

//POST - 'validates' app and returns a price
app.post('/validate', (res, req) => {
  return res.status(200).json(res.locals.validationMsg);
});

export { router as validationRouter };

import express from 'express';

const router = express.Router();

//POST - starts new app + initializes w provided data
app.post('/', (req, res) => {
  //should return a resume route pointing to frontend URL to load app
  return res.redirect('../client/application');
});

//GET - retrieve current insurance
app.get('/', (req, res) => {
  return res.status(200).json(res.locals.currentApp);
});
//PUT - update insurance app with provided data
app.put('/', (req, res) => {
  return res.status(200).json(res.locals.updatedApp);
});

export { router as applicationRouter };
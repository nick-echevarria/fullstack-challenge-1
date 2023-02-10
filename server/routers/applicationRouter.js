import express from 'express';
import applicationController from '../controllers/applicationController.js'

const router = express.Router();

//POST - starts new app + initializes w provided data
router.post('/', applicationController.startNewApp, (req, res) => {
  //should return a resume route pointing to frontend URL to load app
  // return res.redirect('../../client/application');
  return res.status(200).json({ first: 'true', success: true });
});

//GET - retrieve current insurance application
router.get('/', (req, res) => {
  // return res.status(200).json(res.locals.currentApp);
  return res.status(200).json({ success: 'true' });
});

//PUT - update insurance app with provided data
router.put('/', (req, res) => {
  // return res.status(200).json(res.locals.updatedApp);
  return res.status(200).json({ success: 'true' });
});

//POST - "validate" application
router.post('/success', (req, res) => {
  // return res.status(200).json(res.locals.validationMsg);
  return res.status(200).json({ success: 'true', second: true });
});

export default router;

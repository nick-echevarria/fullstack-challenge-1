import db from '../models/applicationModels.js';

const applicationController = {};

applicationController.startNewApp = async (req, res, next) => {
  //create + save new record on DB
  const { email } = req.body;
  if (!email)
    next({
      log: 'startNewApp issue',
      message: {
        err: 'applicationController.startNewApp: ERROR: Email was not provided',
      },
    });
  //get new record with id
  //redirect to new app component
  const queryString = `INSERT INTO applications(email) VALUES ${email} RETURNING applications._id`;
  try {
    const response = await db.query(queryString);
    
  } catch (error) {
    next({
      log: 'Error in DB response',
      message: {
        err: 'Please check error log',
      },
    });
  }
  // db.query(queryString)
  //   .then((response) => {
  //     console.log(response.rows);
  //     res.locals.characters = response.rows;
  //     next();
  //   })
  //   .catch((err) => {
  //     next({
  //       log: 'Express error handler caught middle error',
  //       status: 500,
  //       message: { err: 'An error occurred' },
  //     });
  //   });
  next();
};

applicationController.getCurrentApp = (req, res, next) => {
  // retrieve current app w id (i think for now that works)

  next();
};

applicationController.updateApp = (req, res, next) => {
  // write code here

  next();
};

applicationController.validateApp = (req, res, next) => {
  // write code here

  next();
};

export default applicationController;

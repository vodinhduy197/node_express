'use strict';

module.exports = function(app) {
    let taskController = require('../controllers/TaskController');
    const validate = require('../validator/validate');
    // console.log(validate.valdiateTask);
  // index Routes
  app.route('/')
    .get(taskController.index)
    .post(validate.validateInsertTask, taskController.insert);
   
  app.route('/:taskId')
    .delete(validate.validateDeleteTask, taskController.delete);

    //The 404 Route (ALWAYS Keep this as the last route)
  app.use(function(req, res){
    res.status(404).render('404');
  });
};

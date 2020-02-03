const express = require('express');

let RegistrationsController = require('../controllers/registrations');

let router = express.Router();

router.get('/signup',RegistrationsController.new);

router.route('/users').post(RegistrationsController.create);

// router.get('/tasks/new',TasksController.new);
//
// router.get('/tasks/:id/edit',TasksController.edit);
//
// router.route('/tasks/:id')
//   .get(TasksController.show)
//   .put(TasksController.update)
//   .delete(TasksController.destroy);

module.exports = router;

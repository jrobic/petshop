const express = require('express');
const animalCtrl = require('../controllers/animal');
const helpers = require('../helpers');

/**
 * Animal Routes
 * @param {object} Animal Animal model
 * @return {oject} return all routes of Animal CRUD
 */
const routes = (Animal) => {
  const animalRouter = express.Router();
  const ctrl = animalCtrl(Animal);

  /**
   * Animal Route on '/'
   */
  animalRouter
  .route('/')
  .get(ctrl.getAll)
  .post(ctrl.post);

  /**
   * Middleware
   * @param {object} req http request
   * @param {object} res http response
   * @param {function} next next method to call
   * @description
   * Find model by id, and store that in req[model]
   */
  animalRouter.use('/:animalId', (req, res, next) => {
    Animal
    .findById(req.params.animalId)
    .exec((err, animal) => {
      if (err) {
        helpers.handleError(res, 500, err);
      } else if (animal) {
        req.animal = animal;
        next();
      } else {
        helpers.handleError(res, 404, 'no animal found!');
      }
    });
  });

  /**
   * Animal Route on '/:animalId'
   */
  animalRouter
  .route('/:animalId')
  .get(ctrl.get)
  .put(ctrl.put)
  .delete(ctrl.remove);

  return animalRouter;
};

module.exports = routes;

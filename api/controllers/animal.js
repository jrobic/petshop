const helpers = require('../helpers');

/**
 * Animal Controller
 * @param {object} Animal Animal model
 * @return {oject} return all method of Animal CRUD
 */
const animalCtrl = (Animal) => {
  /**
   * @api {get} /animals Get All
   * @apiVersion 0.1.0
   * @apiName getAll
   * @apiGroup Animal
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -i http://localhost:3000/api/v1/animals
   *
   * @apiSuccess {Object[]} root       List of Animals (Array of Objects).
   *
   * @apiSuccessExample Response (example):
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *          "_id":"578aae0ab1927a01003e2bcb",
   *          "updatedAt":"2016-07-16T21:58:34.478Z",
   *          "createdAt":"2016-07-16T21:58:34.478Z",
   *          "name": "Labrador Retriever",
   *          "origin": "Great Britain",
   *          "color": "brown",
   *          "avg_size": 57,
   *          "avg_weight": 30,
   *          "avg_price": 1200,
   *          "links":{
   *            "self": "http://localhost:3000/api/v1/animals/578aae0ab1927a01003e2bcb"
   *          }
   *       }
   *     ]
   *
   * @apiError (Error 5xx) {Object} error An error object contains status code and error message
   *
   * @apiErrorExample Response (example):
   *     HTTP/1.1 500 Internal Server Error
   *     {
   *       "error": {
   *          "status": 500,
   *          "message": "error message"
   *       }
   *     }
   */
  const getAll = (req, res) => {
    Animal
    .find()
    .sort('-created_at')
    .exec((err, animals) => {
      if (err) {
        helpers.handleError(res, 500, err);
      } else {
        const returnAnimals = animals.map((animal) => {
          const newAnimal = animal.toJSON();
          newAnimal.links = {
            self: encodeURI(`http://${req.headers.host}/api/v1/animals/${newAnimal._id}`)
          };

          return newAnimal;
        });

        res.json(returnAnimals);
      }
    });
  };

  /**
   * @api {get} /animals/:animalId Get
   * @apiVersion 0.1.0
   * @apiName get
   * @apiGroup Animal
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -H "Content-Type: application/json" -i http://localhost:3000/api/v1/animals/578aae0ab1927a01003e2bcb
   *
   * @apiSuccess {String} id           Id of the Animal.
   * @apiSuccess {Date} created_at      Created date of the Animal.
   * @apiSuccess {Date} update_at       Updated date of the Animal.
   * @apiSuccess {String} name          Name of the Animal.
   * @apiSuccess {String} origin        Origin of the Animal.
   * @apiSuccess {String} color         Color of the Animal.
   * @apiSuccess {String} avgSize      Average size  of the Animal.
   * @apiSuccess {String} avgWeight    Average weight of the Animal.
   * @apiSuccess {String} avgLife     Average life of the Animal.
   * @apiSuccess {String} avgPrice     Average price of the Animal.
   *
   * @apiSuccessExample Response (example):
   *     HTTP/1.1 200 OK
   *       {
   *          "id":"578aae0ab1927a01003e2bcb",
   *          "updatedAt":"2016-07-16T21:58:34.478Z",
   *          "createdAt":"2016-07-16T21:58:34.478Z",
   *          "name": "Labrador Retriever",
   *          "origin": "Great Britain",
   *          "color": "brown",
   *          "avgSize": 57,
   *          "avgWeight": 30,
   *          "avgLife": 10,
   *          "avgPrice": 1200,
   *          "links":{
   *            "self": "http://localhost:3000/api/v1/animals/578aae0ab1927a01003e2bcb"
   *          }
   *       }
   *
   * @apiError {object} error An error object when animal was not found.
   * @apiError (Error 5xx) {Object} error An error object contains status code and error message
   *
   * @apiErrorExample Response (example):
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": {
   *          "status": 404,
   *          "message": "no animal found!"
   *       }
   *     }
   *     HTTP/1.1 500 Internal Server Error
   *     {
   *       "error": {
   *          "status": 500,
   *          "message": "error message"
   *       }
   *     }
   */
  const get = (req, res) => {
    const returnAnimal = req.animal.toJSON();
    res.json(returnAnimal);
  };

  /**
   * @api {post} /animals Post
   * @apiVersion 0.1.0
   * @apiName post
   * @apiGroup Animal
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -X POST -H "Content-Type: application/json" -d '{
   *   "name": "pedro",
   *   "origin": "argentine",
   *   "avg_price": 1978,
   *  }' "http://localhost:3000/api/v1/animals"
   *
   * @apiSuccess {String} _id           Id of the Animal.
   * @apiSuccess {Date} created_at      Created date of the Animal.
   * @apiSuccess {Date} update_at       Updated date of the Animal.
   * @apiSuccess {String} name          Name of the Animal.
   * @apiSuccess {String} origin        Origin of the Animal.
   * @apiSuccess {String} color         Color of the Animal.
   * @apiSuccess {String} avgSize      Average size  of the Animal.
   * @apiSuccess {String} avgWeight    Average weight of the Animal.
   * @apiSuccess {String} avgLife     Average life of the Animal.
   * @apiSuccess {String} avgPrice     Average price of the Animal.
   *
   * @apiSuccessExample Response (example):
   *     HTTP/1.1 201 Created
   *      {
   *        "updatedAt": "2016-07-17T11:20:41.461Z",
   *        "createdAt": "2016-07-17T11:20:41.461Z",
   *        "name": "Labrador Retriever",
   *        "origin": "Great Britain",
   *        "avgPrice": 1978,
   *        "id": "578b6a09feaf08a0008c1b3b"
   *      }
   * @apiError (Error 400) {Object} error An error object contains status code and error message
   *
   * @apiErrorExample Response (example):
   *     HTTP/1.1 400 Bad Request
   *     {
   *       "error": {
   *          "status": 400,
   *          "message": "error message"
   *       }
   *     }
   */
  const post = (req, res) => {
    const newAnimal = new Animal(req.body);

    newAnimal.save((err, animal) => {
      if (err) {
        helpers.handleError(res, 400, err.message);
        return;
      }
      res.status(201).send(animal.toJSON());
    });
  };

  /**
   * @api {put} /animals/:animalId Put
   * @apiVersion 0.1.0
   * @apiName put
   * @apiGroup Animal
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -X PUT -H "Content-Type: application/json" -d '{
   *   "name": "Labrador",
   *   "origin": "Great Britain",
   *   "avg_price": 1978
   * }' "http://localhost:3000/api/v1/animals/578b6a09feaf08a0008c1b3b"
   *
   * @apiSuccess {String} _id           Id of the Animal.
   * @apiSuccess {Date} created_at      Created date of the Animal.
   * @apiSuccess {Date} update_at       Updated date of the Animal.
   * @apiSuccess {String} name          Name of the Animal.
   * @apiSuccess {String} origin        Origin of the Animal.
   * @apiSuccess {String} color         Color of the Animal.
   * @apiSuccess {String} avgSize      Average size  of the Animal.
   * @apiSuccess {String} avgWeight    Average weight of the Animal.
   * @apiSuccess {String} avgLife     Average life of the Animal.
   * @apiSuccess {String} avgPrice     Average price of the Animal.
   *
   * @apiSuccessExample Response (example):
   *     HTTP/1.1 200 Ok
   *      {
   *        "updatedAt": "2016-07-17T11:20:41.461Z",
   *        "createdAt": "2016-07-17T11:20:41.461Z",
   *        "name": "Labrador Retriever",
   *        "origin": "Great Britain",
   *        "avgPrice": 1978,
   *        "id": "578b6a09feaf08a0008c1b3b"
   *      }
   *
   * @apiError (Error 404) {Object} error An error object contains status code and error message
   *
   * @apiErrorExample Response (example):
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": {
   *          "status": 404,
   *          "message": "error message"
   *       }
   *     }
   * @apiError (Error 500) {Object} error An error object contains status code and error message
   *
   * @apiErrorExample Response (example):
   *     HTTP/1.1 500 Internal Server Error
   *     {
   *       "error": {
   *          "status": 500,
   *          "message": "error message"
   *       }
   *     }
   */
  const put = (req, res) => {
    const { animal, body } = req;

    animal.name = body.name;
    animal.origin = body.origin;
    animal.color = body.color;
    animal.avg_size = body.avg_size;
    animal.avg_weight = body.avg_weight;
    animal.avg_price = body.avg_price;

    animal.save((err, updatedAnimal) => {
      if (err) {
        helpers.handleError(res, 500, err.message);
        return;
      }

      res.status(200).send(updatedAnimal.toJSON());
    });
  };

  /**
   * @api {remove} /animals/:animalId Delete
   * @apiVersion 0.1.0
   * @apiName delete
   * @apiGroup Animal
   * @apiPermission none
   *
   * @apiExample Example usage:
   * curl -X DELETE "http://localhost:3000/api/v1/animals/578aad8a87337601006df82b"
   *
   * @apiSuccessExample Response (example):
   *     HTTP/1.1 204 No Content
   *
   * @apiError (Error 404) {Object} error An error object contains status code and error message
   *
   * @apiErrorExample Response (example):
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": {
   *          "status": 404,
   *          "message": "error message"
   *       }
   *     }
   * @apiError (Error 500) {Object} error An error object contains status code and error message
   *
   * @apiErrorExample Response (example):
   *     HTTP/1.1 500 Internal Server Error
   *     {
   *       "error": {
   *          "status": 500,
   *          "message": "error message"
   *       }
   *     }
   */
  const remove = (req, res) => {
    const { animal } = req;

    animal.remove((err) => {
      if (err) {
        helpers.handleError(res, 500, err.message);
        return;
      }

      res.status(204).send();
    });
  };

  return {
    get,
    getAll,
    post,
    put,
    remove
  };
};

module.exports = animalCtrl;

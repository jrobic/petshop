/* global describe it after before */
/* eslint no-unused-expressions: 0  */
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');

const mongoose = require('mongoose');

const config = require('../config');
const app = require('../api/index');
const Animal = require('../api/models/Animal');
const animalsData = require('./data/animals');

const server = supertest(app);

const env = process.env.ENV;

let animal;

describe.only('Animal CRUD Tests', () => {
  before((done) => {
    mongoose.connect(config[env].db);
    mongoose.connection.once('open', () => {
      mongoose.connection.db.dropDatabase(done);
    });
  });

  before((done) => {
    Animal.collection.insert(animalsData, done);
  });

  describe('GET /', () => {
    it('should return all animals', (done) => {
      server
      .get('/api/v1/animals')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an.array;
        expect(res.body.length).to.equal(2);
      })
      .end(done);
    });

    it('should return all animals with links', (done) => {
      server
      .get('/api/v1/animals')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body[0]).to.have.ownProperty('links');
        expect(res.body[0].links).to.have.ownProperty('self');
      })
      .end(done);
    });

  });

  describe('POST /', () => {
    it('should save an animal', (done) => {
      const newAnimal = { name: 'pedro', origin: 'argentine', avg_price: 1950 };

      server
      .post('/api/v1/animals')
      .set('Content-Type', 'application/json')
      .send(newAnimal)
      .expect(201)
      .expect((res) => {
        expect(res.body).to.have.ownProperty('_id');
        expect(res.body).to.have.ownProperty('name');
        expect(res.body).to.have.ownProperty('origin');
        expect(res.body).to.have.ownProperty('avg_price');
        animal = res.body;
      })
      .end(done);
    });

    it('should return an error when animal is not valid', (done) => {
      const newAnimal = { origin: 'argentine', avg_price: 1950 };

      server
      .post('/api/v1/animals')
      .send(newAnimal)
      .expect(400)
      .expect((res) => {
        expect(res.body).to.have.ownProperty('error');
        expect(res.body.error).to.have.ownProperty('message');
        expect(res.body.error.status).to.equal(400);
      })
      .end(done);
    });
  });

  describe('GET /:animalId', () => {
    it('should return an animal', (done) => {
      const id = animal._id;

      server
      .get(`/api/v1/animals/${id}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).to.have.ownProperty('_id');
        expect(res.body).to.have.ownProperty('name');
        expect(res.body).to.have.ownProperty('origin');
        expect(res.body).to.have.ownProperty('avg_price');
        expect(res.body._id).to.equal(id);
        expect(res.body.name).to.equal(animal.name);
        expect(res.body.origin).to.equal(animal.origin);
        expect(res.body.avg_price).to.equal(animal.avg_price);
      })
      .end(done);
    });

    it('should return an error when animal was not found', (done) => {
      const fakeId = mongoose.Types.ObjectId();
      server
      .get(`/api/v1/animals/${fakeId}`)
      .expect(404)
      .expect((res) => {
        expect(res.body).to.have.ownProperty('error');
        expect(res.body.error).to.have.ownProperty('message');
        expect(res.body.error.status).to.equal(404);
      })
      .end(done);
    });
  });

  describe('PUT /:animalId', () => {
    it('should update an animal', (done) => {
      const updateAnimal = Object.assign(animal, { name: 'robert' });

      server
      .put(`/api/v1/animals/${updateAnimal._id}`)
      .send(updateAnimal)
      .expect(200)
      .expect((res) => {
        expect(res.body.name).to.equal('robert');
      })
      .end(done);
    });
  });


  describe('DELETE /:animalId', () => {
    it('should delete an animal', (done) => {
      server
      .del(`/api/v1/animals/${animal._id}`)
      .expect(204)
      .end(() => {
        animal = null;
        done();
      });
    });
  });

  after((done) => {
      mongoose.models = {};
      mongoose.modelSchemas = {};
      mongoose.connection.close(() => {
        done();
      });
  });
});

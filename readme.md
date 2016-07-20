[![CircleCI](https://circleci.com/gh/jrobic/petshop-api/tree/master.svg?style=svg)](https://circleci.com/gh/jrobic/petshop-api/tree/master)<Paste>
[![bitHound Overall Score](https://www.bithound.io/github/jrobic/petshop-api/badges/score.svg)](https://www.bithound.io/github/jrobic/petshop-api)
[![bitHound Dependencies](https://www.bithound.io/github/jrobic/petshop-api/badges/dependencies.svg)](https://www.bithound.io/github/jrobic/petshop-api/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/jrobic/petshop-api/badges/code.svg)](https://www.bithound.io/github/jrobic/petshop-api)

## Install

That app use Docker and Docker Compose

**Required:**
- docker: **1.10.3**
- docker-compose: **1.6.2**

```
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.ci.yml build
docker-compose -f docker-compose.prod.yml build
```

## Run

```
npm start
```

Restart container when a files has changed automatically.

or

```
npm run prod
```

## Doc

Api doc is available on http://host:port/api/v1

## Test

```
npm run test-dev
```
Use this command with npm start (start in other terminal)

or

```
npm run test-ci
```
Use this command when no container is running

## CI

This repo was connected to Cirlce CI.
(see ci badge)

## Stack

- ES6
- Node 6
- Express
- Mongoose
- ApiDocJs
- Mocha
- Chai
- Sinon
- Supertest
- Docker
- Docker-Compose
- Circle-ci
- Bithound
- Eslint + airbnb rules

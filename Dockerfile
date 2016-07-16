FROM node:latest

MAINTAINER Jonathan Robic<hello@jonathanrobic.fr>

EXPOSE 3000
EXPOSE 5858

ADD . /api
WORKDIR /api

RUN npm install -g nodemon
RUN npm install


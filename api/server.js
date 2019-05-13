const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const projectsRouter = require('../routers/project-router')
const actionsRouter = require('../routers/action-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res, next) => {
    res.send(`
    <h1>Web DB Challenge</h1>
    `)
});

module.exports = server;
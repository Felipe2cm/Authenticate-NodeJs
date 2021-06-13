import express, { NextFunction, Request, Response } from 'express';
import './database';

import routes from './routes/index';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3333, () => {
    console.log("Server start");
})
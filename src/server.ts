import express, { NextFunction, Request, Response } from 'express';
import './database';

import usuarioRouter from './routes/usuario';
import autenticate from './routes/authentication';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usuarioRouter);
app.use(autenticate);

app.listen(3333, () => {
    console.log("Server start");
})

app.get('/teste', (req, res) => {

    return res.json(new Date());
})
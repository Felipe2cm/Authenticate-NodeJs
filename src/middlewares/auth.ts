import { NextFunction, Request, Response } from "express";

import { verify } from 'jsonwebtoken'
const authConfig = require('../config/auth.json');

export default function autenticacao(
    request,
    response,
    next
) 
{
    const authHeader = request.headers.authorization;

    if(!authHeader){
       return response.status(401).send({error: "No token provided"});
    }
    
    const parts = authHeader.split(' ');

    if (!parts.length == 2)
        return response.status(401).send({error : "Token error"});

    const [scheme, token ] = parts;
    
    if (!/^Bearer$^/i.test(scheme))
        return response.status(401).send({error: "Token Malformatted"});

    verify(token, authConfig.secret, (err, decoded) => {
        if(err) return response.status(401).send({error: "Token Invalid"})

        request.userId = decoded.Id;
    })
}
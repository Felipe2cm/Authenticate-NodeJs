import { NextFunction, Request, Response } from "express";

import { verify } from 'jsonwebtoken'
const authConfig = require('../config/auth.json');

export default function autenticacao(
    request: any,
    response: any,
    next: any
) 
{
    const authHeader = request.headers.authorization;

    if(!authHeader){
       return response.status(401).send({error: "No token provided"});
    }
    
    const parts = authHeader.split(' ');
    
    if (parts.length != 2)
    return response.status(401).send({error : "Token error"});
    
    const [scheme, token ] = parts;    
    
    if (scheme !== "Bearer")
        return response.status(401).send({error: "Token Malformatted"});

    verify(token, authConfig.secret, (err:any, decoded:any) => {
        if(err) return response.status(401).send({error: "Token Invalid"})
        
        request.body.userId = decoded.id;

        return next();
    })
}
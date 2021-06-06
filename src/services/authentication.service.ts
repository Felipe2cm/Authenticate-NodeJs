import { getRepository, Repository } from "typeorm"
import AppError from "../errors/AppError";
import { Usuario } from "../models/usuario"
import {sign} from 'jsonwebtoken';

const authConfig = require('../config/auth.json')

class AuthenticationService {
    usuario: Repository<Usuario>;

    constructor() {        
        this.usuario = getRepository(Usuario);   
    }

    GenerateToken(registro:any)
    {
        return sign(registro, authConfig.secret, {
            expiresIn: 86400
        }) ;
    }

    async Authentication(usuario: Usuario) {        
        if(!usuario)
            return "Usuário Inválido.";
        
        const registroDB = await this.usuario.findOne({
            where: {
                Email: usuario.Email,
            }
        })

        if(!registroDB || registroDB.Senha != usuario.Senha)
        {
            return "Email ou Senha Incorretos!";
        }

        delete registroDB.Senha 

        const token = this.GenerateToken({id: registroDB.Id})

        return {registroDB, token};

    }
 
}

export default AuthenticationService
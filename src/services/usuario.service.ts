import { getRepository, Repository } from "typeorm";
import AppError from "../errors/AppError";
import { Usuario } from "../models/usuario";

class UsuarioService {
    usuario: Repository<Usuario>
    
    constructor() {
        this.usuario = getRepository(Usuario);        
    }

    async UsuarioListar() : Promise<Usuario[] | null> {
        const retorno = await this.usuario.find();

        return retorno;
    }

    async UsuarioCadastrar(registro: Usuario) : Promise<Usuario | null> {        
        let retorno: Usuario;

        if(!registro)
            throw new AppError("Registro Inválido");        

        retorno = this.usuario.create(registro);        

        await this.usuario.save(retorno);

        return retorno;
    }

}

export default UsuarioService;
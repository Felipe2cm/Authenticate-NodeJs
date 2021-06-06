import { Router } from 'express';
import AutenticationService from '../services/authentication.service';
import UsuarioService from '../services/usuario.service';

const router = Router();

router.post('/gravar', (req, res) => {

})

router.get('/listar', async (req, res) => {

    const service = new UsuarioService();

    return res.json(await service.UsuarioListar());
})

router.post('/cadastrar', async (req, res) => {
    const registro = req.body;

    const service = new UsuarioService();
    const authenticate = new AutenticationService();

    const usuario = await service.UsuarioCadastrar(registro);    

    return res.json({
        usuario, 
        token: authenticate.GenerateToken({id: usuario?.Id})
    });

})

export default router;
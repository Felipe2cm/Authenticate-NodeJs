import { Router } from 'express';
import usuarioRouter from './usuario';
import authenticationRouter from './authentication';
import autenticacao from '../middlewares/auth';

const router = Router();

router.use('/usuario', usuarioRouter);
router.use('/authentication', authenticationRouter);

//Rota de teste
router.get("/teste", autenticacao, (request:any, response) => {    
    return response.json({status: "OK", userId: request.body.userId});
})

export default router;
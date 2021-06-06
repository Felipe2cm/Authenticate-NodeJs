import { Router } from "express";
import AutenticationService from "../services/authentication.service";

const router = Router();

router.post('/authenticate', async (req, res) => {
    const usuario = req.body;
    const service = new AutenticationService();

    return res.json(await service.Authentication(usuario));
})

export default router;
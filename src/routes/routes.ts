import { Router } from "express";
import * as ApiController from '../controllers/apiController'
const router = Router();

router.get('/', ( req, res ) => {
    res.json({home: true})
})

router.get('/ping', ApiController.ping)

export default router;
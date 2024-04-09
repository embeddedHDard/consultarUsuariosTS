import {Router} from 'express'

import {findUserByUserName} from "../controllers/login.controllers"


const router = Router()

router.post('/login', findUserByUserName)

export default router;
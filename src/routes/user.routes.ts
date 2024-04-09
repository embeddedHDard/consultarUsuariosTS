import {Router} from 'express'
import { SubjectRemovedAndUpdatedError } from 'typeorm';
import {authenticateToken, createUser, findUserById, getUsers, updateUser, deleteUser} from "../controllers/user.controllers"


const router = Router()

router.get('/hello', (req, res) => res.send("hw"));

router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.get('/users',authenticateToken, getUsers)
router.get('/users/:id',authenticateToken, findUserById)
router.delete('/users/:id', deleteUser)

export default router;
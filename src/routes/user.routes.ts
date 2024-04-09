import {Router} from 'express'
import {authenticateToken, createUser, findUserById, getUsers, updateUser, deleteUser} from "../controllers/user.controllers"


const router = Router()

router.get('/hello', (req, res) => res.send("hw"));

router.post('/users', authenticateToken, createUser)
router.put('/users/:id', authenticateToken, updateUser)
router.get('/users',authenticateToken, getUsers)
router.get('/users/:id',authenticateToken, findUserById)
router.delete('/users/:id', authenticateToken, deleteUser)

export default router;
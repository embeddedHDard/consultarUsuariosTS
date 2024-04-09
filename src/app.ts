//Configuracion de express
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from "./routes/user.routes"
import loginRoutes from "./routes/login.routes"


const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json()) //antes de pasar por las rutas, usa el metodo json de express para traducirle a las rutas
app.use(loginRoutes)
app.use(userRoutes)

export default app;
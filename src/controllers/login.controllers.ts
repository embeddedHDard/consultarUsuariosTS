import {Request, Response} from 'express'
import {USERPASS} from '../entities/User'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
//import dotevnv from "dotenv";
//dotevnv.config({path: './variable.env'});


export const findUserByUserName = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    console.log(jwtSecretKey);
    if (!jwtSecretKey) {
        console.error('La clave secreta JWT no está configurada en las variables de entorno.');
        return res.status(500); // Volver si la clave no está configurada
    }

    try{
       const userpassword =  await USERPASS.findOneBy({USERNAME: (username)});
   
      // Validate password
      if(userpassword != null)
        {            
            //const isValidPassword = await bcrypt.compare(password,userpassword.PASSWORD);           
    
            if (userpassword.PASSWORD != password) {
                //console.log(isValidPassword);
                console.log(userpassword.PASSWORD); 
                return res.status(401).json({ message: 'Invalid username or password' });
            }
              // Generate JWT
                const token = jwt.sign({ userId: userpassword.ID },  jwtSecretKey, { expiresIn: '1h' });

            res.json({ token });
    }
    }catch(error){
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}
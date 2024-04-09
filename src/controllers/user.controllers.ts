import {Request, Response, NextFunction} from 'express'
import {EMPLOYEE} from '../entities/User'
import jwt from 'jsonwebtoken';
//import { Next } from 'mysql2/typings/mysql/lib/parsers/typeCast';

interface AuthRequest extends Request {
    user?: any; // Define la propiedad user
  }
  

// Opción 1 para la funcion
/*export function createUser() {

}*/

// Middleware de autenticación
export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    console.log(jwtSecretKey);
    if (!jwtSecretKey) {
        console.error('La clave secreta JWT no está configurada en las variables de entorno.');
        return res.status(500); // Volver si la clave no está configurada
    }
    const token = req.headers['authorization']?.split(' ')[1];
  
    if (!token) {
      return res.sendStatus(401); // No hay token, devolver error de no autorizado
    }
  
    jwt.verify(token, jwtSecretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token inválido, devolver error de prohibido
      }
      req.user = user; // Guarda la información del usuario en el objeto de solicitud
      next(); // Continúa con el siguiente middleware o la ruta
    });
  }


// Opción 2 para la funcion
export const createUser = async (req: Request, res: Response) => {
    try{
    const {name, salary} = req.body
    //throw new Error ('my error!!!!') //prueba para probar el catch de error
    // También podemos extraerlo así
    //req.body.name;
    //req.body.salary;
    const user = new EMPLOYEE();
    user.NAME = name;
    
    await user.save();
    console.log(user);
    res.send('crear usuario');
    }catch(error){
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const getUsers = async (req: Request, res: Response) => {

    try{
       const users =  await EMPLOYEE.find();
       return res.json(users);
    }catch(error){
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const findUserById = async (req: Request, res: Response) => {

    try{
       const user =  await EMPLOYEE.findOneBy({ID: parseInt(req.params.id)});
       return res.json(user);
    }catch(error){
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

/*export const updateUser = async (req: Request, res: Response) => {

    try{
       const {name, salary} = req.body
       const user =  await employee.findOneBy({id: parseInt(req.params.id)});

       if(!user) return res.status(404).json ({message: 'User does not exist'})
       
       user.name = name;
       user.salary = salary;
       await user.save();       
       return res.json(user);
    }catch(error){
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}*/

/// Manera más eficiente

export const updateUser = async (req: Request, res: Response) => {

    const {id} = req.params;
    //Comprobación de existencia del usuario
    const user =  await EMPLOYEE.findOneBy({ID: parseInt(req.params.id)});
    if(!user) return res.status(404).json ({message: 'User does not exist'});
    //Actualizacion del usuario
    await EMPLOYEE.update({ID: parseInt(id)}, req.body); //parsea el id que le llega como string en el req.params y actualiza lo que haya en el body de la request.
    return res.sendStatus(204);

}

/*export const deleteUser = async (req: Request, res: Response) => {

    try{        
       const {name, salary} = req.body
       const user =  await employee.findOneBy({id: parseInt(req.params.id)});

       if(!user) return res.status(404).json ({message: 'User does not exist'})

       await user.remove();   
       
       return res.json("user deleted");

    }catch(error){
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}*/

/// Manera más eficiente
export const deleteUser = async (req: Request, res: Response) => {

    const {id} = req.params;
    //Comprobación de existencia del usuario
    const user =  await EMPLOYEE.findOneBy({ID: parseInt(req.params.id)});
    if(!user) return res.status(404).json ({message: 'User does not exist'});
    //Actualizacion del usuario
    await EMPLOYEE.delete({ID: parseInt(id)}); //parsea el id que le llega como string en el req.params y actualiza lo que haya en el body de la request.
    return res.sendStatus(204);

}

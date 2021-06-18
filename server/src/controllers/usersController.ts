import {Request,Response} from "express"
import { getRepository } from "typeorm";
import { User } from "../entity/User"
import { users, UserMock } from '../DataMock/users';

  
export const login = async (req:Request,res:Response): Promise<Response> => {
    const { username,password } = req.body
    
    const user: any = users.find((u: UserMock) => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(403).json({
            message: "Usuario incorrecto"
        })
    }

    return res.json(user)

  }
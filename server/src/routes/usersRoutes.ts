import { Router } from "express";
const router = Router();

import {
  login
} from "../controllers/usersController";


router.post("/login", login)


export default router;
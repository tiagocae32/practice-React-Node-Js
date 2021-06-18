import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import moviesRoutes from './routes/moviesRoutes'
import usersRoutes from "./routes/usersRoutes"

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(moviesRoutes);
app.use(usersRoutes)

app.listen(4000);
console.log('Server on port', 4000);
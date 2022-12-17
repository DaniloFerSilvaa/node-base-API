import  express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv';
import mainRouter from './routes/routes'

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(mainRouter)

server.use((req:Request, res:Response) => {
    res.status(404);
    res.json({error: 'endpoint não encontrada'})
});

server.listen(process.env.PORT)

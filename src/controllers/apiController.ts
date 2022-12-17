import { Request, Response } from "express";
import { Sequelize } from "sequelize";
//import { model } from "../models/name-db";

export const ping = (req:Request, res:Response) => {
    res.json({pong: true})
}
import { Namedb } from "../models/name-db";
import bcrypt from 'bcrypt';

/*
export const createUser = async (email:string, password:string) => {
     const hasUser = await Namedb.findOne({where: { email } });
     if (!hasUser) {
          const hash = bcrypt.hashSync(password, 10);
          const newUser = await Namedb.create({
               email,
               password: hash
          });
          return newUser;
     } else {
          return new Error( 'E-mail já existe' );
     }
}

export const findByEmail = async (email:string) => {
     return await Namedb.findOne({ where: { email } })
}

export const matchPassword = (passwordText:string, encrypted:string) => {
     return bcrypt.compareSync(passwordText, encrypted);
}

export const all = async () => {
     return await Namedb.findAll();
}
*/
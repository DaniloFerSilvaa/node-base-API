import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/connect-db';

export interface Namedb_Instance  extends Model {
     //O que contem no seu banco de dados.
     id: number;
     author: string;
     txt: string;
 }
 
 export const Namedb = sequelize.define<Namedb_Instance>('Namedb',{
     //Estrutura do seu Banco de dados
     id: {
         primaryKey: true,
         autoIncrement: true,
         type: DataTypes.INTEGER
     },
     author: {
         type: DataTypes.STRING,
     },
     txt: {
         type: DataTypes.TEXT
     }
 }, {
     tableName: 'Namedb',
     timestamps: false
 });
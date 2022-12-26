import { Model, DataType, DataTypes } from 'sequelize';
import { sequelize } from '../instances/connect-db';

export interface UserInstance extends Model {
    id: number;
}

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'users',
    timestamps: false
});

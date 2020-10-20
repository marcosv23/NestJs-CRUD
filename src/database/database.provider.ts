import Task from '../tasks/task';
import sequelize from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

  export const databaseProviders =[
  {
      provide: 'SEQUELIZE',
      useFactory: async() =>{
        const sequelize = new Sequelize({
          dialect: 'mysql',
          host:'localhost',
          port:3306,
          username:'root',
          password:'porangaba2305',
          database:'nest-crud',
        });

      sequelize.addModels([Task]);
      await sequelize.sync();
      return sequelize;
    },
  },

]
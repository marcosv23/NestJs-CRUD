import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
//import { databaseProviders} from './database.provider';

@Module({
  imports:[
    SequelizeModule.forRoot({
      dialect:'mysql',
      host: 'localhost',
      port:3306,
      username:'root',
      password:'porangaba2305',
      database: 'test',
      models: [],
    })
  ],
})

export class SequelizeModule;
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksController } from '../controller/tasks.controller';
import {TasksService} from '../provider/tasks.service';
import {Task} from '../../database/models/task.Model';

@Module({
imports:[SequelizeModule.forFeature([Task])],
controllers:[TasksController],
providers:[TasksService],
exports:[SequelizeModule]

})
export class TasksModule {}

import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import {TasksProvider} from './provider/tasks.provider'

@Module({
controllers:[TasksController],
providers:[TasksProvider],

})
export class TasksModule {}

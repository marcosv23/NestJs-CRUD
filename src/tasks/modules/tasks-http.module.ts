import { Module } from '@nestjs/common';
import { TasksModule } from './tasks.module';
import { TasksService } from '../provider/tasks.service';
import { TasksController } from '../controller/tasks.controller';

@Module({
  imports: [TasksModule],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TaskHttpModule {}

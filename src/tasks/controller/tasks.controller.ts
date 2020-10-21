import { Body, Controller, Get, Param, Put, Post, Delete } from '@nestjs/common';
import { TasksService } from '../provider/tasks.service';
import {Task} from '../task';

@Controller('tasks')
export class TasksController {

  constructor(

    private taskService:TasksService

    ) { }

    @Get()
    async findAll():Promise<Task[]>{
      return  this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number):Promise<Task>{
      return this.taskService.findOne(id);
    }

    @Post()
    async create(@Body() task:Task ): Promise<Task>{
      return this.taskService.create(task);
    }

    @Put (':id')
     async update(@Param('id') id: number, @Body() task:Task):Promise<Task>{
      task.id = id;

      const taskUpdated = this.taskService.update(task);
      return taskUpdated;

}
    @Delete(':id')
    async delete(@Param('id') id:number ) {
      this.taskService.delete(id);
    }

  }
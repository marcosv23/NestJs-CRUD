import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {Task} from '../../database/models/task.Model';

//Only for testing crud without ORM
//Remove this as you use a ORM
@Injectable()
  export class TasksService {
    constructor(
      @InjectModel(Task)
      private taskModel: typeof Task,
    ){}

  /*Formerly, I used the class Task to helping
    the storageNow, I'm importing a TaskModel into the
    TaskService And Letting NestJs know that I wanna a
    new Dependency Injection : taskModel*/

  async findAll(): Promise<Task[]>{
    return this.taskModel.findAll()

  }

  async findOne(id:number): Promise<Task> {
    return this.taskModel.findOne({
      where: {
        id,
      },
    });
  }

  async create(id:number){

  }


  async update(task:Task){

  }

  async remove(id: number):Promise<void>{
    const user = await this.findOne(id);
    await user.destroy();
  }

}
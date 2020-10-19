import { Injectable } from '@nestjs/common';
import {Task} from '../task';

@Injectable()
export class TaskService {
 private tasks: Task[] =[
    {id:1, description:"Tarefa 1", completed: false},
    {id:2, description:"Tarefa 1", completed: true},
    {id:3, description:"Tarefa 2", completed: false},
    {id:4, description:"Tarefa 3", completed: true},
    {id:5, description:"Tarefa 4", completed: false},
    {id:6, description:"Tarefa 5", completed: true},
    {id:7, description:"Tarefa 6", completed: true},
    {id:9, description:"Tarefa 7", completed: false},
    {id:10, description:"Tarefa 8", completed: true},
    {id:11, description:"Tarefa 9", completed: true},
    {id:12, description:"Tarefa 10", completed: false},
    {id:13, description:"Tarefa 11", completed: true},
    {id:14, description:"Tarefa 12", completed: false},

  ]

  getAll(){
    return this.tasks;
  }
/*
  findByIndex(id:number){
    const found = this.tasks.find(task=>task.id ===id );
    return found;

  }*/

  getById(id:number){
    const task = this.tasks.find(task=>task.id==id);
    return task;
  }

  create(task:Task){
    this.tasks.push(task);

    let lastId =0;

    if(this.tasks.length>0){
      lastId =this.tasks[this.tasks.length -1].id;
    }

    else {
      task.id = lastId +1;
      this.tasks.push(task);
    }
    //console.log({message:`New task ${task.id}  : has just created!`});
    return task;
  }

  update(task:Task){
    const taskToUpdate = this.getById(task.id);

    if(taskToUpdate){
      taskToUpdate.description = task.description;
      taskToUpdate.completed = task.completed;
    }
    return taskToUpdate;
  }

  delete(id:number){
    const deletingIndex = this.tasks.findIndex(tasks=>tasks.id === id);
    this.tasks.splice(deletingIndex,1);
  }

}
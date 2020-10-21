import {Table, Column, Model} from 'sequelize-typescript';

@Table
export class Task extends Model<Task>{

  @Column
  id:number;

  @Column
  description:string;

  @Column({defaultValue:false})
  completed:boolean;
}
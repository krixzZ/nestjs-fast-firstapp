import { Controller, Get, Post, Put, Param, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task-dto';

import { Request, Response } from 'express';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {

  constructor(private taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): CreateTaskDto {
    
    let tasque: CreateTaskDto;
    tasque = task;
    console.log(tasque.title, tasque.description, tasque.done);
    console.log(typeof tasque.title, typeof tasque.description, typeof tasque.done);
    return tasque;
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id) {
    console.log(task.title, task.description, task.done);
    console.log(typeof task.title, typeof task.description, typeof task.done);
    return `update ${id}`+ ' ' + JSON.stringify(task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id) {
    return `delete ${id}`;
  }
}

import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TaskService {

    tasks: Task[] = [
        {
            id: 1,
            title: 'Testing',
            description: 'testing description',
            done: true
        },
        {
            id: 2,
            title: 'Testing asfasdfafasfs',
            description: 'testing description',
            done: true
        },
        {
            id: 3,
            title: 'Testing',
            description: 'testing description',
            done: true
        }
    ];
    
    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id) {
        return this.tasks.find(task => { task.id == id })
    }
}

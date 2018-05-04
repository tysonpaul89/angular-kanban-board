import { Component, OnInit, Input } from '@angular/core';
import { Task } from './task.model';
import { TaskStatus } from './TaskStatus';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  taskStatusEnum: any;

  constructor() {
    this.taskStatusEnum = TaskStatus;
   }

  ngOnInit() {
  }

  deleteTask(taskId) {
    // TODO: delete task
    console.log(taskId);
  }

}

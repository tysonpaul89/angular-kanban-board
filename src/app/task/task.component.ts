import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() delTask: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.taskStatusEnum = TaskStatus;
   }

  ngOnInit() {
  }

  /**
   * Delete icon click event
   * This will emit the task id to the parent component
   * @param taskId Id of the task to delete
   */
  deleteTask(taskId) {
    this.delTask.emit(taskId);
  }

}

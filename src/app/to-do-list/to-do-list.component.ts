import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.model';
import { TaskStatus } from '../task/TaskStatus';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList: Task[];

  constructor() {
    this.toDoList = [
      new Task(
        'Student CURD',
        'To create, update, list and delete student data.',
        TaskStatus.ToDo
      ),
      new Task(
        'Test',
        'Test desc.',
        TaskStatus.ToDo
      )
    ];
  }

  ngOnInit() {
  }

}

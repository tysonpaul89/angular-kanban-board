import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.model';
import { TaskStatus } from '../task/TaskStatus';

@Component({
  selector: 'app-doing-list',
  templateUrl: './doing-list.component.html',
  styleUrls: ['./doing-list.component.css']
})
export class DoingListComponent implements OnInit {

  ngOnInit() {
  }

}

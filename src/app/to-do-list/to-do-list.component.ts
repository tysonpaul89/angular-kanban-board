import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Task } from '../task/task.model';
import { TaskStatus } from '../task/TaskStatus';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList: Task[] = [];
  modalConfig = {
    keyboard: true
  };
  toDoForm: FormGroup;
  @ViewChild(ModalDirective) modal: ModalDirective;

  constructor(fb: FormBuilder) {
    this.toDoForm = fb.group({
      title: [''],
      description: ['']
    });
  }

  /**
   * To Show to do create form in a modal
   */
  showToDoForm() {
    this.modal.show();
  }

  /**
   * Bootstrap modal hidden event handler
   */
  modalHiddenEvent() {
    // Resetting form elements
    this.toDoForm.reset();
  }

  /**
   * To Add a new to do list
   */
  addToDo(form: { title: string, description: string}) {
    this.toDoList.push(new Task(Date.now(), form.title, form.description, TaskStatus.ToDo));
    // Hides the modal
    this.modal.hide();
  }

  /**
   * To delete the task
   * @param taskId Id of the task to delete
   */
  deleteTask(taskId: number) {
    const taskIndex: number = this.toDoList.findIndex(task => task.taskId === taskId);
    this.toDoList.splice(taskIndex, 1);
  }

  ngOnInit() {
  }

}

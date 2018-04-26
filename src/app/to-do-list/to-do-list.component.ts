import { Component, OnInit, TemplateRef } from '@angular/core';
import { Task } from '../task/task.model';
import { TaskStatus } from '../task/TaskStatus';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoList: Task[] = [];
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true
  };
  toDoForm: FormGroup;

  constructor(private modalService: BsModalService, fb: FormBuilder) {
    this.toDoForm = fb.group({
      title: [''],
      description: ['']
    });
  }

  /**
   * To Show to do create form in a modal
   */
  showToDoForm(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  /**
   * To Add a new to do list
   */
  addToDo(form: { title: string, description: string}) {
    // console.log(form);
    this.toDoList.push(new Task(form.title, form.description, TaskStatus.ToDo));
    // Hides the modal
    this.modalService.hide(1);
  }

  ngOnInit() {
  }

}

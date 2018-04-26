import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DoingListComponent } from './doing-list/doing-list.component';
import { DoneListComponent } from './done-list/done-list.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './task/add-task/add-task.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    DoingListComponent,
    DoneListComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
